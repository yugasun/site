# [Serverless Site](https://serverless.com/)

This site is 100% serverless! :tada:

Built using react and [gatsby](https://github.com/gatsbyjs/gatsby) this site is statically built and hosted on the [netlify](https://www.netlify.com/) CDN for 🔥blazingly fast performance and scale.

The [docs](https://github.com/serverless/serverless/tree/master/docs), and [blog](https://github.com/serverless/blog) are hosted on github, so if you see a typo or error feel free to contribute back!

API calls are made with the [serverless framework](https://github.com/serverless/serverless/tree/master/docs) pinging AWS lambda functions. User Authentication is handled via [Auth0](https://auth0.com). Site search handled by [Algolia](https://community.algolia.com/docsearch/).

- [See the site](https://serverless.com/) :point_right: [View the SRC Luke](https://github.com/serverless/site/tree/master/src)
- [Check out the blog](https://serverless.com/blog) :point_right: [Contribute to the blog](https://github.com/serverless/blog)
- [Read the docs](https://serverless.com/framework/docs) :point_right: [Contribute to the docs](https://github.com/serverless/serverless)

# Quick Start

**1. Clone down the site**

```bash
git clone git@github.com:serverless/site.git
```

**2. Install site dependencies**

```bash
yarn
```

[Install Yarn if you haven't already](https://yarnpkg.com/en/docs/install#mac-stable)

**2. Run site on your local computer**

```bash
yarn dev
```

Open your browser to http://localhost:8000

Run `yarn syncProd` or `yarn syncLocal` to pull in the blog and docs repos (if the postinstall command doesn't run for you). These 2 commands pull in the external content sources the site uses.

# Directory Structure

Refer [directory structure doc](./DIRECTORY_STRUCTURE.md)

# Editing Site Content

Fork the site and submit a pull request!

When you start the site with `yarn dev` it will start watching for file changes and they will be automatically refreshed in the site on `http://localhost:8000`

### **Blog edits:**

To make edits to blog posts, edit the files in `./serverless-blog/posts` (this directory is added on `yarn`)

### **Doc edits:**

To make edits to framework docs, edit the files in `./serverless/docs` (this directory is added on `yarn`)

### Editing other pages

To make edits to other pages, browse through the `./pages` directory, find the file with the name as the url of the page you want to edit. Then, open the file and edit the content.

For example, if you want to edit the contents of `/framework`, then look at `framework.js` inside `./pages` directory and edit.

### Developer Notes

Write react components with the components from `serverless-design-system`. Do not use basic html tags like `div`, `span`, `h1` and etc. Use serverless-design-system components instead. To know more about the `design-system` components, refer the docs at design-system-serverless.netlify.com.

If you dont see a component in `design-system` to achieve the design needed, then you can write a new component with styled-components. For example: If you want to set a CSS property `user-select` to `none` for a Box component from `design-system`, then you can write a new component like this.

```
import styled from 'styled-components'
export default styled(Box)`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
```

# Publishing Site Updates

**1. Test the build command locally**

```bash
yarn build
```

**2. If build command succeeds, push up your changes to a new branch**

We are using [netlify](http://netlify.com) to distribute the site.

When pushing up to a new branch, netlify will automatically publish that change to a unique subdomain, like: `https://[lowercase-branch-name]--serverless.netlify.com`

For example the branch `updateDocsSetup` published to `https://updatedocssetup--serverless.netlify.com`

Successful deploys are published to the [notifications slack channel](https://serverlessteam.slack.com/archives/notifications)

**Note: The `master` branch is the live site. Never push directly to the master branch!**

**3. Review your live site changes**

If everything looks good on your unique netlify subdomain, you can go ahead and merge your branch to master on github.

Merging branches into master will trigger a site rebuild and `serverless.com` will be updated.
