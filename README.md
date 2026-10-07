# Half Story

**AI-powered continuity and worldbuilding for long-form fiction.**

Half Story is an early-stage independent student project by Adelin Toader, a Computer Engineering student in Romania. It explores how AI-assisted continuity management, semantic retrieval and structured knowledge can help authors manage fictional universes across long manuscripts.

**Status: Early-stage student prototype.** The project is in concept and prototype development. This repository contains its static presentation website, not a working AI platform.

[Website](https://adelin23.github.io/half-story/) · [Repository](https://github.com/Adelin23/half-story)

## Features being explored

- **Story Knowledge Base:** structured characters, locations, factions, relationships, events and world rules.
- **Continuity Checking:** possible contradictions between new writing and established canon.
- **Semantic Story Search:** retrieval by meaning across chapters, with source passages.
- **Timeline Intelligence:** chronological events, dates, ages and sequences.
- **Long-Context Analysis:** connections between distant parts of a manuscript.
- **Story Planning:** future ideas informed by the existing story universe.

All dashboard counts, passages, relationships, search results and continuity results on this website are fictional demonstration content. They are not usage statistics, actual analysis or evidence of completed product capabilities. Interactive examples only reveal or switch prewritten HTML.

## Technology

The **website** uses HTML5, CSS3 and vanilla JavaScript. It has no framework, package manager, Node build step, backend, database, external fonts or runtime dependencies. The wordmark, favicon, icons, dashboard and architecture diagram are original HTML/CSS/SVG assets.

The **proposed product architecture** explores large language models, the Claude API, retrieval-augmented generation, embeddings, vector search, structured extraction, knowledge graphs, semantic search and long-context processing. Claude is being evaluated; no production integration, Anthropic partnership, sponsorship or endorsement is claimed. Architecture may change as the prototype develops.

## Current development status

1. **Current:** concept and architecture.
2. **Planned — next:** manuscript ingestion.
3. **Planned:** story entity extraction.
4. **Planned:** semantic search.
5. **Future:** continuity analysis.
6. **Future:** author dashboard.
7. **Future:** private prototype testing.

The immediate goal is a working prototype that imports chapters, extracts structured story knowledge, searches canon and identifies basic continuity conflicts. The website does not imply a commercial launch, incorporation, customers, revenue, investors or funding.

## Files

```text
index.html          Semantic page content and SEO metadata
styles.css          Design tokens, layouts and responsive styles
script.js           Configuration and small interface interactions
assets/favicon.svg  Original Half Story icon
.nojekyll           Serve these files directly on GitHub Pages
.gitignore          Local editor, tool and secret exclusions
README.md           This guide
```

## Publishing configuration

This copy is configured for `Adelin23/half-story`. Repository links, the public contact address, canonical URL and Open Graph URL are set in the source; the static links also work without JavaScript.

When forking or moving the website:

1. Update `CONFIG.githubUrl`, `CONFIG.email` and `CONFIG.siteUrl` in `script.js`.
2. Update the **canonical URL and `og:url` directly in `index.html`** too; metadata is intentionally static so crawlers do not depend on JavaScript. The config value does not rewrite HTML metadata.
3. Update each `data-github` link's `href`, and the footer contact link's text and `mailto:` value in the HTML. Keep these static values in sync with the configuration.
4. Review the project stage, roadmap and factual copy. Update only when the underlying project changes.

No API keys, credentials or private manuscript data should be put into these public files. The fictional samples can remain as clearly labelled examples.

## Running locally

Open `index.html` directly in a modern browser. No installation is required.

For an HTTP preview, if Python is already installed, run from the repository root:

```sh
python -m http.server 8080
```

Then visit `http://localhost:8080/`. This optional preview server is not part of the deployed website and provides no application backend.

## Deploying to GitHub Pages

Put **the contents of this folder** at the repository root so `index.html` is at the top level. Keep `.nojekyll`. Then:

1. Push the repository to GitHub.
2. Open the repository.
3. Open **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose the **main** branch.
7. Choose **/ (root)**.
8. Select **Save**.
9. Wait for GitHub Pages to publish the site; check its deployment status and open the published URL.

The URL normally looks like:

```text
https://USERNAME.github.io/REPOSITORY/
```

See the official [GitHub Pages publishing-source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) and [site creation guide](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

All CSS, JavaScript and favicon references are relative (`styles.css`, `script.js`, `assets/favicon.svg`), so project-page subdirectories work. No build command or custom workflow is needed. GitHub serves the static site; it does not run a server-side AI system.

## Customization

- **Name:** search for `Half Story` in `index.html`, `README.md` and any future assets. Branding is deliberately written in the semantic HTML instead of generated by JavaScript.
- **Colors, spacing and layout:** edit the named `:root` tokens at the top of `styles.css`.
- **Wordmark:** adjust `.brand-symbol` and `.wordmark`; keep the SVG favicon consistent.
- **Examples:** all sample passages and result groups are in `index.html`. Suggested question mappings are in `script.js`.
- **Social metadata:** update the title, description, canonical, Open Graph and Twitter tags in the HTML head. The site uses a text-based summary card; add absolute image URLs only if a real social preview is later supplied.

## Accessibility and performance

The site uses semantic landmarks, a skip link, visible focus states, labelled controls, accessible disclosures, a keyboard-operable mobile menu and reduced-motion support. A navigation dropdown follows normal tab order; Escape closes it and returns focus to the toggle. Page content remains visible with JavaScript disabled. No font downloads or external JavaScript are required.

For future changes, check desktop, tablet and mobile layouts; tab through navigation and demo controls; test Escape and menu closing; check reduced motion, console errors and horizontal overflow; and verify the site beneath a repository subdirectory. Recheck all prototype and planned-feature claims before publication.
