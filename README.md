# Dr. Reepa Agrawal React page

An editable React/Vite recreation of the [reference page](https://drreepaagrawal.netlify.app/). The two supplied photos are local assets in `public/images/`.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To check the production build, run `npm run build`.

The original page is at `/`. The second design is at `/revamped/` (for example, `http://localhost:5173/revamped/` when Vite uses its default port). Both are included in the production build.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site when changes are pushed to `main`. In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**. The deployed site shows the revamped design at the site root and the original version at `/original/`. The revamped design is also available at `/revamped/`.

## Where to edit

- `src/PageMarkup.jsx` — headings, copy, layout, navigation, footer, and forms.
- `src/content.js` — service cards, sample articles, and FAQs.
- `src/Sections.jsx` — service card, article, and FAQ rendering.
- `src/styles.css` — colors, spacing, typography, and responsive rules.
- `public/images/team.png` and `public/images/presentation.png` — the two supplied photos.
- `public/images/reepa-agrawal-monogram.svg` — editable AG logo used in the header and footer.
- `src/App.jsx` — navigation, modal, reveal effects, and demo form behavior.
- `src/revamped/RevampedPage.jsx` and `src/revamped/revamped.css` — the second design and its styling.
- `public/images/pediatric-doctor-illustration.png` — the illustration created for the second design.

The biography, contact details, article copy, and family stories are placeholders from the reference page. The forms validate locally and do not send appointment requests.
