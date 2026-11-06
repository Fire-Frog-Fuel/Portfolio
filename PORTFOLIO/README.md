# Legacies of a Lifetime — a portfolio & blog site

**by Farıkito (Moria)**

A static personal website where **every tab has its own colour and typeface**, and
clicking a tab re-themes the whole page — colour, typography *and* feel. There is
no server, no database and no build step: three files and a folder of images.

```
legacies/
├── index.html      ← the public site  (open this one)
├── admin.html      ← your visual editor / dashboard
├── data.js         ← ALL your content lives here
├── README.md       ← this file
└── assets/         ← placeholder photos for the gallery
```

---

## Quick start

1. Keep all four files **plus the `assets/` folder** together in one directory.
2. Double-click **`index.html`** — that's your live site.
3. Open **`admin.html`** and sign in.
   * Default password: **`admin123`**
4. Change that password right away: **⚙ Site settings → Change admin password**.

Everything works offline. Google Fonts and any remote images you add need a
connection; without one the site falls back to clean system fonts and still works.

---

## The tabs in this build

| Tab | Colour | Typeface | Type |
|---|---|---|---|
| Home | green `#12a150` | Fraunces | hero + stat blocks + featured work |
| Coding | blue `#2563eb` | Space Grotesk | project grid |
| Electronics | red `#e11d48` | IBM Plex Mono | project grid |
| Photography | purple `#8b5cf6` | Playfair Display | photo gallery with lightbox |
| Blog | amber `#f59e0b` | Lora | post list + reading view |
| Contact | amber `#f59e0b` | DM Sans | email + links + mailto form |

Colours and fonts are just fields in `data.js` — change them by hand or in the
admin panel and the whole page follows.

---

## Editing content (no coding)

Open `admin.html`, sign in, and use the left-hand sidebar to pick a tab.

* **Add a project** → Coding (or Electronics) → **+ Add project**
* **Add a photo** → Photography → **+ Add photo** (paste an image path or URL)
* **Add a post** → Blog → **+ Add post**
  A **blank line** in the body starts a new paragraph.
* **Add a whole new tab** → type a name in the sidebar, choose a type, press **+ Add section**
* **Reorder tabs** → the ↑ / ↓ arrows next to each section
* **Recolour / refont** → pick the tab, then the colour picker + typeface dropdown
* **Add stats, timeline entries, skills, contact links** → each appears as its own card

Then press **💾 Save** (or `Ctrl/Cmd + S`).

### How saving works — this part matters

* **💾 Save** stores your edits in this browser only (`localStorage`), so
  `index.html` shows them instantly *for you*. This is your **draft**.
* **⬇ Export data.js** downloads a fresh `data.js`. Replace the file in your
  project folder with it.
* **🗑 Clear draft** then removes the local draft so the `data.js` file becomes
  the single source of truth for **every visitor**.

So the publishing loop is: **edit → Save → Export → replace `data.js` → Clear draft**.
If you skip Export, your visitors will never see the changes.

* **⬆ Import** lets you load a previously exported `data.js` back into the editor.
* **👁 Preview site** opens `index.html` in a new tab.
* Every tab also has an **Advanced** card where you can edit that section as raw
  JSON and copy it to another project.

---

## Adding images

* Put files in `assets/` and reference them as `assets/your-photo.jpg`, **or**
  paste a full `https://…` URL.
* Project cards fall back to a coloured letter tile if an image is missing, so the
  layout never breaks.
* The gallery images included here are generated SVG placeholders — replace them
  with your own photographs when you're ready.

---

## Text formatting

In headings and intros you can use light markdown:

* `*word*` → coloured accent (uses the current tab's colour)
* `**word**` → bold
* `_word_` → italic

---

## Publishing

Upload the folder to any static host — **GitHub Pages, Netlify, Vercel, Cloudflare
Pages**, or any ordinary web host. No server, database or build step is required.

> When you host it, remember to **Export → replace `data.js` → Clear draft** first,
> or visitors will only see the version that's in the file.

---

## Notes, and honest caveats

* The admin password is a **client-side lock** stored in the browser. It keeps
  casual visitors out of the editor; it is not real security. Don't put anything
  confidential in `data.js` — it's a public file by design.
* For real protection you'd add server-side auth (e.g. Netlify Identity) — a
  small change, but it needs a host that can run it.
* The contact form uses `mailto:`, so it opens the visitor's own email app. No
  backend, no spam database, no tracking.
* `data.js` is plain JavaScript with comments, so it's also perfectly editable in
  any text editor if you prefer that to the dashboard.
* Light/dark mode is built in (the 🌙 button, top right). Set the site-wide default
  in ⚙ Site settings.
* Keyboard: `Ctrl/Cmd + S` saves. In the gallery lightbox, arrow keys navigate and
  `Esc` closes.
