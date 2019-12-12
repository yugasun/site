---
title: "Amazon CloudFront (AWS's CDN) - The Ultimate Guide"
description: 'Considering Amazon CloudFront as your CDN solution? Read this guide first - it covers what CloudFront is, how it works, its benefits, disadvantages, locations, alternatives, pricing, limits & more.'
layout: Learn
useLearnNav: false
---

Are you considering using a content delivery network (CDN) solution like Amazon CloudFront with your Serverless applications or websites? Looking to learn more about the pros and cons of CloudFront and understand its alternatives? Well, you’re in the right place — this guide addresses exactly those considerations.

In this guide, we’ll cover what Amazon CloudFront is, discuss why it’s an important part of the Serverless ecosystem, and walk you through the advantages and disadvantages of using CloudFront in your Serverless applications.

The goal of this article is to help you decide whether CloudFront is the right tool to use for your specific situation. You can also skip to the end of this article for a list of resources and examples, should you want to learn even more about Amazon CloudFront and use it with the Serverless Framework.

<br/>
<h4>Table of Contents</h4>

* [What is Amazon CloudFront?](#what)
* [How does Amazon CloudFront work?](#how-does-amazon-cloudfront-work)
* [Why is CloudFront an essential part of the Serverless architecture?](#architecture)
* [How does CloudFront integrate with other AWS services?](#integrations)
* [How does CloudFront work with the Serverless Framework?](#serverless)
* [Benefits of using CloudFront](#benefits)
* [Disadvantages](#disadvantages)
* [Locations](#locations)
* [Limits](#limits)
* [Pricing](#pricing)
* [Alternatives](#alternatives)
* [CloudFront v/s S3](#amazon-cloudfront-vs-ec2)
* [FAQ](#faq)
* [Resources & Getting Started](#resources)

<br/>
<br/>

<h3 id="#what">What is Amazon CloudFront?</h3>

[Amazon CloudFront](https://aws.amazon.com/cloudfront/) is a [content delivery network](https://en.wikipedia.org/wiki/Content_delivery_network) (CDN) provided by Amazon Web Services. By using a CDN, companies can accelerate delivery of files to users over the Internet while also reducing the load on their own infrastructure. CloudFront is AWS’s own CDN solution that integrates with other AWS products, so it’s convenient for companies already running on AWS.

<br/>
<br/>

<h3 id="how-does-amazon-cloudfront-work">How does CloudFront work?</h3>

CloudFront acts as a [distributed cache](https://en.wikipedia.org/wiki/Distributed_cache) for your files, with cache locations around the world. It fetches your files from their source location (“origin” in CloudFront terms) and places the copies of the files in different edge locations across the Americas, Europe, Asia, Africa, and Oceania. In so doing, CloudFront speeds up access to your files for your end users.

Why is this worth doing? Imagine, for example, that your data origin is located in Brazil and one of your customers in Japan would like to access this data. Without CloudFront (or a similar solution) this customer would need to send a request to the other side of the world, transferring the files from a very distant location. This would result in a request that’s slow to arrive to the destination as well as a slow file download. Having your customers wait longer to get data often makes for a poor customer experience.

With CloudFront, however, the files are periodically fetched by CloudFront system from the location in Brazil and placed onto a set of servers around the world, including one in Japan. When a user in Japan goes to download the files, the request will now be served by a nearby server with lower latency, a higher download speed, and a better customer experience.

(Note: a distributed cache model is just one approach to building a CDN; we discuss other approaches in the [CloudFront alternatives](#alternatives) section in this article.)

<br/>
<br/>

<h3 id="architecture">Why is CloudFront an essential part of the Serverless ecosystem?</h3>

Under the Serverless model, many websites and applications rely on static files to do most of the work, with only parts of the content customized using Serverless APIs. The static portions include HTML web pages, CSS files, Javascript code, and media such as images and video files.

Fast website load times are a requirement, regardless of where your user base is located. You can see this reflected in Google’s [hinting](https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/) that faster-loading websites appear higher in their search results.

CloudFront allows Serverless applications to provide a fast and low-latency experience to end users by making sure that the static parts of their application load fast, irrespective of where its users are. CloudFront achieves this while also allowing developers to pay only for what they use and to scale their systems on demand. That’s what makes CloudFront an essential part of the Serverless ecosystem.

<br/>
<br/>

<h3 id="integrations">How does CloudFront integrate with other AWS services?</h3>

To speak of CloudFront being integrated with another AWS service chiefly refers to CloudFront’s ability to use that service as a data source for distribution. These integrations include:

**Amazon S3**. It’s possible (and in fact very common) to use an [Amazon S3](https://serverless.com/amazon-s3) bucket as a source from which CloudFront will request files before placing them in its edge locations. This works both with standard S3 buckets and with buckets configured as [website endpoints](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteEndpoints.html). When CloudFront is configured, the S3 bucket can continue to be used with no changes.

**Amazon EC2**. CloudFront supports using [an Amazon EC2](https://aws.amazon.com/ec2/) server or an [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) endpoint as an origin for files in a CloudFront distribution. CloudFront’s support for custom HTTP/HTTPS origins is what enables this integration, meaning that it’s also possible to use a non-EC2 server as a file origin.

**AWS Lambda@Edge**. Working essentially just like [AWS Lambda](https://serverless.com/aws-lambda/), Lambda@Edge functions run at CloudFront edge locations. This means the code of Lambda@Edge functions runs closer to where your users are located, and as a result you can provide a faster, smoother experience to your website visitors or application users. The functions on Lambda@Edge can “intercept” the requests and the responses between CloudFront and the origin of the data, as well as between CloudFront and the end user.

**AWS Elemental MediaStore and MediaPackage**. CloudFront supports AWS [MediaStore](https://aws.amazon.com/mediastore/) and [MediaPackage](https://aws.amazon.com/mediapackage/) as origins for existing or live video content, which is then distributed to the end users using CloudFront endpoints.

**Amazon CloudWatch**. Every CloudFront distribution emits [Amazon CloudFront](https://aws.amazon.com/cloudwatch/) metrics for metrics such as total number of requests, error rates, and Lambda@Edge throttles and execution errors. These metrics are available with no additional configuration and don’t count against CloudWatch limits, making it a good starting point for monitoring your CloudFront usage.

<br/>
<br/>

<h3 id="serverless">How does CloudFront work with the Serverless Framework?</h3>

You can use [Serverless Framework Resources](https://serverless.com/framework/docs/providers/aws/guide/resources/) to create and configure CloudFront distributions.

In addition, the Serverless Framework allows you to create, deploy and manage Lambda@Edge functions that are based on events originating in CloudFront. See [the Serverless Framework CloudFront event documentation](https://serverless.com/framework/docs/providers/aws/events/cloudfront/) for examples and more details.

<br/>
<br/>

<h3 id="benefits">Benefits of using CloudFront</h3>

Using CloudFront provides Serverless developers with a number of benefits, discussed below.

**Scalability**
CloudFront distributions scale automatically with the number of requests your files are getting and require no configuration changes to respond to increased load, making CloudFront a great choice for serving the static content of a website or a fast-growing application.

**Ease of setup**
Setting up a CloudFront distribution is quite easy when using S3 or even a custom HTTP/HTTPS endpoint as a file origin. Once set up, CloudFront requires no maintenance to continue working. Low maintenance means extra time for more productive tasks like building out the business logic of your application.

**Flexible configuration**
You can customize your CloudFront distributions to have different caching policies based on the kinds of files you’re serving. So, for example, if you have different kinds of content being served from the same domain and you want to apply different file expiration rules in the CloudFront cache to different sections of your website or application, you can do so on a very granular level.

<br/>
<br/>

<h3 id="disadvantages">Disadvantages of using CloudFront</h3>

Using CloudFront also comes with a few drawbacks that you need to be aware of before you decide to use it in production.

**High cost at scale**
CloudFront pricing is pay-per-use. This means you pay very little if the traffic to your Serverless site or application is low. However, as the traffic grows, the cost of using CloudFront can increase very rapidly.

You can avoid surprises with CloudFront bills by establishing a process to regularly review your CloudFront usage and give your accounting teams a heads up if any significant increases in CloudFront traffic (and thus cost) are expected as you develop your application.

We also recommend only using CloudFront for files where delivery time and speed is truly important, for example, the assets for your main website’s marketing pages. It’s likely that most of the files you distribute to your users can be shared directly from S3 or another file storage solution without much impact to the customer experience. Customer invoices, user-generated video content, and short-lived assets probably don’t need to be part of your CloudFront distributions.

**Lack of visibility into the underlying CloudFront structure**
When using a managed service, ease of use and configuration frequently trades off for the control you would normally have over the underlying infrastructure. CloudFront is a proprietary solution, and while Amazon provides [a guide on optimizing CloudFront caching performance](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ConfiguringCaching.html), you don’t get a lot of visibility into how exactly caching is performing in every region and for every request type. This can sometimes result in slower performance compared to a similar self-hosted solution that you can tweak for your exact use case.

That being said, there are very few use cases that would truly warrant building your own CDN solution for performance reasons. For most teams, using a managed service like CloudFront will work just fine.

<br/>
<br/>

<h3 id="locations">CloudFront Locations</h3>

CloudFront currently offers around 200 **edge locations**—which consist of content caches and supporting infrastructure—on five continents. You’ll find the highest density of edge locations in the United States, Western Europe, and East Asia.

In addition, CloudFront offers 11 **regional edge caches** in AWS regions around the world, which act as caches for the caches; instead of having all 200 edge locations get the original files from your servers, the regional edge caches retain the most frequently accessed files and serve them to the edge location when it requests the updated version of a file.

A full list of CloudFront locations, including edge locations and edge caches, is available on the CloudFront website’s [features page](https://aws.amazon.com/cloudfront/features/).

<br/>
<br/>

<h3 id="limits">Amazon CloudFront Limits</h3>

CloudFront core service limits are flexible: the default limits on total network throughput per distribution and number of requests per second can be increased by contacting AWS Support.

When using a Lambda@Edge function with origin requests and responses, that is, when a function is executed coupled with a request to the origin, the limits are similar to [the standard AWS Lambda limits](https://serverless.com/aws-lambda/#limitations).

The only exception is the function timeout—by default 30 seconds for Lambda@Edge rather than 15 minutes—but this timeout can be increased on request. However, note that Lambda@Edge functions that run on **viewer** requests and responses will execute at a very high frequency—potentially every time a user requests a file from any edge location.

The Lambda@Edge limits in this case are lower in order to preserve fast response times:

- Only up to 128MB function memory (instead of AWS Lambda’s usual 1GB limit).
- Five-second function timeout (instead of 15 minutes).
- 40KB maximum response size (instead of 1MB).
- 1MB maximum size of the compressed function code (instead of 50MB).

In most cases, these limits won’t be an issue: Lambda@Edge is specifically designed for short, fast operations that run near to your users. For use cases requiring more compute power or longer function runtime, we recommend using garden-variety AWS Lambda rather than Lambda@Edge.

<br/>
<br/>

<h3 id="pricing">Amazon CloudFront Pricing</h3>

With the AWS free tier, during the 12 months after your account was created, AWS provides 50GB of free outbound data transfer and 2 million free HTTP/HTTPS requests to your CloudFront distributions per month. The free tier also includes 1,000 free invalidation requests per month. This is generally enough to experiment with using CloudFront but insufficient for production use.

Beyond the free tier, CloudFront pricing runs as follows:

| **Aspect**                       | **Cost**                                 | **Comment**                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data transfer out—end users      | $0.09/GB                                 | This is data transfer outbound to the public Internet (your end users). The pricing per additional GB goes down gradually as your usage increases. The $0.09/GB cost applies for the first 10TB of traffic, between 10TB and 50TB the cost is $0.085/GB, between 50TB and 150TB it’s $0.07/GB, and above 150TB it’s $0.05/GB.                           |
| Data transfer out—origin servers | Between free and $0.09/GB                | Exact pricing here depends on the location of the origin servers. When CloudFront makes PUT or POST requests to fetch the data from your servers, the rate shown here is applied. With servers outside AWS, rates will be closer to the regular outbound data transfer rate, $0.09/GB. For files originating in Amazon S3 or EC2, this traffic is free. |
| HTTP/HTTPS requests              | Between $0.0075 and $0.0220/10K requests | Exact pricing depends on the region you’re using and whether you’re accessing the files using HTTP or HTTPS.                                                                                                                                                                                                                                            |
| Invalidation requests            | $0.005/request                           | An invalidation request forces the early removal of a file or path from a CloudFront distribution before the configured time-to-live interval has expired.                                                                                                                                                                                              |

For many use cases, Cloudfront’s outbound data transfer to end users is what’s going to cost the most. In some edge locations around the world, for example in South America and Australia, data transfer pricing can be significantly higher than in US regions. To help you control the costs, CloudFront offers three different price classes that can be set for each CloudFront distribution:

| **Price class** | **Regions included**                                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100             | Includes only standard-priced regions in the US, Canada, and Europe.                                                                                 |
| 200             | Includes all regions in class 100, plus South Africa, the Middle East, Japan, India, Singapore, South Korea, Taiwan, Hong Kong, and the Philippines. |
| All             | Includes all regions in class 200*,* **plus South America and Australia.                                                                             |

CloudFront includes a free SSL certificate option if you use a CloudFront domain (i.e. `<distribution-name>.cloudfront.net`) or your own domain for your distribution. When using your own domain, the free option uses [SNI](https://en.wikipedia.org/wiki/Server_Name_Indication) Custom SSL technology which works properly with all modern browsers. However, SNI doesn’t work with some legacy browsers. If you’re looking to support SSL on a CloudFront custom domain for a large number of legacy users, AWS can provide a dedicated IP address for all your HTTPS CloudFront traffic, which will cost you an additional $600/month.

Use of Lambda@Edge is priced as follows:

| **Aspect**        | **Pricing**           |
| ----------------- | --------------------- |
| Requests          | $0.60/1M requests     |
| Function run time | $0.00005001/GB-second |

Note: the function run time is measured as a combination of wall-clock time and the amount of memory configured for the function.

**Sample pricing scenario**
Let’s assume that you have 10,000 users for your application or website every day. On average, each user downloads from your CloudFront distributions 100 files per day over HTTPS, including static HTML and media files, and these 100 files constitute an average 20MB in total.

To simplify the calculation, we’re going to assume that your files originate in S3, making the transfer to CloudFront free. We’ll also assume you don’t typically issue invalidation requests and will let the files expire automatically.

To further simplify, we’ll assume that all your users are equally split between the US, Canada and Western Europe.

In this situation, your monthly data transfer charges would be:

30 days * 10,000 users * 20MB/day * $0.085/GB = **$498.05/month**

The charges for requests would be:

30 days * 10,000 users * 100 files/day * ($0.01/10,000 requests * 67% of users in the US and Canada + $0.012/10,000 requests * 33% of users in Europe) = **$31.68/month**

The total amount you’d pay in this scenario would be **$529.73/month**.

<br/>
<br/>

<h3 id="alternatives">Amazon CloudFront Alternatives</h3>

CloudFront is the only CDN service offered by AWS, but there are other services from Amazon and from other providers that you could use to achieve the same goal—giving your users fast access to your static files at scale.

**Amazon S3**
[Amazon S3](https://serverless.com/amazon-s3) is a cloud file-storage solution from Amazon, and while it’s not a CDN like CloudFront, it can work well for the purpose of distributing files to your end users. With both CloudFront and S3 alike, the core of the cost is the data transfer from file storage to your end users. S3 can be cheaper, since you’ll only pay for data transfer from your region of origin, while with CloudFront you’ll be paying for data transfer in all regions where your users access the files. This can of course include regions where data transfer is very expensive, for example, South America or Australia.

But using S3 will also likely be slower for your end users, unless they all happen to be located near the region where your S3 bucket is hosted.

In short, using S3 directly (without CloudFront) can be a good option for cases where a small amount of extra latency is acceptable for your users.

**Google Cloud CDN**
[Google Cloud CDN](https://cloud.google.com/cdn/) offers very similar functionality to that of CloudFront. The key difference is the pricing structure: Google Cloud CDN exposes more detail about the cache structure and charges for cache lookups, cache fill data transfer, and cache egress data transfer. The total cost of using Google Cloud CDN should be in the same range as CloudFront, as most of the cost still lies in the data transfer charges, and data transfer is priced similarly for both services. The extra visibility you get into the details of how Google Cloud CDN works through their pricing model can allow you to reduce the CDN’s cost and optimize its performance.

**CloudFlare CDN**
[CloudFlare](https://www.cloudflare.com/) is a company that provides CDN and related solutions. The technical implementation of their [CDN solution](https://www.cloudflare.com/cdn/) is different from that of CloudFront and Google Cloud CDN: CloudFlare is built as a [reverse proxy](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/). CloudFlare’s customers point the name servers for their domain(s) to CloudFlare, whose CDN service then becomes the primary endpoint for all HTTP or HTTPS requests each domain receives. CloudFlare retrieves any files it’s missing from the customer’s backend server.

This method differs from CloudFront’s, in which you configure an explicit set of files to be available in a CloudFront distribution and let the CloudFront infrastructure periodically fetch the up-to-date versions of the content for you.

CloudFlare CDN has a different pricing structure: rather than paying for the traffic out to the public internet, you pay a flat monthly fee plus a usage fee based on the number of DNS requests made to your site.

When using CloudFlare, you have access to fewer configuration options than in CloudFront. But in more conventional use cases, such as caching a website, using CloudFlare can result in a site that’s equally fast while paying smaller CDN bills.

<br/>
<br/>

<h3 id="amazon-cloudfront-vs-s3">When should I use Amazon CloudFront vs S3?</h3>

We generally recommend using CloudFront only in cases where faster download speeds and lower latency for your files will result in a significant improvement in customer experience. This includes cases like hosting the homepage of your marketing website on CloudFront instead of S3.

For all cases where latency and download speed are less crucial, we recommend using S3 directly to reduce the total operating cost of your system.

<br/>
<br/>

<h3 id="faq">Amazon CloudFront FAQ</h3>

**Is it possible to serve private content through CloudFront?**
Yes. CloudFront supports generating [signed URLs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html) for your content. You can generate these URLs for all private file downloads within your system. This requires integration with the CloudFront API and configuring the appropriate access policies. You would also need to make sure that the origin of your files (for example, S3 or your HTTP/HTTPS server) prevents direct file access, bypassing CloudFront.

**Does CloudFront offer access logging?**
Yes, it is possible to generate a log message every time a file is accessed worldwide. The log files [can be written to Amazon S3](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html).

**Is it possible to create redirect rules with CloudFront?**
CloudFront doesn’t support the explicit configuration of redirect rules. However, it will cache any response that the origin generates, including redirects. For example, if you are using your S3 bucket as a website endpoint. and if you have a redirect rule from an HTTP URL to an HTTPS URL in your bucket settings, this redirect will be cached by CloudFront. Accessing the HTTP URL on CloudFront will redirect the user to the HTTPS URL without hitting S3 directly.

If you are using your own HTTP/HTTPS server as the file origin, you can configure appropriate redirect rules on the server and let CloudFront cache these rules.

<br/>
<br/>

<h3 id="resources">Using CloudFront with the Serverless Framework</h3>

Check out the following resources for examples of using the Serverless Framework with Amazon CloudFront:

- [Single page web app with Serverless Framework and CloudFront](https://serverless.com/examples/aws-node-single-page-app-via-cloudfront/)
- [Generating S3 signed URLs using Lambda@Edge and Serverless Framework](https://serverless.com/blog/s3-one-time-signed-url/)
- [Setting up a custom domain name for AWS Lambda and Amazon API Gateway using CloudFront and Serverless Framework](https://serverless.com/blog/serverless-api-gateway-domain/)
- [Using the Serverless Next.js component with CloudFront and Lambda@Edge](https://serverless.com/blog/serverless-nextjs/)

Other resources

- [Using Lambda@Edge with the Serverless Framework - CloudFront event documentation](https://serverless.com/framework/docs/providers/aws/events/cloudfront/)
- [Serverless Framework - AWS provider documentation](https://serverless.com/framework/docs/providers/aws/)
- [CloudFront documentation - AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
- [AWS Lambda - The Ultimate Guide](https://serverless.com/aws-lambda/)
- [Amazon S3 - The Ultimate Guide](https://serverless.com/amazon-s3/)
