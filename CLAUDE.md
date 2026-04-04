# CLAUDE.md

This file provides guidance for AI assistants working in this repository.

## Project Overview

This is a personal portfolio website for Youjin Shin, a data visualization specialist and visual journalist. Built with Create React App (CRA), it showcases data journalism projects, professional background, awards, and teaching engagements. It deploys to GitHub Pages at [www.youjin.info](http://www.youjin.info) via the `gh-pages` branch.

## Tech Stack

- **Framework:** React 18 (via Create React App)
- **Styling:** Sass/SCSS
- **Key libraries:**
  - `react-rough-notation` — annotation highlight effects on text
  - `react-ga` — Google Analytics integration
  - `gh-pages` — deployment to GitHub Pages
- **Build tool:** `react-scripts` (CRA)

## Directory Structure

```
helloeujin.github.io/
├── public/               # Static assets served as-is
│   ├── index.html        # HTML shell (fonts loaded here via Google Fonts)
│   ├── manifest.json     # PWA manifest
│   ├── robots.txt
│   └── *.png/jpg/gif     # Portfolio project images (25 images)
├── src/
│   ├── index.js          # React entry point
│   ├── App.js            # Root component; page layout + Google Analytics init
│   ├── About.js          # Bio section (current role, past experience, education)
│   ├── Portfolio.js      # Portfolio grid; reads from data/data.json
│   ├── More.js           # Skills, honors, teaching sections; reads JSON data files
│   ├── Footer.js         # Social links (LinkedIn, resume, Instagram)
│   ├── css/
│   │   ├── Consts.scss   # Shared SCSS variables (breakpoints, widths)
│   │   ├── App.scss      # Root/layout styles
│   │   ├── About.scss    # Bio section styles
│   │   ├── Portfolio.scss # Portfolio grid styles
│   │   └── More.scss     # Skills/honors/teaching styles
│   └── data/
│       ├── data.json     # Portfolio projects (16 items)
│       ├── honors.json   # Awards and recognitions (40+ entries)
│       └── teaching.json # Teaching/speaking engagements (21+ entries)
├── CNAME                 # Custom domain: www.youjin.info
├── package.json
└── README.md             # Standard CRA readme
```

## Development Commands

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:3000)
npm start

# Run tests
npm test

# Build for production
npm run build

# Deploy to GitHub Pages (builds first, then deploys to gh-pages branch)
npm run deploy
```

The `predeploy` script runs `npm run build && cp CNAME ./build` — this copies the CNAME file into the build output so the custom domain is preserved on every deploy.

## Deployment

- **Hosting:** GitHub Pages (`gh-pages` branch)
- **Custom domain:** `www.youjin.info` (configured via `CNAME` file)
- **Deploy command:** `npm run deploy` — never manually push to `gh-pages`
- **Homepage field** in `package.json` is set to `http://helloeujin.github.io/`; this is required by CRA for correct asset path resolution on GitHub Pages

## Content Management

Content is managed through JSON files in `src/data/`. No CMS or backend exists.

### Portfolio Projects (`src/data/data.json`)
Each entry has:
```json
{
  "hed": "Project title",
  "desc": "HTML string with description, tools, and links",
  "tag": "Category label",
  "img": "filename.png",
  "url": "https://external-link.com"
}
```
Images referenced in `data.json` must exist in `public/`.

### Honors (`src/data/honors.json`)
```json
{
  "date": "2024",
  "organization": "Organization name",
  "award": "Award name",
  "story": "Project/story title"
}
```

### Teaching (`src/data/teaching.json`)
```json
{
  "date": "2024",
  "institution": "Institution name",
  "topic": "Talk or workshop topic"
}
```

## SCSS Conventions

- All shared variables (breakpoints, paragraph widths) are in `src/css/Consts.scss` — import this in any new SCSS file that needs them
- Breakpoint variables: `$width-lg: 1000px`, `$width-md: 800px`, `$width-sm: 500px`, `$width-xs: 320px`, `$width-xxs: 280px`
- Paragraph max-width variables: `$pg-xlg: 1340px`, `$pg-lg: 670px`, `$pg-md: 530px`
- Use `@media (max-width: $breakpoint)` for responsive styles
- Each component has a corresponding SCSS file with matching name

## Component Conventions

- All components are function components (no class components)
- `App.js` composes all top-level sections in order: intro text → Portfolio → About → More → Footer
- Google Analytics is initialized in `App.js` using `REACT_APP_TRACKING_ID` from environment
- `Portfolio.js` maps over `data.json` to render project cards with click-to-expand behavior
- `More.js` renders collapsible sections for skills, honors, and teaching data

## Environment Variables

| Variable | Purpose |
|---|---|
| `REACT_APP_TRACKING_ID` | Google Analytics tracking ID |

Create a `.env` file locally (never commit it) for development:
```
REACT_APP_TRACKING_ID=UA-XXXXXXXXX-X
```

## Key Conventions

- **Images go in `public/`**, not `src/` — they are referenced as root-relative paths (e.g., `/logo.png`)
- **No backend or API** — all data is static JSON; keep it that way
- **Single-page app** — no routing library; all sections are on one scrollable page
- **No TypeScript** — project is plain JavaScript
- **`desc` fields in `data.json` contain raw HTML** — render with `dangerouslySetInnerHTML` (already done in `Portfolio.js`)
- Do not run `npm run eject` — this is irreversible and unnecessary
