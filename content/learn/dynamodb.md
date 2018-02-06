---
title: "DynamoDB and Serverless"
description: "What is the importance of DynamoDB within Serverless?"
layout: Learn
useLearnNav: false
---

DynamoDB is a popular NoSQL database offering from AWS. It’s fully managed, autoscales, and integrates very nicely with Lambda which makes it an especially popular database among Serverless developers. 

## Advantages
- Fully managed
- Nice integration with Lambda
- Highly scaleable 

While Dynamo is an amazing service that provides tons of value, there are a few things you should be aware of. Because it’s a proprietary AWS service, it can lead to data lock-in, which is a particularly sticky form of vendor lock-in. Another thing to be aware of is that while DynamoDB often scales very nicely, with very large data-sets that scaling can become very difficult and expensive. Global Tables, a new feature to DynamoDB, makes globally scaling DynamoDB much easier and more affordable. 

## Disadvantages
- Vendor lockin 
- Can be expensive to operate at large scale 

## DynamoDB Pricing
AWS prices Dynamo based on a combination of provsioned throughput (both read and write) and the amount of indexed data storage. They also offer a generous free tier to get you up and going. For full details on pricing, checkout the [DynamoDB](https://aws.amazon.com/dynamodb/pricing/) pricing page.

## DynamoDB Vs.
| DBaaS     | Description                                                    | Typing | Data Model                      | Secondary Indexes | Triggers | Open Source |
|-----------|----------------------------------------------------------------|--------|---------------------------------|-------------------|----------|-------------|
| DynamoDB  | Hosted, auto-scaling database service by AWS                   | Yes    | Document Store, Key Value Store | Yes               | Yes      | No          |
| MongoDB   | Open source, NoSQL document store.                             | Yes    | Document Store                  | Yes               | No       | Yes         |
| Cassandra | Wide-column store based on concepts from BigTable and DynamoDB | Yes    | Wide column store               | Restricted        | Yes      | Yes         |
| BigTable  | NoSQL Big Data database service offered by Google.             | No     | Wide column store               | No                | No       | No          |


## Examples 
- [DynamoDB stream events to AWS S3](https://github.com/serverless/examples/tree/master/aws-node-dynamodb-backup)
- [GraphQL query endpoint in NodeJS on AWS with DynamoDB](GraphQL%20query%20endpoint%20in%20NodeJS%20on%20AWS%20with%20DynamoDB)
- [Serverless REST API with DynamoDB and offline support](https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb-and-offline)
- [Serverless REST API Node](https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb)
- [Serverless REST API Python](https://github.com/serverless/examples/tree/master/aws-python-rest-api-with-dynamodb)


## Plugins 
- [Dynalite](https://github.com/sdd/serverless-dynalite)
- [Dynamodb Autoscaling](https://github.com/sbstjn/serverless-dynamodb-autoscaling)
- [Dynamodb Local](https://github.com/99xt/serverless-dynamodb-local)


## Guides
- [How To Create a Serverless Node.js App with DynamoDB For The First Time](https://medium.com/statuscode/serverless-ice-cream-or-create-your-serverless-node-js-micro-service-with-a-database-17a6946251e0)
- [Build a multi-region, multi-master application with Serverless and DynamoDB Global Tables](https://serverless.com/blog/build-multiregion-multimaster-application-dynamodb-global-tables/)
- [How to Make a Serverless GraphQL API using Lambda and DynamoDB](https://serverless.com/blog/make-serverless-graphql-api-using-lambda-dynamodb/)
- [Automate your DynamoDB backups with Serverless in less than 5 minutes](https://serverless.com/blog/automatic-dynamodb-backups-serverless/)
- [Deploy a REST API using Serverless, Express and Node.js](https://serverless.com/blog/serverless-express-rest-api/)
- [Using DynamoDB with Serverless](http://blog.rowanudell.com/using-dyanmodb-with-serverless/) 
- [Build a Python REST API with Serverless, Lambda, and DynamoDB](https://serverless.com/blog/flask-python-rest-api-serverless-lambda-dynamodb/)
- [Deploy Node.js Serverless Framework app with DynamoDB, S3 and Cognito in 10 Steps](https://medium.com/@connorleech/deploy-node-js-serverless-framework-app-with-dynamodb-s3-and-cognito-in-10-steps-723d2f4ec08f)



