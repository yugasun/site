module.exports = [
    {
      title: 'Introduction to Course',
      items: [
        {
          title: 'Introduction',
          lessonInfo: `An introduction to the course, the instructor, and a look at what you should know before starting this course. 
  
          This course will take you through several methods for building and deploying Frontend applications with AWS and the Serverless Framework.`,
          playTime: '3:43',
          videoNumber: 1,
          videoLink: 'https://www.youtube.com/watch?v=CawN9GCqaeQ',
          slug: "serverless-frontend-aws-introduction",
        },
        {
          title: 'Different Options for Serverless Frontends',
          lessonInfo: "In this video, you'll learn a few of the options for developing and deploying frontend applications on AWS. You'll look at a few common examples of frontend development frameworks and static site generators and some common AWS services and tools used to configure an application frontend.",
          playTime: '3:09',
          videoNumber: 2,
          videoLink: 'https://www.youtube.com/watch?v=I2myQXtAdlU',
          slug: "serverless-frontend-options",
        },
      ],
    },
    {
      title: 'Deploying Websites with Serverless Components',
      items: [
        {
          title: 'What are Serverless Components?',
          lessonInfo: "In this video, you'll learn about the different low-configuration Serverless Components you can use to deploy your frontend application. You'll also get more context on the state of Serverless Components and what you can expect from them going forward.",
          playTime: '3:48',
          videoNumber: 3,
          videoLink: 'https://www.youtube.com/watch?v=dVz6kv0YhBk',
          slug: "what-are-serverless-components",
        },
        {
          title: 'The Serverless Website Component with React',
          lessonInfo: "A tutorial on how you can easily deploy React applications that are fast, cheap and distributed globally",
          playTime: '5:26',
          videoNumber: 4,
          videoLink: 'https://www.youtube.com/watch?v=ts26BVuX3j0',
          slug: "deploying-react-website-on-aws",
        },
        {
          title: 'Next.js & Lambda @ Edge with Serverless Components',
          lessonInfo: "This video will show you how to get a Next.js website deployed on Lambda@Edge. This will let you start to leverage the benefits of edge computing to deliver content to your viewers faster and more dynamically.",
          playTime: '6:26',
          videoNumber: 5,
          videoLink: 'https://www.youtube.com/watch?v=2KxwgXlk2yc',
          slug: "deploying-nextjs-on-aws",
        },
      ],
    },
    {
      title: 'Deploying Websites with Serverless Framework Plugins',
      items: [
        {
          title: 'Introduction to Plugins',
          lessonInfo: "This next section will go over the outline for the next videos on how to deploy a static website with a custom domain, SSL, and a CloudFront Distribution on AWS.",
          playTime: '1:23',
          videoNumber: 6,
          videoLink: 'https://www.youtube.com/watch?v=vZZoB3r3Td0',
          slug: "deploying-websites-with-serverless-plugins",
        },
        {
          title: 'Creating a Service & Deploying a Frontend',
          lessonInfo: "In this video, we'll look at how we can create a simple Serverless Framework service and then deploy a frontend with a serverless plugin - Serverless Finch.",
          playTime: '12:10',
          videoNumber: 7,
          videoLink: 'https://www.youtube.com/watch?v=juoUTO_IriU',
          slug: "deploying-serverless-website-using-finch",
        },
        {
          title: 'Amazon Route 53 & Custom Domains',
          lessonInfo: "In this video, we'll look at how you can register a custom domain using Route 53.",
          playTime: '2:54',
          videoNumber: 8,
          videoLink: 'https://www.youtube.com/watch?v=8UdD-dmflR0',
          slug: "amazon-route-53-domain-registration",
        },
        {
          title: 'Creating an SSL Certificate in AWS',
          lessonInfo: "This video demonstrates how you can register a free SSL certificate using Amazon Certificate Manager (ACM).",
          playTime: '4:18',
          videoNumber: 9,
          videoLink: 'https://www.youtube.com/watch?v=Ge-dkZgqLKg',
          slug: "creating-ssl-certificate-in-aws",
        },
        {
          title: 'Creating a CloudFront Distribution',
          lessonInfo: "In this video, you'll see how to create a CloudFront Distribution and configure your SSL certificate and custom domain together.",
          playTime: '8:13',
          videoNumber: 10,
          videoLink: 'https://www.youtube.com/watch?v=_otcYm8RVHA',
          slug: "creating-aws-cloudfront-distribution",
        },
        {
          title: 'Redeploying Our Static Site & Invalidating the Cache',
          lessonInfo: "In this video, you'll see how to make changes in your website and then invalidate the CloudFront cache so they appear live on your website.",
          playTime: '4:23',
          videoNumber: 11,
          videoLink: 'https://www.youtube.com/watch?v=RbT9UQBy3FI',
          slug: "cloudfront-delete-cache",
        },
      ],
    },
    {
      title: 'Adding APIs to Your Frontend',
      items: [
        {
          title: '[coming soon] Adding a DynamoDB Table',
          playTime: '0:00',
          videoNumber: 12,
        },
        {
          title: '[coming soon] Writing Our Backend Function',
          playTime: '0:00',
          videoNumber: 13,
        },
        {
          title: '[coming soon] Adding an HTTP API Endpoint',
          playTime: '0:00',
          videoNumber: 14,
        },
        {
          title: '[coming soon] Integrating the API In Our Frontend',
          playTime: '0:00',
          videoNumber: 15,
        },
      ],
    },
      {
      title: 'Adding Authentication and Authorization',
      items: [
        {
          title: '[coming soon] Different Options for Auth',
          playTime: '0:00',
          videoNumber: 16,
        },
        {
          title: '[coming soon] Integrating Auth0 into a Frontend',
          playTime: '0:00',
          videoNumber: 17,
        },
        {
          title: '[coming soon] Adding Lambda Authorizers to Our APIs',
          playTime: '0:00',
          videoNumber: 18,
        },
      ],
    },
  ]