module.exports = [
    {
      title: 'Introduction to Course',
      items: [
        {
          title: 'Purpose of the course',
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
          playTime: '2:22',
          metaTitle: `Installing the Serverless Framework via NPM`,
          transcript: `The Serverless Framework is the tool we are going to be using to help us build these API endpoints and lambda functions amongst other services and features that we want to use to help build our application to make it a lot easier so we don't have to manually configure things within the AWS console constantly. 
          
          It also gives us a way to build applications in a reproducible, portable way that we can share with other developers on our team. Potentially we can even save these configurations onto places like GitHub to share with the world and just makes things a lot more flexible for us to handle. So with that, if you do want to find more information, you can go to serverless.com which is the homepage of the Serverless Framework. 
          
          What we want to do though is we want to get started with actually building some services in the Serverless Framework and for that we need to make sure we have node installed on our local machines. So if you go to nodejs.org and If you don't have node installed already, you can just click the downloads link on nodejs.org and make sure that you install what's required for your system here. Otherwise we basically just need node 10 as a minimum so that's an easy minimum to remember. So as long as you have node 10 installed on your local machine, then we should be fine to continue.

          So at this point we want to go ahead and install the Serverless Framework. And if you see the documentation here for the Serverless Framework, it's as easy as installing a node module globally. NPM install -g, serverless. So let's go ahead and do that right now. So now we want to install the Serverless Framework globally and I'm going to do this by typing in NPM install -g serverless. In my case with my system, I need to also sudo in front of it because it is installed in protected directories. For a lot of users, using sudo will not be necessary, but this just press enter and continue the installation. 
          
          Once completed, you should see some instruction on how to get started with your first serverless project, which we will do in the next video. But let's just take a look at some of the commands. If I just use serverless --help. Here we can see some of the commands available to us as part of the Serverless Framework and we will be using a lot of these, but some to consider is the deploy function here, which allows us to deploy our configured services into our AWS account and other ones like create, which lets us create a brand new serverless service. But in the next video we'll be doing exactly that. So let's continue.
          `,
          videoNumber: 5,
          videoLink: 'https://www.youtube.com/watch?v=NjZaXwNU08Q',
          slug: 'installing-serverless-framework-via-npm'
        },
        {
          title: 'Build Serverless Endpoint using Serverless Framework',
          transcript: `Let's go ahead and create our first serverless service using the Serverless Framework. To get started, I've already cd'ed into a project folder of mine and now I want to create a new folder for my first service project and we are going to essentially copy what we did manually inside the API Gateway, a console and Lambda console, but building it using the Serverless Framework instead. So I'm just going to create a hello folder here for myself. I then cd into hello and at this point I'm just going to create a new serverless service using the serverless create command. 
          
          The command I'm going to use is serverless create --templates aws-nodejs. What this tells the serverless framework is to bootstrap a very small service for me geared towards being deployed into AWS using the node JS runtime. After a second or two my boilerplate is created and now I'm going to get take a look inside my text editor to continue editing my configuration for my service. 
          
          I've opened up my text editor within that folder that I created and I can see that I've got three folders sitting here. Please ignore the coverage folder here as this is just a part of the extensions I have installed in my IDE, but let's take a look at the other files that are created automatically for me here.  
          
          gitignore is something we may use later and we can ignore this for now, but this just helps me when I want to use git to store the configuration of my servers to ignore the specific temporary directories that are created either by node or by serverless

          handler.js; that sounds slightly familiar to us and this is where we will be writing our lambda function code and the serverless.yml file is probably the most important file to consider here and this is where we will be configuring our service to create the API endpoints and someone that we need in a portable and a reliable way. So let's continue with the serverless.yml. 
          
          You can see here there's a lot of commented sections here. I'm just going to skip to the first important line which is the service Hello. This is where we can name our service. I'm going to leave this as a hello as that is unique enough for our purposes and continue. In the provider section here, we named the provider that we are deploying to. In this case we are going to be deploying to AWS and what the Lambda runtime is going to be for our code, which is nodejs 10 in this case. 
          
          Continuing down, there's a section in the serverless.yml file where I can start specifying details about the functions that I'm going to be running. In our case, we really have a handler.js file with the dot hello function. The naming here links to the name of the file itself and I could put this inside directories as well. For example if I had defined in this way, that means I could have a folder, cold source, I could have another folder within that and I could have this handler file sitting in that functions folder itself. And then this would match. I know I'm going to leave it relatively simple, so I'm going to take it back out of there, but I could have it that way if I chose to just delete those folders, the dot hello portion links to the actual function name itself, the hello function here.

          What you may not see here is how does AWS know how to run the code inside my function? And that is what we're going to add right now. We need to attach an event to our Lambda functions so that AWS knows, or the Serverless Framework knows how to instruct AWS on how to trigger the code in our lambda function. So to do that, we just going to add some additional configuration here and that's all we need. 
          
          Just bear in mind, this is yaml and if you're not familiar with yaml, just be careful of the indentation as yaml gets very specific on how you indent the items within it. 
          
          Remember with the API gateway that we set up manually previously, we could define the path that we wanted the Lambda function to execute under as well as the method that would affect it. So you can see here we are already duplicating the configuration we had before. 
          
          Now if I want to actually deploy this into AWS, I can run a serverless command. But first let's go ahead and edit our Lambda function behind the .hello file is where we're going to do that. So I'm going to open up my handler.js here and find my hello function, which is right here. And I'm just gonna edit this body to make it similar to what we had previously. Somehow take out the default values all the way to there. And I'm just going to add, just like we had before, hello from serverless, now we have everything configured for us to deploy. But before we do that in the next video, I'm just going to take a look at some of these events that I've been talking about in our serverless.yml file. 

          Obviously here you can see we have an HTTP event linked to our Lambda function here, but in the commented section below you can see there is reference to a lot more events that we could potentially be using. This is important to realize with developing services with the Serverless Framework and serverless in general. 
          
          Using all the events available to you in your cloud provider is a very powerful way to build serverless applications and we will be using a mixture of these in our own application that we will be building. 
          
          But just remember that this is a core premise of how serverless applications work is that we have code sitting within Lambda functions that are triggered by events caused within the cloud vendor that we use and obviously the HTTP events that come through. 
          
          So thinking of Lambda as a glue for all of these various services within the cloud vendor that we may be using is a very good way of thinking about how code works and how we reduce our dependency on having to write so much code.
          `,
          playTime: '5:33',
          videoNumber: 6,
          videoLink: 'https://www.youtube.com/watch?v=nwG9fIRnIDY',
          slug: 'create-api-endpoint-with-serverless-framework'
        },
        {
          title: 'Deploying via Dashboard profile',
          transcript: `The Serverless Framework gives us the means to monitor our services after we've deployed them. But to do this, we do need to set up a serverless account on the serverless dashboard; from our command line within the service we've been creating, we can just use SLS login. This should now open up our browser. 
          
          Once within our browser we get the option to sign up, I'm just going to click the sign-up link at the top there, and then I can choose how to sign up, I can either enter in email and password manually or I can sign up through GitHub or Google. In my case, I'm going to sign up with Google. 

          Once you have registered, you should get to a screen that starts walking you through our process to sign up. So on here, we just going to click next. It's asking us to choose a username for us to use. I'm just gonna stick to the default that it's given me because that'll be unique. Once it's created the user, it's asking us to create a default application name and we can name this whatever we like. I'm just going to leave this to the default called my-app, but you can name this whatever you like. 
          
          Once you've continued, you should get to the screen about deploying a sample service. You can feel free to go through this if you like, but we are going to be doing this ourselves so I'm just going to close this right now and just continue to the next screen. This is where we should see applications and my-app. 
          
          At this point we want to go take a look at some profiles and profiles are a feature that help us control how our services that we're going to be built get deployed into our AWS account. So let's click on profiles at the top and we are going to be just using the default profile. In future we'll be going into more detail about what profiles are and how they affect our ability to deploy and manage our AWS services. But for now, let's just open up the default profile.
          
          Once it opens, you'll see it asks us about AWS credential access role and you should have a link here to create a role wizard. When you click this, this will open up the AWS account in your browser. So let's just go ahead and click that link. 
          
          When you click that link, you should see the creator roll screen here with the account ID for the serverless framework. And we're just going to click next to permissions. By default it will ask us to set up an administrator access for this user or we are going to leave it at administrator access, but later we will be able to look at setting up a custom profiles and so on. 
          
          So I'm just going to go next to tags. Tags is where you would go ahead and configure a certain values that you want to propagate through, any resources you create in AWS for like the department that you might be in or so on. In our case, we're just going to leave this blank and continue to the review page. On the review page, let's see everything that we're going to be setting up the role name needs to be unique, which it will be in my case. And once I'm happy with this, I'm just going to click create role. 
          
          Once I've created the role, I should see a message about the role being created. I'm going to open up the role I just created because we need to copy something from it. And I'm gonna click the little clipboard icon here to  copy this ARN for my role. Once I've copied it, I'm going to return to my profile and I'm going to paste that ARN into this, input box And then save and exit. 
          
          Now we've returned to our editor and I need to go to the top of the serverless.yml file. I'm just gonna scroll all the way back up and up here we want to add in two new properties to link the service we've just created with our new, the organization and application we've set up in our dashboard account. So to do that, I'm going to add app and if you remember, I named my app, my-app, and then I'm going to add an org property here as well. 
          
          If I go back to my dashboard, I should be able to see what my org property is and that would be the username that I've set up. I could create an additional organizations if I wanted to separate this out better, but I'm just going to use what was already created for me and that is garethmccumskey2 in my case. Once I've got that in, I'm going to save my file. 
          
          When I used a serverless log in previously, it opened up my default browser for me to register my new account and then it should have come back with a, you successfully logged in message. If not just use SLS login again. Now that we finished registering, log in and make sure you select the correct account that you created with previously. And now we should be logged into our serverless account on our command line as well. 
          
          At this point, it means that we can also run a deployment. So let us go ahead and deploy our service that we've just created. 
          
          The first time we deploy a service in this way, it may take a couple of minutes because it will be the first time that the service is being created on our AWS account, so this may take a little bit of extra time. Once deployment completes, we should see a message about publishing our service to the serverless dashboard as well as successfully publishing it, which should also see is a URL to an endpoint that we can use to run our Lambda function so let's go ahead and control-click that to open up in our browser. If you run that in your browser, you should see the message that we put in our Lambda function hello from serverless. 
          
          What's cool about this is that in no way did we have to do any of this manually within our AWS console. We could just set this up in our Serverless Framework, use the deploy command to deploy this into our AWS account, and now we have a working API endpoint that is returning the data from our Lambda function that we wanted. There are alternative ways for us to have done this deployment, on the serverless.com website, in our documentation, there is a demonstration of many different ways that we could authenticate into our AWS account if we didn't want to do so through our dashboard. 
          
          Go through to docs, AWS, credentials and this page shows with how to sign up for an AWS account, creating a specific user in AWS for us to use, and then setting these access keys on our local machine instead of using a role through our dashboard account. So if you prefer to use this method, feel free to read through the documentation here on how to set that up.`,
          playTime: '6:05',
          videoNumber: 7,
          videoLink: 'https://www.youtube.com/watch?v=KTsWDCXvxqU',
          slug: 'using-profiles-in-serverless-dashboard'
        },
        {
          title: 'What happens on deployment',
          transcript: `We should now have our service connected to our serverless account and our serverless account connected to our AWS account. 
          
          Now that our service has been created, we need to deploy it, but what actually happens through the deployment process? The moment you run the serverless deploy command, the Serverless Framework will check whether there is an app and an org setting in your serverless.yml file. It will then confirm you have valid credentials. In other words, you used serverless login and that the Oregon app have valid for the serverless account in those credentials. 
          
          If this does not match, then you will receive an error telling you so. f they do match, the Serverless Framework will then request temporary AWS credentials from your serverless account, which can do so using the role ARN that we configured earlier. These credentials exist for a short time and are only used for this specific deployment. 

          Once those are received, the framework will then retrieve the current safeguards configured under your profile and apply them to your serverless.yml configuration. If any rules are set to error, the deployment on a failed check, it will do that here and deployment will end with an error message. 
          
          Rules that to warn on fail the checks will just explain orange warning, but otherwise deployment will continue. If all the safeguards pass, the framework will then request any secrets configured with the profile. It will then search for any references to the secrets in your serverless.yml file, which we'll look at in detail later and replace those references with the actual values required prior to deployment. 
          
          At this stage, all the checks related to your service account are completed. The framework will now continue with the process of bundling your Lambda functions, executing any plugin code needed during the various life cycle stages of the deployment process, as well as generating a CloudFormation template and then uploading a zip file of all your Lambda functions and the dependencies to an S3 bucket especially created for in your account for this purpose. The prepared CloudFormation template is then passed to your AWS account and the framework will then listen to feedback from the CloudFormation stack creation or update process on the current state of deployment. 
          
          Once completed, we get a summary of the details of our deployment as well as an indication that the deployment data was updated within our serverless account and should be visible in the dashboard.`,
          playTime: '2:16',
          videoNumber: 8,
          videoLink: 'https://www.youtube.com/watch?v=Z0fkps64wfg',
          slug: 'what-happens-on-deployment'
        },
        {
          title: 'Removing our service',
          playTime: '0:45',
          transcript: `In order to remove a service that we've deployed, we can use these serverless remove command. This will now actually go and remove as much of the AWS stack as it can from our AWS account. However, it won't be able to remove every single entity that we've created. 
          
          Depending on the resources that you've deployed within your AWS service, you may need to come to the CloudFormation service in the AWS console and just finalize removing some portions of the stack item. In this case, the service that we deployed should remove itself entirely since we haven't deployed any other resources in AWS, but in some cases, you will need to manually go ahead and clear out the stack and any additional resources that were deployed.`,
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
          playTime: '3:41',
          transcript: `In the 90s the web as we know it began to explode into popularity. However, all sites had to initially be hosted by individuals or organizations in their own data centers if they wanted to be online and sites going down for hours and sometimes days at a time due to outages or just upgrades were not unheard of. 
          
          Very quickly, however, companies that specialize in allowing you to install your hardware into their data center arrived on the scene so at least you didn't have to worry about provisioning power, air conditioning, permanent connections to the internet and a secure location. 
          
          However, you still had to handle hardware upgrades yourself. These co-located data centers didn't just expand your hardware capabilities automatically for you. You still had to source upgraded parts, get quotes, workout special deals with the suppliers, sign contracts, get the machines shipped to the location. All the while, your users may already be suffering from bad performance on your older hardware. 

          This meant that organizations that really wanted to make sure that they were available for the users would have to over-provision extensively. In other words, they would need to far more capacity serving customers. And then really needed in order to not have to upgrade so often and to handle any potential traffic spikes. 
          
          All of this hassle had some other significant downsides. Marketing and sales teams trying to sell a digital product were hamstrung by how much capacity was available in the data center. You can't push hard to sign up new customers and make sales targets when your server is about to run out of capacity. There's also meant that developers in these organizations spent a lot of time trying to optimize code. It might sound fun as an engineer working on solving performance issues, but it's not so much fun for business owners who get value out of selling product features to users. 
          
          Users don't care about how well optimized your product is. They care about what it can do for them. Developers, content enhance products features if they're always trying to optimize speed. Thankfully some radical changes were forthcoming. 
          
          The ability to create virtual machines in the early two thousands was a large step into the future, allowing organizations to more cleanly separate workloads on the same bare metal and make better use of the machines resources. 
          
          But the real game changer happened in 2006 when AWS made three services generally available S3, SQS and EC2. EC2 probably had the biggest impact as it finally allowed organizations to easily create and destroy virtual machines and only pay for what you used. This meant no more worrying about purchase agreements for hardware when upgrade time came. You could just create a new virtual machine to add to your fleet or just swap existing virtual machines with machines with the highest specifications as needed. 
          
          As time marched on, so did AWS, releasing service after service SNS, a pub sub system, DynamoDB, API Gateway and Lambda. All services we will be using throughout this course were added and all of these services were deliberately created in response to customer needs. 
          
          Instead of having to configure, deploy and develop similar services yourself, you just use the already available services provided by AWS and focus on what is important to your business instead because resources and services on now so easily available, developers no longer need to focus quite so much on performance of their application. They can spend more of their time on making sure that their organizations and user's needs are met. This is often far more valuable today, and this is what makes serverless development so powerful.`,
          videoNumber: 10,
          videoLink: 'https://www.youtube.com/watch?v=NtvvqhS11fo',
          slug: 'what-is-cloud-computing'
        },
        {
          title: 'AWS Lambda',
          transcript: `Let's start by taking a closer look at the AWS Lambda service since this is the one that people think of the most when you talk about serverless. In short, AWS Lambda is a managed compute service that will auto scale and execute your code when they specific pre-configured event triggers that execution. 
          
          But how does that look in practice? Let's take a look at the small example of code. All it does is log some data out and return true. It is wrapped in a function that has two parameters, event and context.
          
          As our definition said, AWS Lambda will execute my code when an event triggers that execution, which event that is entirely depends on the configuration. Previously we triggered our Lambda using an HTTP event from API gateway. Lambda functions can have a whole host of possible events that trigger their execution. Putting objects into three buckets, schedule events that just happen every however many minutes, hours or days. Inserting or updating data into a DynamoDB table and a lot lot more and this event driven nature of serverless applications is core to understanding how we can build the solutions we want. 
          
          This also means that the event parameter passed to our lambda function will be unique depending on the event type, S3 looks different to API Gateway which looks different to SNS for example.
          
          The context parameter you see is not always required and is only needed if you need additional information about the environment your Lambda function is executing in, such as the performance values selected amongst others. 
          
          Within our function, we can do whatever it is we need with the data passed to us by the event objects such as write or read from a database. If this was also triggered by API Gateway, we could return data, format for it specifically for an HTTP response just as we did in our previous example. 
          
          However, not all events require a response and most just need to know if the lambda was successful or failed with an error object. Some services have different retry characteristics depending on whether an error was returned or not. 
          
          So now we have this code, it's been uploaded to AWS Lambda and it's going to get executed. What happens when we have a lot of traffic? Well, let's walk through an example. 
          
          My Lambda is triggered for the first time since deploying it. AWS in the background will automatically retrieve my function code and the code runtime I choose to write it in. It will then create what is called a micro VM and this is similar in most ways to a regular virtual machine except it is designed to be much smaller and much faster to instantiate. As fast as it is, it still does take some time and this process is known as a cold start. 
          
          Now that my execution environment has been started, my function is run by passing it the event object for me to work with however while all of this is happening, another event arrived to trigger the same function. We already have one Lambda function still busy executing, so AWS again automatically and in the background begins another cold start process. 
          
          So while the second event is busy executing within the second micro VM, the original event in the first micro VM has now finished execution. However, it is not removed or destroyed. This micro VM remains available and active and just as well, because now we have a third event coming in, but instead of this trigger causing the start of another cold start procedure and the creation of a third micro VM, this time the already available yet ideal micro VM is used instead. This is called a hot start, so there's no additional time taken to get the micro VM created as before. 
          
          The function can begin executing pretty quickly. What this also means is that the third request will execute faster as there was less time spent getting everything set up. Well, AWS is always working to reduce the time it takes for a cold start,it will always be at least a little slower than a hot start. 
          
          However, our example has shown that Lambda functions automatically execute in parallel, and this limited example, we only had two in parallel at one point, but by default, AWS has configured Lambda to execute 1000 functions in parallel, and if you find that ends up not being enough, you can just ask them and they will increase this limit. 
          
          One other important characteristic to bear in mind is execution times, Lambda functions can only run for at maximum 15 minutes. If you need to run code for longer than that, then there are alternative options out there and there are ways to just restructure what you need to do. Now that we've taken this time to get to know AWS Lambda, let's move on to our next topic.`,
          playTime: '4:41',
          videoNumber: 11,
          videoLink: 'https://www.youtube.com/watch?v=yBHuF3A-dIQ',
          slug: 'what-is-lambda-in-aws'
        },
        {
          title: 'API Gateway',
          playTime: '1:46',
          transcript: `Combining API Gateway with Lambda is perhaps the most common and useful pairing of event and code that you can get. API Gateway is in essence, a way for you to create a publicly available endpoints that can handle a fair number of requests per second, 10,000 per second per endpoint, by default. 
          
          If you have already built web applications yourself using some of the more popular MVC style frameworks, you will be familiar with the concept of having to manage routes. Routes in an application is the configuration of URL paths to actual code that has to execute that path. Well, that is what API Gateway does for you, but API Gateway is more than just a glorified HTTP router. It offers a lot of other very useful features. 
          
          For one, you can either have your endpoints be standard HTTP endpoints for a REST API, or you can create a WebSocket endpoint so that you can send data back and forth between the front-end and back-end. 

          You may also need some way to authenticate users and then authorize their API calls from that point on to make sure that you just can only do what they're allowed to. API Gateway allows you to configure ways of handling these authorizations. Once a user has some form of authentication token by passing the request to an authorizer Lambda and waiting for an alarm response before sending the request to the actual Lambda. Very convenient. 
          
          And there are a lot more we will see as well, such as being able to specify the expected schema for POST requests, API keys, throttling of requests, and more.`,
          videoNumber: 12,
          videoLink: 'https://www.youtube.com/watch?v=oFhmRYh2mUY',
          slug: 'what-is-amazon-api-gateway'
        },
        {
          title: 'DynamoDB',
          playTime: '4:24',
          videoNumber: 13,
          videoLink: 'https://www.youtube.com/watch?v=lVJXehUvYew',
          slug: 'what-is-dynamodb'
        },
        {
          title: 'SNS',
          playTime: '1:45',
          videoNumber: 14,
          videoLink: 'https://www.youtube.com/watch?v=KkMPT4GprS8',
          slug: 'what-is-sns'
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
  