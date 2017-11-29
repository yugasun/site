---
title: "Comparisons: Serverless vs. other tools"
description: "When should you use Serverless over other tools?"
layout: Intro
---

Serverless Architectures are enabling a wide range of use cases, but they're not right for every situation.

Below, you can see how Serverless compares to other tools, such as:

- [Docker](#serverless-vs-docker)
- [CloudFormation](#serverless-vs-cloudformation)
- [Serverless Application Model (SAM)](#serverless-vs-sam)
- [Zappa, ClaudiaJS, etc.](#serverless-vs-zappa-claudiajs-etc)
- [Terraform](#serverless-vs-terraform)
- [Cloud Providers](#serverless-vs-cloud-providers)
- [Heroku](#serverless-vs-heroku)

## Serverless vs. Docker
----

Docker packages software into standardized units (containers) to make it easier to manage application dependencies and avoid the "works on my machine" problem. Many people use containers so they can control their scaling. It is a serverful architecture where you run a cluster of VM instances, with a likewise serverful cost model.

Serverless compute services are essentially ephemeral containers, where the start/stop is managed automatically. The Serverless Applications deployed on them are fundamentally zero-administration and scale automatically with demand, which eliminates the need to manage server instances at all. Serverless Applications are also code-centric, and carry other [serverless benefits](./#serverless-benefits) such as pay-per-execution pricing models.

<!-- TODO [more docker notes]
Still has strong OS administration and management responsibilities
Image is the unit of deployment
It helps compartmentalize the execution environment using cgroups
Shares system resources at the kernel level yet provides a feel of complete execution environment
Packages the execution environment along with the app and its dependencies nicely
Provides portability across hosts - Windows and Linux
Faster uptimes than VMs
Cheaper than VMs
Is not serverless because does not adhere to the 3 tenets:
Admin required, Cannot Auto-scale, Paying for idle time as container is up all the time

Lambda is nothing but ECS with:
ephemeral containers with start/stop managed automatically,
with instrumentation built-in, to meter and hence provide pay-per-execution,
using AWS managed pre-defined images per language runtime.
-->

## Serverless vs. CloudFormation
----

CloudFormation is an AWS tool for deploying infrastructure. You describe your desired infrastructure in YAML or JSON, then submit your CloudFormation template for deployment. It enables "infrastructure as code".

The Serverless Framework provides a configuration DSL which is designed for serverless applications. It also enables infrastructure as code while removing a lot of the boilerplate required for deploying serverless applications, including permissions, event subscriptions, logging, etc.

The Serverless Framework is provider-agnostic, so you can use it to deploy serverless applications to AWS, Microsoft Azure, Google Cloud Platform, or many other providers. This reduces lock-in and enables a multi-cloud strategy while giving you a consistent experience across clouds.

Finally, the Serverless Framework assists with additional aspects of the serverless application lifecycle, including building your function package, invoking your functions for testing, and viewing your application logs.

<!-- TODO: [more CloudFormation notes]
CloudFormation main focus is on deploying infrastructure, and not focused on compute.
Using CloudFormation to deploy Serverless apps is a slow process. While we do currently depend on it, Serverless can be a lot faster if it focused on functions
CloudFormation is NOT provider agnostic and locks the users to AWS.
CloudFormation syntax is hard to reason around which causes the DX to suffer.
Using Cloudformation to deploy Serverless apps puts a hard requirement on the user to host his code on S3, which complicates the process. If Serverless focused on functions without depending on CloudFormation, this wouldn’t be a requirement.

-->

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

## Serverless vs. Cloud Providers
----

Serverless has tooling that eliminates complexity in creating and managing applications that are distributed across the cloud.

So, the Serverless Platform does not replace your cloud provider. Rather, our event-gateway ties together your cloud architecture, while our deployment engine orchestrates deploying applications to various cloud providers and serverless compute services: AWS Lambda, Google Cloud Functions, Microsoft Azure, IBM Cloud Functions.

## Serverless vs. Heroku
----

Pay-per-execution monitoring serverdeath observability Ryan Brown YAML Marcia Villalba.

Microservices signature NoOps Ben Kehoe multi-cloud. Deployment YAML observability multi-cloud. 

