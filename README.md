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

# Editing Site Content

When you start the site with `npm start` it will start watching for file changes and they will be automatically refreshed in the site on `http://localhost:3333`

### **Blog edits:**

To make edits to blog posts, edit the files in `./serverless-blog/posts` (this directory is added on `npm i`)

### **Doc edits:**

To make edits to framework docs, edit the files in `./serverless/docs` (this directory is added on `npm i`)

### Editing other pages

To make edits to other pages, edit the markdown in `./content`

Some pages have custom designs/layouts and the html might need to be altered. That content can be found in `./src/layouts` or `./src/pages`

# Publishing Site Updates

**1. Test the build command locally**

```bash
$ npm run buildprod
```

**2. If build command succeeds, push up your changes to a new branch**

We are using [netlify](http://netlify.com) to distribute the site.

When pushing up to a new branch, netlify will automatically publish that change to a unique subdomain, like: `https://[LowerCaseBranchName]--serverless.netlify.com`

For example the branch `updateDocsSetup` published to `https://updatedocssetup--serverless.netlify.com`

Note: The `master` branch is the live site. **Never push directly to the master branch!**

**3. Review your live site changes**

If everything looks good on your unique netlify subdomain, you can go ahead and merge your branch to master on github.

Merging branches into master will trigger a site rebuild and `serverless.com` will be updated
