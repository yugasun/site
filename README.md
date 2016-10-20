# Serverless Site

Uses react, react-router, redux and [Phenomic](https://github.com/MoOx/phenomic) under the hood.

This site is 100% serverless! Wooooooo!

- [See the site](https://serverless.com/)
- [Contribute to the blog](https://github.com/serverless/blog)
- [Contribute to the docs](https://github.com/serverless/serverless)

# Quick Start

**1. Clone down the site**
Clone down the site:

```bash
git clone git@github.com:serverless/site.git
```

**2. Install site dependencies**

```bash
npm install
```

**3. Run site on your local computer**

```bash
npm start
```

Open your browser to http://localhost:3333

**4. Making edits**

When you start the site with `npm start` it will start watching for file changes and they will be automatically refreshed in the site on `http://localhost:3333`

**Blog edits:** To make edits to blog posts, edit the files in `./serverless-blog/posts`

**Doc edits:** To make edits to framework docs, edit the files in `./serverless/docs`

To make edits to other pages, edit the markdown in `./content`

**Custom Page edits:**

Some pages have custom designs/layouts and the html might need to be altered. That content can be found in `./src/layouts` or `./src/pages`

# Building

**3. Build for production**

```bash
$ npm run buildprod
```
---

## Publishing Updates to Serverless.com

We are using [netlify](http://netlify.com) to distribute the site.

When pushing up to a new branch, netlify will automatically publish that change to a unique subdomain.

The `master` branch is the live site. Never push directly to the master branch!
