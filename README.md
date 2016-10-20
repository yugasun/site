# Serverless Site

Uses react, react-router, redux and [Phenomic](https://github.com/MoOx/phenomic) under the hood.

This site is 100% serverless! Wooooooo!

- [See the site](https://serverless.com/)
- [Contribute to the blog](https://github.com/serverless/blog)
- [Contribute to the docs](https://github.com/serverless/serverless)

# Quick Start

**1. Install dependencies**

```bash
npm install
```

**2. Run site locally**

```bash
npm start
```

Open your browser to http://localhost:3333

**3. Making edits**

To make edits to blog posts, edit the files in `./serverless-blog/posts`

To make edits to framework docs, edit the files in `./serverless/docs`

To make edits to other pages, edit the markdown in `./content` (except for `./content/blog`, and `./content/framework/docs`)

Some pages have custom designs/layouts and the html might need to be altered. That content can be found in `./src/layouts` or `./src/pages`

The `npm start` command also watches for file changes and they will be automatically refreshed in the site on `http://localhost:3333`

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
