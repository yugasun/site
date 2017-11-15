---
title: What is a Serverless Architecture?
description: "Overview of Serverless Architectures"
layout: Learn
---

<div class="architectureHeader">
  <div class="architectureHeaderLink">
    <a href="#serverless-architectures">
      Serverless Architectures
    </a>
  </div>
  <div class="architectureHeaderLink">
    <a href="#benefits">
      Benefits
    </a>
  </div>
  <div class="architectureHeaderLink">
    <a href="#challenges">
      Challenges
    </a>
  </div>
  <div class="architectureHeaderLink">
    <a href="#how-to-adopt">
      How to adopt
    </a>
  </div>
</div>

<h1 class="sectionHeader" id="serverless-architectures">
  Serverless Architectures
</h1>

## History: from monolith to microservice

In the beginning, there were monolithic architectures, where all applications were deployed as a single unit. With monoliths, deployments were rare and brittle.

When any part of the monolith failed, the whole thing had to be rolled back. A small change in one area could lead to broken functionality elsewhere. Developers needed to test the whole thing before they could deploy any new pieces of code.

And then someone saw this and said, let us break the monolith up into loosely-coupled web services, and it was so.

From the rubble, service-oriented architectures (SOA) emerged. Developers could finally deploy different services at different times. They could scale high-traffic APIs faster than others.

It was good.

It was so good, that services got further broken up into microservices. Throughout all of this, small, functional teams began to form. These teams were experts in the specific area of the service they developed.

![evolution](https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/learn/Monolith-to-SOA%401x.jpg)

As the number of services mushroomed, the pain in provisioning infrastructure to host them increased many-fold. And then, the pain of maintaining them. And then, adequately scaling the infrastructure based on load.

Microservices took micromanagement.

Whole armies of DevOps teams formed. Their mission: to maintain the infrastructure. Less attention overall was paid to monitoring application performance.

### Containerization

During this time, ‘the cloud’ was also becoming widespread. Cloud took the hardware layer and used it to compute the database, the network. Hardware itself was virtualized.

This virtualized hardware took the shape of services, but we still thought in terms of infrastructure. Apart from physical provisioning, we had software-defined infrastructure components (or: containers). We scripted our infrastructure setup (Infrastructure as Code).

While these shifts helped DevOps teams, it did not remove the maintenance of physical or virtual hardware.

### Solving the challenges of microservices
And then, in 2014, AWS Lambda was born—the world’s first serverless compute service.

In a world laden with maintenance, serverless compute was revolutionary. Lambda rendered it obsolete to have to provision, maintain, scale, or pay-for-idle infrastructure.

Every major cloud provider was right behind, hitting the market with their own serverless compute. On Lambda’s heels there came Microsoft Azure, Google Cloud Functions, and IBM Cloud Functions.

![serverlesstrends](https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/learn/Google-trends%401x.jpg)

## The formation of serverless architectures
In the beginning, we saw that monolithic services were broken up into microservices, which led to microservice architecture.

Now we see the proliferation of serverless architectures, which are a subset of microservice architectures that rely on serverless compute.

An architecture is _serverless_ if it exhibits these three characteristics:
- runs on serverless compute (or FaaS)
- is zero-administration
- is automatically-scaling

### A world of functions and events
Serverless functions are bits of code that react to business events in your application. These functions lay dormant in the cloud and wait to be triggered by an event.

When the functions are asleep, they contract into a pinprick of action potential which you do not pay for. When they are called, they can scale as broadly as the cloud they are hosted on.

![serverless-events](https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/learn/Sls-events%401x.jpg)

What this means is that the scaling part of the equation is no longer your team’s responsibility; it happens automatically in the background.

It also means that you don’t pay for unused resources. Serverless functions are pay-per-execution.

### Application development gets smarter
Serverless architectures free developers from having to think about the ins and outs of infrastructure. They aren’t road blocked on projects due to pending provisioning and resources.

Rather, a developer’s entire day becomes pushing code, creating new features and focusing on solving business problems.

## Simplifying complexity
Serverless has opened the doors to a new type of application development experience. Building distributed systems has traditionally been prohibitively difficult and expensive—limited to a small pool of resource-rich companies.

Serverless democratizes this power. As with all new technologies, the edges are still rough and the tools have a lot of room to grow, but thousands of developers are already leveraging serverless architectures to deliver applications at record speed and cost.

Imagine, then, what the future holds. Things are rapidly getting even more robust and refined.

<h1 class="sectionHeader" id="benefits">
  Benefits: What does serverless computing mean for developers?
</h1>

## Improved efficiency
Applications with a serverless infrastructure are fast to build, relatively easy to maintain and can operate on lower budgets. This is because so much of the daily workload is put onto the shoulders of the FaaS provider (the serverless compute service), and taken off developers’ plates.

With these increases in efficiency, serverless teams can build applications more effectively.

### Accelerated time to market
Serverless teams are able to go from concept to prototype in half the time of their server-full counterparts. This is because the serverless developer can immediately begin to deploy code in a test environment—without setup.

Once the code is ready to ship, it can quickly be deployed to a production environment. There is no waiting on the ops team to provision server resources.

Features built on serverless architectures have shorter feedback loops in general—which lowers barriers to fast iteration, and sharpens competitive edge on updates and new feature launches.

### More time focused on business value
Once the code is deployed, the maintenance burden is significantly lower. Versioning and scaling, for example, fall back to the FaaS provider.

In a nutshell? Serverless teams get to eliminate the most routine and mundane parts of their workflow.

This frees up additional time that can be used to experiment with new features, or further training and skill set growth.

Along the same lines, scoping smaller chunks of code (aka, functions) allows for tighter, smaller, more agile teams. These teams get to own applications from start to finish, developing and deploying them on their own.

### Stretched value-to-cost ratio
Because serverless functions lie dormant until they are called by an event, you are only responsible for the amount of runtime you use. Serverless computing utilizes a pay-per-execution model.

This further means that it is no longer necessary to provision resources just in case they need to be used. Serverless infrastructure expands and contracts as you need it to, and you only pay for the runtime you use.

Even better, the cost savings from code improvements are instantaneous. Say you tweak your code to cut out unnecessary iteration loops; you’ll directly see the decrease in your cloud provider bill.

This is because you’re paying for the runtime, not the provisioned space.

![morevalue](https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/learn/pay-per-use%401x.jpg)

### Allows polyglot teams to develop
In current project-planning paradigms, the first discussion is about which language the new application should be built in. Language choice isn’t about what suits the project best, but rather which resources are already on-hand and which languages developers already know.

With serverless, language isn’t a complete roadblock. Applications can be multi-lingual, which eliminates a lot of barriers for developers to center around a project and get it shipped.

![multi-language](https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/learn/polyglot-teamsv3%401x.jpg)

## An opening for new types of applications
The thing to know is, any web app at scale was hard before Lambda. We talk today about the challenges of microservices and distributed systems, but those same challenges have existed for years, and many determined architects have hit on some solutions that work well enough.

The key problems that serverless solves are ease of scale and administration. You can deploy code up into a Lambda function practically instantly, without paying for servers while they are dormant.

Automatic scaling has been the revolution.

As a result, you see very traditional industries (like insurance and banking) go against their stereotypes; they’re embracing new technology and launching full arrays of digital products.

This is happening alongside a general explosion in new software use cases—things like Artificial Intelligence and IoT—that the serverless ecosystem adds even more fuel to.

This is because serverless development is fundamentally event-driven. You can trigger cloud functions from IoT sensors that in turn trigger other workflows. You can easily automate code-based responses to critical business events. 

There are just more tools available to make more things more easily.

<h1 class="sectionHeader" id="challenges">
  Challenges: What to consider before switching
</h1>

Serverless architectures are essentially cloud-based microservice architectures that are powered by serverless compute. Which is to say: some (though not all) of the traditional challenges of microservice architectures will still apply.

There are new tools being developed to handle these challenges, as we will discuss in a bit, but it’s important to get a realistic grasp of the problem space as it currently stands.

## Challenges of microservices

### Ops for distributed systems
Microservices, by definition, are fragmented and hyperspecific. Each one is separately designed, built and maintained.

The end result is a distributed system. Serverless architectures require operational expertise in logging, monitoring and debugging distributed systems, and operations teams must rise to meet these needs.

![distributedsystems](https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/learn/distributed+systems%401x.jpg)

### Ease of collaboration
Individual microservices are often mixed and remixed to form a variety of full-functioned applications. In your application, there might be one service that lets users add items to their cart and another that lets them pay. These services would be combined together to create a unified purchase experience.

Which also means: it’s useful when teams can share the services they’ve built with other teams. Finding and repurposing services (via service discovery) is key to saving time in the development process.

Currently, there are relatively few tools that do this well, though this is rapidly changing as providers move to be the first to solve serverless pain points.

<h1 class="sectionHeader" id="how-to-adopt">
  How to adopt: Serverless teams work differently
</h1>

The migration into serverless architectures will bring change not only for your infrastructure, but for the way your teams work together as well. We think that’s a good thing.

Here’s why: those changes are fundamentally about developer empowerment.

## Teams gain flexibility

### Developers take ownership
Because serverless architectures eliminate the need for infrastructure provisioning, there is no barrier to putting an idea down in code and testing it immediately. It empowers teams to try out and suggest new things.

So much of developers’ time is currently spent on mundane aspects of thinking about infrastructure (versus building out new features). The migration away from daily administrative tasks also frees up mental bandwidth for creativity and learning opportunities.

Conveniently, this comes just at a time when companies across the board are paying more and more attention to what makes employees fulfilled in their roles. 

Developers will be able to dedicate time to learning new skills not only related to serverless architectures, but to new languages and use cases in a rapidly-expanding field.

### DevOps gets creative
We still need DevOps. In fact, we need a reimagined DevOps.

As things currently stand, DevOps teams are bogged down with the mundane aspects of setting up infrastructure. Now they can focus on building better tools for tracking and monitoring dozens of functions and services.

![globaldevops](https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/learn/devops%401x.jpg)

## Next steps: accelerate your team’s serverless adoption
It’s one thing to build a greenfield project with a relatively new piece of technology. It’s another to migrate an existing team and product over to new paradigms.

Our mission at Serverless is to flatten the learning curve and get teams producing valuable services as soon as possible.

### Serverless Platform
The Serverless Platform is a single, end-to-end solution for delivering and maintaining serverless applications. 

Our tools start by helping you build, test and deploy the application to your cloud providers. Then, we offer ways for you to continue to manage the application’s full life cycle: monitoring, logging and debugging.

#### Serverless Framework
Serverless architectures also allow you to configure your entire infrastructure as code. The Serverless Framework is a Command Line Interface (CLI) that reduces this setup process to only a few lines of code.

It is provider-agnostic, and can be used with any cloud your teams choose, thus helping to alleviate vendor lock-in.

The Framework ties all of your application’s events and functions into a single configuration file, where you can see which functions do what, which events are triggered and which provider they are deployed to.

![felix](https://user-images.githubusercontent.com/6509926/32856105-74bb365a-ca09-11e7-9049-ca15cdc5da47.jpeg)

This enables developers without intimate knowledge of FaaS interfaces to get their applications deployed without too much up front investment.

#### Event Gateway
The Event Gateway is the backbone of your serverless application. It works by expressing all activity in your application as events, which you can then use as triggers for your functions.

Think of the Event Gateway as the centralized event hub, and the underlying communication fabric, for all of your events—regardless of which provider they are on.

You can take functions hosted on any cloud provider and subscribe them to any events—even those hosted on different cloud providers. It helps teams break away from vendor-specific tooling, and the single-vendor development environment that results.

![multi-cloud](https://user-images.githubusercontent.com/6509926/32856195-b47c56fc-ca09-11e7-9190-42ebd08028bb.png)

#### Dashboard
Above, we talked about one of the toughest challenges of microservices: facilitating team collaboration with service discovery and repurposing. The dashboard within the Serverless Platform is the first step we are taking to eliminate that challenge for serverless teams.

Developers can access the dashboard to see events and functions used throughout their organization, or for specific applications. Team members can then choose to tie their own events into services that are already deployed.

## The serverless movement
Microservices used to be prohibitively difficult, something that only a small pool of tech-advanced and resource-rich companies were able to instrument.

Not anymore. Serverless architectures democratize that power.

Even though the technology is still relatively new, developers are seeing serverless development as critical to their productivity. Their first question is: "Can we do this in a serverless way?" And if the answer is *no*, then their next question is: "How long until we can?"

We're only just beginning to see the new types of applications and workflows serverless can enable. Adoption is only picking up speed.
