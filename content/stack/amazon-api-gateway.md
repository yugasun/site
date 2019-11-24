---
title: 'Amazon API Gateway - The Ultimate Guide'
description: 'Considering Amazon API Gateway? Read this guide before you get started. We cover how it works with other AWS services, drawbacks, benefits, pricing, limits & more.'
layout: Learn
useLearnNav: false
---

Looking to learn more about what Amazon API Gateway is, the use cases it works best for, and its limitations? We’ve got you covered.

In this guide, we’ll walk you through all the details of API Gateway. We’ll show you how it can be used with the [Serverless Framework](https://serverless.com/) and give you a list of resources should you want to learn even more.

<br/>
<h4>Table of Contents</h4>

* [What is Amazon API Gateway?](#what)
* [How does Amazon API Gateway work?](#how-does-api-gateway-work)
* [Why is Amazon API Gateway an essential part of the Serverless ecosystem?](#architecture)
* [Integrations with other AWS services](#integrations)
* [How does it work with Serverless Framework?](#serverless)
* [Benefits](#benefits)
* [Drawbacks](#drawbacks)
* [Use Cases](#use-cases)
* [Limits](#limits)
* [Pricing](#pricing)
* [Get started](#resources)

<br/>
<br/>

<h3 id='what'>What is Amazon API Gateway?</h3>

[Amazon API Gateway](https://aws.amazon.com/api-gateway/) is a managed service that allows developers to define the HTTP endpoints of a [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) or a [WebSocket API](https://en.wikipedia.org/wiki/WebSocket) and connect those endpoints with the corresponding backend business logic. It also handles authentication, access control, monitoring, and tracing of API requests.

Many Serverless applications use Amazon API Gateway, which conveniently replaces the API servers with a managed serverless solution.

<br/>
<br/>

<h3 id='how-does-api-gateway-work'>How does API Gateway work?</h3>

API Gateway sits between the backend services of your API and your API’s users, handling the HTTP requests to your API endpoints and routing them to the correct backends. It provides a set of tools that help you manage your API definitions and the mappings between endpoints and their respective backend services. It can also generate API references from your definitions and make them available to your users as API documentation.

API Gateway integrates with many other AWS services like [AWS Lambda](https://serverless.com/aws-lambda/), [AWS SNS](https://aws.amazon.com/sns/), [AWS IAM](https://aws.amazon.com/iam/), and [Cognito Identity Pools](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html). These integrations allow for fully managed authentication and authorization layers, as well as detailed metrics and tracing for API requests.

![The Amazon API Gateway graphical user interface.](https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/guides/amazon-api-gateway/amazon-api-gateway-guide-1.png)

The service’s graphical user interface allows you to sketch out the API structure and view the API flows in graphical form after they’ve been created.

While the user interface is a good way to try out API Gateway, we recommend creating your API structure in code, for example, using the [Serverless Framework](https://serverless.com/framework/docs/providers/aws/events/apigateway/#api-gateway)’s [built-in API Gateway event](https://serverless.com/framework/docs/providers/aws/events/apigateway/#api-gateway).

<br/>
<br/>

<h3 id='architecture'>Why is API Gateway an essential part of the Serverless ecosystem?</h3>

Within the Serverless ecosystem, API Gateway is the piece that ties together Serverless functions and API definitions. Being able to trigger the execution of a Serverless function directly in response to an HTTP request is the key reason why API Gateway is so valuable in Serverless setups: it enables a truly serverless architecture for web applications. When using API Gateway together with other AWS services, it’s possible to build a fully functional customer-facing web application without maintaining a single server yourself.

This brings the advantages of the serverless model—scalability, low maintenance, and low cost due to low overhead—to mainstream web applications.

<br/>
<br/>

<h3 id='integrations'>How does API Gateway integrate with other AWS services?</h3>

Many AWS services support integration with Amazon API Gateway, including:

- **AWS Lambda:** run Lambda functions to generate HTTP API responses.
- **AWS SNS:** publish SNS notifications when an HTTP API endpoint is accessed.
- **Amazon Cognito:** provide authentication and authorization for your HTTP APIs.

API Gateway supports direct integrations that can be configured in the API Gateway user interface (or via the API Gateway’s own API) for the following actions:

- Invoking an AWS Lambda function.
- Invoking another HTTP endpoint, with or without [VPC Link](https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html).
- Making an HTTP call against the API of any AWS service that provides an HTTP API.
- Returning a [mock response](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-mock-integration.html) generated within API Gateway without calling out to other services.

![The built-in Amazon API Gateway integrations include Lambda functions, HTTP endpoints, and other AWS services.](https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/guides/amazon-api-gateway/amazon-api-gateway-guide-2.png)

You can also connect an HTTP endpoint created in API Gateway with a service that doesn’t offer a native integration. Perhaps the best way to achieve this is to set up an AWS Lambda function that contains all the business logic for the integration and then connect that Lambda function with an HTTP endpoint in API Gateway.

<br/>
<br/>

<h3 id='serverless'>How does API Gateway work with the Serverless Framework?</h3>

The [Serverless Framework](https://serverless.com/) uses a [Lambda Proxy integration](https://serverless.com/framework/docs/providers/aws/events/apigateway/#lambda-proxy-integration) to make API Gateway events easily available to your Serverless functions. For example, for a simple HTTP API you would specify the API Gateway endpoint that you want attached to your Serverless function right in the `serverless.yml` file:

```yaml
    # serverless.yml

    functions:
      index:
        handler: handler.hello
        events:
          - http: GET hello # this is the API Gateway event
```

In this example, the entire payload from the API request will be passed into the `handler.hello` handler and made available to your Serverless function.

The Serverless framework supports functionality such as using [custom authorizers](https://serverless.com/framework/docs/providers/aws/events/apigateway#http-endpoints-with-custom-authorizers) in your `serverless.yml` file, setting up [usage plans](https://serverless.com/framework/docs/providers/aws/events/apigateway#setting-api-keys-for-your-rest-api) for your APIs, [](https://serverless.com/framework/docs/providers/aws/events/apigateway#request-schema-validators)[validating the request schema](https://serverless.com/framework/docs/providers/aws/events/apigateway#request-schema-validators), and much more.

Check out the [API Gateway event docs](https://serverless.com/framework/docs/providers/aws/events/apigateway/) for more examples of how to use Amazon API Gateway with the Serverless framework.

<br/>
<br/>

<h3 id='benefits'>Benefits of Amazon API Gateway</h3>

Using API Gateway to create HTTP APIs in AWS offers four main benefits:

**Map HTTP requests to specific functions in a Serverless application viaanAPI Gateway event**. Connecting HTTP endpoints to individual functions is straightforward with API Gateway, obviating the need for a dedicated API server.

**Map WebSocket events to Serverless functions**. If you are building a WebSocket API, API Gateway also lets you map its events to a Serverless function. This works great for real-time functionality like in-app updates and notifications.

**Use multiple microservices to serve the same top-level API**. API Gateway makes it easy to have different Serverless functions serving different parts of your API. This means you can better encapsulate your functionality into each function and clearly separate the business logic of different parts of your API. Another benefit here is that you can transparently replace the function called by a given API request—the users won’t notice any change on the API layer.

**Save time with integrations: authentication, developer portal, CloudTrail, CloudWatch**. API Gateway allows you to implement a fully managed authentication and authorization layer by using Amazon Cognito and Lambda custom authorizers without running your own auth systems. By using API Gateway you also get access to the developer portals that are generated automatically from your API schemas. In addition, CloudTrail, CloudWatch and X-RAY all integrate with API Gateway, simplifying the profiling and debugging of API requests.

These benefits boil down to reducing your time to market for new HTTP APIs and increasing developer productivity, while also ensuring that the solutions your teams are building stay scalable.

<br/>
<br/>

<h3 id='drawbacks'>Drawbacks to Amazon API Gateway</h3>

There are a few caveats when using API Gateway that you should be aware of before using it in production. The main downside is added latency in your APIs: in certain cases, the service can add costly milliseconds to your response times. This issue is exacerbated by the fact that you can’t fine-tune API Gateway—it’s a managed service, and AWS doesn’t allow you to tweak the performance parameters.

That said, the impact on latency won’t be visible unless you are building truly low-latency applications or are combining many API layers. There aren’t many alternatives to API Gateway besides running your own API servers; running your own servers might well be worth it if you’re heading into latency-sensitive territory.

<br/>
<br/>

<h3 id='use-cases'>What is API Gateway good for?</h3>

The main use case for Amazon API Gateway is in building serverless HTTP APIs. API Gateway stands in as your API server: managing the schema of your HTTP API, connecting each endpoint to the right backend service, and handling the concerns like authentication and throttling.

Amazon API Gateway is probably not the right choice if you’re looking for an ultra-low-latency HTTP request router or if you want a lot of control over how API requests are processed (in these cases, a custom solution may perform better), or if you are building a GraphQL API and would like to manage its schema (check out [AWS AppSync](https://serverless.com/aws-appsync/) for GraphQL APIs).

<br/>
<br/>

<h3 id='limits'>Amazon API Gateway limits</h3>

API Gateway implements [several usage](https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html) [limits](https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html). Most of these limits can be increased by contacting AWS support, but there are a few limits that can’t be changed:

- **Regional APIs:** you can only have 600 regional APIs per AWS account. That’s a lot; most teams won’t reach this limit.
- **Integration timeouts:** the shortest possible timeout for an integration in API Gateway is 50 ms, and the longest is 29 seconds.
- **Payload size:** the maximum payload size that can be returned by an API endpoint is 10MB. If you’re planning to return more data per request than that, you may need to split up the payload into multiple pages.

In each of these cases, it should be quite possible to build your APIs with API Gateway without running into these limits:

- It’s rare that an AWS account would have 600+ API definitions, unless a large number of developers end up creating their own test API schema. The total API count limitation can be addressed by creating multiple AWS accounts for different groups within your organization.
- If you’re looking for ultra-low or ultra-high latency for your API endpoints, you may want to create a separate subsystem to manage the latency-sensitive portions of your API and expose the management of those parts as its own API.
- If you reach the payload size limit, you may be trying to include large files in your API responses. In that case you can use Amazon S3, AWS’ blob storage service, to store large files and reference them using S3 URLs in your API responses.

<br/>
<br/>

<h3 id='pricing'>Amazon API Gateway pricing</h3>

The AWS free tier includes one million (1M) REST API calls per month for the first 12 months of each new AWS account. The WebSocket API free tier is 1M messages and 750,000 connection minutes per month, also for the first 12 months.

After the free tier period, the following pricing applies:

| **Aspect**                       | **Pricing**                                                         |
| -------------------------------- | ------------------------------------------------------------------- |
| REST API calls                   | from $1.51/1M calls to $3.50/1M calls                               |
| REST API caching                 | from $0.02/hour to $3.80/hour based on the amount of caching memory |
| WebSocker API messages           | from $0.80 to $1.00/1M messages                                     |
| WebSocket API connection minutes | $0.25/1M connection minutes                                         |

**Example cost calculation**
Let’s assume you have a REST API with 1,000 users, and each user makes 10,000 API requests per month on average. For this level of usage you’ll pay:

Total requests: 1,000 x 10,000 = 10,000,000 requests/month
Total cost: 10 x $3.50/1M requests = $35.00/month.

If the number of users rises 10x to 10,000, while the average number of API requests stays the same at 10,000/month/user, you’ll end up paying $350.00/month for API Gateway.

Keep in mind that these are just the API Gateway service costs. Of course, you’ll also be charged for the AWS Lambda compute that actually generates your API responses. Check out [the](https://serverless.com/aws-lambda/#pricing)[se](https://serverless.com/aws-lambda/#pricing) [example cost calculations for AWS Lambda](https://serverless.com/aws-lambda/#pricing) to see what your AWS Lambda costs might be when providing a backend for an API as in this example.

<br/>
<br/>

<h3 id='resources'>Getting started with Amazon API Gateway and Serverless Framework</h3>

These resources will help you learn more about using API Gateway with the Serverless Framework:

- [Serverless Framework API Gateway event documentation](https://serverless.com/framework/docs/providers/aws/events/apigateway/)
- [Setting up a custom domain name for Lambda and API Gateway with Serverless Framework](https://serverless.com/blog/serverless-api-gateway-domain/): Serverless Blog
- [Deploy multiple micro-services under the same domain](https://serverless.com/blog/api-gateway-multiple-services/): Serverless Blog
- [The AWS Lambda Ultimate Guide](https://serverless.com/aws-lambda/): Serverless Framework