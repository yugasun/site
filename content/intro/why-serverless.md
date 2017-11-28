---
title: "Why Serverless?"
description: "What is the Serverless movement about and why does it matter?"
layout: Intro
---

# Introduction to Serverless
Just like wireless internet has wires somewhere, serverless architectures still have servers somewhere.

What ‘serverless’ really means is that, as a developer you don’t have to think about those servers. You just focus on code.


## The Serverless Movement
Serverless abstracts away the most menial parts of building an application, leaving you free to actually spend your days coding.

Serverless has become a movement about developer empowerment. The technology is still early, but thousands of developers are already proving that serverless can enable them to launch applications at record speed and cost.

It means developers can rapidly build apps that handle production-ready traffic. They don’t have to actively manage scaling for your applications. They don't have to provision servers, or pay for resources that go unused.

## What makes an application serverless?
An application is serverless when it is hosted on a serverless compute service: AWS Lambda, Google Cloud Functions, Microsoft Azure, IBM Cloud Functions, and others.

These Serverless Compute Services carry huge benefits for developers who buid and maintain services or applications.


## Benefits of Serverless Applications
These are the 4 core benefits of Serverless Applications you should know about:

1. **Zero administration** - This is the most liberating thing about serverless. Deploy code without provisioning anything beforehand, or managing anything afterward. There is no concept of a fleet, an instance, or even an operating system. Everything runs in the cloud and the provider manages scaling for you.

2. **Pay-per-execution** - This is what typically incentivizes developers to try serverless. You can have complete resource utilization without paying a cent for idle time. The results? 90% cost-savings over a cloud VM, and the satisfaction of knowing that you never pay for resources you don’t use.

3. **Function as unit of deployment** - Serverless architectures are composed of very small, independent bits of code (functions) that are loosely coupled and collaborative—also known as a microservice architecture. This means pieces of the system can be developed and deployed independently. The result is fewer blockers and far greater developer autonomy and productivity.

4. **Event-Driven** - Serverless functions are stateless, and essentially dormant, until they have an event to react to. The event is what brings them to life and provides them with the data/context to do their job. Event-driven architectures are nothing new, but the rise of serverless compute has renewed interest in them because serverless architectures are by definition event-driven.


## The Serverless Framework
If Serverless Compute is the new and improved application house on the block, then the Serverless Framework is the door you use to enter that house.

Serverless Compute Services, for all their benefits, have some downsides that the Serverless Framework works to resolve. Serverless Compute vendors attempt to keep you within their own ecosystem (vendor lock-in). There are no standardized function signatures that will work cross-platform, meaning that functions must be completely rewritten in order to migrate them to a different vendor. It can also be cumbersome to properly set up serverless functions within vendor dashboards and native tooling.

That is where the Serverless Framework comes in. Use the Serverless Framework CLI to build and deploy your application to any and every cloud provider, in a single place, with a single function structure. The Framework automatically configures cloud vendor settings for you, based on the language you use and the cloud provider you deploy to.

### Benefits of the Serverless Framework:
These are the 6 core benefits of the Serverless Framework you should know about:

* **Increase development speed** - The Serverless Framework CLI enables developers to build, test, and deploy all in the same environment. Developers write their functions in cloud-agnostic Serverless YAML, and services can be deployed with a single command. Transactionally deploy code to multiple providers, version your deployments, and roll back the deployment if necessary.

* **Avoid vendor lock-in** - Different cloud providers all have different required formats and function signatures. The Framework assembles your application into a single package that can be deployed across any cloud provider, abstracting away any necessary tweaking.

* **Infrastructure as Code** - Configure infrastructure across multiple clouds. Serverless cleanly integrates with every Serverless Compute Service so that you can formalize and standardize your entire infrastructure as code.

* **Existing ecosystem** - The Serverless Framework is pluggable, and many dozens of community-contributed plugins exist in our [GitHub Plugins repo](https://github.com/serverless/plugins). The Serverless Framework is widely adopted, meaning there are always active discussions on forums and there are a wide array of tutorials that will help you get started.


## Next Steps

Dive further into the anatomy of the [Serverless Application](./the-serverless-application.md). Check out all the different [use cases](./use-cases.md) for serverless applications. Take a peek at how the Serverless Platform [compares to other software](./serverless-vs-other.md).

Or if you’re ready, follow our [step-by-step guide](./getting-started) to start building a Serverless Application with your favorite language.
