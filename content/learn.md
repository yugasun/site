---
title: "Why Serverless?"
description: "What is the Serverless movement about and why does it matter?"
layout: Learn
---

# Introduction to Serverless

Just like wireless internet has wires somewhere, serverless architectures still have servers somewhere.

What ‘serverless’ really means is that, as a developer you don’t have to think about those servers. You just focus on code.

## The Serverless Movement

Serverless has become a movement about developer empowerment. Serverless abstracts away the most menial parts of building an application, leaving you free to actually spend your days coding.

It means that you, the developer, can rapidly build apps that handle production-ready traffic. You don’t have to actively manage scaling for your applications. You don't have to provision servers, or pay for resources that go unused.

The technology is still early, but thousands of developers are already proving that serverless can enable them to launch applications at record speed and cost.

## What makes an application serverless?

The serverless movement was started with the release of AWS Lambda, a function-as-a-service compute service. But serverless is much more than just functions-as-a-service. Ultimately, _serverless is about focusing your efforts on what provides value to your users_. This means using managed services for databases, search indexes, queues, SMS messaging, and email delivery. Tie these services together using stateless, ephemeral compute like the various functions-as-a-service offerings.

Upgrading your Linux distro does not provide value to your users. Managing your RabbitMQ servers does not provide value to your users. Shipping product provides value to your users.

Focus on your business logic, not your servers.

## Benefits of Serverless Applications

These are the 4 core benefits of Serverless Applications you should know about:

1. **Zero administration** - Deploy code without provisioning anything beforehand, or managing anything afterward. There is no concept of a fleet, an instance, or even an operating system. No more bothering the Ops department.

2. **Auto-scaling** - Let your service providers manage the scaling challenges. No need to fire alerts or write scripts to scale up and down. Handle quick bursts of traffic and weekend lulls the same way -- with peace of mind.

3. **Pay-per-use** - Function-as-a-service compute and managed services charged based on usage rather than pre-provisioned capacity. You can have complete resource utilization without paying a cent for idle time. The results? 90% cost-savings over a cloud VM, and the satisfaction of knowing that you never pay for resources you don’t use.

4. **Increased velocity** - Shorten the loop between having an idea and deploying to production. Because there's less to provision up front and less to manage after deployment, smaller teams can ship more features. It's easier than ever to make your idea live.

## The Serverless Framework

If the Serverless Application is the new and improved application house on the block, then the Serverless Framework is the door you use to enter that house.

Serverless Applications are the next step in cloud-native development, and they _require_ automation. If you're tying together multiple managed services and functions, you cannot rely on a checklist of manual steps. You should be able to recreate your entire application with a command.

That is where the Serverless Framework comes in. Use the Serverless Framework CLI to build and deploy your application to any and every cloud provider with a consistent experience. The Framework automatically configures cloud vendor settings for you, based on the language you use and the cloud provider you deploy to.

Keeping a maniacal focus on business value applies to your development tooling as well. Kids, don't roll your own deployment tools.

### Benefits of the Serverless Framework:

These are the 4 core benefits of the Serverless Framework you should know about:

* **Increase development speed** - The Serverless Framework CLI enables developers to build, test, and deploy all in the same environment. Developers write their functions in cloud-agnostic Serverless YAML, and services can be deployed with a single command. Transactionally deploy code to multiple providers, version your deployments, and roll back the deployment if necessary.

* **Avoid vendor lock-in** - Different cloud providers all have different required formats and deployment methods. The Framework assembles your application into a single package that can be deployed across any cloud provider, abstracting away any necessary tweaking.

* **Infrastructure as Code** - Configure infrastructure across multiple clouds. Serverless cleanly integrates with every Serverless Compute Service so that you can formalize and standardize your entire infrastructure as code.

* **Existing ecosystem** - The Serverless Framework is pluggable, and many dozens of community-contributed plugins exist in our [GitHub Plugins repo](https://github.com/serverless/plugins). The Serverless Framework is widely adopted, meaning there are always active discussions on forums and there are a wide array of tutorials that will help you get started.

## Next Steps

Check out all the different [use cases](./use-cases.md) for serverless applications. Take a peek at how the Serverless Framework [compares to other software](./serverless-vs-other.md).

Or if you’re ready, follow our [step-by-step guide](./getting-started) to start building a Serverless Application with your favorite language.
