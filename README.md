# Serverless Site

Uses react, react-router, redux and [Phenomic](https://github.com/MoOx/phenomic) under the hood.

This site is 100% serverless! Wooooooo!

# Setup

## Install dependencies

```console
$ npm install
```

Next you will need to change the `.env.sample` to `.env` and input the correct credentials.

Serverless folks our credentials are in 1password secure note in Shared titled: 'Site .env settings'

Once the .env file is configured with the correct API keys you can run the local site.

## Run development server

```console
$ npm start
```

## Build for production

```console
$ npm run build
```

---

## Publishing Updates to Serverless.com

We are using [netlify](http://netlify.com) to distribute the site. It pushes any changes made to the `master` branch to the live serverless.com site.

So, whenever making changes to the site, it's important to do those on branches and submit a pull request for us to merge into master.

Make sure `npm run build` works locally or the build in netlify's CI/CD will fail and the updates won't be visible on the site.
