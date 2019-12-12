---
title: 'Amazon DynamoDB and Serverless - The Ultimate Guide'
description: 'Learn what Amazon DynamoDB is &amp; how to get started. We also cover how it works with other AWS services, drawbacks, benefits, pricing + compare it with RDS, MongoDB, Cassandra etc.'
layout: Learn
useLearnNav: false
---

Are you considering using Amazon DynamoDB in production and trying to learn about its benefits and drawbacks at scale? Or are you evaluating multiple datastore options and want to see how does DynamoDB compare to them? This article is for you. Many [Serverless Framework](https://serverless.com/) users are curious about DynamoDB, so we’ve answered all the most common questions around what is this datastore, what to expect when operating it in production and what’s the DynamoDB pricing like. At the end of the article we include a number of resources for you to learn more about DynamoDB and many code samples of using DynamoDB with Serverless framework.

<br/>
<h4>Table of Contents</h4>

* [What is DynamoDB?](#what-is-dynamodb)
* [How does DynamoDB work?](#how-does-dynamodb-work)
* [Why is DynamoDB an essential part of the Serverless ecosystem?](#dynamodb-serverless-ecosystem)
* [Integration with other AWS services](#dynamodb-with-other-aws-services)
* [DynamoDB + Serverless Framework](#dynamodb-with-serverless-framework)
* [Benefits](#dynamodb-benefits)
* [Drawbacks](#dynamodb-drawbacks)
* [Pricing](#dynamodb-pricing)
* [When to use DynamoDB vs RDS?](#dynamodb-vs-rds)
* [Google Cloud Bigtable vs Amazon DynamoDB](#dynamodb-vs-google-bigtable)
* [Cassandra vs DynamoDB](#dynamodb-vs-cassandra)
* [MongoDB vs DynamoDB](#dynamodb-vs-mongodb)
* [Using DynamoDB with Amazon Lambda](#dynamodb-with-lambda)
* [FAQ](#dynamodb-faq)
* [Tutorials & Resources](#dynamodb-tutorials-and-resources)

<br/>
<br/>

<h3 id='what-is-dynamodb'>What is Amazon DynamoDB?</h3>

Amazon DynamoDB is a fully managed NoSQL database service offered by Amazon Web Services (AWS). DynamoDB requires a minimal amount of setup and maintenance on the part of a developer while offering great performance and scalability.

DynamoDB is a NoSQL key-value store. This means it doesn’t store data in a structured, relational mapping; instead, it stores JSON objects in a simple key-value format. DynamoDB is proprietary to AWS and is based on the principles of Dynamo, a storage system that Amazon developed for its own internal needs between 2004 and 2007.

<div class='youtube-embed-container'><iframe src='https://www.youtube.com/embed/lVJXehUvYew' frameborder='0' allowfullscreen></iframe></div>

<br/>
<br/>

<h3 id='how-does-dynamodb-work'>How does Amazon DynamoDB work?</h3>

Like other databases, DynamoDB stores its data in tables. Each table contains a set of items, and each item has a set of fields or attributes. Each table must have a primary key, present in all items within the table, and this primary key can be either a single attribute or a combination of two attributes: a partition key and a sort key. You can reference specific items in a table by using the primary key, or by creating indices of your own and using the keys from those indices.

There isn’t one single server hosting your DynamoDB table. Instead, the data is distributed across many machines— this guarantees scalability and high performance, but it also means you can’t connect to a database host and query your data directly. To write and read items to and from a DynamoDB table, you’ll need to use the DynamoDB HTTP API, either directly or by using the AWS SDK or the AWS CLI. Also, you can batch your reads and writes to DynamoDB tables, even across different tables at once. DynamoDB supports transactions, automated backups, and cross-region replication.

<br/>
<br/>

<h3 id='dynamodb-serverless-ecosystem'> Why is DynamoDB an essential part of the Serverless ecosystem?</h3>

DynamoDB is aligned with the values of Serverless applications: automatic scaling according to your application load, pay-per-what-you-use pricing, easy to get started with, and no servers to manage. This makes DynamoDB a very popular choice for Serverless applications running in AWS.

Many companies also choose DynamoDB to back their Serverless applications because of its tight integration with the AWS serverless solution, AWS Lambda, not to mention the low amount of maintenance DynamoDB requires. DynamoDB brings with it a number of other benefits that we explain below. Here are a few serverless solutions we’ve written about recently that use DynamoDB as their primary datastore:


- [Event-driven Serverless processing system with DynamoDB Streams](https://serverless.com/blog/event-driven-architecture-dynamodb/)
- [A Serverless Python REST API with Flask and DynamoDB](https://serverless.com/blog/flask-python-rest-api-serverless-lambda-dynamodb/)
- [A Serverless GraphQL API with DynamoDB](https://serverless.com/blog/make-serverless-graphql-api-using-lambda-dynamodb/)
- [A Serverless chat application with AWS AppSync and DynamoDB](https://serverless.com/blog/building-chat-appliation-aws-appsync-serverless/)

Being a key-value store, DynamoDB is especially easy to use in cases where a single item in a single DynamoDB table contains all the data you need for a discrete action in your application. For example, if your application dashboard displays a user and the books they have read, DynamoDB will perform best and cost the least per request if those books reside in the User object. But storing the users in one table and the books in another, where loading the page requires getting one user and ten different book records, might make DynamoDB less of a good fit: extra queries cost you more and slow down your overall application experience compared to a relational datastore.

So, does this mean DynamoDB can only be used in serverless applications? Not at all! Traditional applications running in the cloud can also use DynamoDB—in the next section, we look at some favorable use cases.

<br/>
<br/>

<h3 id='dynamodb-with-other-aws-services'>How does DynamoDB integrate with AWS Lambda and other AWS services?</h3>

DynamoDB offers a tight integration with [AWS Lambda](https://serverless.com/aws-lambda/) via [DynamoDB Streams](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html). With DynamoDB Streams, you can configure an AWS Lambda function to be run every time there is an update to your DynamoDB table. With this functionality you can send out transactional emails, update the records in other tables and databases, run periodic cleanups and table rollovers, implement activity counters, and much more.

For more details see the [Processing DynamoDB Streams with AWS Lambda documentation page](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html).

A number of other AWS services offer integrations with DynamoDB, including:


- [Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html)[t](https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html): perform data analysis at a massive scale on the data exported from DynamoDB.
- [Amazon Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html) identity pools: authenticate access to individual DynamoDB records with Cognito identities.
- [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html): create a backup for each new DynamoDB record in S3 via an Amazon Lambda function.

<br/>
<br/>

<h3 id='dynamodb-with-serverless-framework'>How does DynamoDB work with the Serverless Framework?</h3>

The Serverless Framework makes it easy use DynamoDB in your serverless applications.

**Note:** New to Serverless Framework? Checkout our [Getting Started with Serverless Framework guide](https://serverless.com/framework/docs/getting-started/).

The simplest way to manage DynamoDB tables in your `serverless.yml` file is via the Resources section. Here is how to do it in your Serverless config file:

```yml
    # serverless.yml
    
    service: usersCrud
    provider: aws
    functions:
    # Your Serverless function definitions go here.
    
    resources: # CloudFormation template syntax from here on.
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

In this example a DynamoDB table will be created when you run `serverless deploy` on your Serverless project. These Serverless plugins make it possible to manage even more aspects of DynamoDB tables in your `serverless.yml`:


- [serverless-dynamodb-autoscaling](https://github.com/sbstjn/serverless-dynamodb-autoscaling) — configure the autoscaling for your DynamoDB tables.
- [serverless-dynamodb-](https://github.com/99xt/serverless-dynamodb-local)[local](https://serverless.com/plugins/serverless-dynamodb-local/) — run a local instance of DynamoDB to iterate quickly while you work on your Serverless project.
- [serverless-plugin-offline-dynamodb-stream](https://serverless.com/plugins/serverless-plugin-offline-dynamodb-stream/) — work with DynamoDB Streams when you develop locally.
- [serverless-create-global-dynamodb-table](https://serverless.com/plugins/serverless-create-global-dynamodb-table/) — create DynamoDB Global Tables from your `serverless.yml` file.

Check out [the Resources documentation page](https://serverless.com/framework/docs/providers/aws/guide/resources#configuration) for an example of creating a DynamoDB table directly in your Serverless configuration. At the bottom of this article we link to many blog posts about using DynamoDB with the Serverless Framework, check them out for more examples.

<br/>
<br/>

<h3 id="dynamodb-benefits">Benefits of DynamoDB</h3>

Because of its architecture, DynamoDB works very well in a number of use cases where traditional databases don’t make a good fit.

**Fully managed.** DynamoDB is a fully managed solution—you need perform no operational tasks at all to keep the database running. This means no servers to update, no kernel patches to roll out, no SSDs to replace. Using a fully managed solution reduces the amount of time your team spends on operations, allowing you to focus instead on developing your product.

**Autoscaling.** Nor must you do anything to scale the performance of the DynamoDB tables or their sizes as your application’s load increases. DynamoDB takes care of all this automatically.

**Automatic replication****.** [DynamoDB Global Tables](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html) allow you to have a multi-master, multi-region database with very little setup and no ongoing maintenance. This can help speed up your application’s performance when you have customers across different regions of the world who use locally deployed instances of your application.

**Streaming support.** DynamoDB allows you to create streams of updates to your data tables. You can then use these streams to trigger other work in other AWS services, including Lambda functions. This makes it very easy to add automation based on your updates to the DynamoDB data.

<br/>
<br/>

<h3 id="dynamodb-drawbacks">Drawbacks of DynamoDB</h3>

There are a few downsides to DynamoDB that you should consider before choosing to use it in your production applications.

**Strong vendor lock-in.** DynamoDB is a proprietary solution and doesn’t have an open-source version, so if you ever decide to move away from using DynamoDB, you’ll be looking at a significant amount of work migrating to a different database solution. Some functionality, such as DynamoDB Streams, might be particularly hard to rebuild in a different database.

**The cost structure can backfire with large datasets.** There are two pricing options for DynamoDB: the on-demand option and the provisioned throughput option. While the on-demand pricing is a good fit for applications with “spiky” usage and relatively low average traffic, as average usage increases the on-demand pricing structure can become quite expensive.

**No built-in caching.** DynamoDB requires the access to your data to be mostly uniform. If you access a certain segment of your data (like the most recent entries) much more than others, you won’t have an out-of-the-box way to cache these recent items—excepting of course the [DynamoDB Accelerator](https://aws.amazon.com/blogs/aws/amazon-dynamodb-accelerator-dax-in-memory-caching-for-read-intensive-workloads/), which is proprietary and adds to your costs.

**No support for JOIN operations.** DynamoDB’s design doesn’t allow you to join data from across multiple tables. So if you need the data from multiple tables for a single operation, you’ll find DynamoDB to be more expensive, slower and more complicated for implementing JOINs than with a relational datastore.

<br/>
<br/>

<h3 id="dynamodb-pricing">DynamoDB Pricing</h3>

**DynamoDB free tier**
Amazon provides a free tier for DynamoDB, which includes:


- 25 write capacity units and 25 read capacity units of provisioned capacity. This only applies to tables using Provisioned pricing.
- 25GB of data storage.
- 25 replication write units for DynamoDB Global Tables when you deploy them in two AWS regions.
- 2.5 million stream read requests from DynamoDB Streams.
- 1GB of data transfer out (increased to 15GB for the first 12 months after signing up for a new AWS account). However, this is aggregated across all AWS services, not exclusive to DynamoDB.

The free tier allows for experimentation and testing but falls short of enough to run most production applications. Beyond the free tier, two pricing options exist for DynamoDB tables: on-demand pricing and provisioned throughput pricing.

**On-demand capacity pricing**
When using on-demand pricing, you pay per request, and AWS takes care of scaling the databases to provide consistent performance according to your load. The prices below are for the `us-east-1` AWS region and can differ (usually slightly more) in other regions.

| **Aspect**                                                                                                                                                | **Cost**                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Write request units                                                                                                                                       | $1.25 per million write request units                                                      |
| Read request units                                                                                                                                        | $0.25 per million read request units                                                       |
| Data storage (including table data and secondary indices)                                                                                                 | $0.25 per GB-month (first 25 GB are free)                                                  |
| Continuous backups (billed by table size)                                                                                                                 | $0.2 per GB-month                                                                          |
| Restoring a table from a continuous backup                                                                                                                | $0.15 per GB                                                                               |
| On-demand backups (billed for the size of each backup)                                                                                                    | $0.1 per GB-month                                                                          |
| Global Tables replicated write request unit (both the replica’s storage and its read and write requests are charged extra, according to standard pricing) | $1.875 per million replicated write request units                                          |
| DynamoDB Accelerator—EC2 instance cost                                                                                                                    | Options between $0.04/hour and $4.30/hour based on the amount of CPUs/RAM                  |
| DynamoDB Streams                                                                                                                                          | $0.02 per 100,000 DynamoDB Streams read request units (the first 2.5M each month are free) |
| Data transfer—within the same AWS region                                                                                                                  | $0.01/GB                                                                                   |
| Data transfer—across AWS regions                                                                                                                          | $0.04/GB                                                                                   |
| Data transfer—out to the internet                                                                                                                         | Between $0.05/GB and $0.09/GB                                                              |

Let’s estimate the total cost for a hypothetical application. We’ll make the following assumptions:


- The application has 10,000 monthly active users.
- On average, each user causes 10,000 DynamoDB reads per month and 5,000 DynamoDB writes per month.
    - 10,000 users x 10,000 reads = 10,000,000 reads per month
    - 10M reads/month x $0.25/1M reads = $2.5/month
    - 10,000 users x 5,000 writes = 5,000,000 writes per month
    - 5M writes/month x $1.25/1M writes = $6.25/month
- Your database is 100GB is size, and every month it grows by 10GB.
    - The first 25GB are free; for billing purposes the average database size will be 105GB in the first month.
    - You will be charged for 80GB of storage at $0.25/GB-month, so $20/month.
    - The continuous backup for a 105GB database is charged at $0.2/GB-month, so $21/month.

The storage, the backups, and the read/write operations will be the bulk of your expense if you use a single-region DynamoDB setup. Adding in the data transfer costs and the backups, the total comes to about $50/month.

Adding Global Tables multi-region replication into another AWS region would roughly double the total cost. The replica’s writes and its extra storage space will cost about $40 in our use case: $10/month for the replica’s writes, $26/month in additional storage space, and the rest in data transfer costs. The total cost for the entire table, then, would be around $90/month.

However, if you add the DynamoDB Accelerator (DAX) to the setup as a caching layer, the total cost can rise significantly. A very basic DAX with 3 `t2.small` instances would run you about $100/month, and if you use larger instances you might end up paying thousands just for the caching layer.

AWS provides a number of example cost calculations in [their on-demand pricing docs](https://aws.amazon.com/dynamodb/pricing/on-demand/). Check out [our blog post about DynamoDB on-demand pricing](https://serverless.com/blog/dynamodb-on-demand-serverless/) for more details.

**Provisioned capacity pricing**
If you instead choose provisioned capacity, DynamoDB will allocate a specific number of read and write capacity units to your requests. You can either estimate and set a fixed number of capacity units or configure autoscaling so that DynamoDB automatically adjusts these based on application load. All read or write requests over and above the fixed capacity units will be throttled—they will wait until other requests finish before being handled.

| **Aspect**                                                                                                                                                  | **Cost**                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Write capacity units                                                                                                                                        | $0.00065/hour                                                                               |
| Read capacity units                                                                                                                                         | $0.00013/hour                                                                               |
| Data storage (including table data and secondary indices)                                                                                                   | $0.25 per GB-month (first 25 GB are free)                                                   |
| Continuous backups (billed by table size)                                                                                                                   | $0.2 per GB-month                                                                           |
| Restoring a table from a continuous backup                                                                                                                  | $0.15 per GB                                                                                |
| On-demand backups (billed for the size of each backup)                                                                                                      | $0.1 per GB-month                                                                           |
| Global Tables replicated write capacity unit ((both the replica’s storage and its read and write requests are charged extra, according to standard pricing) | $0.000975/hour                                                                              |
| DynamoDB Accelerator—EC2 instance cost                                                                                                                      | Options between $0.04/hour and $4.30/hour based on the amount of CPUs/RAM                   |
| DynamoDB Streams                                                                                                                                            | $0.02 per 100,000 DynamoDB Streams read request units (the first 2.5M are free every month) |
| Data transfer—within the same AWS region                                                                                                                    | $0.01/GB                                                                                    |
| Data transfer—across AWS regions                                                                                                                            | $0.04/GB                                                                                    |
| Data transfer—out to the internet                                                                                                                           | Between $0.05/GB and $0.09/GB                                                               |

Let’s estimate the total cost for the same hypothetical application that we used in the on-demand calculation above. We make the following assumptions:


- The application has 10,000 monthly active users.
- On average, each user causes 10,000 DynamoDB reads per month and 5,000 DynamoDB writes per month.
    - You use autoscaling, so you’ll end up paying for the average read and write capacity as DynamoDB scales the capacity up and down as needed.
    - 10,000 users x 10,000 reads = 10,000,000 reads per month.
    - 10M reads/month / 30 days / 24 hours / 60 seconds = 232 reads/second on average.
    - (232 reads - 25 free units) x $0.00013/hour x 24 hours x 30 days = $19/month for the read capacity units.
    - 10,000 users x 5,000 writes = 5,000,000 writes per month.
    - 5M writes/month / 30 days / 24 hours / 60 seconds = 116 writes/second on average.
    - (116 writes - 25 free units) x $0.00065/hour x 24 hours x 30 days = $43/month for the write capacity units.
- Your database is 100GB is size, and every month it grows by 10GB.
    - The first 25GB are free, and for billing purposes the average database size will be 105GB in the first month.
    - You will get charged for 80GB of storage at $0.25/GB-month, so $20/month.
    - The continuous backup for a 105GB database is charged at $0.2/GB-month, so $21/month.

In this case you’ll pay $103/month plus the data transfer costs (and other small costs), so around $120/month in total.

Adding the Global Tables multi-region replication in another AWS region would roughly double the total cost. The replica’s writes and its extra storage space will cost around $110 in our use case: $80/month for the replica writes, $26/month in additional storage space, and the rest in data transfer costs. So the total cost for the entire table would be around $230/month.

If you add the DynamoDB Accelerator (DAX) as a caching layer to the setup, the total cost can rise significantly. A very basic DAX with 3 `t2.small` instances would run you about $100/month, and if you use larger instances you might end up paying thousands just for the caching layer.

Check out [the DynamoDB provisioned pricing documentation page](https://aws.amazon.com/dynamodb/pricing/provisioned/) for more cost estimates.

<br/>
<br/>

<h3 id="dynamodb-vs-rds">When to use DynamoDB vs RDS?</h3>

RDS is Amazon’s Relational Database Service. It provides hosted versions of many popular relational databases like MySQL, PostgreSQL, and Microsoft SQL Server, among others. The question is: when should developers choose RDS over DynamoDB, and when would DynamoDB be a better fit?

As we mentioned, DynamoDB is a NoSQL key-value datastore and hence doesn’t support relational data structures. When choosing between DynamoDB and RDS, you might ask yourself the following question: is the data I’ll be storing self-contained (i.e., will a single item contain all the information to be queried) or will it require multiple tables and joining data across them to get the data your application needs?

For example, if you are building a reading-list application, will you store all the books a user has read inside the User object? Or will User objects reference individual Book objects that will be stored in a different table?

Since DynamoDB doesn’t support relational data structures, you can’t join the data from multiple tables. Imagine that you’d like to show the list of recently read items for a single user. If you go with separate tables for users and books in DynamoDB, you’ll need to query the user data first, then make a separate request for the books the user has read. This might slow down your application (although you can work around it with good database design), not to mention that the extra requests will cost you extra due to DynamoDB’s pay-per-use pricing model.

A good mental model for choosing between RDS and DynamoDB could be this: if you’ll be relying a lot on relational data structures, RDS could be a better fit. If each data object represented will be relatively self-contained, DynamoDB might be your best choice.

<br/>
<br/>

<h3 id="dynamodb-vs-google-bigtable">Google Cloud Bigtable vs Amazon DynamoDB</h3>

Cloud Bigtable is a NoSQL wide-column datastore from Google. It differs from DynamoDB in a number of ways.

**Data blobs vs columns.** DynamoDB stores a given item as a single blob of data. If you query for an item in DynamoDB using the primary key or a secondary index, you get the entire item back. You can only update an entire blob at a time. Each secondary index takes up additional storage space.

In contrast, Bigtable stores the attributes of an item in columns; columns group into column families. You can query individual column families without needing to fetch entire items. In Bigtable, you can also filter on column values without building additional indices (and because of this, Bigtable doesn’t even support secondary indices).

**Data types.** DynamoDB supports a number of pre-defined data types, while Bigtable stores all values in a single format.

**Triggers.** With Lambda functions and DynamoDB, you can implement complex automation based on updates made to the data in your DynamoDB tables; Bigtable doesn’t offer a trigger mechanism.

Because of its column structure, you can get much better performance for certain use cases in Bigtable in comparison to DynamoDB. However, Bigtable can be less intuitive to get started with and lacks some of DynamoDB’s functionality.

<br/>
<br/>

<h3 id="dynamodb-vs-cassandra">Cassandra vs DynamoDB</h3>

Cassandra is an open-source NoSQL storage solution widely regarded as an alternative to DynamoDB. Cassandra is a wide-column store rather than a key-value store, so functionally it’s actually more similar to Bigtable rather than DynamoDB. Instead of storing key values as a single blob of data, Cassandra stores different fields in their own columns.

Cassandra isn’t a fully managed service on its own, but it can be run using AWS EC2 machines. Companies like Datastax offer managed Cassandra setups on AWS, so it’s possible to buy a managed Cassandra solution—but you’ll need a third-party vendor.

The key differences between Cassandra and DynamoDB lie in the following aspects:


1. **Schema support.** Neither Cassandra nor DynamoDB requires a schema for your data, but Cassandra supports adding a schema if you so desire. Often, as your application scales, the lack of schemas for your data end up problematic—you might lose track  of what kind of data is stored in your tables. In the case of DynamoDB, this can be remedied with software-defined schemas: schema checking would then live in your application code. However, if you prefer your datastore to control the schemas, Cassandra offers this option out of the box.
2. **Query language.** Cassandra’s query language is a modified version of SQL, while DynamoDB uses a JSON-based query language.
3. **Replication and caching settings.** You can fine-tune Cassandra’s replication and caching settings and choose the number of replicas and partitions per datacenter. DynamoDB, on the other hand, doesn’t allow you to change its replication or caching settings—both are managed by AWS. If you’ve evenly distributed your data across DynamoDB partitions, the managed replication and caching processes should work quite well, but in some cases having more control over the replication settings (as with Cassandra) enables better performance and reliability from your cluster.
4. **Pricing.** DynamoDB is priced either per read/write operation or per provisioned read/write capacity unit. Cassandra is an open-source solution, so the software itself is free, but of course you still pay for the machines that run it, e.g., in AWS EC2, plus those machines’ disks and networking costs. With Cassandra, managing the infrastructure and maintaining the cluster represents an additional cost.

As a rule of thumb, DynamoDB is cheaper and easier to use with smaller datasets. Cassandra is a more customizable solution, so it performs better at scale and is more cost-effective in the long term if you dedicate the right resources to managing and optimizing it.

<br/>
<br/>

<h3 id="dynamodb-vs-mongodb">MongoDB vs DynamoDB</h3>

MongoDB is an open-source NoSQL datastore available as a self-hosted or a managed solution. Both DynamoDB and MongoDB are key-value datastores. The key differences between DynamoDB and MongoDB are as follows:


1. **Vendor lock-in and management overhead.** MongoDB is an open-source solution that you can either run yourself using any hardware and cloud provider you like or avail yourself of a hosted service such as MongoDB Atlas. DynamoDB, on the other hand, is a proprietary solution only available in AWS. Operating MongoDB yourself is not straightforward and requires significant resources, but the benefit of going that route is that you can performance-tune your database. This of course isn’t possible with DynamoDB.
2. **Pricing.** Although there are other managed solutions such as IBM Cloud Databases, MongoDB’s own managed solution, MongoDB Atlas, is priced at a flat rate per hour based on the specifications of the cluster you choose. Autoscaling a MongoDB cluster can be a difficult nut to crack, as adding and removing machines from the cluster isn’t an easy task. With DynamoDB, you pay for what you use and have the option to automatically scale your provisioned capacity. With MongoDB’s pricing model, you could end up overpaying for the cluster in times of lower application load, but over the long run, if your application grows significantly, you may find it easier and more cost-effective to scale MongoDB. DynamoDB’s simpler pricing model might be more useful for smaller applications or in the beginning phase of developing a new product.
3. **Built-in data types.** MongoDB offers additional built-in data types like timestamps, floating-point numbers, and geospatial data which might make it more efficient to use MongoDB over DynamoDB when doing lots of data processing.
4. **Indexing and replication options.** MongoDB offers more granular controls over indexing, especially when many replicas and multiple data centers are involved. Also, as previously mentioned, MongoDB’s replication settings can be tuned and customized, while DynamoDB’s settings are pre-configured and managed by AWS.
5. **Integration with other AWS services.** Unlike MongoDB, DynamoDB is tightly integrated with other AWS services, so it might be easier to build complex automation using other AWS services with DynamoDB than with MongoDB.

Overall, MongoDB generally scales better for most large applications—but it has a higher barrier to entry and can be costly to operate if you self-host it.

<br/>
<br/>

<h3 id="dynamodb-with-lambda">Using DynamoDB with Amazon Lambda</h3>

As you may know, Amazon Lambda is AWS’s service offering serverless functions. With Lambda you can create functions for tasks, services, and automation and deploy them in the cloud while paying only for the compute time used by the running functions. AWS will automatically scale your functions according to the current load.

Lambda integrates well with DynamoDB via Streams. You can configure a Lambda function to be triggered whenever your DynamoDB table receives an update. In a Lambda function you can do things such as sending notifications via Amazon SNS, writing to other DynamoDB tables, managing Cognito identity pools, as well as a number of other things both in and outside of AWS.

See [the Amazon Lambda docs](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html) for more details on how to use Lambda with DynamoDB.

<br/>
<br/>

<h3 id="dynamodb-faq">FAQ</h3>

**Are DynamoDB writes atomic?** Yes, writes to DynamoDB are atomic. DynamoDB applies all the updates in the order received. However, if you are using a Global Table, and your application accidentally increments the same counter in two locations, two increments of the counter could result. So if you’re updating a business-critical value, you might want to use DynamoDB Conditional Writes—these consume more write-capacity units but can guarantee a single write if needed.

**What are DynamoDB streams and what are they for?** DynamoDB streams store the activity from a DynamoDB table and provide you with an easy way to act on your database updates. For example, you may wish to use DynamoDB streams with Amazon Lambda in order to run automation in your system whenever a new user is created in your DynamoDB table.

**Can DynamoDB sort keys be null?** Not if your DynamoDB table has a composed index, which requires a partition key and a sort key. Creating an entry without a sort key in this case will fail with a schema validation error.

**Where are DynamoDB backups stored?** The backups for DynamoDB tables are stored within AWS, but this data is not publicly available. You can’t download a DynamoDB backup; all you can do is restore it into a DynamoDB table.

**Can DynamoDB store images and other blob data?** The maximum item size for DynamoDB is 400KB, so it’s not generally suitable for images or similar large binary data. A common workaround is to use Amazon S3 for storing blob data and then reference those S3 locations in your DynamoDB items.

**Can DynamoDB be in a VPC?** No, DynamoDB instances can’t be located in a VPC, but DynamoDB VPC Endpoints do allow you to route all DynamoDB requests made in your VPC to a single endpoint. AWS then routes those requests and their responses to the DynamoDB instances.

**Does DynamoDB support transactions?** Yes. Transactions are disabled on Global Tables by default, but you can enable them by contacting AWS support. 

**Does DynamoDB support SQL?** No, DynamoDB doesn’t offer an SQL interface—you’ve got to use the JSON-based query language that DynamoDB provides.

    

**Does DynamoDB support joins?** No, you can’t join data across multiple DynamoDB tables directly in DynamoDB. You can still get data from multiple tables by making multiple requests to the DynamoDB API and then combining the data in your application. But if you need to join data across tables, consider using relational data stores instead (e.g., Amazon RDS).

**Does DynamoDB support S3?** Yes. By means of Amazon Hive or Amazon Lambda, you can copy DynamoDB data into an S3 bucket for long-term storage. You can also store S3 URIs inside DynamoDB items.

**Does DynamoDB have a schema?** DynamoDB only has a schema for its partition key and optionally a sort key. All other data in each item is schemaless, so each of your items can contain completely different data.

**Does DynamoDB have replicas?** DynamoDB manages replication internally. If you use Global Tables, AWS will make additional region-specific replicas available for your tables. However, you can’t change the replication settings—they are fully managed by AWS.

**How does DynamoDB autoscaling work?** When using provisioned capacity mode, you can set up autoscaling and change DynamoDB capacity units assigned to your table based on application load. When the load increases (as measured by using between 20% and 90% of your existing capacity units), you can configure autoscaling to increase the capacity units available for your table. AWS scales down the capacity when the table load drops.

<br/>
<br/>

<h3 id="dynamodb-tutorials-and-resources">Tutorials, guides and resources to learn more about DynamoDB</h3>

If you’d like to learn more about DynamoDB, you might find the resources in this section to be helpful.

**Example applications using DynamoDB**


- [Building a .NET REST API with DynamoDB](https://github.com/serverless/examples/tree/master/aws-dotnet-rest-api-with-dynamodb/src/DotNetServerless.Lambda)
- [Streaming DynamoDB updates to Elasticsearch with DynamoDB and Golang](https://serverless.com/examples/aws-golang-dynamo-stream-to-elasticsearch/) 
- [Saving DynamoDB backups to S3 with Node.js](https://serverless.com/examples/aws-node-dynamodb-backup/)
- [A GraphQL API with DynamoDB and Node.js](https://serverless.com/examples/aws-node-graphql-api-with-dynamodb/)
- [Building a Node.js REST API with DynamoDB](https://serverless.com/examples/aws-node-rest-api-with-dynamodb/)
- [AWS Lambda, Amazon API Gateway, S3, DynamoDB and Cognito](https://github.com/andreivmaksimov/serverless-framework-aws-lambda-amazon-api-gateway-s3-dynamodb-and-cognito)
- [A web scraper with DynamoDB, Amazon Lambda and SNS](https://github.com/slashbit/spider-less)

**Blog posts**


- [Event-driven processing with Serverless and DynamoDB streams](https://serverless.com/blog/event-driven-architecture-dynamodb/)
- [DynamoDB On-Demand: When, why and how to use it in your serverless applications](https://serverless.com/blog/dynamodb-on-demand-serverless/)
- [How to Make a Serverless GraphQL API using Lambda and DynamoDB](https://serverless.com/blog/make-serverless-graphql-api-using-lambda-dynamodb/)
- [Automate your DynamoDB backups with Serverless in less than 5 minutes](https://serverless.com/blog/automatic-dynamodb-backups-serverless/)
- [Building a REST API in Node.js with AWS Lambda, API Gateway, DynamoDB, and Serverless Framework](https://serverless.com/blog/node-rest-api-with-serverless-lambda-and-dynamodb/)
- [How to create a REST API in Java using DynamoDB and Serverless](https://serverless.com/blog/how-to-create-a-rest-api-in-java-using-dynamodb-and-serverless/)