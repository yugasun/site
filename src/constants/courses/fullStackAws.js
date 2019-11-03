module.exports = [
    {
      title: 'Introduction to Course',
      items: [
        {
          title: 'Purpose of the course',
          lessonInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          transcript: `Welcome to the serverless way and the serverless full stack application course. My name is Gareth McCumskey. I am a solutions architect at serverless and I have spent almost four years now building serverless applications of various types and for various organizations and I now work with serverless customers to develop their solutions and support their serverless development efforts.
          
          This course is intended for anyone who wants to learn more about serverless development. If you are new to this way of building web applications, you can go through the entire course from start to finish. It makes no assumptions about your current understanding of serverless development. Alternatively, you may be someone who has already used the serverless framework to some degree and now just looking to fill the gaps. In either case, this course is for you.

          Section one introduces you to the concepts of serverless, what problem serverless development in general is trying to solve and what it is and why the serverless framework is good for that.

          Section two, we'll spend some more time going over what cloud computing means and what the various services are that AWS provides us and what makes them so useful. AWS will be the cloud vendor we focus on primarily throughout this course.

          The course is designed to be modular, allowing anyone at any level the ability to skip the sections they need or most interested in. But it also has a consistent theme across all sections. 

          From section three onwards, we will be building our very own web application from start to finish, frontend to backend service by service. Along the way, we will be investigating various topics of interests such as what microservices are and why they are a good pattern for our application, how to choose the right database for our service, creating API APIs in detail, communication between us services and a lot more.

          Our application will be built for and deployed to AWS, but we will be building our application in a way that minimizes the dependency on a single cloud vendor. 

          And lastly, we have a vibrant community of other serverless developers at our forums and on our Slack workspace that you can converse with, ask questions of, and even help others also learning how to build serverless applications. 
          
          So click next to continue to the first section that will begin to introduce you to the fundamental concepts behind what it means to be serverless.
          `,
          playTime: '2:11',
          videoNumber: 1,
          videoLink: 'https://www.youtube.com/watch?v=XTJImzRH8aY',
          slug: 'full-stack-aws-course-purpose'
        },
      ],
    },
    {
      title: 'Introduction to Serverless',
      items: [
        {
          title: 'What is Serverless Development?',
          lessonInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          transcript: `There's a lot of misunderstanding about what it means to build serverless applications and this is video aims to help clear up some of those misconceptions and if you have no conceptions at all and are brand new to serverless development, great, then let's get started.
          
          Let's start by taking a quick history lesson as to how web applications have been built. Back in the late nineties web applications were only beginning to make their entrance onto the software development world. Frontend and backend as two separate concepts didn't really feature the backend code that spoke to a data store of some kind was intermingled with that front end code. 
          
          But more importantly, if you wanted to get an application on the web, you often had to run your own data center or co-locate your own physical hardware into a local data center that only provided you network rack space and power. It was still your machine and you needed to manage that. If you went to the upgrades, you had to buy them and book time to install the new hardware. And that also means that if you had a sudden spike of demand and you didn't have enough hardware, your application just fell over from the load.

          A lot of companies would have had to then make sure they had way more hardware available in that data center than they really needed for the base activity on their application just to make sure that they were able to meet them on for those massive spikes, which ends up being really wasteful as the majority of the time the machines would be doing very little move forward a few years and the advent of virtual machines arrived, which gave us admins the ability to squeeze more fake machines onto the same bare metal to try and make better use of excess capacity. 

          However, the real evolution came in around 2008 when Amazon released their EC2 service to the world. EC2 gave everyone the ability to add new server capacity to their applications whenever they needed it. This gets us closer to being serverless, but there was still some work to do.

          You had to install and maintain your own operating system and application software. If you were to load balanced operation for example, you would need to spin up the required EC2 instances yourself, set up the software such as a HA proxy to distribute the traffic. 
          
          The only change was your hardware was elastic. No need to go through the purchase agreements for new hardware and then have to spend a lot of time configuring and installing them and to some degree you're no longer stuck with excess capacity. You could spin up hardware up and down as needed. 
          
          But let's take another step forward alongside the EC2 launch with two other services S3 they're block storage solution for storing files and SQS - their managed message queue service. This set the premise for the expansion of AWS into providing more and more services. Sure you could have set up your own rabbit MQ EC2 instance to provide what SQS gave you, but then that was your problem to manage.

          Fast forward to today and AWS has an entire suite of services you can use that traditionally you would have needed to configure, deploy, and maintain and manage the capacity for yourself or you can just use the already managed services provided under SLA and with specific capacity parameters that you know about upfront.

          The last cog there was needed to truly go serverless, in other words, without the need to spin up any infrastructure that requires some form of handholding to keep running was compute and that's where AWS Lambda enters the scene.

          AWS Lambda gives us a way to integrate all these separate managed services like S3, SQS, SNS, DynamoDB, API Gateway and more with business logic. We can now build applications fully serverless-ly and this is where we come to the properties of what makes an application serverless and following the serverless way.

          A serverless application is usually comprised of many individuals, serverless microservices. Each service does one particular job within one domain very well and only that one example is an authentication service. All it does is accept credentials, verify their authenticity and return some kind of token like a JWT to be used by other services to validate requests. Each serverless service is configured as much as possible to make use of existing managed services of the cloud vendor chosen and even sometimes external to that vendor as well.

          This reduces the amount of code usually needed for that service, which is one of the central tenants of the serverless way. Reduce code as much as possible. Serverless services only cost you when they're actually executing and this is important. 

          To be a truly serverless service, there needs to be no idle running cost. This means services such as EC2 which charge by the minute even if there is zero traffic are not considered serverless. 

          Scaling up happens automatically. The services you use have features that allow a certain amount of capacity to be instantly available to you. Ideally you play no part in managing the capacity, but at the very least it requires very little effort. Scaling down and even to zero is also automatic and this is a concept that is often forgotten. Scaling up even in a non serverless environment is usually easy, but knowing when to scale down is hard.

          But because serverless services such as S3, SQS, DynamoDB, and so on, bill only on usage, there's actually no need to even consider scaling down. It just happens automatically as a nature of the way these services are architected and if they are not being used, they are not being charged. 

          Managing infrastructure needs to be portable and decoupled and this is what the serverless framework gives you. The ability to define a specific configuration of a service including all related services you need in a way that makes it possible for another developer to clone your service from your get repo and deploy it into their AWS account if they need to and make changes.

          This is how you maintain software and by decoupled we mean that it does not require another service to be active. Communication between services should be asynchronous and deploying one service does not require that another be deployed prior.

          The short version to summarize it all up, is that serverless application development is all about taking existing managed services and using them along with glue code in AWS Lambda to build a solution that scales has redundancy and disaster recovery built in, and often at the cost of $0 dollars.
          `,
          playTime: '6:03',
          videoNumber: 2,
          videoLink: 'https://www.youtube.com/watch?v=ki5V1TGR75U',
          slug: 'what-is-serverless'
        },
        {
          title: 'Getting setup with AWS',
          lessonInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          playTime: '2:24',
          transcript: `In this video, we're gonna walk through the process of signing up for an AWS account. To start with we go to the URL aws.amazon.com and when we're there we click on the orange Create an AWS Account button. 
          
          On the create an AWS account page, we need to insert some details here to create our account. I'm gonna go ahead and just fill in this form right now. Make sure that your password meets the minimum criteria here. And once completed we just continue. 
          
          On the contact information page, we need to decide whether our account is going to be registered to a company or to ourselves personally. If you're just a lone developer busy testing out some features on AWS, choose the personal option as this makes the most sense for you. I'm gonna go ahead and complete these details and continue to the next screen. 
          
          On the payment information page, we need to enter in some credit card or debit card information. Don't worry, AWS is not going to charge anything to your account, this is for their own security so that if you do happen to go over certain free tier limits, they will be able to recover the cost. Anything we do will fall well below the AWS free tier for the services we will use. So go ahead and add a credit card here and I will move to the next screen. 
          
          AWS needs to confirm our identity and we have a choice between two options. We can either have AWS send us a text message and then we use a verification code or they can even send us a voice call and we will have to speak a number into the phone. I'm gonna pick the text message option as it's the simplest and I'm just gonna add my cell phone number here and also the security check information here. 
          
          Once you have chosen to send an SMS, you need to wait for the verification code to arrive on your cell phone and enter the number here and click verify code. Once you verified code, you should be seeing this screen. 
          
          And now we pick a support plan and obviously, again, if you are a low developer just trying thing out, pick the free plan. Otherwise, if you are a company looking for some proper support from AWS themselves, you can choose either of the developer or business plans, depending on your needs. I'm just going to select the free option. 
          
          And now lastly, I finally want to get into my AWS account and actually start doing things. So I'm gonna click in the Sign in to Console button here and then log into my account with the details I set up previously. Congratulations, you now have an AWS account. All you need to do now is log in and we can start.`,
          videoNumber: 3,
          videoLink: 'https://www.youtube.com/watch?v=3rcwUa_H9Ok',
          slug: 'create-an-aws-account'
        },
        {
          title: 'Build Serverless Endpoint Manually',
          lessonInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          transcript: `In order to really appreciate what the serverless framework does for us, in this video, we're going to be developing our own API Gateway endpoint manually by using the AWS console to put together this API endpoints that will trigger a Lambda function. 
          
          So let's log into our AWS console and let's go find the API Gateway service. Once you open the API Gateway service, if you have never deployed a a API Gateway endpoint before, you'll see a screen like this. We'll just click the get started button to get us started and I'm just going to accept this as a default demonstration that API Gateway gives us just so we can move on and create our own. 
          
          So I'm going to continue with fail on warnings and import and just let it finish creating this API Gateway for us. So what I want it to do at this point is I want to click on APIs here. I want to go back to the beginning. 
          
          I'm going to create myself a new API for us to play with create API. This one is going to be a rest API. We choosing new API as the option, and I'm just going to name this a, give it a very simple name, it doesn't really matter what this is. At this point I could give a description about what this API is. I'm going to leave it as is and regional as the end type should be fine. And let's go ahead and create the API. 
          
          Once our API is created, we need to go ahead and add ourselves a new resource. So let's go open up the actions button there, select create resource on the new child resource page, which can make it very simple. Hello resource. That's going to return a very generic response to our API request. So let's just name this whatever you want to name it, I'm just going to call mine, Hello. And then I'm on my endpoints to also reference the same of similar endpoints. I'm just gonna make that hello as well.

          And with that complete, the proxy resource, we don't have to worry about at this point. This allows us to do things such as allow our Lambda functions to rather handle the routing. We're going to ignore this for now and we'll look at it probably later. And API Gateway of course is a feature we'll look at later. Right now we're not going to make any API requests from a browser that requires us to enable CORS, so I'm going to create resource. 

          Once you create the resource, you should see that we have it available here / hello, However, we don't yet have an endpoint to actually make a request to. So now we need to add a method to that to allow us to actually query it. So this is where we go here we say create a method and here we need to choose the GET method. We just got to make a simple GET request to / hello. 

          And once we are happy with that, we just select that option. We don't yet have a Lambda function to integrate to which is what we're going to do next. So for all intents and purposes, we are complete. Once we have our level of function created, we will then add it in here. So let's go ahead and create our lambda function. To do that, let's click the services link at the top and search for Lambda. 

          Once we open up the Lambda page, we just want to go ahead and create our first new functions. So let's go ahead and click on create a function. We went to author one from scratch. We're going to create one all the way from the beginning ourselves, but we do need give it some kind of name and I'm just going to keep it consistent with our API Gateway endpoint and call this Hello. Once we finished creating our function name, the runtime will keep as Node 10.X and we need to take a look at our execution role here because now we need to decide on permissions for our Lambda function. Luckily for us, we don't need anything fancy.  We're not accessing any other AWS services so we don't need any thing, advanced yet. We're just gonna ask here to create a new role with basic Lambda permissions, which is more than enough for us. 

          So let's go ahead and create our function. After a few seconds of waiting for the function to create, you should see a screen such as this one where we can now continue to configure what our function contains. So let's just scroll down because we want to add in our actual code that is going to handle our hello. So you can see here we've got a function called export start handler. The function has an event object and this is what the interior of a Lambda function tends to look like. 
          
          We have a function that receives an event object with this event object we can then do things like return responses, analyze the event object for data that might've come with it, like a data in our body or parameters in a URL. In our case, we have it, we have a very simple, API endpoint here that doesn't pass any data. So what we are going to do is just modify this, this automated message that got created for us and we're going to say hello from serverless just to make it unique. Once we finished editing this, we can go ahead and save our function and now that we've actually got this function, we can go ahead and look at adding it to our API Gateway endpoint. So let's go ahead and head back to API Gateway by clicking on services and searching for API Gateway. 

          Once we are back at API Gateway, our test demo API is waiting for us. So I'm just going to click on that. I'm going to select the GET a method that we had earlier and now we can complete this lambda function field and actually choose the lambda function that we had before. So I'm just going to search for it by typing hello and there is our Lambda function and now if I save, we should have an API Gateway endpoint that executes our Lambda function and this will automatically add the permission to our lambda function to be executed by API Gateway. 
          
          And with that save complete, we can now go ahead and execute our endpoint by clicking on GET here we should be able to get to a screen where we can run a test on our API endpoint. So I'm just gonna click there and we don't have any parameters to pass to our API endpoints so I'm just going to click the test button and we should see immediately here is the response from our Lambda function. Hello from service. So here we can see our API endpoint point worked, we have an API end point that will return essentially hello from serverless. So this is how you would manually create API Gateway endpoints and link them to them with functions manually.

          But again, there are some downsides. Unfortunately with this method, there's no way for me to easily extract the configuration of my endpoint and the configuration on my Lambda function as well as the link between them. In order to share that with another developer in my team, I have no way to allow him to create this on his end so that he can make edits and he has no way to give me those edits back so I can incorporate them into what I'm working with to continue development on my side. 

          What if you had, 20 endpoints and 40 Lambda functions that had things in various ways that you had to manually maintain and control through this AWS console? This might not seem like such a big deal now when you're just dealing with a very simple API Gateway endpoint and a very simple Lambda function, but things can get complex really quickly, especially when you start mixing in things like Lambda functions triggered by other AWS services like S3, SNS, SQS, DynamoDB, and the many, many, many other services in AWS that can trigger Lambda functions.

          For that purpose, using the AWS console in this way becomes rather limited and slow to use and very error prone because now you have to configure everything manually and hope that you don't break things every time you come in to make changes. The other side of this is that you cannot share any of this again with any developers. So when things get really complicated, everybody has to work off of the same console, and you cannot test things in isolation before you put them through into your live systems. 
          
          So obviously there's some issues here, and this is where we will now look at the Serverless Framework to see how this can help us rather manage these, these types of development practices in a cleaner and more portable way.
          `,
          playTime: '7:14',
          videoNumber: 4,
          videoLink: 'https://www.youtube.com/watch?v=0_NcB2Sw15k',
          slug: 'building-api-inside-aws-console'
        },
        {
          title: 'Installing the Serverless Framework',
          lessonInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          playTime: '2:22',
          videoNumber: 5,
          videoLink: 'https://www.youtube.com/watch?v=NjZaXwNU08Q',
          slug: 'installing-serverless-framework'
        },
        {
          title: 'Build Serverless Endpoint using Serverless Framework',
          lessonInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          playTime: '5:33',
          videoNumber: 6,
          videoLink: 'https://www.youtube.com/watch?v=nwG9fIRnIDY',
          slug: 'create-api-endpoint-with-serverless-framework'
        },
        {
          title: 'Deploying via Dashboard profile',
          lessonInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          playTime: '6:05',
          videoNumber: 7,
          videoLink: 'https://www.youtube.com/watch?v=KTsWDCXvxqU',
          slug: 'using-profiles-in-serverless-dashboard'
        },
        {
          title: 'What happens on deployment',
          lessonInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          playTime: '2:16',
          videoNumber: 8,
          videoLink: 'https://www.youtube.com/watch?v=Z0fkps64wfg',
          slug: 'what-happens-on-deployment'
        },
        {
          title: 'Removing our service',
          lessonInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          playTime: '0:45',
          videoNumber: 9,
          videoLink: 'https://www.youtube.com/watch?v=AgNTi79mY48',
          slug: 'removing-our-serverless-service'
        },
      ],
    },
    {
      title: 'Intro to AWS and what we are building',
      items: [
        {
          title: 'What is Cloud Computing?',
          lessonInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          playTime: '3:41',
          videoNumber: 10,
          videoLink: 'https://www.youtube.com/watch?v=NtvvqhS11fo',
          slug: 'what-is-cloud-computing'
        },
        {
          title: 'AWS Lambda',
          lessonInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          playTime: '4:41',
          videoNumber: 11,
          videoLink: 'https://www.youtube.com/watch?v=yBHuF3A-dIQ',
          slug: 'aws-lambda-basics'
        },
        {
          title: 'API Gateway',
          lessonInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          playTime: '1:46',
          videoNumber: 12,
          videoLink: 'https://www.youtube.com/watch?v=oFhmRYh2mUY',
          slug: 'api-gateway-basics'
        },
        {
          title: '[coming soon] DynamoDB Basics',
          playTime: '0:00',
          videoNumber: 13,
        },
        {
          title: '[coming soon] SNS',
          playTime: '0:00',
          videoNumber: 14,
        },
        {
          title: '[coming soon] SQS',
          playTime: '0:00',
          videoNumber: 15,
        },
        {
          title: '[coming soon] S3',
          playTime: '0:00',
          videoNumber: 16,
        },
      ],
    },
    {
      title: 'Building our first service',
      items: [
        {
          title: '[coming soon] Introduction to our first service',
          playTime: '0:00',
          videoNumber: 17,
        },
        {
          title: '[coming soon] Local Development',
          playTime: '0:00',
          videoNumber: 18,
        },
        {
          title: '[coming soon] Authentication/Authorisation',
          playTime: '0:00',
          videoNumber: 19,
        },
        {
          title: '[coming soon] User Creation',
          playTime: '0:00',
          videoNumber: 20,
        },
        {
          title: '[coming soon] Deploy and Integration test',
          playTime: '0:00',
          videoNumber: 21,
        },
      ],
    },
  ]
  