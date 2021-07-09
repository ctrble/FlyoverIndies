![Vercel](https://img.shields.io/github/deployments/ctrble/FlyoverIndies/production?label=vercel&logo=vercel&logoColor=white)
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

Download the repo:

```bash
git clone https://github.com/Andrews-McMeel-Universal/puzzle-society_ui.git
```

### Developing Locally

You will need:

- [NVM & Node](https://github.com/creationix/nvm)
  - Install Node v15.7.0 or above, preferably the version listed in the `.nvmrc` file
- [Yarn](https://yarnpkg.com/)

Basic commands, see `package.json` for all options:

- Install dependencies: `yarn install`
- Start app for development: `yarn dev`
- Start app for production: `yarn build && yarn start`
- Open app in browser: `open http://localhost:3000/`

> If you need to use or test data from Google Sheets, contact [@ctrble](https://github.com/ctrble) to get set up with the environment variables.
