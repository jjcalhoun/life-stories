# A Life in Your Own Words — Setup Guide

This is a small website where a person signs in with their **first name, last
name, and date of birth**, answers a life-story questionnaire one section at a
time, and can leave and return later to pick up where they left off. You get a
private **admin page** to read every response, export everything, and download a
**book-ready manuscript** for any one person with photo slots marked for layout.

There's no server to run. It's plain HTML/JS files plus a free Supabase database
for storage. Total setup time is about 20 minutes, and it's all free.

---

## What's in this folder

| File | What it does |
|------|--------------|
| `index.html` | The questionnaire people fill out |
| `admin.html` | Your private page to read & export responses |
| `questions.js` | All the questions (edit here to change wording) |
| `config.js` | **You paste your Supabase keys + admin passphrase here** |
| `README.md` | This guide |

---

## Step 1 — Create a free Supabase project

1. Go to **https://supabase.com** and sign up (free).
2. Click **New project**. Give it a name like `life-stories`.
3. Pick any database password (you won't need it for this) and a region near you.
4. Wait ~2 minutes for it to finish setting up.

## Step 2 — Create the table

1. In your project, open the **SQL Editor** (left sidebar).
2. Click **New query**, paste in everything below, and click **Run**.

```sql
-- Table that holds one row per person
create table if not exists responses (
  respondent_key text primary key,
  first_name     text,
  last_name      text,
  dob            text,
  answers        jsonb default '{}'::jsonb,
  photos         jsonb default '{}'::jsonb,
  custom_entries jsonb default '[]'::jsonb,
  cover_photo    jsonb,
  section_index  int  default 0,
  updated_at     timestamptz default now()
);

-- Turn on row-level security
alter table responses enable row level security;

-- Allow the public site to read/insert/update rows.
-- (The "key" is the person's name+DOB, so people can only reach their own
--  row if they know those details. This is fine for a family project.)
create policy "anyone can upsert their story"
  on responses for all
  using (true)
  with check (true);
```

## Step 2b — Create the photo storage bucket

People can attach photos to any question and to their own custom entries.
Those images live in Supabase Storage.

1. In the left sidebar open **Storage**, then **New bucket**.
2. Name it exactly **`photos`** and turn **Public bucket ON** (so the pictures
   show up in the questionnaire, your admin page, and the printed book).
3. Click **Save**.
4. Back in the **SQL Editor**, run this so the public site is allowed to upload
   and read photos in that bucket:

```sql
create policy "anyone can upload photos"
  on storage.objects for insert
  with check (bucket_id = 'photos');

create policy "anyone can view photos"
  on storage.objects for select
  using (bucket_id = 'photos');
```

> **A note on privacy:** these rules let anyone with the link save and load by
> name+DOB. For a private family questionnaire that's the right trade-off — it's
> what lets grandparents return without making an account. The admin page is
> gated by a passphrase. If you ever wanted stricter security you'd add Supabase
> Auth, but that would force everyone to create logins, which defeats the
> simplicity here.

## Step 3 — Get your keys

1. Open **Settings → API** (left sidebar, gear icon).
2. Copy the **Project URL** and the **anon public** key.
3. Open `config.js` in this folder and paste them in:

```js
const SUPABASE_URL = "https://abcdwxyz.supabase.co";   // your Project URL
const SUPABASE_ANON_KEY = "eyJhbG...";                 // your anon public key
const ADMIN_PASSPHRASE = "grandmas-kitchen-1947";      // pick your own secret
```

The anon key is **safe** to put in front-end code — it can only do what the
row-level security rules above allow.

## Step 4 — Try it locally (optional)

Open a terminal in this folder and run any tiny web server, e.g.:

```bash
python3 -m http.server 8000
```

Then visit **http://localhost:8000** for the questionnaire and
**http://localhost:8000/admin.html** for the keeper's desk.

> Opening the files by double-clicking (file://) mostly works too, but a local
> server avoids occasional browser security quirks.

---

## Step 5 — Put it online (pick one)

### Option A — Vercel (easiest, gives you a nice link)

1. Make a free account at **https://vercel.com**.
2. Install the CLI: `npm i -g vercel` — or just drag-and-drop the folder in the
   Vercel dashboard under **Add New → Project → deploy a folder**.
3. From this folder run `vercel` and follow the prompts. Done — you'll get a URL
   like `https://life-stories.vercel.app`.

### Option B — GitHub Pages

1. Create a new repository on GitHub and upload these files.
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**, pick `main` and `/root`,
   and save.
4. After a minute your site is at
   `https://YOUR-USERNAME.github.io/REPO-NAME/`
   and the admin page at `.../admin.html`.

Either way: share the main link with your grandparents, and keep the
`admin.html` link for yourself.

---

## What people can do while answering

Everything below is **optional** — the questionnaire works fully with no photos
at all, and people can skip any of it.

- **Add photos to any question.** Under each longer question (and each custom
  entry) there's an "Add a photo" button. They can attach several, give each a
  caption, and reorder them with the ← → arrows. Photos show up in their
  printed book, your admin view, and the manuscript export.
- **Choose a cover photo.** On the first page (*About You*) there's an optional
  cover-photo picker for the front of their book. It's clearly marked optional
  and can be removed or skipped.
- **Print their own copy.** There's a "print my answers" link at the bottom of
  the questionnaire and a "Print or save my book" button on the final screen.
  It opens their browser's print dialog laid out as a clean little book, cover
  photo and captions included — choosing "Save as PDF" gives them a keepsake.
- **Add their own questions at the end.** The final section, *In Your Own
  Words*, invites them to add as many of their own question-and-answer entries
  as they like, each with its own photos.

## Using the admin page

- Visit `admin.html` and enter your passphrase.
- You'll see every person, their progress (e.g. `54/85 · 64%`), and when they
  last saved. (Their custom entries aren't counted in the percentage, since
  there's no fixed number of them.)
- Click a row to read their full answers, including thumbnails of any photos
  and all their custom entries.
- **Export all (CSV)** opens in Excel/Sheets — one row per person, one column
  per question, plus a final column gathering their custom entries.
- **Export all (JSON)** is the raw data backup (includes photo URLs).
- **Download manuscript (.html)** is the special one: it turns a single
  person's answers into a clean, 6×9 book-sized document. Each section becomes a
  chapter, empty questions are skipped, **photos they uploaded are placed right
  in the text**, their custom entries appear as their own chapter, and each
  chapter still gets one dashed **[ PHOTO ]** box in case you want to add an
  extra picture during layout.

### Turning a manuscript into a printed book

1. From a person's detail page, click **Download manuscript (.html)**.
2. Open that file in your browser. To get a PDF: **File → Print → Save as PDF**
   (it's already sized for a 6×9 book with proper margins and page breaks).
3. For real photos, open the `.html` in any editor and replace each
   `[ PHOTO — … ]` box with an `<img>` — or just hand the PDF and your photos to
   a service like **Blurb**, **Lulu**, or a local print shop and tell them where
   each photo goes. The captions in the boxes tell you which chapter each belongs
   to.

---

## Changing the questions

Open `questions.js`. Each question looks like:

```js
{ id: "wedding_day", text: "Describe your wedding day." }
```

- To **reword** a question: change only the `text`. Keep the `id` the same so
  existing answers stay attached.
- To **add** a question: add a new object with a brand-new, unique `id`.
- To **remove** one: delete its line (any already-saved answer for it simply
  stops showing).
- The first section uses `type: "short"` for single-line answers; everything
  else defaults to a roomy text box.

**Never reuse or recycle an old `id` for a different question** — that's the one
thing that would scramble saved answers.

---

## Good to know

- **Auto-save**: answers save about a second after someone stops typing, and
  again on every Next/Back. There's also a manual **Save** button.
- **Works offline-ish**: progress is also kept in the browser, so a dropped
  connection won't lose someone's work; it syncs to Supabase when possible.
- **Free tier**: Supabase's free plan is far more than enough for a family's
  worth of responses.
