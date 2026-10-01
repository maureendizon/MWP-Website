# My Wellness Physicians website

Static site with no build step. Deploy the folder to any static host.

| Page | File |
|------|------|
| Home | `index.html` |
| Medical weight loss | `medical-weight-loss/index.html` |
| Lipedema treatment | `lipedema-treatment/index.html` |
| Lymphedema treatment | `lymphedema-treatment/index.html` |
| Privacy policy | `privacy-policy/index.html` |

Shared styles are in `styles.css` and the mobile menu script in `main.js`. The header, contact band and footer are repeated in each page, so a change to one (for example new hours or a phone number) needs making in all five files.

## Placeholders

Placeholder text is wrapped in `<span class="ph">[…]</span>` and shows with an orange dashed outline. There are none left.

## Search

`sitemap.xml` lists every page; add new pages to it. Each page has its own title, description, canonical URL and structured data (JSON-LD) in the `<head>`.

## Squarespace

The `squarespace/` folder has the same site split into pieces to paste into a Squarespace site, with a step-by-step guide in `squarespace/README.md`. If you change a page here, the Squarespace pieces need regenerating to match.
