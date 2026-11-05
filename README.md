# JMVA editorial companion

A simple Markdown website for the *Journal of Multivariate Analysis*,
maintained by a JMVA associate editor. Built with Jekyll for GitHub Pages,
with no JavaScript, external fonts, or theme dependencies.

## Edit the content

The homepage links to three sections, each in its own subfolder:

| File | Content |
| --- | --- |
| [index.md](index.md) | Homepage overview and links to the sections |
| [editorial-messages/index.md](editorial-messages/index.md) | Editorial announcements and important notices |
| [special-issues/index.md](special-issues/index.md) | Confirmed calls, guest editors, and deadlines |
| [templates/index.md](templates/index.md) | JMVA LaTeX template repository, latest ZIP download, and preparation instructions |

Edit the text using ordinary Markdown and update `last_updated` in the front
matter of the page you changed. Keep the folders and `permalink` values unchanged
so the navigation links continue to work. Add new entries to the relevant section
page, with the newest or most important first. Use a blockquote (`>`) to highlight
an important notice. Remove a section's empty-state text when adding its first entry.

The editorial page contains a welcome message, and the special issues page
has an empty state until a confirmed call is posted. The homepage and Templates
page ask authors to use the JMVA LaTeX template and link to its GitHub repository
and latest ZIP download.

### Add an editorial message

Add this to `editorial-messages/index.md`, replacing the example fields:

```markdown
### [Message title]

*[Publication date] · [Editor or editorial office]*

[The announcement, who it concerns, and any action or deadline.]

> **Important:** [A short point that needs particular attention.]
```

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

### Add a confirmed template

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
- **Confirmed:** [Day Month Year] by [Editor or editorial office]
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

## Adjust the design

| File | Purpose |
| --- | --- |
| `index.md` | Homepage overview and links to the sections |
| `editorial-messages/` | Editorial messages in `index.md` |
| `special-issues/` | Special issue calls in `index.md` and related call documents |
| `templates/` | Template instructions in `index.md` and optional approved file uploads |
| `_config.yml` | Journal name, description, site address, and publisher links |
| `_layouts/default.html` | Masthead, navigation, author links, and footer |
| `assets/css/style.css` | Colours, typography, and responsive layout |

The palette follows the publisher's
[JMVA journal cover](https://secure-ecsd.elsevier.com/covers/80/Tango2/large/0047259X.jpg):
burnt orange, terracotta, and cream. The masthead and navigation use deep burnt
orange, with a warm paper background and serif headings. Navigation labels and
numbers are larger, and links stack at full width on small screens. The content
layout becomes a single column on smaller screens.
Publisher links lead to the journal's
[ScienceDirect homepage](https://www.sciencedirect.com/journal/journal-of-multivariate-analysis)
and its
[Guide for Authors](https://www.sciencedirect.com/journal/journal-of-multivariate-analysis/publish/guide-for-authors).
