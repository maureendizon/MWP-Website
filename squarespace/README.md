# Putting the site into Squarespace

This folder turns the website into pieces you paste into Squarespace (version 7.1). Nothing here needs Code Injection. The carousel arrows and the map embed run inside Code Blocks; if your plan or trial blocks them, the cards still scroll by swiping and the "Get directions" button still works. Squarespace keeps its own header, menu and page settings; the page content goes into Code Blocks.

| File | Where it goes |
|------|---------------|
| `2-custom-css.txt` | Custom CSS (all the styling) |
| `images-to-upload/` | Uploaded to Squarespace (step 3) |
| `page-code/*.txt` | One Code Block per page (including its search-engine data), plus the footer |

The code files are plain text. Open one (it opens in a text app such as Notepad or TextEdit), select everything (Ctrl+A on Windows, Cmd+A on Mac), copy, and paste it into Squarespace.

Squarespace renames its menus from time to time. If a menu below isn't where this says, use the search box in the Squarespace dashboard to find it by name.

**Tip:** to avoid touching your live site while you work, build the new pages first and only switch the homepage at the end (step 9). Pages you create aren't in your menu until you add them.

---

## 1. Fonts

Nothing to do: the fonts load from the Custom CSS in step 2. (Earlier versions of this kit used Code Injection for this. If you pasted anything into Code Injection, you can delete it.)

## 2. Add the styling

1. Open **Website → Pages**, scroll to the bottom and click **Custom Code → Custom CSS**. On older accounts it's **Design → Custom CSS**.
2. Paste the whole of `2-custom-css.txt` into the box, **at the very top**. The first lines load the fonts, and they only work at the top. If you pasted an earlier version of this file, delete it first.
3. Click **Save**.

The styling only affects content inside the pasted code, so the rest of your site stays as it is.

## 3. Upload the images and get their web addresses

The page code needs a web address for each of these six images in `images-to-upload/`:

- `dr-cruz-tolentino-clinic.jpg`
- `dr-cruz-tolentino-portrait.jpg`
- `abfm-board-certified.png`
- `abom-diplomate.png`
- `menopause-society.png`
- `best-of-loudoun-2025.png`

**Option A: a hidden "image library" page (works on every account)**

1. **Website → Pages → +** under **Not Linked → Blank page**. Name it `Image library`.
2. In the page's **settings (gear icon) → SEO**, turn on **Hide page from search results**.
3. Click **Edit**, add a section, then add six **Image** blocks, one per image. Click **Save**.
4. Open `https://www.mywellnessphysicians.com/image-library` in a private browser window.
5. Right-click each image (Ctrl-click on a Mac) → **Copy image address**. Each starts with `https://images.squarespace-cdn.com/`.

Keep this page afterwards. Deleting it may eventually remove the images from Squarespace.

Make sure the page is under **Not Linked**, not **Main Navigation**, so it doesn't appear in your menu. If you put the images in a section of a visible page instead, don't delete them; hide the section: add a **Code Block** to that section containing `<div class="mwp-hidden-section"></div>` and click **Save**. The Custom CSS from step 2 hides any section with that code on the live site.

**Option B: Custom CSS file upload (if your account has it)**

At the bottom of the Custom CSS panel, look for **Manage Custom Files**, **Custom files** or **Add images or fonts**. Upload the six files there, then click each one: Squarespace adds a line like `url(https://…)` to the CSS box. Copy the address between the brackets and delete that line from the CSS box.

**Then:** send the six addresses to Claude, which will fill them into the page code for you. Or do it yourself: in each file in `page-code/`, replace each placeholder with its address:

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
- **Colors:** in **Site Styles → Colors**, set the button color to `#543e82` and the header background to white. Keep the header white: the logo is purple and wouldn't show on a dark header.
- **Header style:** under **Style**, choose a **solid** white header rather than a transparent or "dynamic" one. A transparent header sits on top of the first section and can cover the page's heading.
- **Button shape:** in **Site Styles → Buttons**, set the shape to **Pill** so the header button matches the rounded buttons on the pages.

Menu, added under **Website → Pages → Main Navigation**, in this order:

1. **Services**: click **+ → Folder** and name it `Services`. Inside it, add:
   - your **Lipedema treatment**, **Lymphedema treatment** and **Medical weight loss** pages (drag them into the folder, and rename their menu titles to `Lipedema`, `Lymphedema` and `Weight loss & obesity management`)
   - four **Links**: `Hormone therapy for men & women` → `/#hormone-therapy`, `Primary care` → `/#primary-care`, `Wellness consultation` → `/#wellness-consultation`, `IV therapy & peptides` → `/#iv-therapy-peptides`
2. **Meet the Doctor**: **+ → Link** → `/#about`
3. **New Patients**: **+ → Link** → `/#new-patients`
4. **Blog**: **+ → Blog**. Squarespace's own blog page, so you can write and publish posts in the editor. Set its URL slug to `blog`.
5. **Events**: **+ → Events**. Squarespace's own events page, for adding events with dates and locations. Set its URL slug to `events`.
6. **Contact**: **+ → Link** → `/#visit`

Squarespace shows folders as dropdown menus on desktop and as expandable lists on phones, so the Services menu works like the one on the preview site.

Optional: turn on the **Announcement Bar** (under **Site Styles** or **Marketing**) with "1604 Village Market Blvd SE, Leesburg, VA · 703-777-9355".

## 5. Create the pages

Do this for each page in the table. For the privacy policy, edit your existing page instead of creating a new one.

| Page title | URL slug | Code Block |
|------------|----------|------------|---------------------|
| Home (new) | `home-new` | `page-code/home.txt` |
| Medical weight loss | `medical-weight-loss` | `page-code/medical-weight-loss.txt` |
| Lipedema treatment | `lipedema-treatment` | `page-code/lipedema-treatment.txt` |
| Lymphedema treatment | `lymphedema-treatment` | `page-code/lymphedema-treatment.txt` |
| Privacy policy | `privacy-policy` | `page-code/privacy-policy.txt` |

For each one:

1. **Website → Pages → +** (under "Not Linked" while you work) → **Blank page**. Name it, then open its **settings (gear icon)** and set the **URL slug**.
2. Click **Edit**. Delete any sections the blank page came with, then **Add Section → Add a blank section**.
3. In the section, click **Add Block → Code**. Paste the whole of the page's code file. Turn off **Display Source** if it's on.
4. Drag the Code Block's edges so it spans the full width of the section.
5. In the section's settings (pencil icon), choose the plainest options: no background image, smallest section height.
6. Click **Save** and check the page.

The homepage code includes a small script for the services carousel's arrow buttons. Squarespace may not run scripts while you're editing, so test the arrows on the live page. Without the script the cards still scroll sideways by swiping or with a trackpad.

The code makes the content run edge to edge and removes Squarespace's section padding, so a thin gap or a slightly different spacing in the editor is normal. Check the live page in a private browser window.

## 6. Search titles and descriptions

For each page, open its **settings (gear icon)** and, on the **SEO** tab, paste the title and description from the table below. The search-engine data (business details, hours, services) is already inside each page's Code Block.

| Page | SEO title | SEO description |
|------|-----------|-----------------|
| Home | Lipedema, Weight Loss & Obesity Doctor in Leesburg, VA \| My Wellness Physicians | Lipedema and lymphedema care, weight loss and obesity management, hormone therapy, primary care and IV therapy in Leesburg, VA. Dr. Minnie Cruz-Tolentino, MD, FAAFP, DABOM, serves Loudoun County and Northern Virginia in person and by telemedicine. |
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
