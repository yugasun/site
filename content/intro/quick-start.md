---
title: "Quick Start"
description: "Getting started with the Serverless Framework"
layout: Intro
---

# Table of Contents:

- [Intro](#intro)
- [Installing Serverless](#installing-serverless)
- [Creating a new service](#creating-a-new-service)
- [Deploying your first service](#deploying-your-first-service)
- [Understanding the event model](#understanding-the-event-model)
- [Adding a database resource](#adding-a-database-resource)
- [Debugging your application with logs](#debugging-your-application-with-logs)
- [Viewing your service metrics](#viewing-your-service-metrics)
- [Cleaning up and next steps](#cleaning-up-and-next-steps)

## Intro 

This quick start will take you through the basics of using the Serverless Framework.

We'll cover:
- how to create and deploy a service with an HTTP endpoint
- how the serverless event model works (and we'll add some dynamic logic to our endpoint)
- how to use the Framework to provision a database that will persist state between requests
- some basic operations with Serverless

The quick start is aimed at teaching you the key components of Serverless. If you would prefer a walkthrough to build a project, check out these tutorials:

- [Create a Node REST API with Express.js](https://serverless.com/blog/serverless-express-rest-api/)
- [Make a Serverless GraphQL API](https://serverless.com/blog/make-serverless-graphql-api-using-lambda-dynamodb/)
- [Create a Python REST API with Flask](https://serverless.com/blog/flask-python-rest-api-serverless-lambda-dynamodb/)

## Installing Serverless

First, you'll need to install the Serverless Framework. This requires you to have NodeJS & NPM installed.

You can install the Framework with NPM:

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

Look to the `functions` block as it's the core of a Serverless application. A function is an entrypoint to your code that will be triggered upon specified events.

There's one function listed -- `helloWorld`. It has the a `handler` property describes the path to the handler file and the name of the function to be triggered within that file.

Further, it has an `events` property with an array of event subscriptions. In this example, we've configured an `http` event which is triggered on a `GET` request to `/hello-world`. You can configure a [number of different events](https://serverless.com/framework/docs/providers/aws/events/), including [HTTP requests](https://serverless.com/framework/docs/providers/aws/events/apigateway/), [messages in pub/sub topics](https://serverless.com/framework/docs/providers/aws/events/sns/), [scheduled tasks](https://serverless.com/framework/docs/providers/aws/events/schedule/), [object storage notifications](https://serverless.com/framework/docs/providers/aws/events/s3/), or [record batches in an event log](https://serverless.com/framework/docs/providers/aws/events/streams/).

**Functions and Events.** These are the building blocks of Serverless applications. You write the code to be executed and the events that will trigger that code.

Finally, look at the `handler.js` file:

```javascript
'use strict';

module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};
```

We have our defined `helloWorld` function. It implements the function signature from AWS Lambda which includes an `event`, `context`, and a `callback` function. Our function assembles a response with a `statusCode`, `headers`, and a response `body`. 

We'll dig deeper into the function itself later on.

## Deploying your first service

We have a service. Our configuration is defined in `serverless.yml`. Our function is defined in `handler.js`. It's time to make it live.

Deploy your service with `sls deploy`:

```bash
$ sls deploy
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
.....
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (404 B)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..................................
Serverless: Stack update finished...
Service Information
service: hello-world
stage: dev
region: us-east-1
stack: hello-world-dev
api keys:
  None
endpoints:
  GET - https://li6gy63jl6.execute-api.us-east-1.amazonaws.com/dev/hello-world
functions:
  helloWorld: hello-world-dev-helloWorld
```

Your service is deployed! In the Service Information at the bottom, there's an HTTP endpoint to access your function. Copy and paste that into your browser. I'm using Firefox, which has a nice viewer for JSON responses:

<img width="892" alt="Hello World request" src="https://user-images.githubusercontent.com/6509926/33442664-518bb2be-d5bb-11e7-96a7-6a9c5dbeae30.png">

In 5 minutes and 40 lines of code, we have an active HTTP endpoint accessible from any browser that scales automatically and is billed on a per-request basis.

Amazing.

## Understanding the event model

Time to dig a little deeper into the event model of serverless compute. In the example above, we're using AWS Lambda. As I showed when looking at `handler.js`, we need to implement a function with a specific signature. This includes `event` and `context` arguments, as well as a `callback` function when using Node.

The `event` object is important to understand. It will have the dynamic content of your invocation -- what was invoking it? What was the payload?

In our `helloWorld` function, we returned our full `event` in the response to make it easy to inspect. Notice that the event includes a lot of information like the HTTP method (`GET`), the various headers, and other parameters.

Let's make a new request but add a querystring to the request. In your browser, paste your endpoint and add `?name=Yoda`:

<img width="891" alt="Yoda query string" src="https://user-images.githubusercontent.com/6509926/33456197-46403802-d5e4-11e7-95f5-84df2a08a106.png">

The querystring shows up in our event under the `querystringParameters` key.

Let's add a second Lambda function that is dynamic based on the value of a querystring. In your `handler.js` file, add the following function below the `helloWorld` function:

```javascript
module.exports.helloName = (event, context, callback) => {
  let name = 'stranger';
  if (event.queryStringParameters && event.queryStringParameters.name) {
    name = event.queryStringParameters.name;
  }
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: `Hello, ${name}!`
    })
  };

  callback(null, response);
}
```

This function will look for a `name` querystring parameter and return it in the response.

Let's add the new function to our `serverless.yml` too. Add the following code to your `functions` block:

```yml
  helloName:
    handler: handler.helloName
    events:
      - http:
          path: hello-name
          method: get
          cors: true
```

Then, run `sls deploy` to deploy your new endpoint.

Once it's live, hit your new `/hello-name` endpoint with a `?name=Leia` parameter:

<img width="870" alt="Leia query string" src="https://user-images.githubusercontent.com/6509926/33458116-8d412472-d5ea-11e7-8876-e5fcced4f1f7.png">

You can play around with different parameters to see it work. You can also play with different aspects of the `event` object.

In this section, we learned about the Lambda event model for HTTP events. We found out how to use the event object inside our function for dynamic behavior.

## Adding a database resource

Simple endpoints are fun, but interesting applications almost always require some sort of state. In this section, we'll learn how to provision a DynamoDB table with the Serverless Framework to be used in your Serverless application. Then, we'll implement two endpoints -- one to store state and one to retrieve it.

First, let's provision a database. In your `serverless.yml`, you can provision infrastructure using the `resources` key. When using the AWS provider, you provision these resources using [CloudFormation](https://aws.amazon.com/cloudformation/).

We'll provision a DynamoDB table as it's a Serverless-friendly database service due to it's managed scaling, low maintenance, and pricing model. It's a NoSQL database with a key-object model.

When provisioning a DynamoDB table, you need to specify a hash key to uniquely identify each key. We'll use a hash key of `name`

## Debugging your application with logs
## Viewing your service metrics
## Cleaning up and next steps
