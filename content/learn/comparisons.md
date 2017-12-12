---
title: "Comparisons: Serverless vs. other tools"
description: "When should you use Serverless over other tools?"
layout: Learn
---

Serverless Architectures are enabling a wide range of use cases, but they're not right for every situation.

Below, you can see how Serverless compares to other tools, such as:

- [Docker](#serverless-vs-docker)
- [CloudFormation](#serverless-vs-cloudformation)
- [Serverless Application Model (SAM)](#serverless-vs-sam)
- [Zappa, ClaudiaJS, etc.](#serverless-vs-zappa-claudiajs-etc)
- [Terraform](#serverless-vs-terraform)
- [Rolling your own tooling](#serverless-vs-rolling-your-own-tooling)
- [Cloud Providers](#serverless-vs-cloud-providers)
- [Heroku](#serverless-vs-heroku)

## Serverless vs. Docker
----

Docker packages software into standardized units (containers) to make it easier to manage application dependencies and avoid the "works on my machine" problem. Many people use containers so they can control their scaling. It is a serverful architecture where you run a cluster of VM instances, with a likewise serverful cost model.

Serverless compute services are essentially ephemeral containers, where the start/stop is managed automatically. The Serverless Applications deployed on them are fundamentally zero-administration and scale automatically with demand, which eliminates the need to manage server instances at all. Serverless Applications are also code-centric, and carry other [serverless benefits](./#serverless-benefits) such as pay-per-execution pricing models.

## Serverless vs. CloudFormation
----

CloudFormation is an AWS tool for deploying infrastructure. You describe your desired infrastructure in YAML or JSON, then submit your CloudFormation template for deployment. It enables "infrastructure as code".

The Serverless Framework provides a configuration DSL which is designed for serverless applications. It also enables infrastructure as code while removing a lot of the boilerplate required for deploying serverless applications, including permissions, event subscriptions, logging, etc.

The Serverless Framework is provider-agnostic, so you can use it to deploy serverless applications to AWS, Microsoft Azure, Google Cloud Platform, or many other providers. This reduces lock-in and enables a multi-cloud strategy while giving you a consistent experience across clouds.

Finally, the Serverless Framework assists with additional aspects of the serverless application lifecycle, including building your function package, invoking your functions for testing, and viewing your application logs.

## Serverless vs. SAM
----

The Serverless Application Model (SAM) is an extension to CloudFormation within AWS. It provides a way to use CloudFormation syntax to define your Serverless Applications, though it can only be used within the AWS ecosystem.

While SAM reduces the boilerplate of defining your serverless application, the other limitations of CloudFormation still apply. The Serverless Framework has a provider-agnostic way to define serverless applications. It manages additional aspects of the serverless application lifecycle. Finally, it has a broader feature set and larger community of plugins, examples, and guides.

## Serverless vs. Zappa, ClaudiaJS, etc.
----

There are a number of deployment tools for serverless applications, including [Zappa](https://github.com/Miserlou/Zappa) for Python web applications or [ClaudiaJS](https://github.com/claudiajs/claudia) for Node web applications. These tools are purpose-built for their particular use cases. If they fit the use case you're looking for and you prefer their design, you should use them!

The Serverless Framework is a more general purpose tool for deploying and managing serverless applications. You can deploy Python or Node web applications while also provisioning the infrastructure that your application needs, such as databases, queues, and object storage. Further, you can use the Framework to build multiple types of applications, including event streaming, image manipulation, and more.

## Serverless vs. Terraform
----

Terraform is an unopinionated cloud deployment tool. Specifically, it describes Infrastructure as Code and deploys to multiple clouds and SaaS systems at once. It is comparable to CloudFormation but for multiple clouds.

The Serverless Platform has one strong opinion about how an application is defined, and then is flexible about everything else. It facilitates developing and deploying Serverless Applications, abstracting away the boilerplate required to deploy serverless applications. It also assists with the packaging and monitoring of your serverless applications.

Terraform and the Serverless Platform are not mutually exclusive, and can easily be used in tandem.

## Serverless vs. Rolling your own tooling
----

Rather than using the Serverless Framework, you may be tempted to create your own tooling for managing serverless applications. We get the feeling -- you get to build something! It's why our founder created the Framework in the first place.

Just be careful about what you're getting into. If your needs are small, you can get away with bash scripts or micro-frameworks. As you start using more and more pieces, you may find that maintaining your tooling is a full-time job in itself. Don't underestimate the costs of the community and ecosystem that is adding new features and fixing bugs.

## Serverless vs. Cloud Providers
----

Serverless has tooling that eliminates complexity in creating and managing applications that are distributed across the cloud.

So, the Serverless Platform does not replace your cloud provider. Rather, our event-gateway ties together your cloud architecture, while our deployment engine orchestrates deploying applications to various cloud providers and serverless compute services: AWS Lambda, Google Cloud Functions, Microsoft Azure, IBM Cloud Functions.

## Serverless vs. Heroku
----

Heroku is a service for managing stateless web application using the 12 Factor App approach that they pioneered. It has similarities to serverless applications in that much of work of managing and maintaining servers is done for you.

However, serverless applications have a number of advantages over Heroku. With Heroku, you need to specify the number of "Dynos" (servers) available to handle your web application. With serverless application, this scaling is handled for you, automatically.

Further, you only pay for the resources you consume with Serverless architectures. With Heroku, you pay for your Dynos even when they're sitting idle.

Finally, Serverless architectures play more nicely as part of a larger, polyglot architecture. They are deployed directly to your existing cloud provider's account, so you can interact with other parts of your infrastructure.
