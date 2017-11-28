---
title: "Comparisons: Serverless vs. other tools"
description: "When should you use Serverless over other tools?"
layout: Intro
---

Serverless Architectures are enabling a wide range of use cases, but they're not right for every situation.

Below, you can see how Serverless compares to other tools.

# Serverless vs. Other Software

Serverless tooling makes it easy to build, deploy and manage Serverless Applications because of its abstraction. This means the Serverless Platform can be used to solve an array of problems, and many tools will have some overlapping functionality with the Serverless Platform.

Below, we’ve done our best to lay out what the similarities and differences are. Note that the Serverless Platform can be used either alone or in conjunction with other systems, and we support direct integrations with many of these tools.


## Serverless vs. Docker

Containers (such as Docker) package software into standardized units to make it easier to manage server instances, and many people use containers so they can control their scaling. It is a serverful architecture that runs VMs on your behalf, with a likewise serverful cost model.

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

## Serverless vs. SAM

The Serverless Application Model (SAM) is an extension to CloudFormation within AWS. It provides a way to use CloudFormation syntax to define your Serverless Applications, though it can only be used within the AWS ecosystem.

The Serverless Framework does the same thing in a provider-agnostic way. It allows you to specify your cloud provider(s) and optimizes your code for each cloud provider upon deployment. You can further switch your functions over to other cloud providers at any time.


## Serverless vs. Terraform

Terraform is an unopinionated cloud deployment tool. Specifically, it describes Infrastructure as Code and deploys to multiple clouds and SaaS systems at once. It is not a tool for defining, developing and deploying an application.

The Serverless Platform has one strong opinion about how an application is defined, and then is flexible about everything else. It facilitates developing and deploying Serverless Applications. Terraform and the Serverless Platform are not mutually exclusive, and can easily be used in tandem.


## Serverless vs. CloudFormation

CloudFormation is an AWS-only tool for deploying infrastructure. It relies on CloudFormation syntax for configuration.

The Serverless Framework currently uses it behind the scenes to configure parts of AWS deployments for our users as well; we handle the CloudFormation set-up on your behalf. Our goal with Serverless Platform tooling is to create a single, developer-friendly experience that works across any cloud provider.

<!-- TODO: [more CloudFormation notes]
CloudFormation main focus is on deploying infrastructure, and not focused on compute.
Using CloudFormation to deploy Serverless apps is a slow process. While we do currently depend on it, Serverless can be a lot faster if it focused on functions
CloudFormation is NOT provider agnostic and locks the users to AWS.
CloudFormation syntax is hard to reason around which causes the DX to suffer.
Using Cloudformation to deploy Serverless apps puts a hard requirement on the user to host his code on S3, which complicates the process. If Serverless focused on functions without depending on CloudFormation, this wouldn’t be a requirement.

-->

## Serverless vs. Cloud Providers

Serverless has tooling that eliminates complexity in creating and managing applications that are distributed across the cloud.

So, the Serverless Platform does not replace your cloud provider. Rather, our event-gateway ties together your cloud architecture, while our deployment engine orchestrates deploying applications to various cloud providers and serverless compute services: AWS Lambda, Google Cloud Functions, Microsoft Azure, IBM Cloud Functions.


## Serverless vs. Heroku

Pay-per-execution monitoring serverdeath observability Ryan Brown YAML Marcia Villalba.

Microservices signature NoOps Ben Kehoe multi-cloud. Deployment YAML observability multi-cloud. 

