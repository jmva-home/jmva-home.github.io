# JMVA editorial companion

A simple Markdown website for the *Journal of Multivariate Analysis*,
maintained by Editor in Chief Dietrich von Rosen and Associate Editor Feng Li.
Built with Jekyll for GitHub Pages, with a small JavaScript enhancement for
editorial board search and no external fonts or theme dependencies.

## Edit the content

The homepage links to four sections, each in its own subfolder:

| File | Content |
| --- | --- |
| [index.md](index.md) | Aims and Scope, featured announcement, and section links |
| [announcements/index.md](announcements/index.md) | Announcements and important notices |
| [announcements/ecab-call-for-applications.md](announcements/ecab-call-for-applications.md) | Full ECAB call, eligibility, responsibilities, and application instructions |
| [special-issues/index.md](special-issues/index.md) | Confirmed calls, guest editors, and deadlines |
| [templates/index.md](templates/index.md) | JMVA LaTeX template repository, latest ZIP download, and preparation instructions |
| [editorial-board/index.md](editorial-board/index.md) | Searchable board directory and its `editorial_board` display setting |
| [_data/editorial_board.yml](_data/editorial_board.yml) | Editorial board names, roles, affiliations, and research interests |

Edit the text using ordinary Markdown and update `last_updated` in the front
matter of the page you changed. Keep the folders and `permalink` values unchanged
so the navigation links continue to work. Add new entries to the relevant section
page, with the newest or most important first. Use a blockquote (`>`) to highlight
an important notice. Remove a section's empty-state text when adding its first entry.

The homepage opens with the journal's Aims and Scope, including article length,
proof placement, topics of interest, and scope exclusions. Edit this section
directly in `index.md`.

The Announcements section leads with the Early Career Advisory Board (ECAB)
call for applications, followed by the welcome message. The homepage and
Announcements section preview the call and link to its full contents, with an
application deadline of 31 January 2027. Publisher links appear in the full
announcement, not in preview snippets. The section is published at
`/announcements/`, with the full call at `/announcements/ecab-call-for-applications/`.
The special issues page
has an empty state until a confirmed call is posted. The homepage and Templates
page explain that the editors ask authors to use the editor-approved JMVA LaTeX
template in place of Elsevier's standard template to follow JMVA's own style.
Both pages link to the GitHub repository and latest ZIP download.

### Update the editorial board

The [Editorial board page](editorial-board/index.md) includes a searchable directory
of **95 people**, preserving all
**97 role listings** in the publisher text supplied by the maintainer on
5 November 2026. The source is the journal's
[ScienceDirect editorial board](https://www.sciencedirect.com/journal/journal-of-multivariate-analysis/about/editorial-board).
Direct access returned HTTP 403, so the supplied text, rather than a successful
automated fetch, is the basis for this directory.

Edit **`_data/editorial_board.yml`** to update the directory. Each member has a
name, optional credentials, roles, affiliation, research interests, and an
optional verified profile link (`profile_url`). A linked name opens the member's
university homepage or institutional profile. The link search on 6 November 2026
added 82 links; 84 of the 95 members now have links, including the two existing
links. Feng Li's `https://feng.li/` link is preserved. Eleven members remain unlinked
because a suitable current institutional page could not be verified. Link sources
and access-check notes are recorded in
`_sources/editorial-board-profile-links-2026-11-06.csv`. When a university profile
shows a different affiliation, keep the publisher-supplied board affiliation
unless the board itself is being updated.

Keep missing research interests as `[]`; their
cards omit the research-interest field. Currently four people have no listed
research interests: Dietrich von Rosen, Tõnu Kollo, Albert Vexler, and Sylvia
Frühwirth-Schnatter.

Adelchi Azzalini and Christian Genest each appear under two roles in the source.
They have one card each, retaining both role labels. Genest's Advisory Board
entry retains the supplied `2015 - 2019` annotation without inferring a different
role from that date range. Credentials are stored separately from names.

The source transcription is saved in
`_sources/editorial-board-2026-11-05.txt`, with its SHA-256 in the YAML metadata.
It is excluded from the published site. Whitespace, empty comma-separated
interest entries, and the invisible formatting mark were cleaned during import;
research wording and affiliations were retained as supplied, including spelling
and repeated terms. When refreshing the board, preserve the new source text and
update the date, provenance, checksum, member count, role counts, and missing
interest list in the YAML.

Search matches names, research interests, and affiliations (including countries),
ignoring accents, case, and punctuation. `USA` and `US` also match United States
affiliations, and `UK` matches United Kingdom affiliations. Every search word must
match the beginning of a word in these fields, and the optional role filter narrows
the results further. The page initially shows 12 people, with a button to show
more. All members remain readable when JavaScript is disabled. No search query
is sent to a server, and there is no runtime request to ScienceDirect.

### Add an announcement

Add this to `announcements/index.md`, replacing the example fields:

```markdown
### [Announcement title]

*[Publication date] · [Editor or editorial office]*

[The announcement, who it concerns, and any action or deadline.]

> **Important:** [A short point that needs particular attention.]
```

For a longer announcement, put the introduction in the section index and create
a separate Markdown page in `announcements/` with `layout: default`, a unique
`permalink` under `/announcements/`, and `last_updated` in its front matter.
Link to that page from the introduction, and feature the newest announcement on
the homepage. Keep Elsevier and ScienceDirect links in the full announcement;
preview snippets should link to the local full-content page.

### Add a special issue call

Add this to `special-issues/index.md` once the call is confirmed:

```markdown
### [Special issue title]

- **Status:** Open for submissions
- **Submission deadline:** [Day Month Year, time zone if applicable]
- **Guest editors:** [Names and affiliations]

[Scope, topics, and intended contributions.]

[Read the full call](special-issue-call.pdf)

**How to submit:** [Confirmed submission instructions and link.]
```

Upload the full call to `special-issues/` before linking it. The example link
points to a file alongside that section's `index.md`. Update the status and
instructions when the deadline passes; there is no automatic deadline or status
calculation.

### Add an approved template

The JMVA LaTeX template is maintained in
[its GitHub repository](https://github.com/jmva-home/JMVA-templates). The homepage
and Templates page link to the repository and its `main` branch ZIP archive so
authors can download the latest files. Keep those links in sync when the
repository or branch changes.

For additional approved files hosted on this website, upload them to
**[templates/](templates/)** and add an entry to `templates/index.md`:

```markdown
### [Template name]

- **Version:** [Version number]
- **Approved:** [Day Month Year] by [Editor or editorial office]
- **Use for:** [Initial submissions, revisions, or another confirmed purpose]

[Download LaTeX source](jmva-template-v1.zip) ·
[View sample PDF](jmva-template-v1.pdf)
```

These are editing examples, not approved resources. Only publish a template
after its version and intended use have been confirmed. Include only download
links for files that actually exist; versioned filenames help identify the
correct release.

## Publish on GitHub Pages

After committing and pushing the site files to `main`:

1. Open this repository's **Settings → Pages**.
2. Select **Deploy from a branch**.
3. Choose **main** and **/ (root)**, then save.

The expected address is **https://jmva-home.github.io/** once GitHub finishes
the first build. This setup uses GitHub Pages' built-in Jekyll build, so do not
add a `.nojekyll` file. See GitHub's
[publishing source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Preview locally

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Open **http://localhost:4000**. To check a production build without starting a
server, run `bundle exec jekyll build`.

Run the Jekyll build before pushing changes to layouts or includes. Include
filenames use Jekyll's unquoted syntax: `{% include editorial-board.html %}`.

## Adjust the design

| File | Purpose |
| --- | --- |
| `index.md` | Homepage overview and section links |
| `announcements/` | Announcements in `index.md` and linked full announcement pages |
| `special-issues/` | Special issue calls in `index.md` and related call documents |
| `templates/` | Template instructions in `index.md` and optional approved file uploads |
| `editorial-board/` | Searchable directory page and its display setting |
| `_config.yml` | Journal name, description, site address, and publisher links |
| `_layouts/default.html` | Masthead, navigation, author links, and footer |
| `_includes/editorial-board.html` | Board directory and search controls |
| `_data/editorial_board.yml` | Editable board data and source metadata |
| `assets/js/editorial-board.js` | Local filtering, result counts, and show-more behaviour |
| `assets/css/style.css` | Colours, typography, and responsive layout |
| `assets/images/jmva-cover.jpg` | Small portrait journal cover beside the title in the shared page header |

The palette follows the publisher's
[JMVA journal cover](https://ars.els-cdn.com/content/image/X0047259X.jpg):
burnt orange, terracotta, and cream. The masthead and navigation use deep burnt
orange, with a warm paper background and serif headings. Navigation labels and
numbers are larger, and links stack at full width on small screens. The content
layout becomes a single column on smaller screens.
The shared header shows a small portrait copy of the supplied cover, vertically
centred beside the journal title. Its height follows the title, capped at
128 pixels on desktop and 76 pixels on smaller screens. Replace `assets/images/jmva-cover.jpg`
to refresh the cover image.
Publisher links lead to the journal's
[ScienceDirect homepage](https://www.sciencedirect.com/journal/journal-of-multivariate-analysis)
and its
[Guide for Authors](https://www.sciencedirect.com/journal/journal-of-multivariate-analysis/publish/guide-for-authors).
