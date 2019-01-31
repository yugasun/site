---
title: "AWS Step Functions and Serverless"
description: "What are Step Functions, and how do you use them?"
layout: Learn
useLearnNav: false
---

To talk about Step Functions, we first have to briefly cover AWS Lambda—an offering from Amazon Web Services that lets developers write code without thinking about servers.

Lambda doesn’t eliminate servers from the equation, it just auto-scales and provisions server resources based on your application demand. Because of this, you’ve probably heard that Lambda and other serverless compute services are ‘stateless’.

This can be limiting when building out more complex workflows. So, AWS developed Step Functions largely to overcome this shortcoming.

**Already familiar with Step Functions?**

[Install the Serverless Framework to deploy](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)

<br/>

## Step Functions explained

Step Functions allows you to send an output from one ‘step’ as the input for the following ‘step’, hence gaining the ability to share state between different stages of a workflow.

Step Functions comes with other useful functionality: automatic retries and error handling, a visual editor for workflow configuration, and the ability to reuse a Lambda function in multiple ‘steps’. 

<br/>

## Advantages of AWS Step Functions
Step Functions are very popular among Lambda power users because:

1. Step Functions allows you to easily share state between Lambdas 
2. Step Functions allows you to decouple your application workflow logic from the business logic. This can be helpful in some cases, especially when you want to build out a complex workflow quickly and easily. (See below for disadvantages.) 
3. You can run multiple threads in parallel very easily with Step Functions, allowing for more efficient workflows


<br/>

## Disadvantages of AWS Step Functions

As with any service, there are trade-offs. Here are some things you should consider before investing heavily:

1. You need to learn the Amazon States Language in order to use Step Functions. It is a JSON-based language that can be frustrating, and has a learning curve that varies with your comfort with JSON.
2. Step Functions allows you to decouple your application workflow logic from the business logic. This can make maintaining and understanding an applications code base more difficult.


<br/>

## When to use Step Functions

### Data processing

Step Functions abstracts away a lot of the complexity involved with building a data pipeline. Retries, error-handling, and parallelization all make it a great solution for this particular use case.

### Serverless workflow orchestration 

Step Functions allows your to orchestrate your application workflows without having to write the workflow logic code yourself. In a lot of ways, this is at the center of the Serverless ethos and is a great way to build out complex orchestration quickly and easily.


<br/>

## Get started on AWS Step Functions

Follow our guide to deploy your first `hello-world` to AWS Lambda, and set up a workflow with Step Functions.

[Install Serverless Framework](http://localhost:8000/framework/docs/getting-started/)

[AWS Quick Start](http://localhost:8000/framework/docs/providers/aws/guide/quick-start/)

[Step Functions Example](https://serverless.com/blog/how-to-manage-your-aws-step-functions-with-serverless)


