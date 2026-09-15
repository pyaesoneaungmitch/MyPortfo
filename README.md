# Pyae Sone Aung (Mitch) Portfolio

A responsive graduate software developer portfolio for Pyae Sone Aung (Mitch), a First-Class BSc (Hons) Applied Computing graduate from the University of Huddersfield. The site is built for recruiters scanning full-stack, web and applied-AI work, with deliberate fallbacks for personal assets that still need to be added.

## Screenshots

Final site screenshots have not been added yet. Project posters and supporting screenshots are stored under `public/assets/projects/`.

## Tech Stack

- React, TypeScript and Vite
- React Router for routes
- motion for page transitions and restrained interaction animation
- lucide-react for interface icons
- Plain CSS with documented custom properties for themes and design tokens
- Vitest and Testing Library for targeted interaction tests

## Local Setup

```bash
npm install
npm run dev
```

The development server prints a local URL, usually `http://127.0.0.1:5173/`.

## Available Commands

```bash
npm run dev        # Start local development
npm run build      # Run TypeScript and create the production build
npm run preview    # Preview the production build locally
npm run typecheck  # Run TypeScript without emitting files
npm run lint       # Run ESLint
npm run test:run   # Run the automated tests once
```

## Project Structure

```text
src/
  components/       Reusable UI and interaction components
  data/             Central editable portfolio content
  hooks/            Theme and route metadata helpers
  pages/            Route-level pages
  test/             Targeted interaction and fallback tests
public/assets/
  profile/          Portrait image location
  cv/               Current CV PDF
  projects/         Project posters, screenshots and videos
```

## Updating Personal Content

Edit `src/data/siteContent.ts`. It contains the name, professional summary, navigation, portrait quadrants, fun facts, current-focus items, projects, contact links, CV path and social preview path.

Keep missing values as `null` until the real asset or URL exists. The components hide unavailable links and render deliberate fallbacks instead of broken media.

## Adding the Profile Photo

Place the photo in:

```text
public/assets/profile/
```

Then update:

```ts
personal: {
  profilePhoto: "/assets/profile/your-file-name.jpg"
}
```

The profile photo appears as a circular portrait in the homepage intro beside the name. The interactive quadrant circle stays abstract so the segment text remains readable.

## Adding Project Media

Use this convention:

```text
public/assets/projects/
  wanted/
  sketchguess-ai/
  homeshine/
  handwashing-classifier/
```

For each project in `src/data/siteContent.ts`, update:

- `media.poster`
- `media.video`
- `media.screenshots`
- `demoUrl`
- `githubUrl`

Only add dataset sizes, accuracy figures, affiliations or technology tags when they are verified by the project repository or documentation.

WANTED and SketchGuess-AI include MP4 walkthrough videos. HomeShine and the handwashing classifier use project screenshots only, so their detail views omit the video panel.

## Adding or Replacing the CV PDF

The current CV is stored at:

```text
public/assets/cv/PyaeSoneAung_ResumeMST.pdf
```

To replace it, place the new PDF under `public/assets/cv/`, then update:

```ts
cv: {
  pdfPath: "/assets/cv/Pyae-Sone-Aung-Mitch-CV.pdf",
  downloadFilename: "Pyae-Sone-Aung-Mitch-CV.pdf"
}
```

The CV page will automatically show an inline PDF viewer, a download button and a fallback link for browsers that cannot embed PDFs.

## Theme and Accessibility Notes

The site respects the operating-system colour preference on first visit and stores an explicit light/dark choice in local storage. The initial theme script in `index.html` applies the theme before React mounts to reduce flash.

Interactive controls use native buttons and links, visible focus states, keyboard Escape handling where appropriate, semantic landmarks and reduced-motion support. The four portrait quadrants expose real button state with `aria-pressed`.

## Production Build

```bash
npm run build
npm run preview
```

The generated static files are written to `dist/`.

## GitHub Pages Deployment

This portfolio is configured for GitHub Pages through the workflow at:

```text
.github/workflows/deploy-github-pages.yml
```

The workflow:

- runs on pushes to `main` or `master`, and can also be started manually from the GitHub Actions tab;
- installs dependencies with `npm ci`;
- runs linting and tests;
- builds the Vite production site with the correct GitHub Pages base path;
- copies `dist/index.html` to `dist/404.html` so direct links and refreshed React Router pages keep loading on GitHub Pages;
- publishes the `dist/` folder using GitHub's official Pages artifact deployment.

If the repository is named `username.github.io`, the site is built for the root Pages URL:

```text
https://username.github.io/
```

For a normal project repository, the site is built under the repository path:

```text
https://username.github.io/repository-name/
```

In GitHub, open **Settings > Pages** and set **Build and deployment > Source** to **GitHub Actions** if it is not already selected. Then push to `main`/`master` or run the workflow manually.

## Other Static Hosts

The project can also be deployed to any static host that serves the `dist/` directory. For hosts served from the domain root, build normally with `npm run build`. For hosts served from a subdirectory, pass the matching Vite base path during the build.

## Remaining Placeholders

- Add a real social preview image and update `seo.socialPreviewPath` if desired.
