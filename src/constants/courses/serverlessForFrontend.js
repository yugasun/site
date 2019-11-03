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
          
          That'll help you get a very highly functional website up and running very quickly, but if you'd like another alternative approach for serverless frontends, we'll also be able to take a look at using Lambda@Edge to host our serverless frontends. We'll use the serverless Next.js component in that particular case and you'll see how we can use that to deploy another kind of application. But in the future you can expect a lot of other things from components like that. 

          Let's take a look at the state of Serverless Components in 2019. Right now they provide incredible utility for frontend developers looking to deploy their applications on something like AWS, which is the cloud provider that most of these components currently are focused on. They'll get you things like an HTTPS certificate, set up a CloudFront content distribution network and also make sure your custom domain that you've registered inside of AWS is synced up with these other services. 
          
          They're also going to work really fast because in the background they don't rely on AWS as CloudFormation to provision all these infrastructure resources. They're going to do it much more rapidly and if you want to use something like Lambda@Edge, we've started to introduce additional components for this alternative for hosting your frontends. 
          
          In this particular case, we'll be looking at two different options to actually deploy your frontends, but you can use a lot of different frontend frameworks or tools that work with these two different options. 
          
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
          transcript: `Here's a tutorial on how you could deploy React applications so they are fast, global and cheap to host. The outcome of this is a website with a React app, a custom domain, and SSL certificate, basically, everything you need to be production ready. And all of this will be made simple via the Serverless Framework and its new Serverless Components feature. 

          Your React app will be distributed via a global content delivery network. This enables it to have incredibly fast performance around the world and we will be using possibly the cheapest infrastructure to do this, which is S3 in CloudFront from Amazon Web Services. How cheap are they? Well, for a year you could transfer 50 gigabytes of data and serve 2 million requests a month for free. After that, it'll cost you 8 to 2 cents per gigabyte depending on how much data you transfer, plus 1 cent per 10,000 HTTPS requests.
          
          Check out the AWS CloudFront pricing page for more details. You will have to pay for your custom domain. However, you'll get a free public SSL certificate from AWS Certificate Manager. Now a disclaimer. I did not analyze all the options on the market for static site hosting before this, so I'm not aware of what cheaper alternatives exist, but S3 and CloudFront have been around for many years. They're reliable and fast. 
          
          Actually, many products for static site hosting are built on S3 and CloudFront and charge you a markup. The reason why developers don't use plain AWS S3 and AWS CloudFront is because the experience of using them is just too darn complicated compared to other offerings. However, this is where the Serverless Framework comes in. It brings a great developer experience to all infrastructure providers and it focuses especially on infrastructure with auto scaling pay peer use, AKA serverless qualities.
          
          Before doing anything that you'll need to have an AWS account. You must have a credit card to sign up, though you will not be charged until you go over their free tier limits. Login to AWS, navigate to the IAM dashboard so you can create access keys that the Serverless Framework will use to provision the infrastructure needed for your React website. Go to users and click add user. Give it a name that includes Serverless Framework, then click to enable programmatic access, and click next. Select attach existing policies directly. Check the box next to administrator access. Hit next and next again to skip the tag screen, then hit create. Later, you may want to scope down these permissions so the Serverless Framework will have the least amount of access necessary, though this can be complex because the Serverless Framework uses many AWS services.
          
          To give you a head start if you want to do this, the website component currently uses S3 Certificate Manager, CloudFront, and Route 53 and needs access specifically for those. Copy the access key ID and the secret access key, you'll need them in a second. Now it's time for the fun Serverless Framework part. Make sure you have no JS installed. Then install Serverless Framework via NPM and add the global flag. Make sure you're using Serverless Framework version 1.49 or later. And a hint, if you're installing it right now, you probably are. To do this, we're going to use a website template that has all of the scaffolding you need to get started quickly, and you can install the template using this command. This will create a website folder for you with all the scaffolding in it. Go into that folder and install the React dependencies via NPM by running NPM Install. Also in the website folder, create a file named .env and paste in your AWS keys formatted like this.
          
          You're done with the setup, now it's time to start development. This project uses React and Parcel for building and bundling the application. You can also run the application locally with Parcel using this command. Now you could develop and see changes immediately thanks to hot module reloading. Out of the box, the website templates should be ready to deploy. If you look in your serverless.yml File, you will see a Serverless Component in it titled Website.
          
          A Serverless Component is simply code that knows how to deploy the Cloud infrastructure needed to create a specific outcome or use case. Serverless Components are open source and you could use them to easily deploy lots of use cases on serverless Cloud infrastructure. Check them out here. Every Serverless Component has an inputs property, which allows you to configure the use case that the component will provision.
          
          For example, here, you could see the source input that points to the directory containing your website assets as well as a hook that could be called to build your website before deployment. This way you don't have to run the build script before deploying, it just happens as part of the deployment process. All right, let's get to the deployment part. To deploy your React app in the website folder, simply run the serverless command. Your website should deploy in less than a minute and you should get a URL pointing to your live website. The first deployment always takes the longest because creating Cloud resources can be more time consuming than updating them. To set up your custom domain, your CloudFront CDN, and an SSL certificate, you'll need to do one manual step. You must log into your AWS account and purchase your domain. Currently, the website component only works with domains purchased on AWS Route 53.
          
          Go to AWS Route 53's dashboard, register your domain, and wait for the registration to complete. This might take up to an hour. Once it is completed, simply add in the custom domain to the website component's inputs. Run the serverless command again and it will acknowledge the new input and set up your custom domain, your CloudFront CDN, and SSL certificate. You'll need to wait for your new domain to propagate to the DNS servers around the world. This might take up to an hour. Though once it's available, you'll be able to see your website under your new custom domain with an SSL certificate. 
          
          Every time you run serverless to deploy changes to your website, the website component will invalidate the assets you have cached in AWS CloudFront. This will enable you to see changes almost immediately. And that's it. If you want to go further and build out a full stack application just as easily as this website, check out the full stack application template. This will give you everything you need to deliver a fast, cheap, and global entire serverless application. Enjoy.`,
          videoNumber: 4,
          videoLink: 'https://www.youtube.com/watch?v=ts26BVuX3j0',
          slug: "deploying-react-website-on-aws",
        },
        {
          title: 'Next.js & Lambda @ Edge with Serverless Components',
          lessonInfo: "This video will show you how to get a Next.js website deployed on Lambda@Edge. This will let you start to leverage the benefits of edge computing to deliver content to your viewers faster and more dynamically.",
          transcript: `Hi, let's install a Next.js application and go ahead and deploy it in AWS using the serverless components feature of the Serverless Framework. 
          
          We'll start by getting our basic Next.js application installed with NPX create next app and then we'll just run this to create our application and follow the steps here. I'm going to call this serverless-nextjs and this should go ahead and get a basic Next.js project installed in my local directory. 
          
          Then I'm going to have to go ahead and change directories into that application and after this we can install our development dependency of the serverless component that we'll be using. So I'll do this with NPM install with i and then serverless-next.js And the - capital D flag to save this as a dependency of my project. This will save it as a development dependency and install everything I need here. 

          Once this is finished, we can also go ahead and expand our window here and this will show us everything we've just installed. This should be a basic project for our application with Next.js and if we wanted to change any of the other content, we could go over to the pages section, maybe edit the index.html  file the change from the title of home to serverless-nextjs and then I can go ahead and save this. 
          
          Once this finishes installing our dependencies below, we'll be able to also add one additional file into our application and that's the next.config.js File. So I'm going to do this from the command line. I'm going to list out the contents of the directory and make sure I'm at the top of my application and then I'm going to touch the next.config.js file. 
          
          Once I do this, it should appear over here, so I'm going to click into it and inside of here I can paste in the configuration I need from an example. In this case I'll make sure all of the examples for this video are included in the links below. Inside of here you'll see that I've just included a module exports and the target of serverless. What this is going to mean is that we're set up with our next configuration so that we can actually deploy to a serverless environment. 
          
          Let's go ahead and do one other thing to make sure that the Next.js component works properly. I'm going to need to add a few different files to configure the component. The first one is actually going to be to have my environment variables for AWS set up, so I'm going to touch a file called .env and eventually I'm also going to need a file called serverless.yml, which is the exact same file that you've been familiar with if you're using the Serverless Framework. 
          
          So I'm going to touch that file too. And with both of those files created, I can go ahead and hop into serverless.yml And to the .env file. For the .env file, we're going to need to paste an AWS credentials that we've been given from an administrator account or another account with enough privileges to act on many of the different services that are required by the Next.js component. 
          
          After I pasted the contents of this file in here, I can go ahead and save the file and then close it back out and don't worry. Those credentials are short-lived and I'll be removing them. After making this video. Be sure not to expose these credentials in source control or anything like that as they are very important to protect. 
          
          The last file I want you to take a look at is serverless.yml and in serverless.yml we're going to paste in the entire configuration that we need for this particular component and honestly that's it. 
          
          That's all we have to do just to get the basic application started. Once we go down to our command line, we can run the final step which is to run NPX serverless. This is going to run the serverless command using NPX and we're going to go ahead and deploy a bunch of different things to the AWS environment. In this case we're going to be deploying a CloudFront distribution, creating an S3 bucket and configuring everything together so that we can have a server side rendered application with Next.js along with static components of that application hosted inside of S3 static website hosting and forwarded to from CloudFront. 
          
          Another thing we could do is later on if we wanted to configure this with a custom domain, but get out a few more lines of configuration below just to have this be a custom domain as well. 
          
          You can already see that I've created this app URL here which will allow me to go open this up in my browser and it currently shows us that the site can't be reached. This means that the CloudFront distribution just hasn't finished spinning everything up and all the DNS hasn't properly propagated so that we can visit everything that we just deployed. But this could take up to 30 minutes, so don't worry too much if you don't see it initially and subsequent deploys will happen much more quickly. 
          
          Once we've taken a look at this, we can also go inside of the AWS dashboard to see what's currently deploying. You'll notice I have this one deployment here that starts with D1 and goes WY right after that and that matches exactly what the very beginning of our CloudFront distribution here. This means that currently we've managed to deploy an entire CloudFront distribution and it's currently in the in progress state. 
          
          That means it's still deploying out to that CloudFront distribution and that's why we're not seeing anything in the browser quite yet, but if we came back in a few more minutes we might start to see a bit more information. Similarly, if we go over to the S3 management console and we look for a bucket that was just created quite recently, let's go ahead and sort here. 
          
          We can see that this bucket right here has new files in it and now contains a next folder, static pages folder and a static folder and each of these different components or parts of the application that will allow us to route both static files through to S3 and also allow us to get other objects that we might need to render content throughout the application. In addition to this information, we can also see that if we go to services and over to Lambda, there was a function that was deployed just a few minutes ago that allows us to enable the Lambda@Edge resources for our function. 
          
          This is going to do is it's going to do server-side rendering for many parts of our frontend application actually enabling us to render pages close to the user and to have that benefit of server side rendering. 
          
          So hopefully this you an idea about how to get started with your application using Lambda@Edge and the Next.js Serverless component. There are a lot of other options for deploying your website's on AWS using the Serverless Framework, but keep this one in your arsenal just in case you need to do this in the future.`,
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
          transcript: `Welcome back. Let's look at how we can deploy websites to AWS using serverless framework plugins. We'll start by setting up our environment and making sure we have all the dependencies we need to do everything we'll be doing in this section. 
          
          After that, we'll take a look at the application as a demo that I've put together so that we can see what it might look like locally and then compare it to what we'll be expecting inside of the cloud. 

          Next we'll look at creating a serverless framework service and all the configuration and serverless.yml to tie this together using plugins and to our frontend application. We'll also go ahead and install and configure the serverless Finch plugin in order to make sure that we can sync our local files up to AWS as S3 service and get a website deployed for us inside a static site hosting in S3 and finally we'll deploy that website to S3 and view our new website in the cloud. 
          
          Now this will just be the first step that we'll take to get going with this initial website and in future videos, we'll do a lot more configuration to get things like a custom domain, HTTPS certificate and caching using CloudFront. So stay tuned.`,
          playTime: '1:23',
          videoNumber: 6,
          videoLink: 'https://www.youtube.com/watch?v=vZZoB3r3Td0',
          slug: "deploying-websites-with-serverless-plugins",
        },
        {
          title: 'Creating a Service & Deploying a Frontend',
          lessonInfo: "In this video, we'll look at how we can create a simple Serverless Framework service and then deploy a frontend with a serverless plugin - Serverless Finch.",
          transcript: `Welcome back. We're here to set up a Serverless application for the first time in our new folder here. Now we've already made sure we have npm and Node.js installed as well as the Serverless Framework with a version after 1.5, 3.0. So let's start by just running the Serverless command. Now there's a little bit of stuff going on in the background here. Serverless is checking if we have a project already in this folder, and since we don't, it's going to ask us if we want to create a new one. Let's go ahead and say yes and then pick what sort of application we want to make. In my case, I'll be making a Python application, so I'm going to go ahead and go to that. Now this will just be the backend for my application. If you're more familiar with Node.js, you could adapt some of the backend code into Node.js and write it that way.

          Now for the frontend, we won't have to worry too much about either of these. And most of the code that I'll be writing, I'll explain to you completely so that you don't have to worry about whether or not you know Python. For right now, I'll select the one I want and hit enter. I want to call this project serverlessjams, because we'll be making a website to rate some music related to development and Serverless technologies.
          
          So now after we run that command, you'll see that we have this new folder inside of VS code, and it contains everything from a gitignore, which will have a bunch of useful ignores for a Serverless project, as well as a new handler.py file. I'm going to go ahead and close out of VS code's popups here, but this will be a basic Python handler to interact with the Serverless Framework.
          
          We'll also have a serverless.yml file, which if we scroll down, will have more information about how to actually set up serverless.yml with a Python function. And if I scroll down all the way to the bottom here, you'll also see that it's already set us up with a function and some of the boilerplate code to enable our first Serverless backend service.
          
          Let's go ahead and move onto the next step inside of the terminal here, which is to see whether or not we'd like to enable monitoring, troubleshooting, and testing using a free Serverless dashboard account. In my case, I've already created an account, but if you haven't, you can still go ahead and hit yes on this step. In my case, I've already created an organization inside of my dashboard account that I want to use. It's going to be the Serverless-LEARN organization, but if you have other organizations inside of your account that you'd like to use, you can select them here. I'll call this application serverlessjams just because I want to keep the naming convention consistent inside of my dashboard as well as inside of my code. And actually, I can either deploy this service immediately right now with Serverless deploy or I could run the Serverless dashboard command just to see what's already in there.
          
          So I'm going to run Serverless dashboard just to go ahead and give myself an overview of what's happening here. Now, this will navigate me over to the Serverless dashboard in my open browser. And you'll see that I have this application here that currently hasn't been deployed, but it will give me some more instructions on how to do that. So if I go back to my VS code window here, let's go ahead and run Serverless deploy.
          
          Now that I've done this, you'll see it actually it errored out, and this means that I need to change directories into my project folder to do this. So once I've done that, and I'm now on the serverlessjams folder, I can run that Serverless deploy command one more time. Now, this will interact with the serverless.yml file that you see on the left here. And then go over to my dashboard and take a look at that while I attempt to deploy the service.
          
          There's some assumptions I'm making here. If I go over to another window here and I run AWS configure, I've already installed the AWS CLI on my machine, so you can see that I have an access key and a secret access key set, as well as a region. However, an alternative method of doing this is to go over to your dashboard account and go up to the profile section. In the profile section, you'll start with a default profile, but you can link this profile to an AWS account or you can keep the default of using AWS credentials locally to deploy your services. If you'd like, you can definitely check this personal AWS account box, and then go over to the AWS account and create a role to enable this to deploy for you and help manage that entire process. But for right now, I'm not going to dive too much into those details and we can just leave our AWS credentials locally on our machine.
          
          So now that my service has successfully been published to the dashboard, if we wanted to take a closer look at that particular service, I could open this link over here in Chrome and it would take me to the service I just deployed. By default, that's going to be deployed in a dev stage, so you can see that up here in the URL, and I also deployed it to US-east-1 by default. I haven't run any of these function indications yet, so I'm not going to get any logs here. But with all of this configured, we can proceed onward without having to worry about it much later.
          
          So let's go back to our code here. I'm going to exit out of this window, so we have just one terminal to keep track of. We will later on redeploy this service with a bunch more information and get different API endpoints, different functions, and a variety of other things for our service. But for right now, I'm going to go ahead and clear this screen and we're going to focus on creating the Serverless Finch frontend that we want to deploy right away. So the first thing I'll do is actually set up just a simple index.html file. I'm going to do this just by touching the file and calling it index.html, and then I'm going to go over to that file and I'm just going to type in "Hello" there. This is going to be a very, very unsophisticated index.html file with very bad practices, but it'll work for our purposes for right now.
          
          Now with this file created, I'm going to install a Serverless Framework plugin to help us deploy this file into the AWS cloud. In this case, I'm going to install Serverless Finch. We'll do this with npm install --save-dev serverless-finch. This plugin will help us deploy static site frontends to AWS. And once it's installed, we'll get a node modules directory, a package-lock.json, and the code that will act to help us get the information we need into AWS.
          
          So I'm going to clear the screen one more time, and let's open up serverless.yml. I've gone ahead and navigated over to the plugin page for Serverless Finch, and if I scroll down, you'll see both how we can install it as well as a bunch more details about its usage. Now we're going to get started with very basic information surrounding its usage. Specifically, we're going to copy this little bit of configuration here from "custom client" down to the bucket name. And I'll copy that little component there, and we'll paste it all the way down here.
          
          This is going to allow us to set some custom configuration for the Serverless Finch client. In this case, what we'll need to set for this very first step is to change the bucket name to something unique that nobody else has created an S3 bucket for. So I'm going to hope that my first name, test, and then some numbers and letters towards the end, are going to be able to help keep this unique enough. But for your purposes, you might want to give it your particular project name.
          
          So now that we have this bucket name set here, we're also going to need to point to the code that we want uploaded into the bucket after Serverless Finch creates it for us. In order to do that, I'm going to go back to the configuration for Serverless Finch, and I'm going to scroll down to some of the other options that we have. Specifically, I'm going to look for the distribution folder. Now right now, the default distribution folder for this plugin expects it to live in a directory called client and a sub-directory called dist. Now this is really just a convention for some frameworks that output their static distributions into the client dist folder. However, what we can do is we can create our own distribution folder path and expect the files to live there.
          
          So what I'll do for this as I'll go back over to our configuration here, and I'll add this new distribution folder configuration. Now let's say that I want it to just keep track of all the different code inside of my application. Now right now, I've got a little bit of a sprawl of frontend and backend files. I've got this handler.py and this index.html, along with this node_modules folder and everything else. In order to simplify, I'm just going to go ahead and create a directory called frontend, and then I'm going to move my index.html file into the frontend folder. Now that I have this frontend folder, I'm going to name my distribution folder frontend, and this should expect that the code for my site lives inside of the distribution folder.
          
          One other thing I'll need to know: if we scroll down a little further, AWS will expect us to have an index document and an error document. Now by default, the index document is index.html, and the error document is error.html. But if I'm lazy and I don't want to create an error.html document, what I can also do is I can override the default and set one more piece of configuration here saying that the error document, if there are any errors, will actually just redirect to the index.html file.
          
          So with all of these configurations set up and my Serverless Finch plugin installed, I'm going to go ahead and clear the screen down at the very bottom, make sure I've saved my serverless.yml file, and then run a Serverless client deploy command. I have to make sure I spell client correctly, but once I've done this, I should be able to run this command and see Serverless Finch pickup the configuration inside of this file. If it doesn't, and you see a command like this, this means we actually haven't setup plugins inside of our serverless.yml yet.
          
          So if I go back up here, I'll need to set up a new section called plugins. If you look at the Serverless Finch configuration at the very top, you'll see how you can do this simply by copying the plugin section and then pasting it into our file here in serverless.yml. Now why this is important is because when Serverless Framework looks for commands to run, it checks for plugins by looking at this plugin section. And if we try and run commands that come from these plugins without actually saying that we're expecting to be using them, this will be the error that we see. So with this update made and the serverless.yml saved one more time, now once I've cleared this screen, we can go ahead and run Serverless client deploy again, and this will work successfully.
          
          Now we are going to have to override some of the default settings that might exist on this bucket. So if there's anything important in there, again, make sure that you're not going to be inadvertently deleting something that you might want to keep. I'm going to say yes here and hit enter, and once this is finished, we should be able to navigate over to our new website, which should show up here, and say "hello." If we wanted to change this around, we could go back into our frontend code, into index.html, and say "Hello serverless."
          
          Now one useful thing about this whenever we want to redeploy is instead of just saying this again and again and having to manually confirm this, we could also run a command line option for --no-confirm. Now this will tell us we just want to skip that prompt that was happening over there. Now we don't have to answer it anymore and this will deploy everything for us one more time. And if I go back to the same website and refresh the page, we now see "Hello Serverless!"
          
          So congratulations, that's some of the basics of deploying your first website on AWS with Serverless Finch. And if you need any additional help getting set up with AWS, or configuration for the AWS CLI or the dashboard, definitely check out our other Serverless learning courses. Stay tuned for future videos as we start to iterate on top of this application and turn it into a bit more complex of an application with APIs, backing tables and databases, as well as more of an interesting UI.`,
          playTime: '12:10',
          videoNumber: 7,
          videoLink: 'https://www.youtube.com/watch?v=juoUTO_IriU',
          slug: "deploying-serverless-websites-using-finch",
        },
        {
          title: 'Amazon Route 53 & Custom Domains',
          lessonInfo: "In this video, we'll look at how you can register a custom domain using Route 53.",
          transcript: `In this section, we'll be looking at how we can set up a bunch of different details to improve the usability, security, and overall performance of our website. We'll start by getting a custom domain and we'll see how we could do this process inside of Amazon Route 53 then we'll look at how we could request an SSL certificate to set up HTTPS for our website. 
          
          After that, we'll look at creating and configuring a CloudFront distribution in order to help deliver files more rapidly to our end users. And finally, we'll look at how we could redeploy our site and when we need to invalidate the cache of the CloudFront distribution for all the files inside of our S3  bucket. So let's go ahead and get started. I've gone ahead and loaded up the AWS account that we've been interacting with thus far. If we actually go into S3 we can find the bucket that we've previously been using to host our site. 

          I know I have a lot of different buckets here, but if I find this one that I was using previously, you'll see that I have this index.html file here. And if I go over to the property section, you'll see that we have static website hosting set up and if we navigate to this link, it's the same website we just deployed earlier. You also see that we have some permissions so that this bucket has public access to people who want to view the website files. 
          
          But what do we do next to get this website a custom domain? Well, that step looks like going to Route 53 so if we go over and enter route 53 into the search bar here, you'll find that AWS has a service that allows us to register domains. Your initial landing page might look a little different from this depending on if you've already registered a domain, but either way you should be able to go through to the section that allows you to look for different domain names. 
          
          So if I wanted to register a site for Fernando Medina Corey, I could just go in here, type that in and click check for the domain. Now it looks like this is available so I could complete the process just by adding to this to my cart and clicking continue. 
          
          I'm not actually going to register this domain because it will require me to show some personal contact information and to go through a little bit of time checking my email and clicking some verification links. But once you're done with this process, you can go back to the Route 53 console and go over to the hosted zone section. When you finish registering a domain, it should appear here underneath the hosted zone section and you can click into it and see the different DNS records that are automatically created for you by AWS. You don't need to change anything here quite yet, and we'll actually revisit this after we've taken a few other steps later on. 
          
          In the next video, let's see how we can request an SSL certificate for our domain name.`,
          playTime: '2:54',
          videoNumber: 8,
          videoLink: 'https://www.youtube.com/watch?v=8UdD-dmflR0',
          slug: "amazon-route-53-domain-registration",
        },
        {
          title: 'Creating an SSL Certificate in AWS',
          lessonInfo: "This video demonstrates how you can register a free SSL certificate using Amazon Certificate Manager (ACM).",
          transcript: `Welcome back. With our custom domain registered, let's start the process of creating an SSL certificate for the custom domain to secure traffic from a user's device to our website.

          I'm going to click the Services dropdown, and I can either look up SSL or ACM for the Amazon Certificate Manager, and that should take us over to the Certificate Manager.
          
          In order to get started, we're going to want to provision a certificate for our website. Now, we can request a public certificate by Amazon, or we can request a private certificate from our organization's certificate authority. In this case, I'm just going to click Request A Public Certificate, and then I'm going to click the Request Certificate button.
          
          On this next page, I'm going to go over to the domain section here, and I'm going to type in the name of our domain. In this case, you'll want to type in the name of your particular domain that you have just registered. For me, this is serverlessjams.com. But for you, it might be something else.
          
          I'm also going to copy and paste this into another name for the certificate. This is so that I can have not just serverlessjams.com secured, but also something like www.serverlessjams.com secured. And I can also add wildcards to the certificate. So, if I wanted to register any potential subdomains, I could have a wildcard and a period here to allow me to have something app.serverlessjams.com.
          
          I don't really need to do this right now. But in the case, in the future, that I add an application there, I'm going to have this certificate handy for me.
          
          In the next step I have two different options for validating the certificate. I can set up a record in DNS so that I can verify that I am indeed the owner of this domain, or I can choose email validation if I don't have permission to modify the DNS for this website. In this case, because I registered the domain with Amazon Route 53, DNS validation is by far the easiest for me. So, I'm going to keep that selected and click Review.
          
          When I have this domain name and the validation method selected, I'm going to confirm this and request the certificate. This will take a moment to try and validate the status of my domains and my ownership of them. But one thing I can do, if I've registered these through Amazon Route 53, is I can actually just click the dropdown on each of these particular domains that I'm requesting. And then I can click Create Record in Route 53. This is going to go ahead and set up a CNAME record in Route 53 for me, and it'll allow me to do this automatically to verify the domain. If I wanted to, I could expand all of these other dropdowns here, and I could create other records as I wanted them.
          
          As soon as I'm done clicking all three of these, I'm going to go ahead and click the Continue button here.
          
          It might take a little longer for this entire process to complete. And if you hadn't done those steps I did earlier, you should also have the option to do them inside of this next window here.
          
          As you can see, it is showing a success for this DNS record to attempt to be created in Route 53. And it might just take a few minutes to validate this whole process. If for some reason one of these doesn't succeed and you still have the un-grayed out blue box here, you can always go ahead and try it one more time, and Amazon should be able to update those records for you.
          
          So, now give it a few minutes and we'll refresh this page as we wait for these validations to go through.
          
          So, I didn't actually end up needing to wait more than five to 10 seconds. And after refreshing the page, you can see that not only has my certificate status changed from pending to issued, but also the validation status of each of these different domains has moved over to success. This means that my certificate is ready to go and be used in order to actually secure my domain and my site.
          
          There's a few ways I could use this. However, one of the easiest ways to do this whole process and use the certificate I've just created is to actually set up a CloudFront distribution and configure the certificate in there.
          
          So, that's what we'll do in the next video. Stay tuned.`,
          playTime: '4:18',
          videoNumber: 9,
          videoLink: 'https://www.youtube.com/watch?v=Ge-dkZgqLKg',
          slug: "creating-ssl-certificate-in-aws",
        },
        {
          title: 'Creating a CloudFront Distribution',
          lessonInfo: "In this video, you'll see how to create a CloudFront Distribution and configure your SSL certificate and custom domain together.",
          playTime: '8:13',
          transcript: `Now that we have our website set up in an S3 bucket, we've registered a route 53 domain, and we've created an ACM SSL certificate. Let's put it all together after we create a CloudFront distribution. So, to do this I'm going to first need to actually go back to the services drop down and go to S3 to get the website name for that particular bucket. 
          
          In my case it's just this bucket right here that we created earlier, but you'll need to find the bucket name for your bucket. You can find the property section and the static website hosting portion here and then copy the entire name of the in point without the HTTP. We'll need this in order to set up the CloudFront distribution, so just make sure you have this whole section copied down.

          Next I'm going to go to the services dropdown and I'm going to type in CloudFront here, and that should pull up CloudFront and we can go over to that service and create a distribution. Now, we're going to need to create a web distribution in order to distribute files over HTTP and HTTPS. This will be everything from our assets like HTML files to CSS and unique graphics files that we have on our website. So, that's what we'll create for right now.
          
          The first step here is to set up the configuration for the origin domain name and we're going to need to paste in what we just copied from AWS's S3 static site configuration. There might be a lot of different bits of configuration here depending on if you have a bunch of different S3 buckets or many different things set up that could be an origin for CloudFront. 
          
          Instead of just clicking on the domain name for that bucket, as you see I could do here, I'm actually going to paste over that with the S3 website in point. This is important because if you don't do this and instead rely on what's in the dropdown here, you're going to get a few potential issues with navigating to the index.html file from the plane path without actually including index.html in the end of your domain. So make sure that you paste that value in that we copied from the static site hosting section.
          
          In order to use SSL, we're also going to need to scroll down and set up our ACM certificate. So, if I scroll all the way down to the bottom here you'll see we have a distribution settings section. I'm going to, instead of saying the default CloudFront certificate, which is going to mean that we'd have to navigate to cloudfront.net in a sub domain of that to get HTTPS, select the custom SSL certificate. 
          
          I can request or import a certificate with ACM, and actually if I click this drop down here, it's automatically showing me my current SSL certificate that I just created earlier. So, I'm going to select that, but if you don't see that for some reason, wait a minute, refresh the page or click request or import a certificate from ACM and that should let you get that particular SSL certificate setup.
          
          I'm also going to need to go up a little bit further and make sure that the alternate domain names for this match the alternate domain names that I set up inside of that certificate. Now just click the information button here if you want more details on how to format this. But I need to make sure that I had everything from serverlessjams.com, as well as www.serverlessjams.com in here. If I knew I was also going to add other sub domains like app.serverlessjams.com I could also set up a wildcard like we did with the ACM certificate. I could put the star character here and then just add at the end the period and serverlessjams.com. That'll cover me for basically anything I'm doing with this domain and that's all the configuration I need to put related to this SSL certificate.
          
          So, now that I've done this, I could take a moment to go through the rest of the configuration settings and change things like specifying the edge locations that I actually wanted my files to be cached in. For example, if I wanted to save a little bit on costs and knew that I mostly had a U.S., Canada, and European market, I could select only using the locations in those regions. 
          
          However, if I have more of a global distribution of customers or people interested in my content, I could just keep the "Use all edge locations", and that'll give me the best performance. There's a lot of other configuration here that we could dive into, but this'll be all the basics that we'll need to in order to get started with this website. So with this done, I'm going to go over here and click create distribution.
          
          This process can take quite a while because essentially what's happening is it's distributing a bunch of this configuration information to all the edge locations throughout the world that CloudFront will allow me to cache my files in, but while this is happening I can go back to the services dropdown and I can look back up route 53. I'm going to need to do just a little bit more work to make sure that whenever somebody navigates to serverlessjams.com they're going to be looking at everything that CloudFront is hosting and caching for me. So, in order to do this I'm going to need to create a record set and I'm going to need to point it at the CloudFront distribution. In this case I'm going to say yes, I want to use an alias for this, and then I'm going to eventually use the CloudFront distribution target right here.
          
          Now, it's important to take a look at this little yellow indicator here, that I need to make sure the specified distribution is actually going to have both the alternate domain name and a status of deployed. And if I went back to CloudFront right now and pressed back a few times here to find it, it looks like currently while the state is enabled, the status of this distribution is still in progress. Now we could go ahead and set up this configuration inside of route 53 and simply wait, but it might take a little bit longer for everything to get configured here. So, I'm going to go ahead and keep this selected and click create just so we have that record available. But when I actually navigate to serverlessjams.com it's not going to be able to redirect me over to CloudFront until CloudFront itself is actually available.
          
          So, if I copy this entire CloudFront domain name, which I might need to make a little bit wider to see the entire thing, then I would need to expect that when I paste this into my browser here, it's going to actually show me the website, and it looks like currently it's doing that. Now once you navigate to CloudFront and see this file here, that means that it has been sent out to the CloudFront distribution and made its way to your local computer, but it's possible that for other users this might take a little bit longer depending on where you are and how long it takes CloudFront to actually get all those new files. But once you go back after maybe a few minutes to the AWS CloudFront management dashboard and you look for the status here changing to deployed, when you see that you should be good to go in terms of the configuration for your cloud front distribution syncing up with everything inside of your actual domain for route 53.
          
          Depending on some DNS caching and other things like that, it might take a little longer for all the files to navigate to the custom domain, but once you see the status of deployed, go ahead and try changing the CloudFront URL just to the domain that you registered. In my case, that's serverlessjams.com. Now once I enter that in here, we see that we actually have the exact same website and if I refresh the page it stays exactly the same. This means that not only have I configured my static site website in S3, I've set it up to forward the files along CloudFront and set the DNS to point to that CloudFront URL that we just saw here. And because of that, we're loading that exact same file on this custom domain using HTTPS with that ACM certificate.
          
          So, this is basically everything you need to get started with using all of these complex features to serve a fully functional static website. Now we're going to go back and look at how we can deploy a new round of files and then invalidate the cache for our website. So, let's take a look at that in the next video.`,
          videoNumber: 10,
          videoLink: 'https://www.youtube.com/watch?v=_otcYm8RVHA',
          slug: "creating-aws-cloudfront-distribution",
        },
        {
          title: 'Redeploying Our Static Site & Invalidating the Cache',
          lessonInfo: "In this video, you'll see how to make changes in your website and then invalidate the CloudFront cache so they appear live on your website.",
          transcript: `So back over here in my text editor. I've gone ahead and loaded up that index.html file one more time. Let's see how we can change the content of our website and then clear the cache to actually have the new content available. So over here I'm going to change hello, serverless to hello again serverless. And then I'm going to save this file here. 
          
          After I've done that, I can make sure that I'm inside the right directory to deploy this out so it looks like currently I actually need to be in my project folder here and inside of there I see the serverless.yml file and this means that I can run any of the serverless commands and the serverless command for the plugin and it should work properly. I'm going to go ahead and run serverless client deploy one more time. 

          This should take the updated index.html and send it over to S3 right after I hit yes and click enter. Then once this is done, I should be able to click on this link and open it up in my browser and confirm that it has changed. Now you see on this static website and just point it currently says hello against serverless. 
          
          However, if I go back to serverless jams and try refreshing the page a few times, you'll notice that it's not changing. Well, this is because we also have to clear the cache for the CloudFront distribution in order to get the most recent version of the site. 
          
          There is a few different ways to do that. You could set up a deploy time script that deployed using serverless Finch and then cleared the cache using some command line options locally to clear the CloudFront distribution cache and validate all the files. 
          
          You could also set up a more complicated workflow to invalidate the cash for files that you knew might be changing when viewers are going to your website. In order to invalidate the entire CloudFront distribution, we can go back to the AWS console and we can click in on our CloudFront distribution. 
          
          We have some distribution settings we could change around for our distribution and over here on the second to last tab, we have the invalidation section. So what we'll be doing, we'll be creating an invalidation for our distribution. In order to do this, we need to set a path related to the objects for distribution. 
          
          If we had a more complex site and we wanted to invalidate the cache for particular parts of that site, then we could do that with these object paths here, but because in this case, I know I really just want to invalidate the index.html file., I could either type that in here directly or I could say that because I only have the index.html file, I want to invalidate the entire site with the slash in the asterisks there. 
          
          So I'm going to go ahead and do that here and then click invalidate. Now it might take a while for this invalidation to happen and as your site grows in size, this could grow in the length of time it does take to invalidate every file in all of the CloudFront distribution locations throughout the world. But after waiting for a little while, you should be able to go back to your actual custom domain name here and then refresh the page and eventually see it change to the updated version. 
          
          This happened pretty quickly for me and now we see hello again, serverless instead of just hello serverless. If we wanted to do this from either the command line or Python or JavaScript, we could go and use the SDKs for those two different languages or look at the AWS CLI and run the equivalent commands to take this exact action here to create an invalidation for CloudFront. 
          
          If that's something you're interested in, you can definitely leave a comment below. However, if you're using something like Serverless Framework components, much of this is already taken care of for you, not just the CloudFront distribution section, but also creating the ACM certificate and configuring your DNS settings in Route 53 so that's all the basic setup you need for doing simple updates to your website and starting to work with all these different services inside of AWS. 
          
          Hopefully this makes more sense about what each service does and how they work together to give you your final website here, that is on a custom domain with an HTTPS certificate. In the next videos, we'll start to iterate on our website and make it a bit more of a complicated frontend application that works with some backend APIs to manipulate data and show it all to the users. So stay tuned for all of that. If it's something that you'd like to learn.`,
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