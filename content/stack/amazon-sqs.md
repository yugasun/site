---
title: 'Amazon SQS (from AWS) - The Ultimate Guide'
description: 'Are you looking to use Amazon SQS for the first time? This guide covers what SQS is, how it works with other AWS services, its use-cases, disadvantages, benefits, pricing, limits, alternatives & more.'
layout: Learn
useLearnNav: false
---

Looking to learn more about Amazon SQS before using it in production? This guide is for you. We’ll start by describing what SQS is and how it works, we’ll cover the benefits and drawbacks of using SQS, we’ll give an overview of SQS pricing (including a pricing example), and we’ll share the list of alternatives to SQS for your consideration.

At the end of the guide, we’ve supplied helpful links to resources that will help you learn more about SQS.

<br/>
<h4>Table of Contents</h4>

* [What is Amazon SQS?](#what)
* [How does Amazon SQS work?](#how-does-sqs-work)
* [What makes Amazon SQS an essential part of the Serverless ecosystem?](#architecture)
* [How does Amazon SQS integrate with other AWS services?](#integrations)
* [How does SQS work with the Serverless Framework?](#serverless)
* [Benefits of using Amazon SQS](#benefits)
* [Disadvantages](#disadvantages)
* [Performance](#performance)
* [What is the use of SQS?](#use-cases)
* [SQS vs SNS](#sqs-vs-sns)
* [Limitations](#limits)
* [Pricing](#pricing)
* [Alternatives](#alternatives)
* [FAQ](#faq)
* [Resources & Getting Started](#resources)

<br/>
<br/>

<h3 id="what">What is Amazon SQS?</h3>

[Amazon Simple Queue Service (SQS)](https://aws.amazon.com/sqs/) is a managed message queue service offered by Amazon Web Services (AWS). It provides an HTTP API over which applications can submit items into and read items out of a queue. The queue itself is fully managed by AWS, which makes SQS an easy solution for passing messages between different parts of software systems that run in the cloud.

<br/>
<br/>

<h3 id="how-does-sqs-work">How does SQS work?</h3>

SQS provides an API endpoint to submit messages and another endpoint to read messages from a queue. Each message can only be retrieved once, and you can have many clients submitting messages to and reading messages from a queue at the same time.

The messages that SQS handles can be unformatted strings, XML or JSON. Because SQS guarantees “exactly once” delivery, and because you can concurrently submit messages to and read messages from a given queue, SQS is a good option for integrating multiple independent systems.

You might well be asking: why use SQS if you can have an internal HTTP API for each service? While HTTP APIs are an accessible way to expose software systems to external users, it’s not the most efficient mechanism when it comes to integrating purely internal systems. A messaging queue is more lightweight. In particular, SQS also handles things like automated retries, preserving queue state across multiple availability zones in AWS, and keeping track of expiration timeouts on all messages.

<br/>
<br/>

<h3 id="architecture">Why is SQS an essential part of the Serverless ecosystem?</h3>

In an optimal Serverless architecture, when using multiple microservices, you want your services to be independent from each other. This means that they use separate databases and even run in different network segments but can still communicate with each other. The distributed systems term for this kind of independence is a *decoupled system*. When services are decoupled, you can’t pass messages, for example, by having them both write to a shared database. The available options under this model are: implement an API in each service, or use message queues to pass information between services.

While in certain cases HTTP and gRPC APIs might be a good choice for service intercommunication, message queues tend to be a more lightweight approach and conducive to faster iteration.

And aside from being a queue system that helps you iterate faster, SQS is also fully managed. This makes it a great choice for Serverless applications running in AWS because:

- Many Serverless applications already rely on managed services to reduce maintenance load on the team developing the applications, making SQS’s managed model a good fit.
- SQS can run in the same regions in AWS as your applications, which means high network throughput and low latency. This results in fast message delivery times using SQS.
- SQS provides a simple HTTP API which is easy to implement using the [AWS SDK](https://aws.amazon.com/sdk-for-node-js/).

These characteristics make SQS a popular choice for Serverless developers and, consequently, an important part of the Serverless ecosystem.

<br/>
<br/>

<h3 id="integrations">How does SQS integrate with other AWS services?</h3>

Most interesting for Serverless developers is SQS‘s integration with Amazon Lambda: SQS can act as an AWS Lambda event source. When configured, every SQS message triggers a Lambda function run that processes a batch of SQS messages.

Another useful integration is with [SNS](https://aws.amazon.com/sns/): an SQS queue can subscriber to an SNS topic. We cover the differences between SQS and SNS below, in the *When to use SQS vs. SNS* section.

SQS also provides standard integrations for monitoring and debugging SQS queues using Amazon CloudWatch and AWS X-Ray.

Serverless developers can manually integrate an SQS queue with any other AWS service (or a third-party service) by writing code that uses the AWS SDK to submit messages to SQS and read them from there, or by using the SQS API directly.

<br/>
<br/>

<h3 id="serverless">How does SQS work with the Serverless Framework?</h3>

In the Serverless Framework, the main way to use SQS is as an event source for a Serverless function. Use the [](https://serverless.com/framework/docs/providers/aws/events/sqs/)`[sqs](https://serverless.com/framework/docs/providers/aws/events/sqs/)` [event](https://serverless.com/framework/docs/providers/aws/events/sqs/) in your Serverless applications to trigger an execution of the function when there are messages available in an SQS queue.

You can also define the configuration of your SQS queues as code using the [Resources functionality](https://serverless.com/framework/docs/providers/aws/guide/resources/) of the Serverless Framework.

Serverless applications can also use the [](https://aws.amazon.com/sdk-for-node-js/)[AWS SDK for Node.js](https://aws.amazon.com/sdk-for-node-js/) to conveniently write to and read from SQS queues.

<br/>
<br/>

<h3 id="benefits">The benefits of using SQS</h3>

For Serverless developers, using SQS generally provides a wealth of benefits, which you can read about below.

**Scalability**
Your SQS queues scale to the volume of messages you’re writing and reading. You don’t need to scale the queues; all the scaling and performance-at-scale aspects are taken care of by AWS.

**Pay for what you use**
When using SQS, you only get charged for the messages you read and write (see the details in the Pricing section). There aren’t any recurring or base fees.

**Ease of setup**
Since SQS is a managed service, so you don’t need to set up any infrastructure to start using SQS. You can simply use the API to read and write messages, or use the SQS <-> Lambda integration.

**Options for Standard and FIFO queues**
When creating an SQS queue, you can choose between a standard queue and a FIFO queue out of the box. Both of these queue types can be useful for different purposes.

**Automatic deduplication for FIFO queues**
Deduplication is important when using queues, and for FIFO queues SQS will do the work to remove any duplicate messages for you. This makes FIFO queues on SQS suitable for tasks where it’s critical to have each task done exactly once.

**A separate queue for unprocessed messages**
This feature of SQS is useful for debugging. All messages that couldn’t be processed are sent into a "dead-letter" queue where you can inspect them. This queue has all the usual integrations enabled, so you can subscribe to it using an AWS Lambda event, for example, to send a notification when an item can’t be processed.

<br/>
<br/>

<h3 id="disadvantages">Disadvantages of using SQS</h3>

Using SQS can also create challenges for Serverless developers, as described hereafter.

**High cost at scale**
With pay per use pricing, if the number of messages you send is very high, your SQS bill can be quite significant. Part of SQS pricing is data transfer charges, and those can add up if you send larger messages, or if you process messages from outside the main AWS region in which the queue is located. In some cases, when running at scale with millions of messages processed every day, the cost of using SQS might be higher than the cost of operating your own queue system, even including the overhead to manage your own solution.

**Lack of support for broadcast messages**
With its “exactly once” delivery, SQS doesn’t support a way for multiple entities to retrieve the same message, making SQS not so useful for one-to-many broadcasts.

To address this, in the cases where one-to-many delivery is important, developers can use SQS alongside SNS.

**Reduced control over performance**
When running a message queue system at scale, something you may well end up wanting to do is to fine-tune its performance to suit your needs. With SQS this isn’t an option: the service is fully managed, and you don’t get to look under the hood.

<br/>
<br/>

<h3 id="performance">Amazon SQS performance: what to expect</h3>

From a technical standpoint, SQS supports unlimited throughput per queue. There are account-level limits on throughput per queue, but you can request an increase if your usage grows. In general, the performance of your SQS queue is chiefly limited by the latency between the queue and its clients. If your queue and its clients are located in the same AWS region, your latency will be quite low but not zero.

To illustrate this, let’s assume that you’re using SQS from AWS Lambda. SQS has an HTTP API, and even if function and queue are in the same region, making a request will still take a few milliseconds. This millisecond-level latency is the primary performance limitation in SQS.

As a workaround, [AWS recommends](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-throughput-horizontal-scaling-and-batching.html) scaling queue access horizontally by having multiple instances of a function reading and writing at the same time.

<br/>
<br/>

<h3 id="use-cases">What is SQS used for?</h3>

The most common ways to use SQS, and of course other messaging systems, in cloud applications are:

**Decoupling microservices**. In a microservice architecture, messages represent one of the easiest ways to set up communication between different parts of the system. If your microservices run in AWS, and especially if those are Serverless services, SQS is a great choice for that aspect of the communication.

**Sending tasks between different parts of your system**. You don’t *have* to be running a microservices-oriented application to take advantage of SQS. You can also use it in any kind of application that needs to communicate tasks to other systems.

**Distributing workloads from a central node to worker nodes**. You can frequently find messaging systems in the flows of distributed large workloads like map-reduce operations. For these kinds of operations, it’s essential to be able to maintain a queue of all the tasks that need to be processed, efficiently distribute the tasks between the machines or functions doing the work, and guarantee that every part of the work is only done once.

**Scheduling batch jobs**. SQS is a great option for scheduling batch jobs for two reasons. First, it maintains a durable queue of all the scheduled jobs, which means you don’t need to keep track of the job status—you can rely on SQS to pass the jobs through and to handle any retries, should an execution fail and your batch system returns the message to the queue. Second, it integrates with AWS Lambda; if you’re using AWS Lambda to process the batch jobs, SQS automatically launches your Lambda functions once the data is available for them to process.

<br/>
<br/>

<h3 id="sqs-vs-sns">What’s the difference between SNS and SQS?</h3>

**SQS** is a queue from which your services *pull* data, and it only supports exactly-once delivery of messages. If no workers pull jobs from SQS, the messages stay in the queue. **SNS** is a publisher-subscriber system that *pushes* messages to subscribers. If there are no subscribers to an SNS topic, a given message is lost.

Think of SNS notifications as a subscription to the New York Times. Everyone who is subscribed to the newspaper gets a copy. You don’t get the copies sent out before you subscribed. SQS notifications, on the other hand, are like tasks in a task tracking system: for example, all the articles to be written for an issue of the New York Times. Only one person is allowed to work on the same article at a time, and SQS maintains a list of all as yet unfinished tasks, regardless of whether there are writers available.

**SQS is good for pulling messages.** Architectures that use polling and are compatible with exactly-once delivery should use SQS.

**SNS is good for pushing messages.** Architectures that need information pushed to them via an API or another interface should use SNS.

It is possible to use SQS and SNS together. This can be practical if you want multiple systems to process the same events.

<br/>
<br/>

<h3 id="limits">Amazon SQS limits</h3>

Amazon SQS has a few service limits that you should consider before using SQS in production:

**Queue delay**. Minimum 0 seconds, maximum 15 minutes. The built-in delay functionality in SQS queues exists to allow inserting a pause between when a message is produced and when it’s visible in the queue. If you need that delay to be longer than 15 minutes, SQS can’t offer a delay that long, so you’ll need to implement the delay in the system producing the messages before it pushes them to SQS.

**In-flight messages**. SQS has a maximum of 120,000 messages (standard queue) or 20,000 messages (FIFO queue) that can be in flight: in other words, messages that have been received by a consumer but not yet removed from the queue. In most well-architected systems, it would be hard to reach this number of in-flight messages unless you are in an outage scenario. Before using SQS in production, determine if this could become an issue for you, especially in edge cases and possible error states for your application.

**Message attributes**. Each message is allowed to have a maximum of 10 metadata attributes. If you’d like to have more metadata than that, consider including it in the message itself rather than as a field attached to the message.

**Message content**. Messages you submit to SQS queues can be in plain text (unformatted) or in JSON or XML format. Other formats aren’t supported.

**Message retention**. Minimum: 60 seconds. Maximum: 14 days. If you think you might need shorter or longer retention times, SQS might not work for you.

**Maximum message size** is 256KB. If you need to send larger messages, consider uploading the larger message to S3 and including a reference to the S3 object as part of the message.

**Message visibility timeout**. You might be wondering 'What is SQS visibility timeout?' The visibility timeout is a configurable time period during which SQS temporarily "hides" a message that has been received by a consumer to avoid its being processed by other consumers. After the visibility timeout expires, if the message hasn’t been removed from the queue by the consumer that received it, it becomes visible to other queue consumers. The default visibility timeout is 30 seconds, the minimum is 0 seconds and the maximum is 12 hours.

Consider all these limits for your specific use case, and take future growth into account, especially if you are building a growth-oriented system.

<br/>
<br/>

<h3 id="pricing">Amazon SQS pricing</h3>

As part of the AWS free tier, all AWS accounts get 1 million SQS requests for free. This applies even if your AWS account is more than 12 months old.

Beyond the free tier, the SQS pricing is based on the following components:

| **Aspect**                                    | **Pricing**       | **Comment**                                                                                                                                                                                                                                                                                 |
| --------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Standard queue requests                       | $0.40/1M requests | Every action in SQS counts as a request, from submitting a message to listing the messages in a queue to deleting a message. Each request can contain up to 10 messages. Each 64KB of the request payload is billed as one request, so a 256KB request is actually billed as four requests. |
| FIFO queue requests                           | $0.50/1M requests | The same as in standard queues: each action counts as a request, each request can contain up to 10 messages, and each 64KB of the request payload is billed as its own request.                                                                                                             |
| Data transfer: SQS <-> EC2 in the same region | Free              | If SQS queues and EC2 machines are in different regions, public internet data transfer charges apply (see below).                                                                                                                                                                           |
| Data transfer: public internet                | $0.09/GB          | Data transfer is tracked monthly. The cost goes down to $0.085 per each additional GB after 10TB of data transfer in a given month, $0.07/additional GB after 50TB, and $0.05/additional GB after 150TB/month.                                                                              |

**Sample pricing scenario**
Imagine that you are running an application with 10,000 daily users. Each user on average performs 100 API calls per day, and each API call results in 50 messages being sent between your internal systems. Let’s assume that you are using a standard queue and you are batching all the requests—you submit five messages at a time to SQS. These five messages together are 64KB in size. Let’s also assume that you are submitting and consuming all the SQS messages from EC2 and AWS Lambda in the same region as the SQS queue.

In this scenario, you would get charged the following amount for SQS:

- Requests: 10,000 users * 100 API calls * 50 messages * 1/5 request/message = 10,000,000 requests per day
- Total charged per month: 30 days * 10,000,000 requests/day * $0,40/1M requests = $120/month

**Note**: There are no data transfer fees for any data passing between SQS and EC2 or AWS Lambda. However, if some of your queue consumers are in a different region, you could end up incurring high data transfer charges. For example, if 10% of your requests were coming from a different AWS region:

- Total data transfer: 64KB/5 messages * 50 messages/API call * 100 API calls * 10,000 users = 640GB/day
- Data transfer between regions: 10% * 640GB/day = 64GB/day
- Monthly data transfer charges: 64GB/day * 30 days * $0.09/GB = $172.8/month

<br/>
<br/>

<h3 id="alternatives">Amazon SQS alternatives</h3>

SQS is not the only queue system out there, though it’s the only one of this particular type that AWS offers. Some, if not all, of the tasks you can accomplish with SQS can also be solved with the following alternative services and tools.

**Amazon MQ**
[Amazon MQ](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/welcome) is a managed queue service from AWS which is based on [Apache ActiveMQ](http://activemq.apache.org/). Its architecture isn’t as flexible as SQS, and in order to use the Amazon MQ queues you need to use ActiveMQ libraries. On the other hand, being based on ActiveMQ means that Amazon MQ is compatible with any application that already uses ActiveMQ without any code changes.
For existing applications that use ActiveMQ, it’s a good way to move the queue to the cloud and reduce the amount of services you need to maintain your infrastructure. 

So if you currently use ActiveMQ, using Amazon MQ can be a good option. If you don’t use ActiveMQ, however, SQS is likely a better fit, as it has a simpler API which makes it easier to work with, is more cost-effective with its pay-per-use pricing model, and integrates better with other AWS services like AWS Lambda.

**Amazon Kinesis Data Streams**
[Amazon Kinesis Data Streams](https://aws.amazon.com/kinesis/data-streams) is a managed AWS service that’s designed for high-volume near-real-time data intake. Kinesis Data Streams can be a good choice if you are producing large amounts of data that need to be processed in batches in near real time. For example, you could use Kinesis Data Streams to collect all the events happening in your systems for analytics purposes and process them with Lambda functions.

While Kinesis Data Streams can scale to hundreds of data sources and gigabytes of data processed per second, it is often harder to use it for simpler tasks, such as sending messages between different parts of your systems, in comparison with SQS. Kinesis Data Streams requires using special libraries for both consumers and producers of streams, compared to the simple HTTP API in SQS. Kinesis Data Streams also requires you to take various aspects of performance into account by configuring the number of shards in each Kinesis stream.

**Apache Kafka**
[Apache Kafka](https://kafka.apache.org/) is an open-source stream processing system. Its main purpose, similar to AWS Kinesis, is to process large amounts of data in near real time. It has the same advantages and disadvantages as Kinesis Data Streams when compared with SQS: from one side, it is able to process very large number of messages; from the other side, it requires much more configuration and maintenance and is harder to use for producers and consumers compared to SQS.

**RabbitMQ**
[RabbitMQ](https://www.rabbitmq.com/) is a popular open source message broker. It offers all of the same functionality as SQS and more: for example, it supports various authentication mechanisms for RabbitMQ queues, provides the option of using “lazy queues” that can handle a backlog of millions of messages, and supports queue protocols like JMS and AMQP.

Compared to SQS, RabbitMQ’s performance can be better, especially at high loads, and RabbitMQ is also more configurable and flexible. At the same time, RabbitMQ is a self-hosted solution that you need to deploy and maintain yourself. SQS has fewer features and is less flexible but is a fully managed solution.

If your queue system is something you plan to heavily rely on in your infrastructure, and if you are going to require very fast performance from it at very high queue loads, it may be worth hosting your own RabbitMQ installation. Go with SQS if you’re looking to have the queue system managed for you and are OK with fewer features and slightly higher latency in queue operations.

<br/>
<br/>

<h3 id="faq">Amazon SQS FAQ</h3>

**How large can SQS queues be?**
Amazon SQS queues support an unlimited backlog size. While there are limits on *in-flight* messages, i.e., messages that have been received by a consumer of the queue but not yet deleted from the queue, there aren’t any limits on how large can the backlog be for items that haven’t yet been received by consumers.

**How long can messages live in a SQS queue?**
You can configure the message retention period for each SQS queue individually. The retention period may range from 60 seconds to 14 days.

**Can SQS span availability zones?**
Yes. By default, SQS queues are distributed between availability zones in a single region to guarantee that queue data is always accessible. It’s not possible to have SQS queues span multiple *regions*, however.

<br/>
<br/>

<h3 id="resources">Using SQS with Serverless Framework</h3>

If you’d like to get started with SQS, check out the following guides and blog posts for examples of using SQS with the Serverless Framework:

- [Using AWS Lambda with SQS queues](https://serverless.com/blog/aws-lambda-sqs-serverless-integration/)[:](https://serverless.com/blog/aws-lambda-sqs-serverless-integration/) [Serverless blog](https://serverless.com/blog/aws-lambda-sqs-serverless-integration/)
- [How Reuters replaced websockets with Amazon Cognito and SQS](https://serverless.com/blog/how-reuters-replaced-websockets-with-amazon-cognito-and-sqs/)[:](https://serverless.com/blog/how-reuters-replaced-websockets-with-amazon-cognito-and-sqs/) [Serverless blog](https://serverless.com/blog/how-reuters-replaced-websockets-with-amazon-cognito-and-sqs/)
- [Deploying a scalable API and backend with Serverless Framework, Express, Node.js, and Amazon SQS](https://serverless.com/blog/serverless-microservice/)[:](https://serverless.com/blog/serverless-microservice/) [Serverless blog](https://serverless.com/blog/serverless-microservice/)

Other resources:

- [SQS event for the AWS provider](https://serverless.com/framework/docs/providers/aws/events/sqs/)[:](https://serverless.com/framework/docs/providers/aws/events/sqs/) [Serverless Framework documentation](https://serverless.com/framework/docs/providers/aws/events/sqs/)
- [Amazon SQS documentation](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html)