<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Ben" class="img" src="./src/assets/images/ben-avatar.png" width="160" />
  </a>
</p>
<h1 align="center">
  Ben Eisenberg portfolio
</h1>

## 🛠 Setup

This project is set up using [TypeScript](https://www.typescriptlang.org/) as a programming language in a [Gatsby](https://www.gatsbyjs.org) framework with [Sanity](https://www.sanity.io/) as a content management system.

1. **Clone the repo to your local system.**

First fork the repo to your own github account, then hit **clone or download** and copy the HTTPS url. Then go to your terminal and clone the repository.

```shell
$ git clone https://github.com/<your-github-account>/beneisenberg.git
```

2. **Setup Sanity**

Sanity.io is a platform for structured content that comes with an open source editor that you can customize with React.js. It's a fully customizable, headless CMS that uses [GraphQL](https://graphql.org/) as aquery language for your API.

You'll have to install Sanity globally and create an account or log in.

In the terminal run

```shell
  $ npm install -g @sanity/cli && sanity login
```

Get your `token` to connect your Gatsby app to the Sanity backend
In the terminal run

```shell
  $ sanity bedug --secrets
```

Copy the Authentication `Auth token`, api `projectId` and `dataset` and add them to your `.env` file in the root directory of this project.

```
  SANITY_PROJECT_ID=<api-projectid>
  SANITY_DATASET=<api-dataset>
  SANITY_TOKEN=<auth-token>
```

Navigate into the sanity directory and start it up.

```shell
  $ cd beneisenberg/sanity/
  $ sanity start
```

Now you'll find and create content using the GUI at http://localhost:3333/desk

3. **Setup Gatsby**

[Gatsby](https://www.gatsbyjs.org/) is a free and open source framework based on React that helps developers build blazing fast websites and apps

Navigate into your new site’s directory and download `node_modules`.

```shell
  $ cd beneisenberg/
  $ yarn
```

Once node modules are installed, start up the app.

```shell
  $ gatsby develop
```

Open the source code and start editing!

Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

Open the `beneisenberg` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules/
    ├── sanity/
    ├── src/
    ├── .env
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    └── yarn.lock

1. **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1. **`/sanity`**: This directory contains all the configuration for your sanity project.

1. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1. **`.env`**: This file contains environment variables. This file does not get pushed to github, so you have to create it if it doesn't exist.

1. **`.eslintc.json`**: This file contains `eslint` configuration.

1. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1. **`.prettierignore`**: This is a file for [Prettier](https://prettier.io/). (see below prettierrc) Tells prettier which files to ignore.

1. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1. **`LICENSE`**: Gatsby is licensed under the MIT license.

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how yarn knows which packages to install for your project.

1. **`README.md`**: A text file containing documentation and information about the project.

1. **`tsconfig.json`**: This is a configuration file for TypeScript.

1. **`yarn.lock`** This is an automatically generated file based on the exact versions of your yarn dependencies that were installed for your project. **(You won’t change this file directly).**

## 💫 Deploy

### **Sanity**

Run `sanity graphql deploy` to use new config for graphQL.

```shell
  $ cd beneisenberg/sanity/
  $ sanity graphql deploy
```

### **Gatsby**

[Gatsby’s build command](https://www.gatsbyjs.org/docs/overview-of-the-gatsby-build-process/) should be run when you’ve added the finishing touches to your site and everything looks great. gatsby build creates a version of your site with production-ready optimizations like packaging up your site’s config, data, and code, and creating all the static HTML pages that eventually get rehydrated into a React application.

In the terminal run `gatsby build`.

```shell
  $ cd beneisenberg/sanity/
  $ sanity graphql deploy
```

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

## Extra Information

- Gatsby quick start
  (https://www.gatsbyjs.org/docs/quick-start)
- Linking Gatsby to Sanity
  (https://www.sanity.io/help/graphql-beta)
