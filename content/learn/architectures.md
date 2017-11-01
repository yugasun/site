---
title: What is a Serverless Architecture?
description: "Learn about the benefits and drawbacks of serverless architectures, and how you can operationalize them."
layout: Default
---

# Part 1: What is a serverless architecture?

## History: from monolith to microservice

In the beginning, there were monolithic architectures, where all applications were deployed as a single unit. These architectures were practical, but inflexible.

They tended to be tightly coupled, which meant applications scaled all at once or not at all. And then someone saw the monolith and said, let us break this up into loosely-coupled web services, and it was so.

From the rubble, service-oriented architectures (SOA) emerged. Developers could finally deploy different services at different times. They could scale high-traffic APIs faster than others. And it was good.

It was so good, that services got further broken up into microservices. During this time, ‘the cloud’ was also becoming widespread. Cloud took the hardware layer and used it to compute the database, the network—hardware itself became a service.

[IMAGE: evolution of mono > SOA > micro]

But microservices had plenty of their own challenges.

The most time-consuming part of maintaining any application was provisioning, maintaining and scaling the infrastructure; in that way, having an array of individual services created even more work.

The proliferation of services (and the interactions between them) made debugging difficult and time-consuming. Cross-service dependencies mandated a lot of attention during updates. Different services could use different technologies and languages, or have their own version control. How would they all stay in sync?

Microservices took micromanagement.

And then: the first serverless compute service was born. Cloud-based microservices could become serverless services.

[IMAGE: google trends chart]

## Solving the challenges of microservices

It was 2014 when AWS Lambda—the first serverless compute service—was launched. The provisioning, maintaining and scaling infrastructure piece of the microservices equation was about to become unnecessary.

In the beginning, we saw that monolithic services were broken up into microservices, which led to microservice architecture. And so it begins that the microservice architecture will be abstracted away into a serverless architecture.

### Serverless architectures as a data fabric

Serverless architectures, much like microservice architectures, are event-driven by design. But with serverless compute services (of which there are now many: AWS Lambda, Microsoft Azure, Google Cloud Functions, IBM Cloud Functions), developers are further incentivized to think in an event-driven way.

Serverless functions lay dormant in the cloud and wait to be triggered by an event. When the functions are asleep, they contract into a pinprick of action potential which you do not pay for. When they are called, they can scale as broadly as the cloud they are hosted on.

[IMAGE: serverless events]

What this means is that the scaling part of the equation is no longer your team’s responsibility. It happens automatically in the background.

### Application development gets smarter

Serverless architectures mean that developers are freed from having to think about the ins and outs of infrastructure. They aren’t roadblocked on projects due to pending provisioning and resources.

Rather, a developer’s entire day becomes pushing code, creating new features and focusing on solving business problems.

## Simplifying complexity

Serverless has opened the doors to a new type of application development experience. Building distributed systems has traditionally been prohibitively difficult and expensive—limited to a small pool of resource-rich companies.

Serverless democratizes this power. As with all new technologies, the edges are still rough and the tools have a lot of room to grow, but thousands of developers are already leveraging serverless architectures to deliver applications at record speed and cost.

Imagine, then, what the future holds. Things are rapidly getting even more robust and refined.

# Part 2: What does serverless computing mean for developers?

## Improved efficiency

Applications with a serverless infrastructure are fast to build, relatively easy to maintain and can operate on lower budgets. This is because so much of the daily workload is put onto the shoulders of the FaaS provider (the serverless compute service), and taken off developers’ plates.

With these increases in efficiency, serverless teams can build applications more effectively.

### Accelerated time to market

Serverless teams are able to go from concept to prototype in half the time of their server-full counterparts. This is because the serverless developer can immediately begin to deploy code in a test environment—without setup.

Once the code is ready to ship, it can be deployed from the same environment. [it is not necessary to evaluate versioning/compatibility of various products?]

Features built on serverless architectures have shorter feedback loops in general, which lowers barriers to fast iteration and sharpens competitive edge on product updates and new feature launches.

### More time focused on business value

Once the code is deployed, it does not have to be maintained; versioning and scaling fall back to the FaaS provider. Serverless teams get to eliminate one of the most routine and mundane parts of their workflow.

This frees up additional time that can be used to experiment with new features, or further training and skill set growth.

Along the same lines, scoping smaller chunks of code (aka, functions) allows for tighter, smaller, more agile teams. These teams get to own applications from start to finish, developing and deploying them on their own.

### Stretched value-to-cost ratio

Because serverless functions lie dormant until they are called by an event, you are only responsible for the amount of runtime you use; serverless computing utilizes a pay-per-execution model.

This further means that it is no longer necessary to provision resources just in case they need to be used. Serverless infrastructure expands and contracts as you need it to, and you only pay for the runtime you use.

[IMAGE: value to cost ratio - pre to post serverless]

### Allows polyglot teams to develop

In current project-planning paradigms, the first discussion is about which language the new application should be built in. Language choice isn’t about what suits the project best, but rather which resources are already on-hand and which languages developers already know.

With serverless, language isn’t a bottleneck. Applications can be multi-lingual, which eliminates a lot of barriers for developers to center around a project and get it shipped.

[IMAGE: python/C#/js -> feed into same application]

## An opening for new types of applications

The thing to know is, any web app at scale was hard before Lambda. We talk today about the challenges of microservices and distributed systems, but those same challenges have existed for years, and many determined architects have hit on some solutions that work well enough.

The key problems that serverless solves is ease of scale. You can deploy code up into a Lambda function practically instantly, without paying for servers while they are dormant. Scale has been the revolution.

As a result, you see very traditional industries (like insurance and banking) go against their stereotypes; they’re embracing new technology and launching full arrays of digital products.

This is happening alongside a general explosion in new software use cases—things like Artificial Intelligence and IoT—that the Serverless movement is adding even more fuel to. More people are just making more things.

# Part 3: What to consider before switching

Serverless architectures are essentially cloud-based microservice architectures that are powered by serverless compute. Which is to say: some (though not all) of the traditional challenges of microservice architectures will still apply.

There are new tools being developed to handle these challenges, as we will discuss in a bit, but it’s important to get a realistic grasp of the problem space as it currently stands.

## Challenges of microservices

### Ops for distributed systems

Microservices, by definition, are fragmented and hyperspecific. Each one is separately designed, built and maintained.

The end result is a distributed system. Serverless architectures require operational expertise in logging, monitoring and debugging distributed systems, and operations teams must rise to meet these needs.

[IMAGE: distributed system]

### Ease of collaboration

Individual microservices are often mixed and remixed to form a variety of full-functioned applications. In your application, there might be one service that lets users add items to their cart and another that lets them pay. These services would be combined together to create a unified purchase experience.

Which also means: it’s useful when teams can share the services they’ve built with other teams. Finding and repurposing services (via service discovery) is key to saving time in the development process.

Currently, there are relatively few tools that do this well, though this is rapidly changing as providers move to be the first to solve serverless pain points.

# Part 4: Serverless teams work differently

The migration into serverless architectures will bring change not only for your infrastructure, but for the way your teams work together as well. We think that’s a good thing.

Here’s why: those changes are fundamentally about developer empowerment.

## Teams gain flexibility

### Developers take ownership

Because serverless architectures eliminate the need for infrastructure provisioning, there is no barrier to putting an idea down in code and testing it immediately. It empowers teams to try out and suggest new things.

So much of developers’ time is currently spent on mundane aspects of thinking about infrastructure (versus building out new features). The migration away from daily administrative tasks also frees up mental bandwidth for creativity and learning opportunities.

Conveniently, this comes just at a time when companies across the board are paying more and more attention to what makes employees fulfilled in their roles. 

Developers will be able to dedicate time to learning new skills not only related to serverless architectures, but to new languages and use cases in a rapidly-expanding field.

### Devops gets creative

We still need devops. In fact, we need even better devops.

As things currently stand, devops teams are bogged down with the mundane aspects of setting up infrastructure. Now they can focus on building better tools for tracking and monitoring dozens of functions and services.

[IMAGE: ???]

## Next steps: accelerate your team’s serverless adoption

It’s one thing to build a greenfield project with a relatively new piece of technology. It’s another to migrate an existing team and product over to a new paradigms.

Our mission at Serverless is to flatten the learning curve and get teams producing valuable services as soon as possible.

### Serverless Platform

Serverless is a single, end-to-end solution for delivering and maintaining serverless applications. 

Our tools start by helping you build, test and deploy the application to your cloud providers. Then, we offer ways for you to continue to manage the application’s full life cycle: monitoring, logging and debugging.

#### Serverless Framework

Serverless architectures also allow you to configure your entire infrastructure as code. The Serverless Framework is a Command Line Interface (CLI) that reduces this setup process to only a few lines of code.

It is platform agnostic, and can be used with any cloud provider your teams choose, thus preventing vendor lock-in.

The Framework ties all of your application’s events and functions into a single configuration file, where you can see which functions do what, which events are triggered and which provider they are deployed to.

[IMAGE: CLI???]

This enables developers without intimate knowledge of FaaS interfaces to get their applications deployed without too much up front investment. 

#### Event Gateway

The Event Gateway is the backbone of your serverless application. Its works by expressing all data in your application as events, which you can then use as triggers for your functions.

Most importantly, the Event Gateway allows you to take functions hosted on any cloud provider and subscribe them to any events—even those hosted on different cloud providers. It helps teams break away from vendor-specific tooling, and the single-vendor development environment that results.

[IMAGE: multi-cloud]

#### Dashboard

Above, we talked about one of the toughest challenges of microservices: facilitating team collaboration with service discovery and repurposing. The dashboard within the Serverless Platform is the first step we are taking to eliminate that challenge for serverless teams.

Developers can access the dashboard to see events and functions used throughout their organization, or for specific applications. Team members can then choose to tie their own events into services that are already deployed.

## The serverless movement

Microservices used to be prohibitively difficult, something that only a small pool of tech-advanced and resource-rich companies were able to instrument.

Not anymore. Serverless architectures democratize that power.

Even though the technology is still relatively new, developers are seeing serverless development as critical to their productivity. Their first question is: "Can we do this in a serverless way?" And if the answer is *no*, then their next question is: "How long until we can?"

We're only just beginning to see the new types of applications and workflows serverless can enable. Adoption is only picking up speed.
