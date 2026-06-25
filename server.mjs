import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import aiHandler from "./api/ai.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 4173);
const PUBLIC_ROOT = __dirname;

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".svg", "image/svg+xml"],
  [".ico", "image/x-icon"],
]);

async function loadEnvFile() {
  try {
    const envText = await fs.readFile(path.join(__dirname, ".env"), "utf8");
    for (const line of envText.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const separator = trimmed.indexOf("=");
      if (separator === -1) continue;
      const key = trimmed.slice(0, separator).trim();
      const value = trimmed.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
      if (key && process.env[key] === undefined) {
        process.env[key] = value;
      }
    }
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

function collectRequestBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    request.on("error", reject);
  });
}

async function handleApi(request, response) {
  await loadEnvFile();
  const bodyText = await collectRequestBody(request);
  let parsedBody = bodyText;
  if ((request.headers["content-type"] || "").includes("application/json")) {
    try {
      parsedBody = JSON.parse(bodyText || "{}");
    } catch {
      response.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
      response.end(JSON.stringify({ error: "Invalid JSON body." }));
      return;
    }
  }

  const vercelResponse = {
    statusCode: 200,
    headers: {},
    setHeader(name, value) {
      this.headers[name] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      response.writeHead(this.statusCode, {
        ...this.headers,
        "Content-Type": "application/json; charset=utf-8",
      });
      response.end(JSON.stringify(payload));
    },
    end(payload = "") {
      response.writeHead(this.statusCode, this.headers);
      response.end(payload);
    },
  };

  await aiHandler({ method: request.method, headers: request.headers, body: parsedBody }, vercelResponse);
}

async function serveStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const pathname = decodeURIComponent(url.pathname);
  let filePath = path.normalize(path.join(PUBLIC_ROOT, pathname));

  if (!filePath.startsWith(PUBLIC_ROOT)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const stat = await fs.stat(filePath);
    if (stat.isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }
  } catch {
    filePath = path.join(PUBLIC_ROOT, "index.html");
  }

  try {
    const data = await fs.readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes.get(path.extname(filePath)) || "application/octet-stream",
    });
    response.end(data);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}

await loadEnvFile();

const server = http.createServer(async (request, response) => {
  try {
    if (request.url.startsWith("/api/ai")) {
      await handleApi(request, response);
      return;
    }
    await serveStatic(request, response);
  } catch (error) {
    console.error(error);
    response.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ error: "Local AIPREZ server failed." }));
  }
});

server.listen(PORT, () => {
  console.log(`AIPREZ local AI server running at http://localhost:${PORT}`);
  console.log(process.env.OPENAI_API_KEY ? "OPENAI_API_KEY loaded." : "OPENAI_API_KEY is not set yet.");
});
