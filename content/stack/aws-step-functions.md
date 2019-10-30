---
title: 'AWS Step Functions - The Ultimate Guide'
description: 'Wondering what is AWS Step Functions and how it fits into the serverless ecosystem? This guide covers that and much more including how it works, its benefits, drawbacks, limits, pricing/cost, use cases and much more.'
layout: Learn
useLearnNav: false
---

Interested in learning whether you should use AWS Step Functions in production? You’ve come to the right place. In this guide, we’ll walk through the details of how AWS Step Functions works, why it’s an important part of the Serverless ecosystem, and what the pros and cons are for using it in various situations.

<br/>
<h4>Table of Contents</h4>

* [What is AWS Step Functions?](#what)
* [How does AWS Step Functions work?](#how-does-it-work)
* [Why is AWS Step Functions an essential part of the Serverless ecosystem?](#serverless-ecosystem)
* [Integration with other AWS services](#integrations)
* [AWS Step Functions w/ Serverless Framework](#serverless-framework)
* [Benefits](#benefits)
* [Drawbacks](#drawbacks)
* [Use Cases](#use-cases)
* [Limits](#limits)
* [Pricing](#pricing)
* [When to use Step Functions vs DIY orchestration](#compare)
* [Alternatives](#alternatives)
* [Try it out](#demo)

<br/>
<br/>

<h3 id='what'>What is AWS Step Functions?</h3>

AWS Step Functions is a service provided by Amazon Web Services that makes it easier to orchestrate multiple AWS services to accomplish tasks. Step Functions allows you to create steps in a process where the output of one step becomes the input for another step, all using a visual workflow editor.

Step Functions provides quite a bit of convenient functionality: automatic retry handling, triggering and tracking for each workflow step, and ensuring steps are executed in the correct order. Although that list might at first seem unspectacular, it turns out it’s not at all trivial to ensure all these things happen correctly in workflows that contain dozens of steps and hundreds of parallel executions. Step Functions takes on a lot of the work that previously had to be done in your application.

<br/>
<br/>

<h3 id='how-does-it-work'>How does AWS Step Functions work?</h3>

Under the hood, Step Functions is [a state machine](https://en.wikipedia.org/wiki/Finite-state_machine), and its primary abstractions are called states. A Step Functions configuration constitutes a map of all possible steps and the transitions between them.

The states and their transitions are defined using the Amazon States Language. This language is JSON-based and is proprietary to Amazon. You can see some examples of Amazon States Language configurations [in the Step Functions docs](https://docs.aws.amazon.com/en_pv/step-functions/latest/dg/concepts-amazon-states-language.html).

<br/>
<br/>

<h3 id='serverless-ecosystem'>Why is AWS Step Functions integral to the Serverless ecosystem?</h3>

When building Serverless applications, developers usually want to scale the application according to their growing workloads, while keeping the cost low and allowing multiple teams to work simultaneously on different parts of the application. In the Serverless model, one best practice to achieve these goals is to separate the business logic of an application into a set of decoupled services. A large Serverless application can consists of tens or hundreds of Serverless services.

The challenge comes when such a large number of services all need access to various parts of a shared state. To operate these services effectively, the teams must also be able orchestrate the flow of data through all application services in a single place, and this is exactly what AWS Step Functions handles. Step Functions has become a crucial piece of the Serverless ecosystem because of all the state and data management needed to keep Serverless systems working effectively at scale.

<br/>
<br/>

<h3 id='integrations'>How does AWS Step Functions integrate with other AWS services?</h3>

The Amazon States Language used in Step Functions allows invocation of some AWS services directly within its state definitions. The services you can use directly from Step Functions include:

* Task execution—with synchronous or asynchronous execution models (wait vs. callback):
  * Invoking Lambda functions
  * Running AWS Batch jobs
  * Running a task in Amazon Elastic Container Service (ECS)
* Databases:
  * Inserting or fetching an item from Amazon DynamoDB
* Messages and notifications:
  * Publishing a topic in Amazon SNS
  * Sending a message in Amazon SQS
* Invoke another Step Functions workflow

It is also possible to integrate a Step Function with any service, AWS or non-AWS, by implementing your own connector inside an AWS Lambda function.

<br/>
<br/>

<h3 id='serverless-framework'>How does AWS Step Functions work with the Serverless Framework?</h3>

You can use Step Functions with the Serverless Framework in two ways. First, [by using the Serverless Step Functions plugin](https://github.com/horike37/serverless-step-functions), you can include Amazon State Language for Step Functions in your `serverless.yml` file and deploy it using the Serverless Framework.

Second, you can use the Serverless Framework [to create the AWS Lambda-based services](https://serverless.com/framework/docs/providers/aws/guide/intro/) that Step Functions will orchestrate.

<br/>
<br/>

<h3 id='benefits'>Benefits of using AWS Step Functions</h3>

AWS Step Functions makes the life of a Serverless developer easier by allowing you to quickly create complex sequences of tasks in AWS, while taking on the error handling and retry logic and allowing you to decouple your application’s business logic from its orchestration logic. Below, we go over the specifics of how Step Functions can help you.

**Quickly create complex sequences of tasks**
Orchestrating a sequence of ten individual Serverless applications, managing their retries, and debugging any failures can be extremely challenging. As you add even more functions, the complexity of managing them grows exponentially.

With its graphical interface and built-in operational controls, Step Functions manages the sequencing of the tasks for you and removes a large operational burden from your team.

**Manage state between executions of various stateless functions**
For many Serverless workflows, setting up queues and databases for communication between all the Serverless services can be time-consuming and error-prone, not to mention that not all use cases call for a real database or a real queueing system.

Step Functions makes it easy to set up state management early on, and it continues to work well as your application scales and you add more services into the mix.

**Decouple application workflow logic from business logic**
Here we have another best practice of Serverless development. Adding workflow logic to applications that should only handle business logic increases the complexity of the applications and can easily generate issues. In addition, managing state separate from business logic allows developers to retain clarity when working on a Serverless system.

**More efficient workflows with parallel executions**
When you’re managing the state of various functions yourself, it can be challenging to obtain high performance from the system. Some orchestration pieces might only be able to process one task at a time, which could slow down the entire application.

Step Functions allows you to have many parallel executions of a workflow at the same time, making sure that performance scales with your application’s load.

<br/>
<br/>

<h3 id='drawbacks'>Drawbacks of using AWS Step Functions</h3>

All of the aforementioned benefits can provide high value for many teams and use cases,  but before you commit to running Step Functions in production, you should also consider the potential drawbacks of using it for your application. While AWS Step Functions solves many problems for the Serverless community, transitioning all your orchestration layers to Step Functions isn’t necessarily the right move for you. Here are a few things you should be aware of before beginning to use Step Functions in production.

**Configuration with the Amazon States Language**
Amazon States Language is quite complex; its syntax is based on JSON and therefore optimized for machine readability instead of readability by humans. Learning the language can be challenging and, because it is proprietary to Amazon, the skills you acquire won’t be applicable anywhere but in an AWS Step Functions context.

**Decoupling business logic from task sequencing can make your code harder to understand**
While decoupling services from the orchestration layer can make things more scalable and easier to operate, the developers working on the system will need to learn an entirely separate service to be able to work with AWS Step Functions. This can be a challenge for your team, especially those who are new to your environment.

**Vendor lock-in**
The Amazon States Language is proprietary and can only be used on AWS. Therefore, if you decide to migrate to a different cloud provider, you’ll need to re-implement the orchestration layer or replace it with another vendor’s alternative.

<br/>
<br/>

<h3 id='benefits'>What is AWS Step Functions good for?</h3>

Here are some use cases where AWS Step Functions’ can help boost your team’s productivity.

**Data ETLs**
The extract-transform-load (ETL) scripts that are, for example, moving the data between your production systems and your data warehouse can be automated with AWS Step Functions. While Step Functions itself provides no easy way to plug into most databases, AWS Lambda can connect to any database you might have. You can then orchestrate multiple Lambda functions to create your ETL pipeline.

**Data processing**
Other kinds of data processing also make a good fit with AWS Step Functions, especially if both source and destination are located inside AWS. Step Functions makes it easy to interconnect multiple data processing steps, including ones made using AWS Lambda functions, Simple Queue Service and Simple Notification Service.

**Serverless workflow orchestration**
The fundamental value of AWS Step Functions lies in the easy orchestration of applications that require interconnecting multiple Serverless functions. If you have business processes that require a combination of multiple decoupled Serverless applications to produce their end result, Step Functions could be the right choice for easy orchestration.

<br/>
<br/>

<h3 id='limits'>AWS Step Functions limits</h3>

AWS Step Functions has a number of limits per AWS account and per workflow. Most restrictions can be increased by submitting a limit increase request in the AWS Support Center. However, a few of these limits are hard limits and can’t be increased:

* **25,000 item execution history in a workflow.** This means that your workflow can’t have more than 25,000 state transitions in a single execution. For most use cases, this won’t be an issue. If you do have very long*running executions that may reach such a high number of state transitions, you’ll need to consider splitting your workflow into multiple workflows to stay under the 25,000 transitions limit.

* **1MB maximum request size.** A request to AWS Step Functions can’t have a payload larger than 1MB. If you’d like to use larger files as inputs to a Step Functions workflow, consider using [Amazon S3](https://aws.amazon.com/s3/) to store the files and use the S3 URIs as inputs to further operations.

* **Spikes in AWS API requests caused by a workflow.** AWS may throttle AWS API requests that come in spikes. A sustained rate of requests will cause no trouble, but if some parts of your workflow use the AWS API inefficiently, a sudden flood of requests from your workflow might trigger the API limits. You can work around this by, if possible, grouping requests to the same AWS service into a single API call, or by introducing timeouts between operations.

* **50 tags per resource.** You can’t apply more than 50 tags to any of the AWS Step Functions resources. If this presents an issue for you, consider changing your tagging scheme to stay under the limit.

Other limits, such as the number of state machines per account and the number of concurrent executions, can be increased by request via the AWS Support Center.

<br/>
<br/>

<h3 id='pricing'>AWS Step Functions pricing</h3>

The AWS free tier includes 4,000 AWS Step Functions state transitions per month. This part of the free tier doesn’t expire, so you can take advantage of it even if your AWS account isn’t brand new.

Beyond the free tier, Step Functions is priced at $0.025 per 1,000 state transitions.

It may be hard to visualize exactly what that would that mean for your monthly AWS bill, so we include a few example pricing scenarios below.

**Sample pricing scenario**
Let’s assume that you have a workflow that converts the images for your site into four different sizes, that the workflow consists of ten state transitions on average for each image, and that around 10% of workflow executions involve one retry. Let’s also assume that you upload 100,000 images per month.

For this scenario, the AWS Step Functions cost would be:

(10 transitions x 100,000 executions + 1 retry x (100,000 x 10% executions)) x $0.025 per 1,000 state transitions = **$25.25**

Keep in mind that the AWS Step Functions charges come in addition to any data transfer charges and to the cost of any AWS services you use within the workflows. For example, if these 100,000 workflow executions result in $600/month AWS Lambda charges plus $100/month in the data transfer charges, the total cost would be:

$600 AWS Lambda charges + $100 data transfer charges + $25.25 Step Functions charges = **$725.25** per month for the entire system.

<br/>
<br/>

<h3 id='compare'>When to use Step Functions vs. DIY orchestration</h3>

AWS Step Functions integrates well with AWS Lambda and offers a convenient interface for creating state machines. If you are building an application where rapid iteration on state transitions is a priority, and if most or all of the actions in the application are performed using AWS Lambda functions, AWS Step Functions will be a great fit for your use case. It will reduce the time you need to spend writing the orchestration logic and therefore allow you to focus more on your business logic.

A few example use cases where AWS Step Functions could be a great fit:

* Updating the active-project counts in multiple analytics databases for each new user created in your SaaS product by using AWS Lambda functions and DynamoDB. With Step Functions integration for both Lambda and DynamoDB, setting this workflow up would be noticeably easier than writing your own orchestration.
* Getting data from multiple task-tracking systems, merging the data and building a dashboard based on the results using AWS Lambda and S3. By using Step Functions, you can decouple parts of the system without the need to worry about passing data between them.
* For each GDPR data deletion request you receive, remove a user’s data from all parts of your system and send an email to the user confirming the deletion. This is a workflow that requires multiple actions to be completed in various different systems to reach the desired outcome. The graphical interface would allow you to easily add new data deletion functionality as you extend your product, while the debugging tools would allow you to see in which stage each failed request encountered a problem.

It’s also possible to integrate AWS Step Functions state transitions with non-AWS services and with AWS services that don’t provide direct integration with Step Functions. Doing this, however, will require the creation of AWS Lambda wrapper functions, which means longer development cycles and possible complications connecting to services outside of AWS. So if you’re looking to orchestrate services that are currently based outside of AWS, or may be in the future, it might be a better idea to go with your own orchestration solution.

If you’re looking to customize how your orchestration behaves in different parts of your workflow— for example, if you’d like to have different retry policies per service, or if you’re building a fault-tolerant system—Step Functions might not offer the right functionality. Building your own orchestration layer would better meet your specifications in such a case by providing greater flexibility than Step Functions does.

Another aspect to keep in mind is the Step Functions pricing model: it focuses on the state transitions that take place in your workflows. If your application serves a very high number of requests, making even a few state transitions per request would rapidly increase the cost of using Step Functions, while also depriving you of the ability to customize the rate at which the state transitions happen between services.

A few examples of use cases where AWS Step Functions wouldn’t be the best choice:

* A high-performance, high-volume payment system. Step Functions would become very expensive as the number of payments increases, not to mention that at a certain point you’ll want finer control over different state transitions.
* Copying files between multiple locations in your own data center. Allowing Step Functions to access your data center would require you to set up the proper networking rules and implement all copying functionality with Lambda functions. A cron job in your data center would likely be a better fit here.
* Triggering a simple cron job implemented with Serverless and AWS Lambda. Step Functions doesn’t support schedules, and AWS Lambda already has an integrated scheduling system. It’s better to use Serverless and Lambda scheduling functionality directly.

<br/>
<br/>

<h3 id='alternatives'>Alternatives to AWS Step Functions</h3>

If Step Functions isn’t a great fit for your use case, there are a few options that you might want to consider instead:

* Scheduled AWS Lambda functions. If you’re looking to run a very simple workflow that mostly consists of a single AWS Lambda function, it’s likely a better idea to incorporate the workflow logic into the Lambda function and then use the AWS Lambda `schedule` event to trigger the function.
* A combination of Lambda functions and other AWS services. Sometimes, entire tasks like user authentication can be handled by managed AWS services. If there’s a service available that does exactly what you need, using that service directly naturally results in lower cost and faster implementation times in comparison to building a solution in AWS Step Functions.
* Queues for communication between services. If you’re building services that will handle very high load, you may find queues to be a better cross-service communication mechanism than higher-level orchestration like Step Functions.

<br/>
<br/>

<h3 id='demo'>Try out AWS Step Functions with the Serverless Framework</h3>

Interested in learning more about AWS Step Functions? Giving it a try is the best way to learn more.

Get started by creating [a Serverless Framework application](https://serverless.com) and follow our [How to manage your AWS Step Functions with Serverless](https://serverless.com/blog/how-to-manage-your-aws-step-functions-with-serverless/) blog post. It walks you through creating a sample Step Functions application and gives you the basics of the Step Functions mechanics.
