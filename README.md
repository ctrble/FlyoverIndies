![Vercel](https://img.shields.io/github/deployments/ctrble/FlyoverIndies/main?label=vercel&logo=vercel&logoColor=white)
![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app={flyover-indies})

Welcome to the Flyover Indies website repo!

## Technology Overview

This site is built with Next.js, a server-side rendered React framework. It uses SCSS Modules for styling, and content is sourced from Markdown files and Google Sheets. The site is automatically deployed by Vercel.

Take a look at the following resources to learn more:

- [React documentation](https://reactjs.org/docs)
- [Next.js documentation](https://nextjs.org/docs)
- [SCSS Modules overview](https://medium.com/clover-platform-blog/modular-scss-and-why-you-need-it-6bb2d8c40fd8)
- [Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)
- [Google Sheets as Next.js CMS](https://andreaskeller.name/blog/nextjs-google-sheets-cms)
- [Vercel](https://vercel.com/)

## Getting Started

First, download the repo:

```bash
git clone https://github.com/Andrews-McMeel-Universal/puzzle-society_ui.git
```

Make sure you have these installed:

- [NVM & Node](https://github.com/creationix/nvm)
  - Install Node v15.7.0 or above, preferably the version listed in the `.nvmrc` file
- [Yarn](https://yarnpkg.com/)

Basic commands to get things running, see "scripts" in the `package.json` for all options:

- Install dependencies: `yarn install`
- Start app for development: `yarn dev`
- Build and start app for production: `yarn build && yarn start`

Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

> If you need to use or test data from Google Sheets, contact [@ctrble](https://github.com/ctrble) to get set up with the environment variables.

## Updating Content and Pages

Almost all of the site's text is kept in Markdown (`.md`) files, with the exception of our Organizer and Mentor bios, which are stored in a Google Sheet.

There are two different types of pages on the site, "dynamic" and "static". Dynamic pages are basic text/inline image content pages but are easy to add and change as needed. Static pages are more advanced – they have special content, functionality, and layouts – and require more setup to add, remove, or rename either the pages or the content within, but otherwise updating the content is done the same way as the dynamic pages.

> A note on routing - Next.js handles the routing through `src/pages/`, read their [routing documentation](https://nextjs.org/docs/routing/introduction) for more information on how that works. It's all directory/filename based, so we use consistent names for the source content to make it easier to match up that content to the right page.

### Dynamic Pages

The content for dynamic pages is stored in `public/content/dynamic/`. The layout and functionality of all dynamic pages is controlled by `src/pages/[page].jsx`.

Each dynamic `.md` file provides whatever content will be on that page, and the filename will be the slug for that page on the site. For example, `public/content/dynamic/resources.md` will automatically be available to visit at `[base url]/resources`.

- To **update** a dynamic page, simply find the corresponding `.md` file and make whatever changes are needed.

- To **create** a new dynamic page, add a new `.md` file in the dynamic directory and add content. _It's often easiest to copy, edit, and rename an existing `.md` file._

  - Include necessary frontmatter for the page (see below).
  - You may also need to add the page to the site's navigation menu (see below).

- To **remove** an existing dynamic page, delete its `.md` file and, if needed, remove it from the navigation menu.

### Static Pages

The content for static pages is stored in separate directories in `public/content/static/`. The layout and functionality for static pages are controlled by a matching `.jsx` file in `src/pages/`.

Within each page directory is an `intro.md` file, which provides essential info (via frontmatter) and page copy. Some static pages have special sections, and the other files in that page's directory handle that unique content (such as `../static/home/events.md`). This allows for greater control over the layout of that page in its `.jsx` file.

- To **update** a dynamic page, simply find the corresponding `.md` file and make whatever changes are needed.

- To **create** a new static page, you will need to add a directory within `public/content/static` and add content. _This shouldn't need to happen very often, and should only be done by someone familiar with React and Next.js. If you want to add a new static page to the site, it's recommended to add a dynamic page instead because it's much simpler than setting up a static one, and the same goes for removing a static page._

  - Include necessary frontmatter for the page (see below).
  - You may also need to add the page to the site's navigation menu (see below).
  - Create any needed supplemental `.md` files.
  - Create the necessary `.jsx` file/s and define the layout, content sources, and any other special functionality.

- To **remove** a new static page, follow the reverse procedure for creating a static page.

### Frontmatter

### Navigation Menu

### Images

## Submitting Changes
