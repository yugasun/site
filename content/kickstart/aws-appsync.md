---
title: "AWS AppSync and Serverless"
description: "What is AppSync, and how does it fit into Serverless?"
layout: Learn
useLearnNav: false
---

AppSync is a GraphQL managed service from Amazon Web Services.

If you aren’t familiar with GraphQL, it’s a syntax that allows you to structure a single, smart API endpoint for different data sources. So instead of maintaining separate endpoints for image uploads and liking photos, you can have one endpoint that routes all requests to the correct data sources intelligently.

When a request is made to your GraphQL endpoint, your GraphQL server will parse the query into its various segments, then pass each segment to a resolver to either retrieve or manipulate the data as requested. These resolvers are usually written by a developer to connect the query request to a backend database or third-party API.

AppSync allows you to connect your GraphQL queries directly to backend data sources like DynamoDB and Elasticsearch. This removes the need for you to build and maintain backend resolver code and lets you focus on your application logic.

**Already familiar with AWS AppSync?**

[Install the Serverless Framework to deploy](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)

<br/>

## Advantages of AWS AppSync
AppSync can make implementing GraphQL easier, more secure, and nearly codeless.

1. Developers can build GraphQL backends more quickly, in a serverless way, with AppSync.
2. AppSync lets you connect queries to data sources like DynamoDB and Elasticsearch directly, without writing resolvers. For more complex logic, you can write your own resolvers in AWS Lambda functions.
3. AppSync has security out of the box, letting you integrate with AWS Cognito and IAM—something you especially want when all of your APIs are controlled by a single endpoint
4. It also helps with data management for real-time and offline-enabled mobile apps.


<br/>

## Disadvantages of AWS AppSync

1. While AWS is working to make AppSync more robust, it’s still fairly young as far as products go. As such, there will be feature gaps in terms of support and integration, even within the AWS ecosystem. Make sure to research your use case before committing.
2. While the GraphQL query language is an open spec, some of the AppSync features are proprietary to AWS. This can make it difficult to move to a different provider in the feature.


<br/>

## When to use AppSync

AppSync is going to carry the same core benefits of GraphQL. It offers a powerful way to manage multiple API services under a single endpoint, which is going to be most useful when there are a lot of APIs in your application that need to operate in real time.

Think social media applications (like photo sharing or chat apps), applications that facilitate collaboration among multiple users (like docs editing), or multimedia applications that require real-time updates (such as VR).

AppSync is particularly powerful for mobile or front-end developers that want an easy, low-maintenance way to handle data in the backend. AppSync handles most of the hosting and backend logic, freeing you to focus on your application logic.

<br/>

## Get started on AWS AppSync

Follow our guide to set up your AppSync endpoint.

[Install Serverless Framework](https://serverless.com/framework/docs/getting-started/)

[How to build your first AppSync application](https://serverless.com/blog/building-chat-appliation-aws-appsync-serverless)


