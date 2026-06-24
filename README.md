# AIPREZ

AIPREZ is a dark futuristic React dashboard for an AI Academic Presentation System.

## Run Locally

From this folder:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Screens

- Dashboard
- Create Presentation
- Humanizer
- Live Notes
- Presentation Analyzer
- Presentation Viewer
- Account Settings

## AI Backend

The frontend can call a serverless backend at `/api/ai`.

For a real LLM connection, deploy this repo on Vercel and set these environment variables:

```text
OPENAI_API_KEY=your_openai_key
AIPREZ_MODEL=gpt-5.4-mini
```

The app keeps API keys off the browser. GitHub Pages can still host the static UI, but GitHub Pages cannot run `/api/ai`.
