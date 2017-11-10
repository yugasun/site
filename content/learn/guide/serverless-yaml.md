---
title: "Basics of Serverless YAML"
description: "Here, we break down serverless.yml. Learn about services, providers, functions, events and more."
layout: Learn
---

# Serverles.yml

## Service

```
# serverless.yml

service: users
```
A serverless service is a directory with a service.yml in it. You give it a name in the service block of your serverless.yml. This will keep all your functions, events, and resources together for a single service.

## Provider

```
provider:
  name: aws
  runtime: nodejs6.10
  stage: dev # Set the default stage used. Default is dev
  region: us-east-1 # Overwrite the default region used. Default is us-east-1
  profile: production # The default profile to use with this service
  memorySize: 512 # Overwrite the default memory size. Default is 1024
  iamRoleStatements:
    -  Effect: "Allow"
        Action:
          - "s3:PutObject"
        Resource:
          Fn::Join:
            - ""
            - - "arn:aws:s3:::"
              - Ref: ServerlessDeploymentBucket
              - "/*"
```
The provider block has configuration options for your service as a whole. This includes the cloud provider you’ll deploy to, the region, the language runtime, and other general configuration options.

Some of these settings, you can override for particular functions. These include: memorySize, iamRoleStatements, and language runtime.

## Functions & Events

```
functions:
  usersCreate:
    handler: users.create
    events:
      - http: post users/create
  usersDelete:
    handler: users.delete
    memorySize: 1024
    events:
      - http: delete users/delete
  sendWelcomeEmail:
    handler: users.sendWelcomeEmail
    events:
      - sns: user-created
```
The functions block is where you will describe the functions you want to register and the events that will trigger them. Each listed function needs a handler, which is the path to the file containing your logic and the name of the function in that file.

You’ll then register the events that will trigger the function. This can include HTTP requests from API Gateway, pub/sub notifications from SNS Topics, scheduled events using CRON syntax, and more.

You can find all of the event types [here](https://serverless.com/framework/docs/providers/aws/events/). 

You can also overwrite configuration on a function level. For example, in the users.delete event above, we’ve changed the memorySize to 1024 from the default of 512.

## Resources

```
resources:
  Resources:
    usersTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: usersTable
        AttributeDefinitions:
          - AttributeName: email
            AttributeType: S
        KeySchema:
          - AttributeName: email
            KeyType: HASH
        ProvisionedThroughput:
          ReadCapacityUnits: 1
          WriteCapacityUnits: 1
```
The resources block is where you can provision additional infrastructure to be used in your serverless service. This can include DynamoDB tables, S3 buckets, or SNS topics.

You’ll write this using CloudFormation syntax. [LINK to basics of cloudformation]


## Advanced configuration options
### Variables syntax
Variables allow users to dynamically replace config values in `serverless.yml` config.
They are especially useful when providing secrets for your service to use and when you are working with multiple stages.
 
To enable different behavior based on user input, you can use CLI options. To enable secret sharing across multiple teams and services, you can use variables from AWS SSM Parameter Store. You can reference CloudFormation resources in other stacks.
 
There are a number of other variables sources, too. Check here for more:
[LINK to variables further reading]

### Plug-ins

```
plugins:
  - serverless-offline
  - serverless-webpack
```
The Serverless Framework has a plugin architecture where you can use 3rd party plug-ins to add additional functionality. Plug-ins can assist you with offline development, with packaging your Lambda function, and and in provisioning additional resources.

[LINK to plug-ins section]

### Custom
Any additional configuration should go in your custom block. This can include configuration needed by one of your plug-ins, or a way to centralize configuration that is used in multiple places in your `serverless.yml`.

It can also be used to handle different configuration options for different stages.

### Package
The package block can give you more advanced configuration on created your Lambda deployment package.

Lambda expects a zip file with your function code and all its dependencies contained inside of it. By default, the serverless framework zips up your entire directory to create this package. You can use this section to include or exclude specific file for your package.
