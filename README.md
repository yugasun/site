# Serverless Site

Uses react, react-router, redux and [Phenomic](https://github.com/MoOx/phenomic) under the hood.

This site is 100% serverless! Wooooooo!

- [See the site](https://serverless.com/)
- [Contribute to the blog](https://github.com/serverless/blog)

# Setup

**1. Install dependencies* *

```bash
$ npm install
```

Next you will need to change the values in `src/_config.js` with your correct credentials, if you are setting up a different site.

**2. Run development server locally**

```bash
$ npm start
```

**3. Build for production**

```bash
$ npm run buildprod
```

---

## Working with content

The site content lives in the `/content` and the `src/layouts` or `src/pages` folders.

For live editing the blog or docs, you will want to edit those files in the `serverless` and `serverless-blog` directory

## Publishing Updates to Serverless.com

We are using [netlify](http://netlify.com) to distribute the site. It pushes any changes made to the `master` branch to the live serverless.com site.

So, whenever making changes to the site, it's important to do those on branches and submit a pull request for us to merge into master.

Make sure `npm run build` works locally or the build in netlify's CI/CD will fail and the updates won't be visible on the site.
