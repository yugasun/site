---
title: 'AWS AppSync - The Ultimate Guide'
description: 'Kickstart your understanding of AWS AppSync with this guide. We cover how it works, its use-cases, drawbacks, benefits, limits, pricing, faq, alternatives & how it fits into the Serverless architecture at large.'
layout: Learn
useLearnNav: false
---

Are you interested in using [AWS AppSync](https://aws.amazon.com/appsync/) for GraphQL in production? Are you in the process of evaluating its benefits and drawbacks at scale? Or perhaps you’re looking to understand if AppSync is the right fit for your project? Just one “yes” means this article is what you’re looking for.

AWS AppSync is a popular choice for managing [GraphQL APIs](https://graphql.org/learn/) developed with [the Serverless Framework](https://serverless.com/). In this article, we’ll walk through how AppSync works, what its advantages and disadvantages are, suggest a few alternatives (should AppSync prove not to be the right fit), and explain in detail how much can you expect to spend on AppSync if it ends up being the right choice for you. At the end of the article, we’ll also include a number of resources and examples to help you dive deeper into AppSync.

<br/>
<h4>Table of Contents</h4>

* [What is AWS AppSync?](#what)
* [How does AWS AppSync work?](#how-does-aws-appsync-work)
* [Why is AWS AppSync an essential part of the Serverless ecosystem?](#architecture)
* [Integrations with other AWS services](#integrations)
* [How does it work with Serverless Framework?](#serverless)
* [Benefits](#benefits)
* [Drawbacks](#drawbacks)
* [Use Cases](#use-cases)
* [Limits](#limits)
* [Pricing](#pricing)
* [When to use AppSync vs DIY gateway](#when-to-use)
* [Alternatives](#alternatives)
* [Get started](#resources)

<br/>
<br/>

<h3 id='what'>What is AWS AppSync?</h3>

The fundamental idea of a GraphQL API is that all API functionality is available via a unified query language (the Graph Query Language) under a single endpoint. Rather than making requests to various endpoints to get different parts of the data needed to build a webpage, developers can issue a single request to a GraphQL API and immediately get back all the data they need. This model reduces the complexity of web applications and improves the experience for website visitors with faster load times.

The system supplying data to a GraphQL API is rarely a single application. Instead, the backend is usually composed of multiple microservices, and the GraphQL API layer is responsible for gathering all the necessary data from the various applications and returning the combined result to the API requester. This GraphQL API layer must be able to parse the GraphQL requests, know where to get the data for each portion, and merge the data to produce a response.

[AWS AppSync](https://aws.amazon.com/appsync) is a fully managed GraphQL API layer developed by Amazon Web Services. AppSync allows developers to build GraphQL APIs without much of the usual work; it handles the parsing and resolution of requests as well as connecting to other AWS services like [AWS Lambda](https://serverless.com/aws-lambda/), NoSQL and SQL data stores, and HTTP APIs to gather backend data for the API.

<br/>
<br/>

<h3 id='how-does-aws-appsync-work'>How does AppSync work?</h3>

Under the hood, AppSync consists of a GraphQL proxy—a service that receives and parses all the GraphQL requests—and of multiple subsystems for handling each specific request type. The supported request types are **queries** (for getting data from the API), **mutations** (for changing data via the API), and **subscriptions** (long-lived connections for streaming data from the API).

The AppSync interface allows developers to define the schema of the GraphQL API and attach resolver functions to each defined request type.

![](https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/guides/aws-appsync/aws-appsync-schema.png)

In addition, AppSync provides a convenient way to connect each resolver function to a data source. The data sources supported by default include Amazon DynamoDB tables, RDS databases, Amazon Elasticsearch domains, AWS Lambda functions, and third-party HTTP endpoints.

![](https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/guides/aws-appsync/aws-appsync-new-data-source.png)

The AppSync interface also lets you try out a live GraphQL API so that you can quickly test and iterate on your GraphQL schemas and data sources.

![](https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/guides/aws-appsync/aws-appsync-queries.png)

In addition to the core AppSync service, AWS provides [the Amplify Framework](https://aws-amplify.github.io/), which makes it easy to build mobile and web applications powered by GraphQL APIs. Amplify achieves this by providing a library of reusable components and utilities.

<br/>
<br/>

<h3 id='architecture'>Why is AppSync an important part of the Serverless ecosystem?</h3>

GraphQL APIs are a popular choice when building Serverless-powered web applications. In particular, many Serverless applications that provide a GraphQL API rely on AWS AppSync to manage their API schemas and orchestrate their resolvers and data sources. Choosing AppSync usually means lower cost thanks to its pay-per-use model, high scalability, and reduced development time when building GraphQL APIs.

<br/>
<br/>

<h3 id='integrations'>How does AppSync integrate with other AWS services?</h3>

The native data-source integrations provided with AppSync are:

- [**AWS Lambda**](https://serverless.com/aws-lambda/) **functions**: map a Lambda function to a GraphQL resolver.
- [**DynamoDB tables**](https://serverless.com/dynamodb/): supply data from a DynamoDB table to the GraphQL API.
- [**Amazon Elasticsearch**](https://aws.amazon.com/elasticsearch-service/) **domains**: use an Elasticsearch domain as the data source for your GraphQL queries.
- [**AWS RDS**](https://aws.amazon.com/rds/): connect to SQL and NoSQL database instances available within RDS, and use databases and tables from that service as data sources.

AppSync also supports a number of authentication integrations:

- [**AWS Cognito**](https://aws.amazon.com/cognito/) **User Pools**: implement an authentication and authorization mechanism for your GraphQL API in AppSync.
- [**AWS IAM**](https://aws.amazon.com/iam/): manage API access by creating IAM users.
- [**OpenID Connect**](https://openid.net/connect/): authenticate API users using the OpenID identity service.

In addition to these integrations, many other integrations are possible by implementing them within an AWS Lambda function and using Lambda’s own integration to connect to it from AppSync.

<br/>
<br/>

<h3 id='serverless'>How does AppSync work with the Serverless Framework?</h3>

The Serverless Framework provides [an AWS AppSync component](https://github.com/serverless-components/aws-app-sync) that makes it easy to get started with AppSync. The component supports all available data sources and authentication methods while giving you the excellent Serverless Framework developer experience when working with AppSync.

Many APIs managed with AppSync also rely on AWS Lambda functions as their data sources, and the Serverless Framework is a great fit for creating those Lambda functions, from design through deployment to monitoring and debugging. Learn more about using AWS Lambda with the Serverless Framework [in our Getting Started with AWS Lambda guide](https://serverless.com/framework/docs/providers/aws/guide/intro/).

<br/>
<br/>

<h3 id='benefits'>Benefits of using AppSync</h3>

As a developer, how do you stand to benefit the most from using AppSync? We believe there are three main advantages:

**Fully managed GraphQL API layer**. AppSync allows you to skip the creation of your own GraphQL resolvers and data-source connections, resulting in significant time savings when standing up new GraphQL APIs and in faster iteration once you have customers, internal or external, using your APIs.

**Real-time subscriptions and offline functionality built in**. Using AppSync allows for GraphQL subscriptions, which are a great way to build applications that always present the most up-to-date state of the data. When using AppSync with the Amplify framework, you can combine subscriptions with offline functionality to create auto-updating web and mobile apps that can correctly handle unstable mobile network connections without much additional work.

**Integrations with core AWS services**. Since AppSync integrates with AWS Lambda, RDS, and DynamoDB, chances are you won’t need to write custom code to connect to your databases. This speeds up development for your teams using AppSync, allowing them to focus more on business logic and less on connection layers for the underlying services.

<br/>
<br/>

<h3 id='drawbacks'>Drawbacks to using AppSync</h3>

Using AppSync certainly has some drawbacks, and you should consider the following carefully before using AppSync in production.

**Additional tooling you’ll need to use**. Much of the useful functionality of AppSync is available only when using specialized GraphQL tooling, like the Amplify framework. This is a result of the complexity of the GraphQL protocol and its real-world implementations. This means that getting the maximum benefit out of using GraphQL in general and AppSync specifically will bring with it additional dependencies and a steep learning curve.

**Lack of transparency in performance**. AppSync is a managed service, and as such you don’t get access to performance settings for your GraphQL API layer. If your API layer is your company’s frontline interface for your customers, not having control over your key component’s performance attributes may pose a serious risk. AppSync can add significant overhead to your API response times, and in certain cases (e.g., if you haven’t configured the collection of tracing information in your API) you may not have any data to help you debug the increased latency.

**Not all data sources are supported out of the box**. If your data stores run outside of AWS, or if you are using a type of database that isn’t supported by AppSync by default, you may need to spend extra time implementing a data connection layer in your AWS Lambda functions just so you can use your data stores in AppSync.

**Vendor lock-in**. With proprietary products you gain efficiency at the cost of flexibility. AppSync is a proprietary solution, and if you ever decide to migrate away from AppSync, you’ll need to invest a significant amount of time in building a compatible service that you manage yourself.

<br/>
<br/>

<h3 id='use-cases'>What is AppSync good for?</h3>

AppSync focuses on GraphQL APIs, so naturally the applications and services that would benefit from providing GraphQL APIs are most likely to be a good fit for AppSync.

Should you be providing a GraphQL API instead of a REST API? This is a choice best made with your team while considering exactly what you are trying to achieve.

A GraphQL API greatly simplifies requesting many different entities from your API at the same time. If you are building a complex web application and want to make it quick and responsive both at load time and during normal operation, then GraphQL may be a good choice. At the same time, GraphQL is quite different from the REST model, has its own tooling, and requires something of a paradigm shift when building a GraphQL API instead of a REST API for the first time. We encourage you to spend some time talking with your team to determine if GraphQL is the right choice for your project.

<br/>
<br/>

<h3 id='limits'>AWS AppSync limits</h3>

By default, each AWS account has a limit of 25 AppSync GraphQL APIs and 1,000 queries per second per GraphQL API. These limits can be raised by opening a ticket in the AWS Support Center.

There are a few additional limits, however, that can’t be increased:

**The maximum number of API keys per GraphQL API is fixed at 50**. If you need more than 50 different users accessing a GraphQL API managed by AppSync, you may also authenticate access using [AWS IAM](https://aws.amazon.com/iam/), using [AWS Cognito Identity Pools](https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html), or by integrating an OpenID provider.

**The maximum schema document size is 1MB**. If you have a very large GraphQL schema, you may need to segment your API into multiple APIs in order to use AppSync. However, needing to have multiple GraphQL API would defeat the purpose of GraphQL—to make the entire API accessible using a single endpoint.

**The maximum GraphQL query execution timeout is 30 seconds**. If your backend services take longer than 30 seconds to return the desired data, you’re out of luck: the queries will unavoidably time out at the 30 second mark.

You can find other AppSync limits [on the AWS Service Limits page](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) in the AWS documentation.
In general, all these shouldn’t be an issue for a GraphQL API that’s designed properly. However, in some cases you may have to make specific optimizations in order to stay under the latency and response size limits.

<br/>
<br/>

<h3 id='pricing'>AWS AppSync pricing</h3>

The AWS free tier includes 250,000 GraphQL queries or data modifications, plus 250,000 real-time updates and 600,000 connection-minutes during the first 12 months after your AWS account is created.

Beyond the free tier, the pricing for AppSync is:

| **Aspect**                             | **Pricing**                                    |
| -------------------------------------- | ---------------------------------------------- |
| Queries and data modification requests | $4.00 / 1 million                              |
| Data transfer for API responses        | $0.09 / GB (decreases with higher data volume) |
| Real-time updates                      | $2.00 / 1 million                              |
| Connection-minutes                     | $0.08 / 1 million                              |

**Sample pricing scenario**
Let’s assume you’re building a GraphQL API for 10,000 users, and each user on average makes 100 GraphQL API requests. Each request returns a response that’s 5KB in size on average.
For such an API the monthly charges would be as follows:

API requests: 10,000 users * 100 requests/user and day * 30 days / month * $4.00 / million requests = 30 million requests / month * $4.00 / million requests = $120 / month

Data transfer: 30 million requests * 5KB / request * $0.09 / GB = 143 GB * $0.09 / GB = $12.87 / month

Total charges for AppSync: $120 + 12.87 = $144.87 / month

Keep in mind that these calculations don’t include the charges for the backend services, so if your GraphQL API relies on a DynamoDB table or a series of AWS Lambda functions, those will get charged separately. See our [DynamoDB pricing](https://serverless.com/dynamodb/#dynamodb-pricing) and [AWS Lambda pricing](https://serverless.com/aws-lambda/#pricing) pages for more examples of how much those services could cost you.

<br/>
<br/>

<h3 id='when-to-use'>When to use AppSync vs DIY gateway</h3>

A significant upside of using AppSync is the fact that the service is completely managed. You save time on setting up a GraphQL API, you can use all the industry-standard structure right away, and you can reduce the amount of code necessary to connect to the backend services.

However, if you think you’ll need to finely tune and manage your API’s performance characteristics, or if you’ll need to connect to resources that aren’t supported by AppSync by default, it may be better to choose a self-hosted solution instead.

<br/>
<br/>

<h3 id='alternatives'>Alternatives to AppSync</h3>

There are multiple solutions you can use instead of AppSync:

**Apollo Server**. This is [an open](https://www.apollographql.com/docs/apollo-server/)[-](https://www.apollographql.com/docs/apollo-server/)[source](https://www.apollographql.com/docs/apollo-server/) GraphQL server, and the company who created it also offers [a managed GraphQL service layer](https://www.apollographql.com/platform) based on their service.

**Prisma**. This also is [an open source solution](https://github.com/prisma/prisma) with [a managed version](https://www.prisma.io/cloud) and many other useful tools.

**Hasura GraphQL Engine**. This is [an open](https://github.com/hasura/graphql-engine)[-](https://github.com/hasura/graphql-engine)[source GraphQL server](https://github.com/hasura/graphql-engine) that tightly integrates with PostgreSQL.

<br/>
<br/>

<h3 id='resources'>Using AppSync with Serverless Framework</h3>

Want to learn more about AWS AppSync and how it works with the Serverless Framework? Check out the following resources:

- [Building a chat application using AWS AppSync and Serverless](https://serverless.com/blog/building-chat-appliation-aws-appsync-serverless) (Serverless blog)
- [The Serverless AppSync Component](https://github.com/serverless-components/aws-app-sync) (GitHub)
- [Running a scalable & reliable GraphQL endpoint with Serverless](https://serverless.com/blog/running-scalable-reliable-graphql-endpoint-with-serverless/) (Serverless blog)
- [Build a Serverless GeoSearch GraphQL API using AWS AppSync & Elasticsearch](https://serverless.com/blog/build-geosearch-graphql-api-aws-appsync-elasticsearch/) (Serverless blog)
- [Efficient APIs with GraphQL and Serverless](https://serverless.com/blog/efficient-apis-graphql-serverless/) (Serverless blog)

You can find the AWS documentation on AppSync here:

- [AppSync developer guide](https://docs.aws.amazon.com/appsync/latest/devguide/welcome.html) (AWS documentation)
- [AppSync system overview](https://docs.aws.amazon.com/appsync/latest/devguide/system-overview-and-architecture.html) (AWS documentation)
