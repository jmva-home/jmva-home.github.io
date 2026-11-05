# JMVA editorial companion

A simple Markdown homepage for the *Journal of Multivariate Analysis*,
maintained by a JMVA associate editor. Built with Jekyll for GitHub Pages,
with no JavaScript, external fonts, or theme dependencies.

## Edit the homepage

All three content sections live in **[index.md](index.md)**:

- **Editorial messages:** announcements and important notices.
- **Calls for special issues:** confirmed calls, guest editors, and deadlines.
- **Editor-confirmed templates:** approved files with versions and confirmation dates.

Edit the text using ordinary Markdown and update `last_updated` in the front
matter. Keep the three `##` section headings unchanged because the navigation
links use their generated IDs. Add new entries below the appropriate heading,
with the newest or most important first. Use a blockquote (`>`) to highlight an
important notice. Remove a section's empty-state text when adding its first entry.

The initial page contains a welcome message and empty states. It does not
announce a real special issue or label any unverified file as editor-approved.

### Add an editorial message

Place this below `## Editorial messages`, replacing the example fields:

```markdown
### [Message title]

*[Publication date] · [Editor or editorial office]*

[The announcement, who it concerns, and any action or deadline.]

> **Important:** [A short point that needs particular attention.]
```

### Add a special issue call

Place this below `## Calls for special issues` once the call is confirmed:

```markdown
### [Special issue title]

- **Status:** Open for submissions
- **Submission deadline:** [Day Month Year, time zone if applicable]
- **Guest editors:** [Names and affiliations]

[Scope, topics, and intended contributions.]

[Read the full call](downloads/special-issue-call.pdf)

**How to submit:** [Confirmed submission instructions and link.]
```

Upload the full call before linking it. Update the status and instructions when
the deadline passes; there is no automatic deadline or status calculation.

### Add a confirmed template

Upload approved files to **[downloads/](downloads/)**. Then add an entry below
`## Editor-confirmed templates`:

```markdown
### [Template name]

- **Version:** [Version number]
- **Confirmed:** [Day Month Year] by [Editor or editorial office]
- **Use for:** [Initial submissions, revisions, or another confirmed purpose]

[Download LaTeX source](downloads/jmva-template-v1.zip) ·
[View sample PDF](downloads/jmva-template-v1.pdf)
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

## Adjust the design

| File | Purpose |
| --- | --- |
| `index.md` | Homepage content and last-updated date |
| `_config.yml` | Journal name, description, site address, and publisher links |
| `_layouts/default.html` | Masthead, navigation, author links, and footer |
| `assets/css/style.css` | Colours, typography, and responsive layout |
| `downloads/` | Confirmed template files and call documents |

The site uses a quiet paper background, serif headings, and a single-column
layout on small screens. Publisher links lead to the journal's
[ScienceDirect homepage](https://www.sciencedirect.com/journal/journal-of-multivariate-analysis)
and its
[Guide for Authors](https://www.sciencedirect.com/journal/journal-of-multivariate-analysis/publish/guide-for-authors).
