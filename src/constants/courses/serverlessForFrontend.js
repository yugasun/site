module.exports = [
    {
      title: 'Introduction to Course',
      items: [
        {
          title: 'Introduction',
          lessonInfo: `An introduction to the course, the instructor, and a look at what you should know before starting this course. 
  
          This course will take you through several methods for building and deploying Frontend applications with AWS and the Serverless Framework.`,
          transcript: `Hello and welcome to this Serverless Learn course. In this course we'll be looking at frontend development and how it can interact with serverless technologies and the Serverless Framework. My name is Fernando Medina Corey, and currently I work as a solutions architect here at Serverless Inc; that means I help customers and clients develop their serverless applications and learn how to use things like the Serverless Framework and many of the technologies that it integrates with. 
          
          In previous roles. I've worked as a cloud architect and a data engineer, but for right now you can think of me just as a helpful hand getting started using some of these technologies. So let's take a quick look at an outline of what we'll be doing in this course.
          
          First, we're just going to go over some of these basics and take a look at this outline. We're also going to see if you're the intended audience for this course, just to make sure that you're not wasting your time here. 

          After that we'll take a look at what serverless frontends are. Really briefly, just so we have a definition and then we'll go through tools that we might use to create serverless frontends and how those are actually classified and considered. 
          
          Then we'll see how we can deploy websites with serverless Components rapidly creating a website inside of AWS with everything from an SSL certificate to a cloud front distribution all the way through a custom domain name. 
          
          In addition to this method, we'll take a look at an alternate method of deploying our serverless frontends using Serverless Framework plugins. When we do this, we're also potentially gonna manually need to configure things like SSL, a CloudFront distribution, and the custom domain. 
          
          It's good to know how some of that works in the background sometimes, but if you're more interested in a really fast and easy way to do this, I definitely suggest focusing on the component section. 
          
          This also brings up a point where if there's any particular part of this course that you don't really feel like it's going to be worthwhile, feel free to skip it and come back to it later if you think you can use it. 
          
          At the very end of this course, we'll also take a look at how to seamlessly add APIs to your frontends. This can become pretty useful if you're building out your frontend applications and you suddenly want to add a persistence layer of a database table or something else that can help you use this application more effectively, and I'll show you how to start to do that process with the Serverless Framework. 
          
          So let's think about whether or not you're the intended audience for this course. If you're a frontend developer, there's a good chance that you're on your way to being this audience. 
          
          It's also possible if you're a fullstack engineer or some other sort of software engineer that deals with frontend development, this could be a good start for you. In this course, I'm going to assume that you have a basic understanding of the Serverless Framework and serverless in general, but if you don't, don't worry. There's other content here on serverless learn that can help you get this basic understanding right away and then come back to this course when you're ready. 
          
          You can pick pieces of this content out just to familiarize yourself with the basics and then come right back here to deploy your frontend application. 
          
          Next up, if you're interested in deploying your own frontend application, this is going to be a good spot for you because we're going to go through at least two methods of how to do this so that you can spin things up right away in a very effective website. 
          
          In addition to this final characteristic, you're also going to maybe be considering adding some sort of interactive functionality with API's into your application cause towards the end, that is something we'll be doing. So now that you know whether or not you might be a good fit for this particular course, I hope to see you in the next video.`,
          playTime: '3:43',
          videoNumber: 1,
          videoLink: 'https://www.youtube.com/watch?v=CawN9GCqaeQ',
          slug: "serverless-frontend-aws-introduction",
        },
        {
          title: 'Different Options for Serverless Frontends',
          lessonInfo: "In this video, you'll learn a few of the options for developing and deploying frontend applications on AWS. You'll look at a few common examples of frontend development frameworks and static site generators and some common AWS services and tools used to configure an application frontend.",
          transcript: `Welcome back. So what are serverless frontends? I have a pretty high level definition of any frontend that allows you to scale rapidly and avoid managing server infrastructure. But this really doesn't get over the full breadth of things that could be included in serverless frontends. 
          
          So let's take a look at some of the possible tools we might use to actually build some. One of the first set of tools we might use is frontend frameworks. These could be anything from React to Next.js, Gatsby, Vue or Nuxt and many of these rely on each other and work with different frontends. For example, Vue and Nuxt have a relationship in terms of Nuxt being related to how you develop with Vue. And the same thing with Next.js and React. In addition to a popular frontend frameworks, we might also use something called static site generators. 

          These generators will help us create lots of pre-compiled HTML, CSS and JavaScript files that all go into making our website without having to deal with any additional rendering behind the scenes. These are things like Jekyll, Hugo and Pelican. 
          
          In addition to popular frontend frameworks and static site generators, we're also gonna need some infrastructure resources to potentially host our static sites or frontend frameworks. We might use something like Amazon S3 website hosting and we'll be doing that later on in these videos, but we could also use managed services like Netlify, GitHub Pages or Surge.sh which are more specific to just allowing things like static sites to be hosted on them. Whereas S3 has additional functionality as object storage, but in this case, these services are more finely tuned to actually hosting frontend frameworks. 
          
          So what else might we need? We could also host frontend frameworks on something like AWS Lambda or Lambda @ Edge, and these are alternate sets of tooling that we could also use. If we wanted to actually deploy this with the Serverless Framework, there's a few different tools we can use for this. 
          
          One of the first is Serverless Components and we'll take a look at a video from our CEO, Austin Collins, about how we could use a serverless website component to quickly deploy an entire frontend application complete with an SSL certificate, a custom domain, a CloudFront distribution for content distribution. And also just get all that configuration out of the way within a few lines. 
          
          But if we wanted to do it a little more manually, there's still the option to use serverless plugins to configure our files to be deployed to something like an S3 bucket and then we can either use other plugins or manually configure the SSL HTTPS certificate and things like the CDN and custom domain. So with all of these different tools in mind, let's go ahead and jump into the next videos where we'll be taking a look at how we can actually build everything out using this infrastructure and these tools.`,
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
          transcript: `Welcome back. Let's get started by looking at how we can deploy our websites with Serverless Components. First I want to give you a little bit of context about Serverless Components, how they function and what their purposes as well as what you can expect from them going forward in the next few months. 
          
          After that, we'll take a look at another video from Austin Collins, our CEO, about how you can use the serverless website component to deploy your applications to AWS and get everything from an SSL certificate to a custom domain all the way through a cloud front distribution to cache your website files locally. 
          
          That'll help you get a very highly functional website up and running very quickly, but if you'd like another alternative approach for serverless front ends, we'll also be able to take a look at using Lambda@Edge to host our serverless front ends. We'll use the serverless Next.js component in that particular case and you'll see how we can use that to deploy another kind of application. But in the future you can expect a lot of other things from components like that. 

          Let's take a look at the state of Serverless Components in 2019. Right now they provide incredible utility for front end developers looking to deploy their applications on something like AWS, which is the cloud provider that most of these components currently are focused on. They'll get you things like an HTTPS certificate, set up a CloudFront content distribution network and also make sure your custom domain that you've registered inside of AWS is synced up with these other services. They're also going to work really fast because in the background they don't rely on AWS as CloudFormation to provision all these infrastructure resources. They're going to do it much more rapidly and if you want to use something like Lambda@Edge, we've started to introduce additional components for this alternative for hosting your front ends. 
          
          In this particular case, we'll be looking at two different options to actually deploy your frontends, but you can use a lot of different front end frameworks or tools that work with these two different options. 
          
          The first one I'm thinking of is the Lambda@Edge. In this particular case, we'll demonstrate it with a Next.js website and show you how this will give you the options to use things like server side rendering. 
          
          However, there's also the option to use a website component to do static builds. These builds will be able to be deployed with a static website component and be hosted in all those AWS resources that I just mentioned with S3 hosting the website files and configuring everything else with services like ACM for HTTPS, CloudFront for content distribution and caching, and also Route 53 for the custom domain name. Don't worry if that's a lot of jargon. 
          
          Well, you won't even have to really deal with those services when you're using these components and if you want more details on that, jump into the next videos when we do more of that configuration manually and you'll see what you've saved in terms of time using these components. 
          
          I also want to point out that Serverless Components is still in beta. This means that you can't currently integrate it with other serverless services and it's not going to be enabled with the monitoring you might see in the dashboard @ dashboard.serverless.com. 
          
          This means that you can expect to see full integration with other framework features later on, but at the moment, if you need all of those integrations, Serverless Components might not be the best option. 
          
          However, if you're just trying to get jump started straight into deploying a website and you don't have a bunch of other dependencies, this is a really good fast way to get yourself started. So let's go ahead and look at the next videos first with Austin demonstrating how we can use a website component to deploy an application on AWS. So I'll see you in the next videos.`,
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
          transcript: `Hi, let's install a Next.js application and go ahead and deploy it in AWS using the serverless components feature of the Serverless Framework. We'll start by getting our basic Next.js application installed with NPX create next app and then we'll just run this to create our application and follow the steps here. I'm going to call this serverless-nextjs and this should go ahead and get a basic Next.js project installed in my local directory. Then I'm going to have to go ahead and change directories into that application and after this we can install our development dependency of the serverless component that we'll be using. So I'll do this with NPM install with i and then serverless-next.js And the - capital D flag to save this as a dependency of my project. This will save it as a development dependency and install everything I need here. 

          Once this is finished, we can also go ahead and expand our window here and this will show us everything we've just installed. This should be a basic project for our application with Next.js and if we wanted to change any of the other content, we could go over to the pages section, maybe edit the index.html  file the change from the title of home to serverless-nextjs and then I can go ahead and save this. Once this finishes installing our dependencies below, we'll be able to also add one additional file into our application and that's the next.config.js File. So I'm going to do this from the command line. I'm going to list out the contents of the directory and make sure I'm at the top of my application and then I'm going to touch the next.config.js file. 
          
          Once I do this, it should appear over here, so I'm going to click into it and inside of here I can paste in the configuration I need from an example. In this case I'll make sure all of the examples for this video are included in the links below. Inside of here you'll see that I've just included a module exports and the target of serverless. What this is going to mean is that we're set up with our next configuration so that we can actually deploy to a serverless environment. Let's go ahead and do one other thing to make sure that the Next.js component works properly. I'm going to need to add a few different files to configure the component. The first one is actually going to be to have my environment variables for AWS set up, so I'm going to touch a file called .env and eventually I'm also going to need a file called serverless.yml, which is the exact same file that you've been familiar with if you're using the Serverless Framework. 
          
          So I'm going to touch that file too. And with both of those files created, I can go ahead and hop into serverless.yml And to the .env file. For the .env file, we're going to need to paste an AWS credentials that we've been given from an administrator account or another account with enough privileges to act on many of the different services that are required by the Next.js component. After I pasted the contents of this file in here, I can go ahead and save the file and then close it back out and don't worry. Those credentials are short-lived and I'll be removing them. After making this video. Be sure not to expose these credentials in source control or anything like that as they are very important to protect. The last file I want you to take a look at is serverless.yml and in serverless.yml we're going to paste in the entire configuration that we need for this particular component and honestly that's it. 
          
          That's all we have to do just to get the basic application started. Once we go down to our command line, we can run the final step which is to run NPX serverless. This is going to run the serverless command using NPX and we're going to go ahead and deploy a bunch of different things to the AWS environment. In this case we're going to be deploying a CloudFront distribution, creating an S3 bucket and configuring everything together so that we can have a server side rendered application with Next.js along with static components of that application hosted inside of S3 static website hosting and forwarded to from CloudFront. Another thing we could do is later on if we wanted to configure this with a custom domain, but get out a few more lines of configuration below just to have this be a custom domain as well. 
          
          You can already see that I've created this app URL here which will allow me to go open this up in my browser and it currently shows us that the site can't be reached. This means that the CloudFront distribution just hasn't finished spinning everything up and all the DNS hasn't properly propagated so that we can visit everything that we just deployed. But this could take up to 30 minutes, so don't worry too much if you don't see it initially and subsequent deploys will happen much more quickly. Once we've taken a look at this, we can also go inside of the AWS dashboard to see what's currently deploying. You'll notice I have this one deployment here that starts with D1 and goes WY right after that and that matches exactly what the very beginning of our CloudFront distribution here. This means that currently we've managed to deploy an entire CloudFront distribution and it's currently in the in progress state. 
          
          That means it's still deploying out to that CloudFront distribution and that's why we're not seeing anything in the browser quite yet, but if we came back in a few more minutes we might start to see a bit more information. Similarly, if we go over to the S3 management console and we look for a bucket that was just created quite recently, let's go ahead and sort here. We can see that this bucket right here has new files in it and now contains a next folder, static pages folder and a static folder and each of these different components or parts of the application that will allow us to route both static files through to S3 and also allow us to get other objects that we might need to render content throughout the application. In addition to this information, we can also see that if we go to services and over to Lambda, there was a function that was deployed just a few minutes ago that allows us to enable the Lambda@Edge resources for our function. 
          
          This is going to do is it's going to do server-side rendering for many parts of our front end application actually enabling us to render pages close to the user and to have that benefit of server side rendering. So hopefully this you an idea about how to get started with your application using Lambda@Edge and the Next.js Serverless component. There are a lot of other options for deploying your website's on AWS using the Serverless Framework, but keep this one in your arsenal just in case you need to do this in the future.`,
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