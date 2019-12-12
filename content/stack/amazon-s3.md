---
title: 'Amazon S3 - The Ultimate Guide'
description: 'Read this before you start using Amazon S3. This guide covers what S3 is, how it works with other AWS services, its use-cases, disadvantages, benefits, pricing, limits, alternatives, regions & more.'
layout: Learn
useLearnNav: false
---

Are you interested in learning more about how Amazon S3 works with your Serverless applications? Curious about the benefits and the drawbacks of using Amazon S3 compared to all your other options? Then look no further—this article is for you.

In this guide we go over what Amazon S3 is, discuss why it’s an important part of the Serverless ecosystem, and cover both the positive and negative aspects of using S3, to help you determine if it’s the right fit for your task at hand.

You can also scroll to the end of this article for a list of resources and examples, should you want to learn even more about Amazon S3 and use it with the [Serverless Framework](https://serverless.com/).

<br/>
<h4>Table of Contents</h4>

* [What is Amazon S3?](#what)
* [How does Amazon S3 work?](#how-does-amazon-s3-work)
* [What makes Amazon S3 an essential part of the Serverless ecosystem?](#architecture)
* [How does Amazon S3 integrate with other AWS services?](#integrations)
* [How does S3 work with the Serverless Framework?](#serverless)
* [Benefits of using Amazon S3](#benefits)
* [Disadvantages](#disadvantages)
* [What is Amazon S3 Good For?](#use-cases)
* [Regions](#regions)
* [Limitations](#limits)
* [Pricing](#pricing)
* [Alternatives](#alternatives)
* [Amazon S3 v/s EC2](#amazon-s3-vs-ec2)
* [FAQ](#faq)
* [Resources & Getting Started](#resources)

<br/>
<br/>

<h3 id="what">What is Amazon S3?</h3>

[Amazon S3](https://aws.amazon.com/s3/) is a [cloud storage](https://en.wikipedia.org/wiki/Cloud_storage) service offered by [Amazon Web Services (AWS)](https://aws.amazon.com/). S3’s primary purpose is to store all kinds of files in the cloud, from media files to static web pages, and to make them available via simple requests, either from inside your application or directly out to your customers.

<br/>
<br/>

<h3 id="#how-does-amazon-s3-work">How does Amazon S3 work?</h3>

Amazon S3 is a managed service, which means all you have to do is upload and download the files you need. AWS takes care of storing your files, ensuring their availability, and delivering the files when you or your customers request them.

You can upload a file to S3 by signing in to the [AWS Console](https://aws.amazon.com/console/) and accessing the S3 user interface, or by programmatically issuing a request to the [S3 API](https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html), directly via HTTP or using one of the [AWS SDKs](https://aws.amazon.com/tools/#SDKs).

The S3 service is subdivided into individual storage “buckets”; each bucket can contain many “prefixes” (which work much like folders on your local disk), and the prefixes in turn contain your uploaded files. You can control access to the files at the bucket level as well as at the individual file level, and you can set up automated rules for managing the lifecycle of the files for entire buckets or specific prefixes within them.

Once a file is uploaded to S3, it can be referenced using an S3 path that, as you might imagine, includes the bucket name and the path to the file within the bucket. If you’ve configured the bucket to be publicly accessible, the files in the bucket can be accessed directly using their S3 URL.

<br/>
<br/>

<h3 id="architecture">What makes Amazon S3 an essential part of the Serverless ecosystem?</h3>

Serverless applications generally use cloud storage services like Amazon S3 to store application data that doesn’t fit into a database. S3 therefore forms the functional basis for all Serverless solutions that handle large files like user-generated data, images, or video content.

It’s also common to use cloud storage to host the static portions of Serverless systems: HTML pages, images used on Serverless websites, CSS files, and compiled JavaScript code. This reduces load times for Serverless websites, lowers operating costs, and keeps maintenance of Serverless applications to a minimum.

<br/>
<br/>

<h3 id="integrations">How does Amazon S3 integrate with other AWS services?</h3>

Amazon S3 provides notifications when a file is created or changed, and these notifications flow into other AWS services. One service that can act on these notifications is [Amazon Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html); this represents the most valuable integration for Serverless developers. Serverless functions can be made to trigger when files in S3 change, enabling all kinds of S3-based business logic. S3 notifications can also flow into Amazon [SQS](https://aws.amazon.com/sqs/) and [SNS](https://aws.amazon.com/sns).

Although technically part of S3 itself, [Amazon S3 Glacier](https://aws.amazon.com/glacier/) is a storage service in its own right, designed for long-term file storage at lower cost. S3 enjoys direct integration with Glacier and allows moving files between the two storage solutions based on a set of S3’s own rules.

Several AWS services are able to read and write data directly from and to S3; for example, [Amazon RDS](https://aws.amazon.com/rds/) can write and read database backups to and from S3. And [AWS Athena](https://aws.amazon.com/athena/) is a data warehousing solution entirely based on data stored in S3.

S3 also integrates with AWS IAM in order to manage access to specific files and buckets. One of the useful features of the integration is generating short-lived credentials for a specific S3 object. This proves particularly helpful in situations such as when you need to control access to files in S3 using your own user authentication.

S3 also integrates with AWS CloudWatch and CloudTrail for monitoring and logging purposes.

<br/>
<br/>

<h3 id="serverless">How does S3 work with the Serverless Framework?</h3>

In the Serverless Framework, S3 is most often used as a [source f](https://serverless.com/framework/docs/providers/aws/events/s3/)[or](https://serverless.com/framework/docs/providers/aws/events/s3/) [events](https://serverless.com/framework/docs/providers/aws/events/s3/) [in](https://serverless.com/framework/docs/providers/aws/events/s3/) [Serverless functions](https://serverless.com/framework/docs/providers/aws/events/s3/). For example, a Serverless function can be triggered when an object in an S3 bucket is created or modified, with rules available to filter for the specific requests you want to call the functions. 

When using an S3 bucket as storage for customer-facing files, you can use the Serverless Framework to maintain the configuration of your S3 bucket in code. See the [Custom S3 bucket configuration](https://serverless.com/framework/docs/providers/aws/events/s3#custom-bucket-configuration) section of the Serverless Framework docs for examples on how to use this functionality.

As we mentioned above, many Serverless applications also use S3 via [the AWS SDK for JavaScript](https://aws.amazon.com/sdk-for-node-js/) in order to store user data that doesn’t fit into a database, including media files and system state.

<br/>
<br/>

<h3 id="benefits">Benefits of using Amazon S3</h3>

Here are the main ways Amazon S3 can be helpful when developing Serverless applications.

**Scalability**
One of the core benefits of S3 is that it’s scalable and, at the same time, fully managed. You don’t need to worry about how the files are allocated. You can just focus on uploading, accessing, and managing the lifecycle of the files you care about, and S3 takes care of the actual storage mechanism. A single AWS account can have hundreds of S3 buckets, and each bucket can contain many terabytes or petabytes of files, while still providing low-latency access to every file.

**Ease of setup**
Amazon S3 requires very little setup in order to get started. You simply create a bucket, choose whether you want it to be publicly accessible or not, and you can start uploading files right away.

**Convenient integrations with other AWS services**
Amazon S3 has a number of integrations with other AWS services that make it easy to build out complex workflows with very little custom code. This includes the integrations we already discussed: AWS Lambda, Amazon RDS, Amazon Athena, and other services.

<br/>
<br/>

<h3 id="disadvantages">Disadvantages</h3>

Before you choose to use Amazon S3 in production, consider these drawbacks and some ways you might design around them.

**High cost at scale when not managed correctly**
The S3 pricing model is pay-per-use. While this works great for small amounts of files, the total cost scales progressively as you use S3 in production and accumulate files in various buckets. Over time, the cost of storage and network transfer out of S3 to the end users can rise precipitously. 

To work around this issue, you might consider putting [lifecycle rules](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) for your buckets in place early on, so that you only end up storing the data you care about—everything else is removed automatically.

**Complicated storage-class model**
S3 provides a number of [storage classes](https://aws.amazon.com/s3/storage-classes/) for you to choose from, and while having multiple options for different use cases is useful, it can be hard to understand which storage class is the right fit for every task.

Some storage classes also include a minimum storage duration. This means you could pay more if you decide to delete or move the files before a certain minimum amount of time, which creates both billing and logical complications when building Serverless systems.

One workaround would be to use only a single storage class that you understand well, but this could end up limiting the value you get from S3. As we see it, your best bet is to spend some time deciding which storage classes are a good solution for your specific problems, and then try experimenting with some of them to observe their intricacies.

**Unlimited scalability creates challenges, too**
While unlimited storage is helpful when you have a rapidly growing system, it can also result in too few questions asked about what data developers are choosing to store and why. As a result, teams may make poor architectural decisions around storing data, not to mention that the cost of the S3 storage can quickly spiral out of control.

To avoid issues with this aspect of S3, we recommend performing architectural reviews on any system that might end up storing large amounts of data in S3 and, of course, periodically checking on your S3 spending.

**Minimal default visibility into a bucket’s contents**
If you’re like most companies and are using S3 to store many sorts of application-essential files, at some point you’ll start to wonder, "What exactly are we storing here?" This question might come up when you realize you’re paying a lot for S3 each month, without knowing for sure what data you still need and what you should be discarding.

While S3 provides the tools to understand what files are stored in a bucket, these tools rely on file tags you must supply yourself when the files are created or modified. To understand what you’re storing, you’ll generally have to set up a tagging structure that makes sense for your business.

To avoid visibility issues in your file structure, we recommend creating a tagging convention early on and enforcing it across all your applications that write to S3.

<br/>
<br/>

<h3 id="use-cases">What is Amazon S3 good for?</h3>

Here’s a short list of tasks for which Amazon S3 is generally a good fit.

**Storing static content and serving it directly to the end users**
Since S3 objects can be accessed directly via a URL, S3 is very good at serving large data objects directly to your users, with no need to proxy them through your applications. This includes images, static web pages, web assets like CSS files, and video content.

**Storing internal data: configuration, system state, intermediate states of business processes**
In Serverless systems where the applications themselves don’t preserve state, S3 can help you store state effectively (along with database services like RDS). This might be the output of various Lambda functions for cases where the output is mostly large files), intermediate states between different business processes, or a location that "bridges" your AWS systems and non-AWS systems.

**Storing logs and audit trails**
CloudTrail and CloudWatch can work with S3 as the output destination for the metrics generated by your infrastructure. You can store audit logs and audit trails in S3 and access and process them later. **Note**: S3 might not be a good fit for short-lived operational logs due to their very high volume of generated data.

<br/>
<br/>

<h3 id="regions">Amazon S3 regions</h3>

Amazon S3 is available in the following AWS regions:

- US East (Ohio) — `us-east-2`
- US East (N. Virginia) — `us-east-1`
- US West (N. California) — `us-west-1`
- US West (Oregon) — `us-west-2`
- Asia Pacific (Hong Kong) — `ap-east-1`
    - Note: this region needs to be enabled in your account settings before you can use it.
- Asia Pacific (Mumbai) — `ap-south-1`
- Asia Pacific (Osaka-Local) — `ap-northeast-3`
    - Note: this region needs to be enabled for you by your AWS sales representative.
- Asia Pacific (Seoul) — `ap-northeast-2`
- Asia Pacific (Singapore) — `ap-southeast-1`
- Asia Pacific (Sydney) — `ap-southeast-2`
- Asia Pacific (Tokyo) — `ap-northeast-1`
- Canada (Central) — `ca-central-1`
- China (Beijing) — `cn-north-1`
- China (Ningxia) — `cn-northwest-1`
- EU (Frankfurt) — `eu-central-1`
- EU (Ireland) — `eu-west-1`
- EU (London) — `eu-west-2`
- EU (Paris) — `eu-west-3`
- EU (Stockholm) — `eu-north-1`
- South America (São Paulo) — `sa-east-1`
- Middle East (Bahrain) — `me-south-1`
- AWS [GovCloud](https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/whatis.html) (US-East) — `us-gov-east-1`
- AWS [GovCloud](https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/whatis.html) (US-West) — `us-gov-west-1`

Keep in mind that the pricing of Amazon S3 can differ between regions, so some regions may be significantly more expensive to use than others. We cover this in more detail in the Pricing section below.

<br/>
<br/>

<h3 id="limits">Amazon S3 limits</h3>

The key value propositions of S3 are essentially limitless scalability of storage and consistent performance at scale. As such, S3 doesn’t have any built-in or configurable limits on things like the number of files in a bucket, the number of prefixes in a bucket, or the total size of all files within the same bucket.
The service does have a few limits, however, that can affect how you use S3:

- Once created, a bucket can’t be moved to a different region. Usually this is not a problem: if you need to move the files into a different region, you can create a new bucket and copy the files over. However, in doing so you’ll incur charges for the copy operations as well as data transfer charges between the regions.
- While S3 is built for high performance at scale, your buckets’ access patterns can negatively affect the performance of individual file operations if not structured correctly. Learn more about the recommended structure of an S3 bucket when optimizing for a high number of parallel operations in the [Optimizing S3 Performance guide](https://docs.aws.amazon.com/AmazonS3/latest/dev/optimizing-performance.html) from the AWS documentation.
- If you are encrypting the files in your S3 buckets using [AWS KMS](https://aws.amazon.com/kms/), the [encryption limits for AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second-table) apply. AWS KMS could become a bottleneck for your S3 storage or retrieval operations if you end up exceeding the AWS KMS limits.

<br/>
<br/>

<h3 id="pricing">Amazon S3 pricing</h3>

As part of the AWS free tier, in the first 12 months after you’ve created your AWS account you get 5GB of free storage, 20,000 free GET requests, and 2,000 PUT, COPY, POST or LIST requests per month. The free tier also includes 15GB of Data Transfer Out.

Beyond the free tier, the pricing for S3 is as follows:

| **Aspect**                          | **Pricing**            | **Comment**                                                                                                                                          |
| ----------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| S3 Standard                         | $0.023/GB              | Goes down to $0.021/GB with higher volumes of data stored.                                                                                           |
| S3 infrequent access                | $0.0125/GB             | Half standard price.                                                                                                                                 |
| S3 one zone - infrequent access     | $0.01/GB               | This storage class is best used for data that can be recreated, due to reduced redundancy. However, it still offers fast access to the files stored. |
| PUT, COPY, POST, LIST requests      | $0.005/1,000 requests  |                                                                                                                                                      |
| GET, SELECT, and all other requests | $0.0004/1,000 requests |                                                                                                                                                      |

The Amazon S3 Glacier product is technically a part of the S3 offering but has a different price structure:

| **Aspect**                                          | **Pricing**           | **Comment**                                                                                  |
| --------------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------- |
| S3 Glacier storage                                  | $0.004/GB             | Data retrieval for Glacier is priced separately.                                             |
| S3 Glacier expedited retrieval                      | $0.03/GB              | Typically 1-5 mins/request.                                                                  |
| S3 Glacier standard retrieval                       | $0.01/GB              | Typically 3-5 hours/request.                                                                 |
| S3 Glacier bulk retrieval                           | $0.0025/GB            | Optimized for large numbers of files or large volumes of data. Typically 5-12 hours/request. |
| S3 Glacier expedited retrieval requests - Expedited | $10/1,000 requests    | This is charged in addition to the data volume.                                              |
| S3 Glacier expedited retrieval requests             | $0.05/1,000 requests  | This is charged in addition to the data volume.                                              |
| S3 Glacier bulk retrieval requests                  | $0.025/1,000 requests | This is charged in addition to the data volume.                                              |
| S3 Glacier upload requests                          | $0.05/1,000 requests  | The data transfer for the uploads is charged at the data transfer rates (see below).         |

In addition to charges based on quantity of files, requests, and data volume, with S3 you also pay for data transfer outbound from AWS. All incoming data transfers are free, but transfers between AWS services count as both data out and data in. The pricing is as follows:

| **Aspect**                            | **Pricing**                   | **Comment**                                                                                                                                                     |
| ------------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data transfer out                     | $0.09/GB                      | Goes down to $0.05/GB at high volumes. This applies to data transfers outbound from AWS infrastructure into public networks.                                    |
| Data transfer out: public internet    | $0.09/GB                      | Goes down to $0.05/GB at high volumes. This applies to data transfers outbound from AWS infrastructure into public networks.                                    |
| Data transfer out: CloudFront         | Free                          | Amazon CloudFront pricing applies in addition.                                                                                                                  |
| Data transfer out: other AWS services | Between $0.01/GB and $0.02/GB | The $0.01/GB rate applies for the transfers within the same region, and also between `us-east-1` and `us-east-2` regions. Otherwise, the $0.02/GB rate applies. |

**Pricing in different AWS regions**
The pricing of S3 can differ depending on the region(s) you use it in. The GovCloud regions, for example, can be almost twice as expensive as `us-east-1`. The California region is a bit more expensive compared to other US-based public regions (excluding GovCloud). Check the details of the pricing for each region [on the S3 Pricing page](https://aws.amazon.com/s3/pricing/) by using the region drop-down menu.

**Sample pricing scenario**
Let’s imagine a hypothetical S3 bucket where your users upload 100,000 objects every day. Each object is on average 500KB in size. On average, each object is accessed just once after it’s been uploaded. You keep the objects for 60 days, and then delete them using an automated S3 lifecycle policy.

In this case, after 60 days you will be paying the following amounts:

- Storage: 60 days’ worth of objects * 100,000 objects/day * 500KB/object * $0.023/GB/month = $65.80/month
- POST requests for file uploads: 100,000 objects/day * 30 days * $0.005/1,000 requests = $15.00/month
- GET requests for file downloads: 100,000 objects/day * 30 days * $0.0004/1,000 requests = $1.2/month
- Data Transfer Out: 100,000 objects * 30 days * 500KB/object * $0.09/GB = $128.75/month

So the total for this scenario would be $210.85/month, or $210.51/month if the AWS free tier still applied to your account.

<br/>
<br/>

<h3 id="alternatives">Amazon S3 alternatives</h3>

While Amazon S3 is usually a good choice for storing static content and media files as well as access logs and metrics, it’s not necessarily the right solution for other use cases. Both Amazon and other cloud and infrastructure providers offer multiple types of file storage which might be better fits, depending on the task you have at hand.

**Amazon EBS**
[Amazon EBS](https://aws.amazon.com/ebs/) is the "virtual disk" that gets attached to your EC2 instances. S3 is a good storage medium for long-lived files, but it’s not a file system for a machine running in the cloud. When running Amazon EC2 machines, using Amazon EBS (or on-host storage) makes the most sense. The EC2 + EBS combination can also work quite well if you are using EC2 machines as caching solutions or other high-throughput storage for small files.

**Amazon CloudFront**
[Amazon CloudFront](https://aws.amazon.com/cloudfront/) is a CDN solution that can easily be "plugged in" to S3. CloudFront is generally used alongside S3 rather than replacing it wholesale. The main task CloudFront accomplishes is shortening the latency in accessing your static files (that may [originat](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html)[e](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html) [in an S3 bucket](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html)) in comparison to S3. CloudFront achieves this by placing your files closer to end users in locations around the world. CloudFront can be a better choice for storing files when access latency is critical, such as static website pages or frequently accessed media files.

**AWS Glacier**
[S3 Glacier](https://aws.amazon.com/glacier/) is an extension of S3 but also represents an alternative to using S3 for long-term file storage. It’s cheaper than S3, but it doesn’t offer immediate access to the files. While S3 focuses on millisecond-grade response times for all the files you store in all your buckets, retrieval of files from Glacier can take anywhere from a few minutes to a few hours and requires an asynchronous mechanism to notify you of the completed file retrievals. Compared to S3, Glacier is a more cost-effective option for long-term storage of files you don’t need very often.

**Backblaze B2**
[Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html) is a low-cost cloud storage provider. Their storage is priced competitively at $0.005/GB, one-quarter of S3's cost. Also, their network traffic will run you only $0.01/GB, which comes to (at most) one-fifth of S3’s network transfer cost. If you’re not already using AWS, and your primary need in the cloud is cloud storage, B2 can be an option to consider. However, if in fact you’re already using AWS for the rest of your infrastructure, using B2 means giving up the potential benefits of integrating your storage with other parts of your systems that run in AWS. For existing AWS users migrating to Backblaze, B2 is worth considering if you have a very high volume of data going in and out every month.

**Other major cloud providers’ storage offerings**
Google Cloud and Microsoft Azure also offer cloud storage solutions: [Google Cloud Storage](https://cloud.google.com/storage/) and [](https://azure.microsoft.com/en-us/services/storage/blobs/)[Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/), respectively. These are priced at roughly the same level as S3 and generally match it in available functionality. From a cost and efficiency perspective, it makes sense to use the storage offering of your current cloud provider. If you are using multiple cloud providers, it’s worth comparing the features of each of their offerings and seeing which one fits your use case the best.

**On-premise SAN system**
Using cloud file storage is generally the fastest and the most cost-effective option if your infrastructure is running in the cloud. However, if your infrastructure is mostly in a physical datacenter, building out your own [storage area network (SAN)](https://en.wikipedia.org/wiki/Storage_area_network) is an option. Many vendors like EMC and NetApp offer various SAN solutions at different cost and performance levels.

<br/>
<br/>

<h3 id="amazon-s3-vs-ec2">When to use Amazon S3 vs EC2?</h3>

S3 is a storage service, while EC2 is primarily a compute service. In general, it’s best practice to use S3 (or S3 with CloudFront) to store files that are accessible to the users of your application; storing files on EC2 machines is best to satisfy the needs of your internal applications.

You may also need to use EC2 in certain edge cases: for example, when you have complex file processing logic that isn’t compatible with how S3 works. In most cases, however, you can architect your application to take advantage of cloud storage and thereby reap the benefits of using S3.

<br/>
<br/>

<h3 id="faq">Amazon S3 FAQ</h3>

**Can S3 be used as a relational database?**
Technically yes, but it’s not very common to use it like this. S3 offers functionality known as [S3 Select](https://docs.aws.amazon.com/AmazonS3/latest/dev/selecting-content-from-objects.html), which provides an SQL-like query interface for certain kinds of data stored in S3, and it works if your bucket contains CSV or JSON files. In truth it isn’t really a relational database—it’s just a more convenient way for you to retrieve subsets of data from S3 when you’re storing CSV or JSON in your buckets.

If you’re looking for a true managed relational database solution, consider using [Amazon RDS](https://aws.amazon.com/rds/).

**What is Amazon S3 Transfer Acceleration?**
[S3 Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html) is a way for you to upload files into your S3 buckets faster. The Transfer Acceleration tool will upload your files first to the closest CloudFront location and will then send it to S3 from there. This costs extra on top of the data transfer charges, between $0.04/GB and $0.08/GB.

**Can S3 objects be encrypted?**
Yes. S3 supports per-object encryption options with per-bucket defaults. The objects are encrypted at rest and get decrypted when they are accessed. For your encryption you can use either S3-managed keys or your own keys, generated and managed using AWS KMS.

**Can I use S3 for backups?**
Yes. S3 is a solid option for backing up the contents of your databases and other data. S3 has native integration with Amazon RDS to allow backing up your databases continuously to S3 and restoring them from S3 as well.

If you are backing up large volumes of data, consider setting up lifecycle rules on the backups and/or using Amazon S3 Glacier to reduce cost in the long run.

**Is S3 a CDN?**
No. With S3, the files are usually stored in a single location or at most a few locations and aren’t optimized for fast download speeds around the world. If you are looking for a CDN, consider using [Amazon CloudFront](https://aws.amazon.com/cloudfront/).

**Can I use S3 for video content?**
Yes. You can store video files in S3 and either stream them directly or distribute them first to Amazon CloudFront, where your users would then stream the videos.

<br/>
<br/>

<h3 id="resources">Using S3 with Serverless Framework</h3>

If you’d like to learn more about using Amazon S3 with the Serverless Framework, here are a few of our most helpful blog posts and examples that involve S3:

- [Uploading objects to S3 using one-time](https://serverless.com/blog/s3-one-time-signed-url/)[,](https://serverless.com/blog/s3-one-time-signed-url/) [pre](https://serverless.com/blog/s3-one-time-signed-url/)[-](https://serverless.com/blog/s3-one-time-signed-url/)[signed URLs](https://serverless.com/blog/s3-one-time-signed-url/)
- [Deploy a REST API using Serverless, Django and Python](https://serverless.com/blog/django-serverless-framework-a-match-made-in-heaven/) — uses SQLite stored in S3
- Dynamic image resizing with Amazon S3, and Serverless Framework
    - [Ruby](https://serverless.com/blog/dynamic-image-resizing-ruby/)
    - [Python](https://serverless.com/blog/dynamic-image-resizing-python/)
    - [Node.js](https://serverless.com/blog/dynamic-image-resizing-nodejs/)
- [Example - Single Page App with Cloudfront and Serverless Framework](https://serverless.com/examples/aws-node-single-page-app-via-cloudfront/)
- [Logging to S3 buckets with Serverless and CloudTrail](https://serverless.com/blog/cloudtrail-security/)
- [Using AWS Rekognition with Amazon S3 and Serverless Framework](https://serverless.com/examples/aws-node-rekognition-analysis-s3-image/)
- [Serverless notification system](https://serverless.com/blog/serverless-notifications-on-aws/)

Other resources that can be useful for you to learn more about using S3 and Serverless Framework:
- [Serverless Framework S3 event documentation](https://serverless.com/framework/docs/providers/aws/events/s3/)
- [Serverless Framework AWS provider documentation](https://serverless.com/framework/docs/providers/aws/)
- [AWS S3 documentation](https://docs.aws.amazon.com/s3/index.html)