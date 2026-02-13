# Startup Archive Portfolio (Next.js + Tailwind + Framer Motion)

## Quick start
1) Install deps
```bash
npm install
```

2) Add your project images:
Place images here (examples):
- `public/projects/project-one/1.jpg`
- `public/projects/project-one/2.jpg`
- `public/projects/project-one/3.jpg`
- `public/projects/project-one/4.jpg`

Repeat for `project-two`, `project-three`, etc.

3) Run dev server
```bash
npm run dev
```

Open http://localhost:3000

## Adding projects later
Edit **`data/projects.ts`** and add a new object.
Home chapters, Work grid, and `/work/[slug]` pages update automatically.

## Project page sections
Each project supports: Brief, Style, Features, Reflection.
Edit `data/projects.ts` to update.


## Sanity Studio
Studio is embedded at `/studio`.

1) Copy `.env.example` to `.env.local` and fill in your Sanity project id.
2) Install deps: `npm install`
3) Run: `npm run dev`
4) Open Studio: `http://localhost:3000/studio`

Create `Project` documents to populate the site.
