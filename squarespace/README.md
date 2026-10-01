# Putting the site into Squarespace

This folder turns the website into pieces you paste into Squarespace (version 7.1, Core plan or higher). Squarespace keeps its own header, menu and page settings; the page content goes into Code Blocks.

| File | Where it goes |
|------|---------------|
| `1-site-header-code.txt` | Site-wide Code Injection (loads the fonts) |
| `2-custom-css.txt` | Custom CSS (all the styling) |
| `images-to-upload/` | Uploaded to Squarespace (step 3) |
| `page-code/*.txt` | One Code Block per page, plus the footer |
| `page-seo/*-header-code.txt` | Each page's own Code Injection (search-engine data) |

The code files are plain text. Open one (it opens in a text app such as Notepad or TextEdit), select everything (Ctrl+A on Windows, Cmd+A on Mac), copy, and paste it into Squarespace.

Squarespace renames its menus from time to time. If a menu below isn't where this says, use the search box in the Squarespace dashboard to find it by name.

**Tip:** to avoid touching your live site while you work, build the new pages first and only switch the homepage at the end (step 9). Pages you create aren't in your menu until you add them.

---

## 1. Load the fonts (site-wide)

1. Open **Settings → Developer Tools → Code Injection**. On some accounts it's **Settings → Advanced → Code Injection**.
2. Paste the whole of `1-site-header-code.txt` into the **Header** box.
3. Click **Save**.

## 2. Add the styling

1. Open **Website → Pages**, scroll to the bottom and click **Custom Code → Custom CSS**. On older accounts it's **Design → Custom CSS**.
2. Paste the whole of `2-custom-css.txt` into the box. If something is already there, paste below it.
3. Click **Save**.

The styling only affects content inside the pasted code, so the rest of your site stays as it is.

## 3. Upload the images and get their web addresses

The page code needs a web address for each image. Squarespace gives you one when you upload through Custom CSS:

1. In the Custom CSS window, click **Manage Custom Files**, then upload these six files from `images-to-upload/`:
   - `dr-cruz-tolentino-clinic.jpg`
   - `dr-cruz-tolentino-portrait.jpg`
   - `abfm-board-certified.png`
   - `abom-diplomate.png`
   - `menopause-society.png`
   - `best-of-loudoun-2025.png`
2. Click a file in the list. Squarespace adds a line like `url(https://images.squarespace-cdn.com/…)` to the CSS box. Copy the address between the brackets, then delete that line from the CSS box.
3. Repeat for each file.
4. Send the six addresses to Claude, which will fill them into the page code for you. Or do it yourself: in each file in `page-code/`, replace each placeholder with its address:

| Placeholder | Image |
|-------------|-------|
| `{{HERO_PHOTO}}` | `dr-cruz-tolentino-clinic.jpg` |
| `{{PORTRAIT_PHOTO}}` | `dr-cruz-tolentino-portrait.jpg` |
| `{{LOGO_ABFM}}` | `abfm-board-certified.png` |
| `{{LOGO_ABOM}}` | `abom-diplomate.png` |
| `{{LOGO_MENOPAUSE}}` | `menopause-society.png` |
| `{{LOGO_BEST_OF_LOUDOUN}}` | `best-of-loudoun-2025.png` |

`site-logo.png` and `social-sharing-image.jpg` are uploaded in steps 4 and 8 instead.

## 4. Set up the header

Open any page, click **Edit**, then hover over the header and click **Edit Site Header**.

- **Logo:** under **Site Title & Logo**, upload `site-logo.png`.
- **Button:** turn on **Button**. Set the text to `Book an appointment` and the link to `https://scheduling.symplast.com/mywellnessphysicians/3?provider=7`.
- **Colors:** in **Site Styles → Colors**, set the button color to `#543e82` and the header background to white.

Menu links, added under **Website → Pages → Main Navigation → + → Link**:

| Link text | Address |
|-----------|---------|
| Services | `/#services` |
| Meet the doctor | `/#about` |
| New patients | `/#new-patients` |
| Hours & location | `/#visit` |
| Contact | `/#contact` |

If you'd rather show the condition pages in the menu, add a **Folder** called Services containing the three condition pages.

Optional: turn on the **Announcement Bar** (under **Site Styles** or **Marketing**) with "1604 Village Market Blvd SE, Leesburg, VA · 703-777-9355".

## 5. Create the pages

Do this for each page in the table. For the privacy policy, edit your existing page instead of creating a new one.

| Page title | URL slug | Code Block | Page code injection |
|------------|----------|------------|---------------------|
| Home (new) | `home-new` | `page-code/home.txt` | `page-seo/home-header-code.txt` |
| Medical weight loss | `medical-weight-loss` | `page-code/medical-weight-loss.txt` | `page-seo/medical-weight-loss-header-code.txt` |
| Lipedema treatment | `lipedema-treatment` | `page-code/lipedema-treatment.txt` | `page-seo/lipedema-treatment-header-code.txt` |
| Lymphedema treatment | `lymphedema-treatment` | `page-code/lymphedema-treatment.txt` | `page-seo/lymphedema-treatment-header-code.txt` |
| Privacy policy | `privacy-policy` | `page-code/privacy-policy.txt` | `page-seo/privacy-policy-header-code.txt` |

For each one:

1. **Website → Pages → +** (under "Not Linked" while you work) → **Blank page**. Name it, then open its **settings (gear icon)** and set the **URL slug**.
2. Click **Edit**. Delete any sections the blank page came with, then **Add Section → Add a blank section**.
3. In the section, click **Add Block → Code**. Paste the whole of the page's code file. Turn off **Display Source** if it's on.
4. Drag the Code Block's edges so it spans the full width of the section.
5. In the section's settings (pencil icon), choose the plainest options: no background image, smallest section height.
6. Click **Save** and check the page.

The code makes the content run edge to edge and removes Squarespace's section padding, so a thin gap or a slightly different spacing in the editor is normal. Check the live page in a private browser window.

## 6. Search titles, descriptions and search-engine data

For each page, open its **settings (gear icon)**:

1. On the **SEO** tab, paste the title and description from the table below.
2. On the **Advanced** tab, paste the matching `page-seo/…-header-code.txt` file into **Page Header Code Injection**.

| Page | SEO title | SEO description |
|------|-----------|-----------------|
| Home | Weight Loss, Lipedema & Lymphedema Doctor in Leesburg, VA \| My Wellness Physicians | Medical weight loss, lipedema and lymphedema treatment, and hormone therapy in Leesburg, VA. Dr. Minnie Cruz-Tolentino is double board-certified in Family and Obesity Medicine, serving Loudoun County in person and by telemedicine. |
| Medical weight loss | Medical Weight Loss Doctor in Leesburg, VA \| My Wellness Physicians | Physician-supervised medical weight loss in Leesburg, VA from a board-certified obesity medicine doctor. Personalized plans for lasting results, serving Loudoun County in person and by telemedicine. |
| Lipedema treatment | Lipedema Treatment in Leesburg, VA \| My Wellness Physicians | Lipedema diagnosis and management in Leesburg, VA. Dr. Minnie Cruz-Tolentino helps patients across Loudoun County understand and manage lipedema, in person or by telemedicine. |
| Lymphedema treatment | Lymphedema Treatment in Leesburg, VA \| My Wellness Physicians | Lymphedema diagnosis and management in Leesburg, VA. Dr. Minnie Cruz-Tolentino helps patients across Loudoun County manage swelling from lymphedema, in person or by telemedicine. |
| Privacy policy | Privacy Policy \| My Wellness Physicians | Patient notice of privacy practices (HIPAA) for My Wellness Physicians, LLC in Leesburg, VA. |

(Type the titles without the backslashes; they're only there to keep this table intact.)

Squarespace may add your site name to the end of SEO titles automatically. If titles end up with "My Wellness Physicians" twice, change the format under **Settings → SEO** (or **Marketing → SEO**), or remove "| My Wellness Physicians" from the titles above.

## 7. Footer

1. Open any page, click **Edit**, scroll to the footer and click **Edit Footer**.
2. Delete the existing blocks you don't want, then **Add Block → Code** and paste `page-code/footer.txt`.
3. Click **Save**. The footer is shared by every page.

## 8. Site-wide settings

- **Social sharing image:** in **Settings → Social Sharing** (or **Marketing → SEO**), upload `social-sharing-image.jpg`.
- **Business information:** in **Settings → Business Information**, check the address, phone and hours. Squarespace uses these for Google too.

## 9. Go live

1. Open the **Home (new)** page's settings and choose **Set as Homepage**. Your old homepage stays as an unlinked page, so you can switch back at any time.
2. Check every page on your phone and on a computer, using a private window so you see the live version.
3. In Google Search Console, submit `https://www.mywellnessphysicians.com/sitemap.xml`. Squarespace builds the sitemap for you.

## Changing text later

Open the page, click **Edit**, click the Code Block and change the words between the tags. Leave anything inside `< >` alone. For bigger changes, ask Claude to update the files in this folder and paste them again.
