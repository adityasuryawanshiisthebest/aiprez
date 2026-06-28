const DEFAULT_MODEL = process.env.AIPREZ_MODEL || "gpt-5.4-mini";

const TOOL_PROMPTS = {
  "create-presentation": `You are AIPREZ, an AI academic presentation assistant for students.
Create a polished, classroom-ready presentation deck from the student's request.
Follow this workflow:
1. RESEARCH: use web search to gather relevant, accurate, current information and important details about the topic.
2. OUTLINE: organize the research into a clear slide-by-slide presentation structure.
3. DETAILS: design vivid, varied slide layouts with topic-specific art, photos, maps, diagrams, color, and speaker notes.
The student expects presentation previews that look like real polished decks, not plain outlines.
Use topic-specific imagery ideas on every slide: historical scenes, maps, diagrams, artifacts, people, scientific illustrations, charts, or classroom-ready visual metaphors.
Make every slide visually different. Avoid generic futuristic ambience unless the topic itself calls for it.
Return ONLY valid JSON with this shape:
{
  "title": "Deck title",
  "subtitle": "Short deck subtitle",
  "visualTheme": "A concise art direction for the whole deck",
  "slides": [
    {
      "number": 1,
      "title": "Slide title",
      "subtitle": "Short subtitle",
      "bullets": ["specific bullet", "specific bullet", "specific bullet", "specific bullet"],
      "speakerNotes": "Student-friendly speaker notes, 2-4 sentences.",
      "layout": "cover | imageSplit | timeline | map | comparison | dataStory | quote | gallery",
      "palette": ["#hex", "#hex", "#hex", "#hex"],
      "picturePrompt": "Detailed prompt for a high-quality slide illustration/photo/diagram that is specific to this slide topic.",
      "visualDirection": "Exact composition guidance: where the picture goes, typography mood, colors, icons, labels, and layout."
    }
  ]
}
Create the number of slides requested by the student. If no number is requested, create 8 slides.`,
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

function stripJsonFence(text) {
  return String(text || "")
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}

function parseDeckJson(text) {
  const raw = stripJsonFence(text);
  try {
    return JSON.parse(raw);
  } catch {
    const firstBrace = raw.indexOf("{");
    const lastBrace = raw.lastIndexOf("}");
    if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) return null;
    try {
      return JSON.parse(raw.slice(firstBrace, lastBrace + 1));
    } catch {
      return null;
    }
  }
}

function sanitizeDeck(deck) {
  if (!deck || !Array.isArray(deck.slides)) return null;
  const slides = deck.slides.slice(0, 14).map((slide, index) => ({
    number: Number(slide.number) || index + 1,
    title: String(slide.title || `Slide ${index + 1}`).trim(),
    subtitle: String(slide.subtitle || "").trim(),
    bullets: Array.isArray(slide.bullets)
      ? slide.bullets.slice(0, 5).map((bullet) => String(bullet || "").trim()).filter(Boolean)
      : [],
    speakerNotes: String(slide.speakerNotes || "").trim(),
    layout: String(slide.layout || "imageSplit").trim(),
    palette: Array.isArray(slide.palette) ? slide.palette.slice(0, 5) : [],
    picturePrompt: String(slide.picturePrompt || "").trim(),
    visualDirection: String(slide.visualDirection || "").trim(),
  }));

  return {
    title: String(deck.title || "Generated Presentation").trim(),
    subtitle: String(deck.subtitle || "").trim(),
    visualTheme: String(deck.visualTheme || "").trim(),
    slides,
  };
}

function buildDeckMarkdown(deck) {
  if (!deck) return "";
  const lines = [`# ${deck.title}`];
  if (deck.subtitle) lines.push(deck.subtitle);
  if (deck.visualTheme) lines.push(`Visual theme: ${deck.visualTheme}`);
  for (const slide of deck.slides || []) {
    lines.push("", `### Slide ${slide.number} — ${slide.title}`);
    if (slide.subtitle) lines.push(`- ${slide.subtitle}`);
    for (const bullet of slide.bullets || []) lines.push(`- ${bullet}`);
    if (slide.picturePrompt) lines.push(`**Picture:** ${slide.picturePrompt}`);
    if (slide.visualDirection) lines.push(`**Visual direction:** ${slide.visualDirection}`);
    if (slide.speakerNotes) lines.push(`**Speaker notes suggestion:** ${slide.speakerNotes}`);
  }
  return lines.join("\n");
}

function imagePromptForSlide(deck, slide) {
  const palette = Array.isArray(slide.palette) && slide.palette.length ? slide.palette.join(", ") : "rich academic color palette";
  return `Create a polished 16:9 presentation slide artwork for students.
Topic deck: ${deck.title}
Slide: ${slide.title}
Subtitle: ${slide.subtitle}
Visual request: ${slide.picturePrompt}
Composition: ${slide.visualDirection}
Use this palette influence: ${palette}.
Make it vibrant, artistic, topic-specific, and classroom-ready, like a premium PowerPoint cover image.
Important: do not draw any words, titles, labels, numbers, watermarks, logos, or UI chrome in the image. Leave a clean negative-space area where the app can place real editable slide text.`;
}

async function generateSlideImages(deck) {
  if (process.env.AIPREZ_GENERATE_IMAGES === "0") return deck;
  const imageModel = process.env.AIPREZ_IMAGE_MODEL || "gpt-image-1";
  const slidesToRender = (deck.slides || []).slice(0, Number(process.env.AIPREZ_IMAGE_SLIDE_LIMIT || 6));

  await Promise.all(
    slidesToRender.map(async (slide) => {
      if (!slide.picturePrompt) return;
      try {
        const imageResponse = await fetch("https://api.openai.com/v1/images/generations", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: imageModel,
            prompt: imagePromptForSlide(deck, slide),
            size: "1536x1024",
            quality: "medium",
            n: 1,
          }),
        });
        const imagePayload = await imageResponse.json();
        const b64 = imagePayload.data?.[0]?.b64_json;
        if (imageResponse.ok && b64) {
          slide.imageDataUrl = `data:image/png;base64,${b64}`;
        } else {
          slide.imageError = imagePayload.error?.message || "Image generation failed.";
        }
      } catch (error) {
        slide.imageError = error.message || "Image generation failed.";
      }
    })
  );

  return deck;
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
  const requestBody = {
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
    max_output_tokens: tool === "create-presentation" ? 5200 : 1400,
  };

  if (tool === "create-presentation") {
    requestBody.tools = [{ type: "web_search" }];
  }

  const openAIResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const payload = await openAIResponse.json();
  if (!openAIResponse.ok) {
    response.status(openAIResponse.status).json({
      error: payload.error?.message || "OpenAI request failed.",
      model: process.env.AIPREZ_MODEL || DEFAULT_MODEL,
    });
    return;
  }

  let deck = null;
  let output = extractOutputText(payload);
  if (tool === "create-presentation") {
    deck = sanitizeDeck(parseDeckJson(output));
    if (deck) {
      deck = await generateSlideImages(deck);
      output = buildDeckMarkdown(deck);
    }
  }

  response.status(200).json({
    model: process.env.AIPREZ_MODEL || DEFAULT_MODEL,
    tool,
    output,
    deck,
  });
}
