---
title: "Quick Start"
description: "Getting started with the Serverless Framework"
layout: Intro
---

This quick start will take you through the basics of using the Serverless Framework. We'll learn how to create and deploy a service with an HTTP endpoint. Then, we'll understand how the serverless event model works and add some dynamic logic to our endpoint. Next, we'll learn how to provision a database with the Framework to persist state between requests. Finally, we'll look at some basic operations with Serverless.

The quick start is aimed at teaching you the key components of Serverless. If you would prefer a walkthrough to build a project, check out these tutorials:

- [Create a Node REST API with Express.js](https://serverless.com/blog/serverless-express-rest-api/)
- [Make a Serverless GraphQL API](https://serverless.com/blog/make-serverless-graphql-api-using-lambda-dynamodb/)
- [Create a Python REST API with Flask](https://serverless.com/blog/flask-python-rest-api-serverless-lambda-dynamodb/)

# Table of Contents:

- [Installing Serverless](#installing-serverless)
- [Creating a new service](#creating-a-new-service)
- [Deploying your first service](#deploying-your-first-service)
- [Understanding the event model](#understanding-the-event-model)
- [Adding a database resource](#adding-a-database-resource)
- [Debugging your application with logs](#debugging-your-application-with-logs)
- [Viewing your service metrics](#viewing-your-service-metrics)
- [Cleaning up and next steps](#cleaning-up-and-next-steps)


## Installing Serverless

First, you'll need to install the Serverless Framework. This requires you to have NodeJS & NPM installed.

Installing the Framework is simple:

```bash
$ npm install -g serverless
```

After the install completes, you'll have an executable that you can invoke with the command `serverless` or the shorthand `sls`. 

Check the version to make sure it's properly installed:

```bash
$ sls version
1.24.1
```

If you see a version listed, your install was successful!

To complete the actions in this tutorial, you'll need your environment configured with AWS credentials. If you haven't done that already, follow the steps in our [provider onboarding guide](https://serverless.com/provider-setup).

## Creating a new service

With the Framework installed, it's time to create our service. The built-in `create` command can bootstrap a service from a template.

We'll use the `hello-world` template to get started:

```bash
$ sls create --template hello-world --path hello-world
Serverless: Generating boilerplate...
Serverless: Generating boilerplate in "/Users/alexdebrie/scratch/hello-world"
 _______                             __
|   _   .-----.----.--.--.-----.----|  .-----.-----.-----.
|   |___|  -__|   _|  |  |  -__|   _|  |  -__|__ --|__ --|
|____   |_____|__|  \___/|_____|__| |__|_____|_____|_____|
|   |   |             The Serverless Application Framework
|       |                           serverless.com, v1.24.1
 -------'

Serverless: Successfully generated boilerplate for template: "hello-world"
```

Let's change into our directory and look at the files:

```bash
$ cd hello-world
$ ls
handler.js	serverless.yml
```

The `serverless.yml` contains our Serverless configuration for the project. It gives you a way to describe your infrastructure as code and keep it directly with your project.

The contents of `serverless.yml` are (comments removed):

```yml
service: hello-world

provider:
  name: aws
  runtime: nodejs6.10

functions:
  helloWorld:
    handler: handler.helloWorld
    events:
      - http:
          path: hello-world
          method: get
          cors: true
```




## Deploying your first service
## Understanding the event model
## Adding a database resource
## Debugging your application with logs
## Viewing your service metrics
## Cleaning up and next steps
