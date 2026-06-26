const DEFAULT_MODEL = process.env.AIPREZ_MODEL || "gpt-5.4-mini";

const TOOL_PROMPTS = {
  "create-presentation": `You are AIPREZ, an AI academic presentation assistant for students.
Create a polished presentation plan from the student's request.
Return concise, useful content with:
- title
- slide outline
- speaker notes suggestions
- visual direction
- next refinement questions if needed.
Format each slide heading exactly like: "### Slide 1 — Slide Title".`,
  humanizer: `You are AIPREZ Humanizer.
Rewrite or improve the student's presentation content so it sounds natural, student-written, clear, and classroom appropriate.
Do not make it evasive or deceptive; focus on clarity, originality, and natural tone.
Return the improved text and a short explanation of what changed.`,
  "live-notes": `You are AIPREZ Live Notes.
Turn the student's lecture or recording instructions into helpful live-note output.
Return concise notes, key points, possible summary, action items, and translation guidance when requested.`,
  analyzer: `You are AIPREZ Presentation Analyzer.
Review presentation content or instructions and return constructive academic feedback.
Include strengths, weak spots, structure feedback, visual clarity feedback, delivery suggestions, and prioritized improvements.`,
};

function setCors(response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}

function extractOutputText(payload) {
  if (payload.output_text) return payload.output_text;
  const parts = [];
  for (const item of payload.output || []) {
    for (const content of item.content || []) {
      if (content.text) parts.push(content.text);
    }
  }
  return parts.join("\n\n").trim();
}

function formatChatHistory(history) {
  if (!Array.isArray(history) || history.length === 0) return "No previous messages.";
  return history
    .slice(-8)
    .map((message, index) => {
      const role = message?.role === "assistant" ? "AIPREZ AI" : "Student";
      return `${index + 1}. ${role}: ${String(message?.text || "").slice(0, 1800)}`;
    })
    .join("\n\n");
}

export default async function handler(request, response) {
  setCors(response);

  if (request.method === "OPTIONS") {
    response.status(204).end();
    return;
  }

  if (request.method !== "POST") {
    response.status(405).json({ error: "Use POST." });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    response.status(500).json({ error: "OPENAI_API_KEY is not configured on the backend." });
    return;
  }

  const body = typeof request.body === "string" ? JSON.parse(request.body || "{}") : request.body || {};
  const { tool = "create-presentation", input = "", context = {} } = body;
  const trimmedInput = String(input).trim();
  if (!trimmedInput) {
    response.status(400).json({ error: "Input is required." });
    return;
  }

  const systemPrompt = TOOL_PROMPTS[tool] || TOOL_PROMPTS["create-presentation"];
  const chatHistory = formatChatHistory(context.chatHistory);
  const openAIResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.AIPREZ_MODEL || DEFAULT_MODEL,
      input: [
        {
          role: "system",
          content: [{ type: "input_text", text: systemPrompt }],
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `Tool: ${tool}
Use the previous conversation as memory. If the student asks for a change, follow-up, or continuation, apply it to the latest relevant presentation/content from the chat history.

Previous conversation:
${chatHistory}

Additional context:
${JSON.stringify({ ...context, chatHistory: undefined })}

Latest student request:
${trimmedInput}`,
            },
          ],
        },
      ],
      max_output_tokens: 1400,
    }),
  });

  const payload = await openAIResponse.json();
  if (!openAIResponse.ok) {
    response.status(openAIResponse.status).json({
      error: payload.error?.message || "OpenAI request failed.",
      model: process.env.AIPREZ_MODEL || DEFAULT_MODEL,
    });
    return;
  }

  response.status(200).json({
    model: process.env.AIPREZ_MODEL || DEFAULT_MODEL,
    tool,
    output: extractOutputText(payload),
  });
}
