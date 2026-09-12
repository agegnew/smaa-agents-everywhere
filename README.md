# SMAA — Social Media Management Automation

Web frontend for SMAA. You describe what you want, SMAA generates it using your
brand's own knowledge, and a human approves it before anything ships.

Three generators are live:

| Generator | What it makes |
| --- | --- |
| **Poster** | A branded poster from a text brief |
| **Poster + Human** | A poster featuring a person |
| **Character** | A photorealistic human character |

Built with React 19, TanStack Start, Vite, Tailwind and shadcn/ui. It is a
**client only** — every result comes from the SMAA backend. Nothing is mocked.

## Requirements

- **Node.js 22+**
- A running SMAA backend (the hosted one works out of the box)

## Setup

**1. Install dependencies**

```bash
npm install
```

**2. Create your `.env`**

Copy the template and keep it as-is unless you are running your own backend:

```bash
cp .env.example .env
```

That gives you one setting:

```
VITE_API_BASE_URL=https://api.42studio.fit
```

This is the SMAA backend's address. It is **not a secret** — Vite bakes every
`VITE_*` value into the browser bundle, so never put an API key in this file.

Pointing at a backend on your own machine instead:

```
VITE_API_BASE_URL=http://localhost:8000
```

No trailing slash. Restart the dev server after any change — Vite only reads
`.env` at startup.

**3. Run it**

```bash
npm run dev
```

Open **http://localhost:8080**. The port is fixed, so free it if something else
is using it.

## Other commands

```bash
npm run build     # production build
npm run preview   # serve the production build locally
npm run lint      # eslint
npm run format    # prettier
```

## How it talks to the backend

Every network call goes through one function, `apiRequest` in
`src/lib/api/client.ts`. Endpoints live in `src/lib/api/services.ts`. If the
backend moves or renames a route, those two files are the only ones to touch.

```
src/
├── routes/            pages (file-based routing)
├── components/smaa/   app screens and shell
├── components/ui/     shadcn/ui primitives
└── lib/api/           client.ts + services.ts  ← all backend calls
```

Calls are sent with `credentials: "include"`, so the backend must allow your
exact origin — see below.

## Troubleshooting

**"The SMAA API is not connected yet."**
There is no `.env`, or it lacks `VITE_API_BASE_URL`. Create it as above and
restart the dev server. The app checks this before making any request, so you
will see it immediately rather than as a failed call.

**Requests fail in the browser but work in `curl`**
A CORS problem. The backend allows a fixed list of origins, and because the app
sends credentials a wildcard is not valid. `http://localhost:8080` must be in the
backend's `CORS_ORIGINS`.

**Images do not load**
The backend must return image URLs as `https://`. A page served over HTTPS will
block `http://` images as mixed content.

**Generation seems stuck**
It is not. A poster runs the full pipeline synchronously and takes around
90 seconds with no progress bar. Give it time before retrying — a retry just
starts a second generation.
