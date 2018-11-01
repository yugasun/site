---
title: "Lambda and Serverless"
description: "What is the importance of Lambda within Serverless?"
layout: Learn
useLearnNav: false
---

AWS Lambda is an offering from Amazon Web Services that lets developers run code without provisioning servers.

You’ve probably heard “Lambda” in combination with any of several buzzwords: serverless compute, event-driven architecture, or Functions-as-a-Service (FaaS).

These really all boil down to the same things—running code without thinking about servers, and taking a function-based, event-reactive approach to designing applications.

### Already familiar with AWS Lambda?

[Install the Serverless Framework to deploy](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)


<br/>

## Advantages of AWS Lambda
AWS Lambda is growing in popularity because:

1. Lambda has a pay-per-execution billing model, which means you never pay for idle time. Users frequently report cutting their EC2 bills by 90%.
2. While your code is still running on AWS servers somewhere, you don’t have to provision or maintain those servers.
3. Lambda scales on demand, meaning you don’t have to worry about your application going down under heavy traffic.
4. It plays nicely with the rest of the AWS ecosystem, like DynamoDB, API Gateway, and S3.
5. It supports the most runtimes of any other FaaS offering.


<br/>

## Disadvantages of AWS Lambda

As with any service, there are trade-offs. Here are some things you should consider before making the switch:

1. Cold starts can be an issue with Lambda, but there are strategies to mitigate them. The Lambda team is also regularly making improvements to cold start time length and frequency.
2. A Lambda can only run for fifteen minutes. For long-running processes, you may need to combine Lambda with another service, like AWS Fargate.
3. Even though Lambda is pay-per-execution, it isn’t always cheaper. If you have function invocations in the billions, Lambda might be more expensive for you than EC2.

Use the cost calculator to find out what your projected Lambda costs would be.


<br/>

## When to use AWS Lambda
Lambda is powerful for a wide variety of use cases, but we’ll talk about the most common three.

### Scalable APIs

You never want an API to go down. A Lambda-backed API will be lightweight, and scale up and down with usage. You can make your entire website serverless (ours is), for maximum uptime and reliability.

### Data processing

Filter and transform data on the fly by placing Lambda between your database services, like S3, Redshift, or Kinesis.

### Task automation

Create CRON jobs with Lambda. Schedule events to generate reports, create backups, or check for idle resources.

<br/>

## AWS Lambda vs. Google Cloud Functions vs. Microsoft Azure Functions
 |**AWS Lambda**|**Google Cloud Functions**|**Microsoft Azure Functions**
:-----:|:-----:|:-----:|:-----:
Free tier|1M requests|2M requests|1M requests
Cost|1M free $0.20 per each add’l 1M requests Plus $0.00001667 per GB-sec|2M free $0.40 per request after 2M|1M free $0.20 per each add’l 1M requests Plus $0.000016 per GB-sec
Supported runtimes|Node.js, Python, Java, C#, .NET core, Golang|Node.js, Python|JavaScript, C#, F#, Java
Logging|CloudWatch Logs|Stackdriver Logging|App Services logging
Monitoring|CloudWatch, X-ray|Stackdriver Monitoring|App Services monitoring
IAM roles|yes|no|yes
<br/>

## Get started on AWS Lambda

Follow our guide to deploy your first `hello-world` to AWS Lambda.

[Install Serverless Framework](http://localhost:8000/framework/docs/getting-started/)

[AWS Quick Start](http://localhost:8000/framework/docs/providers/aws/guide/quick-start/)

[AWS Examples](http://localhost:8000/examples/)



