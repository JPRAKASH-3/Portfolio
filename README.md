# Jayaprakash V — Portfolio (React + Vite)

Your portfolio, rebuilt as a proper React application on Vite. Same design,
same animations, same content — now componentized, code-split, and built for
a fast first load.

## Why this loads fast

- **Vite production build**: tree-shaken, minified (Terser), CSS minified,
  no source maps shipped.
- **Code-split vendor chunk**: React/ReactDOM are in their own chunk
  (`react-*.js`), separate from your app code, so browsers cache the
  framework independently of your content edits.
- **Small footprint**: the whole site — HTML + CSS + your app JS + React —
  is well under 100 KB gzipped total.
- **Image preloaded** with `fetchpriority="high"` so the hero photo starts
  downloading immediately instead of waiting on the JS bundle.
- **Font preconnect** to Google Fonts so the connection is warmed up before
  the stylesheet needs it.

## Project structure

```
portfolio-react/
├── index.html              Vite entry HTML
├── src/
│   ├── main.jsx             React root
│   ├── App.jsx               wires all sections + behavior together
│   ├── index.css              your original styles, unchanged
│   ├── data.js                skills / projects content
│   ├── components/            Nav, Hero, About, Skills, Experience,
│   │                          Projects, Education, Activity, Contact,
│   │                          Footer, CaseStudyDialog, Toast, Icons
│   └── hooks/                  scroll progress/parallax/scroll-spy,
│                                scroll-reveal + count-up, smooth-scroll
├── public/assets/            photo + resume PDF, served as-is
└── vite.config.js            build/minify configuration
```

Every animation and interaction from the original site is preserved:
scroll-reveal, hero parallax, scroll-spy nav highlighting, the stacking
project cards, the pointer spotlight on cards, the case-study dialog, the
mobile menu, the mailto contact form, and the resume download.

## Running it locally

```bash
npm install
npm run dev       # dev server with hot reload
```

## Building for production

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally to double-check it
```

A pre-built `dist/` folder is included in this download so you can deploy
immediately without running the build yourself, if you prefer.

## Deploying it

`dist/` is a fully static site — drag-and-drop it onto Netlify or Vercel,
or push the whole project to GitHub and connect it to either platform (they
auto-detect Vite: build command `npm run build`, output directory `dist`).
"# Portfolio" 
