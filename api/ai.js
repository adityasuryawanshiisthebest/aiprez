const DEFAULT_MODEL = process.env.AIPREZ_MODEL || "gpt-5.4-mini";

const PRESENTATION_TEMPLATE_LIBRARY = [
  {
    id: "T01-cinematic-cover",
    layout: "cover",
    structure: "large title block on the left, full-bleed topic artwork on the right, thin accent rule, short subtitle",
    bestFor: "opening title slides and big topic introductions",
  },
  {
    id: "T02-editorial-split",
    layout: "imageSplit",
    structure: "50/50 editorial split with one strong image, title, 3 compact evidence cards, and a caption strip",
    bestFor: "explaining one major idea with a visual example",
  },
  {
    id: "T03-timeline-ribbon",
    layout: "timeline",
    structure: "horizontal timeline ribbon with dated checkpoints, small icons, and a background scene",
    bestFor: "events, history, process, biographies, and cause/effect sequences",
  },
  {
    id: "T04-map-and-callouts",
    layout: "map",
    structure: "map or diagram background with 3-5 labeled callout cards and a legend",
    bestFor: "geography, wars, trade, migrations, ecosystems, and locations",
  },
  {
    id: "T05-before-after",
    layout: "comparison",
    structure: "two bold columns with contrasting image treatments, labels, and comparison bullets",
    bestFor: "then vs now, problem vs solution, causes vs effects",
  },
  {
    id: "T06-data-dashboard",
    layout: "dataStory",
    structure: "one large chart or number, two mini metrics, and a concise interpretation panel",
    bestFor: "statistics, science data, surveys, economics, and trends",
  },
  {
    id: "T07-quote-portrait",
    layout: "quote",
    structure: "large quote or key idea with portrait/artifact artwork and a brief context note",
    bestFor: "primary sources, famous figures, speeches, and key arguments",
  },
  {
    id: "T08-gallery-grid",
    layout: "gallery",
    structure: "three-image gallery grid with short labels and one synthesis sentence",
    bestFor: "examples, artifacts, species, inventions, artworks, and evidence collections",
  },
  {
    id: "T09-section-divider",
    layout: "divider",
    structure: "dramatic full-image divider with section number, short title, and minimal copy",
    bestFor: "transition slides between parts of a deck",
  },
  {
    id: "T10-process-steps",
    layout: "process",
    structure: "numbered vertical or diagonal step cards over a clean illustration",
    bestFor: "methods, experiments, procedures, and how something works",
  },
  {
    id: "T11-cause-effect-web",
    layout: "conceptMap",
    structure: "central idea with branching cause/effect nodes, icons, and color-coded groups",
    bestFor: "complex relationships and systems thinking",
  },
  {
    id: "T12-problem-solution",
    layout: "comparison",
    structure: "dark problem panel facing bright solution panel, with a bridge arrow between them",
    bestFor: "argumentative presentations and innovation topics",
  },
  {
    id: "T13-lab-notebook",
    layout: "evidence",
    structure: "notebook-style evidence cards, diagram sketch, and highlighted vocabulary terms",
    bestFor: "science, math, research, and classroom explanations",
  },
  {
    id: "T14-newspaper-brief",
    layout: "editorial",
    structure: "headline, subhead, archival image block, side facts, and pull quote",
    bestFor: "history, current events, literature, and social studies",
  },
  {
    id: "T15-museum-card",
    layout: "artifact",
    structure: "large artifact/photo display with museum-label facts and contextual annotations",
    bestFor: "objects, documents, artworks, fossils, and inventions",
  },
  {
    id: "T16-comic-storyboard",
    layout: "storyboard",
    structure: "three illustrated panels that show action over time with short captions",
    bestFor: "narratives, historical events, cycles, and cause progression",
  },
  {
    id: "T17-classroom-summary",
    layout: "summary",
    structure: "clean recap with 4 key takeaways, icons, and one final memorable image",
    bestFor: "conclusion and review slides",
  },
  {
    id: "T18-myth-vs-fact",
    layout: "comparison",
    structure: "myth/fact cards with strong color contrast and supporting evidence",
    bestFor: "misconceptions, debates, and clarification slides",
  },
  {
    id: "T19-layered-diagram",
    layout: "diagram",
    structure: "stacked layers or labeled parts around a central diagram/image",
    bestFor: "biology, earth science, government systems, and technical explanations",
  },
  {
    id: "T20-final-impact",
    layout: "impact",
    structure: "large final image, bold impact statement, and 3 lasting consequences",
    bestFor: "closing slides and why-the-topic-matters conclusions",
  },
];

const TEMPLATE_LIBRARY_PROMPT = PRESENTATION_TEMPLATE_LIBRARY
  .map((template) => `${template.id}: ${template.layout}; ${template.structure}; best for ${template.bestFor}.`)
  .join("\n");

const TEMPLATE_BY_ID = new Map(PRESENTATION_TEMPLATE_LIBRARY.map((template) => [template.id, template]));

const TOOL_PROMPTS = {
  "create-presentation": `You are AIPREZ, an AI academic presentation assistant for students.
Create a polished, classroom-ready presentation deck from the student's request.
Follow this workflow:
1. RESEARCH: use web search to gather relevant, accurate, current information and important details about the topic.
2. OUTLINE: organize the research into a clear slide-by-slide presentation structure.
3. DETAILS: design vivid, varied slide layouts with topic-specific art, photos, maps, diagrams, color, and speaker notes.
4. CHECKING: review the finished presentation before returning it. Check for slide text that would be too long, clipped, overlapped, generic, inaccurate, duplicated, visually mismatched, or likely to create readable text inside generated images. Fix those issues before returning JSON.
The student expects presentation previews that look like real polished decks, not plain outlines.
Use topic-specific imagery ideas on every slide: historical scenes, maps, diagrams, artifacts, people, scientific illustrations, charts, or classroom-ready visual metaphors.
Make every slide visually different. Avoid generic futuristic ambience unless the topic itself calls for it.
Use this 20-template layout library. Pick templates that fit the slide's purpose and rotate through different templates instead of repeating the same layout:
${TEMPLATE_LIBRARY_PROMPT}

Theme rules:
- Choose one unique visual theme for the entire presentation based on the student's topic and tone.
- The deck theme must include a distinctive palette, for example black/blue, white/green, orange/yellow, cream/red/navy, teal/coral, purple/gold, etc.
- Each slide should share the same overall theme but use a different template layout when possible.
- Text must be specific to the student's prompt. Do not use generic filler.
- Each slide needs enough real information for a student to present from it: use 5-7 detailed, specific bullets per slide unless it is a pure title/divider slide.
- Bullets should include facts, examples, dates, names, causes, effects, definitions, evidence, or comparisons when relevant.
- Also create 4-5 short previewBullets per slide for the visible slide cards. Each previewBullet must be 7-11 words and under 72 characters so it fits without clipping.
- Speaker notes should add extra explanation beyond the bullets, not repeat them.
- Picture prompts must describe clean artwork or photo-style visuals only. Do not ask the image model to include sentences, labels, paragraphs, typography, headlines, title cards, posters, signs, banners, or readable text inside the generated image.
- The checking stage must ensure title length, subtitle length, previewBullet length, and image prompts are presentation-safe before returning JSON.
- Never create more than 15 slides. If the student asks for more than 15 slides, cap the deck at exactly 15 slides and note this in checkingReport.fixesApplied.
- If the student requests a style, subject, age level, rubric, or color direction, obey it.
Return ONLY valid JSON with this shape:
{
  "title": "Deck title",
  "subtitle": "Short deck subtitle",
  "visualTheme": "A concise art direction for the whole deck",
  "themeName": "Unique deck theme name",
  "themePalette": ["#hex", "#hex", "#hex", "#hex", "#hex"],
  "checkingReport": {
    "status": "passed",
    "fixesApplied": ["shortened preview bullets", "removed image text instructions"]
  },
  "slides": [
    {
      "number": 1,
      "templateId": "One id from the 20-template library, such as T01-cinematic-cover",
      "title": "Slide title",
      "subtitle": "Short subtitle",
      "bullets": ["specific detailed bullet", "specific detailed bullet", "specific detailed bullet", "specific detailed bullet", "specific detailed bullet", "specific detailed bullet"],
      "previewBullets": ["short visible card point", "short visible card point", "short visible card point", "short visible card point"],
      "speakerNotes": "Student-friendly speaker notes, 3-5 sentences with extra context.",
      "layout": "cover | imageSplit | timeline | map | comparison | dataStory | quote | gallery",
      "palette": ["#hex", "#hex", "#hex", "#hex"],
      "picturePrompt": "Detailed prompt for a high-quality slide illustration/photo/diagram that is specific to this slide topic.",
      "visualDirection": "Exact composition guidance: where the picture goes, typography mood, colors, icons, labels, and layout."
    }
  ]
}
Create the number of slides requested by the student, up to a hard maximum of 15 slides. If no number is requested, create 8 slides.`,
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

function validatePresentationTopic(input) {
  const normalized = String(input || "")
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const topicCandidate = normalized
    .replace(/\b(?:please|can|you|could|would|make|create|generate|build|give|me|a|an|the|some|any|presentation|presentations|slide|slides|slideshow|deck|powerpoint|ppt|pptx|for|about|on|of|with|and|include|school|class|project|assignment|topic|topics)\b/g, " ")
    .replace(/\b(?:random|anything|something|whatever|stuff|things|ideas|interesting|cool|good|nice|fun|general|basic)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const topicWords = topicCandidate.split(/\s+/).filter((word) => word.length >= 3);

  if (topicWords.length === 0) {
    return {
      ok: false,
      error: "Please include a real presentation topic, like “photosynthesis” or “causes of the American Revolution.”",
    };
  }

  return { ok: true };
}

function getRequestedSlideCount(input) {
  const normalized = String(input || "").toLowerCase();
  const numericMatch = normalized.match(/\b(\d{1,2})\s*(?:-| )?\s*(?:slide|slides|page|pages)\b/);
  if (numericMatch) return Number(numericMatch[1]);
  const wordNumbers = {
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
  };
  for (const [word, value] of Object.entries(wordNumbers)) {
    if (new RegExp(`\\b${word}\\s+(?:slide|slides|page|pages)\\b`).test(normalized)) return value;
  }
  return null;
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
  const checkingFixes = new Set(Array.isArray(deck.checkingReport?.fixesApplied) ? deck.checkingReport.fixesApplied : []);
  if (deck.slides.length > 15) checkingFixes.add("capped deck at 15 slides");
  const slides = deck.slides.slice(0, 15).map((slide, index) => {
    const fallbackTemplate = PRESENTATION_TEMPLATE_LIBRARY[index % PRESENTATION_TEMPLATE_LIBRARY.length];
    const requestedTemplateId = String(slide.templateId || fallbackTemplate.id).trim();
    const template = TEMPLATE_BY_ID.get(requestedTemplateId) || fallbackTemplate;
    const bullets = Array.isArray(slide.bullets)
      ? slide.bullets.slice(0, 7).map((bullet) => String(bullet || "").trim()).filter(Boolean)
      : [];
    const previewBulletsSource = Array.isArray(slide.previewBullets) && slide.previewBullets.length
      ? slide.previewBullets
      : bullets;
    const previewBullets = previewBulletsSource
      .slice(0, 5)
      .map((bullet) => makePreviewSafeText(bullet, 72))
      .filter(Boolean);
    if (previewBullets.some((bullet, bulletIndex) => bullet !== String(previewBulletsSource[bulletIndex] || "").trim())) {
      checkingFixes.add("shortened preview bullets");
    }
    return {
      number: Number(slide.number) || index + 1,
      templateId: template.id,
      title: makePreviewSafeText(slide.title || `Slide ${index + 1}`, 52),
      subtitle: makePreviewSafeText(slide.subtitle || "", 92),
      bullets,
      previewBullets,
      speakerNotes: String(slide.speakerNotes || "").trim(),
      layout: template.layout,
      palette: Array.isArray(slide.palette) && slide.palette.length
        ? slide.palette.slice(0, 5)
        : Array.isArray(deck.themePalette)
          ? deck.themePalette.slice(0, 5)
          : [],
      picturePrompt: String(slide.picturePrompt || "").trim(),
      visualDirection: String(slide.visualDirection || "").trim(),
    };
  });

  return {
    title: String(deck.title || "Generated Presentation").trim(),
    subtitle: String(deck.subtitle || "").trim(),
    visualTheme: String(deck.visualTheme || "").trim(),
    themeName: String(deck.themeName || "").trim(),
    themePalette: Array.isArray(deck.themePalette) ? deck.themePalette.slice(0, 5) : [],
    checkingReport: {
      status: "passed",
      fixesApplied: [...checkingFixes],
    },
    slides,
  };
}

function buildDeckMarkdown(deck) {
  if (!deck) return "";
  const lines = [`# ${deck.title}`];
  if (deck.subtitle) lines.push(deck.subtitle);
  if (deck.themeName) lines.push(`Theme: ${deck.themeName}`);
  if (deck.visualTheme) lines.push(`Visual theme: ${deck.visualTheme}`);
  for (const slide of deck.slides || []) {
    lines.push("", `### Slide ${slide.number} — ${slide.title}`);
    if (slide.templateId) lines.push(`Template: ${slide.templateId}`);
    if (slide.subtitle) lines.push(`- ${slide.subtitle}`);
    for (const bullet of slide.bullets || []) lines.push(`- ${bullet}`);
    if (slide.previewBullets?.length) lines.push(`Preview cards: ${slide.previewBullets.join(" | ")}`);
    if (slide.picturePrompt) lines.push(`**Picture:** ${slide.picturePrompt}`);
    if (slide.visualDirection) lines.push(`**Visual direction:** ${slide.visualDirection}`);
    if (slide.speakerNotes) lines.push(`**Speaker notes suggestion:** ${slide.speakerNotes}`);
  }
  return lines.join("\n");
}

function sanitizeImageDescription(text) {
  return String(text || "")
    .replace(/["“”][^"“”]{1,80}["“”]/g, " ")
    .replace(/\b(?:title|headline|heading|subtitle|caption|label|text|word|words|letter|letters|typography|type|font|poster|flyer|banner|sign|placard|book cover|title card|infographic|worksheet|slide title)\b/gi, "visual detail")
    .replace(/\b(?:write|written|says|saying|reads|reading|labeled|labelled|spells|spelling)\b/gi, "shows")
    .replace(/\s+/g, " ")
    .trim();
}

function makePreviewSafeText(text, maxLength = 72) {
  const clean = String(text || "")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
  if (clean.length <= maxLength) return clean;
  const words = clean.split(" ");
  const fitted = [];
  for (const word of words) {
    const next = [...fitted, word].join(" ");
    if (next.length > maxLength) break;
    fitted.push(word);
  }
  const result = fitted.join(" ").replace(/[,:;.-]+$/g, "").trim();
  return result || clean.slice(0, maxLength).trim();
}

function imagePromptForSlide(deck, slide) {
  const palette = Array.isArray(slide.palette) && slide.palette.length ? slide.palette.join(", ") : "rich academic color palette";
  const visualRequest = sanitizeImageDescription(slide.picturePrompt);
  const composition = sanitizeImageDescription(slide.visualDirection);
  return `Create polished 16:9 background artwork for a student presentation.
This image is ONLY a text-free visual background/illustration. The app will add all editable text separately outside this image.
Visual subject and scene: ${visualRequest}
Composition guidance: ${composition}
Use this palette influence: ${palette}.
Make it vibrant, artistic, topic-specific, and classroom-ready, like premium editorial illustration.
Important: create only the visual scene, not a completed slide, poster, book cover, infographic, worksheet, or title card.
Absolutely no readable text or fake text: no words, sentences, titles, labels, numbers, letters, glyphs, captions, signs, watermarks, logos, alphabet shapes, or UI chrome anywhere in the image.
If any object would normally contain text, replace that text with plain abstract texture or remove the object.
Fill the entire canvas with useful artwork from edge to edge. Avoid letterboxing, poster borders, empty bands, large blank top/bottom margins, or framed layouts.
Keep the main subject safely inside the right 60% of the frame with comfortable margins. Leave the left 40% as clean negative space or soft texture for editable app text.`;
}

async function generateSlideImages(deck) {
  if (process.env.AIPREZ_GENERATE_IMAGES === "0") return deck;
  const imageModel = process.env.AIPREZ_IMAGE_MODEL || "gpt-image-1";
  const slidesToRender = (deck.slides || []).slice(0, Number(process.env.AIPREZ_IMAGE_SLIDE_LIMIT || 10));

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

  if (tool === "create-presentation") {
    const topicGate = validatePresentationTopic(trimmedInput);
    if (!topicGate.ok) {
      response.status(400).json({ error: topicGate.error });
      return;
    }
    const requestedSlideCount = getRequestedSlideCount(trimmedInput);
    if (requestedSlideCount && requestedSlideCount > 15) {
      response.status(400).json({ error: "AIPREZ can create up to 15 slides per presentation. Please ask for 15 slides or fewer." });
      return;
    }
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
