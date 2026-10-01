# Putting the site into Squarespace

Each file in `pages/` is one complete page: the top address bar, logo, menu (with the Services dropdown), the page content and the footer, with all its styling and scripts built in. On a page that uses one of these files, Squarespace's own header and footer are hidden, so the live page matches the preview.

Nothing goes in Custom CSS or Code Injection. If you pasted earlier code into Custom CSS, delete it.

| File | Page | URL slug |
|------|------|----------|
| `01-home-new.txt` | Home | `home-new` (set as homepage at the end) |
| `02-services.txt` | Services | `services` |
| `03-meet-the-doctor.txt` | Meet the Doctor | `meet-the-doctor` |
| `04-new-patients.txt` | New Patients | `new-patients` |
| `05-blog.txt` | Blog | `blog` |
| `06-events.txt` | Events | `events` |
| `07-contact.txt` | Contact | `contact` |
| `08-lipedema-treatment.txt` | Lipedema | `lipedema-treatment` |
| `09-lymphedema-treatment.txt` | Lymphedema | `lymphedema-treatment` |
| `10-medical-weight-loss.txt` | Weight loss | `medical-weight-loss` |
| `11-privacy-policy.txt` | Privacy policy | `privacy-policy` (your existing page) |

## For each page

1. **Website → Pages → +** → **Blank page**. Name it, then in its **settings (gear icon)** set the URL slug from the table.
2. Click **Edit**. Delete the "Empty Page" section, then **Add Section → Add a blank section**.
3. **Add Block → Code**. It must be a Code block, not a Text or Markdown block.
4. Open the page's file (it opens in Notepad or TextEdit). Copy everything between the `START` and `END` lines, not the lines themselves, and paste it into the Code block. Turn off **Display Source** if you see it.
5. Drag the block's edges to full width. Click **Save**.
6. In the page's **settings → SEO**, paste the SEO title and description from the top of the file.

Squarespace hides its own header and footer only on the live site, so you'll still see them while editing. Check each page in a private browser window.

## The menu

The menu is part of every page's code, so you don't need to build one in Squarespace. Keep the pages under **Not Linked** if you don't want Squarespace listing them anywhere else.

## Go live

1. Open the **Home** page's settings and choose **Set as Homepage**.
2. Check every page on your phone and on a computer, in a private window.
3. In Google Search Console, submit `https://www.mywellnessphysicians.com/sitemap.xml`.

## Good to know

- **Images** are already uploaded to Squarespace and linked in the code. Keep the page or section that holds them. If they show on a visible page, add a Code block to that section containing `<div class="mwp-hidden-section"></div>` to hide it on the live site.
- **Blog and Events** are simple "coming soon" pages for now. To publish posts or events, replace them later with Squarespace's own Blog or Events page using the same slug.
- **On a trial,** Squarespace may block scripts until you subscribe to Core or higher. Then the menu dropdown, mobile menu and carousel arrows won't respond, but the layout and content still show, and the cards can still be swiped.
- **Changing text later:** edit the words inside the Code block, leaving anything inside `< >` alone.
