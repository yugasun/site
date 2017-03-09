---
title: Bootstrapping the Platform for a Billion Dollar Business Opportunity
description: "How SC5 used Serverless to help MaaS revolutionize transportation"
layout: Default
---

# Bootstrapping the Platform for a Billion Dollar Business Opportunity

### Background

<a href="http://maas.global" target="_blank">MaaS Global</a> (Mobility as a
Service) is a startup that aims to change personal transportation. Supported by
the megatrends of urbanization and buying everything as a service, we travel
more, but we do not wish to own a car.

<a href="http://whimapp.com/fi-en" target="_blank">Whim</a> – the mobile
application by MaaS Global, has been titled as the "Spotify of transportation".
Whim offers a wealth of options from getting place A to B by public transport,
taxi and even rental car – all in a digital subscription service.

<img src="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/partners/maas-whim-app.png" alt="MaaS Whim app" />

### The Challenge

There are no common standards and few business practices on how
to order buses, taxis, rental cars on behalf of the end customers. MaaS had to
create its own models, and adapt their model to fit to the varying practices
and IT systems of its partners.

Instead of creating its own maps, geodata or routing systems, MaaS aimed to tap
into the existing systems in the field. The technical challenge is making them
play together reliably with potentially millions of concurrent users.

We constructed the technical backbone of this system, so that it could be proven
to the investors and partners and helped MaaS developers get up-to-speed with
serverless development on AWS.

### The Solution

We brought in our serverless know-how and constructed a micro-services
architecture consisting of a few dozen adapters and its own data storage for
order handling in co-operation with the MaaS development team. The system was
founded on AWS services, consisting of a REST API using Serverless framework and
Postgres data storage. With the exception of managed database services, the
whole solution was based on a serverless architecture pattern with Lambda and
API Gateway, which theoretically scale infinitely out-of-the-box.

Because the technical mash-up of external map, geocoding, routing and booking
services can fail if any of the third party services fail, some practices to
increase fault tolerance were taken into account. A continuous integration
system was built using GitHub and Travis, so that new development could happen
without exhaustive manual integration and testing work.

<img src="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/partners/maas-architecture.png" alt="MaaS architecture" class="right" />

### Why Serverless

The Serverless framework was chosen because SC5 also had prior experience from
the framework and its predecessor (JAWS) and it was the most robust framework
for developing serverless applications on AWS. The framework also provided a
plug-in mechanism. This helped us streamline the build and deploy process for
optimal output and optimal application performance.

### Results

The first end-to-end version, consisting with the full flow of finding a
route into getting a Taxi order was demoed to investors in four months from the
start of the project. Since then, the platform has had a beta launch in Helsinki
area with paying end customers, and it is currently expanding internationally to
UK.

The serverless backend permitted developers to focus on building application
logic instead of operating the infrastructure. This is the same reason why
companies like Zalando are operating their stack in cloud.

The Whim app, powered by the SC5 bootstrapped backend has won several awards,
including Helsinki Smart City Action Award and Nordic Smart Cities Award. Whim
has been featured in the international press, including the Economist, the
Guardian, Wired and Helsingin Sanomat.

Eight months from the start of the project, the new development is still
standing on the same foundations set in the bootstrapping phase. MaaS has
successfully passed all planned steps of funding, ongoing a public beta phase in
capital Helsinki area, and currently expanding to the first locations outside
Finland. An internal development team capable of taking over the task of
developing the solution further was successfully ramped up during the project.

<blockquote>SC5 was our choice for this project because of their expertise in
cloud solutions and serverless micro services. We needed Whim-app to be
extendable and scale arbitrarily straight from the start.  The whole process was
really fast-paced and results spectacular; first online routing demo with a test
site was up overnight, surprising everyone in the industry and even our board,
making the CTO look good in the process!<br/>
<b>Sami Pippuri</b> - <i>CTO at MaaS Global</i> </blockquote>

"The serverless architecture and serverless framework have been a perfect fit
for us. The serverless architecture allows developers to focus on actual
business logic instead of the black magic involved in classical backend
solutions. This has helped us to lower the bar in enabling frontend developers
to go fullstack and contribute to the backend application as well.”, SC5 CTO
Mikael Puittinen. He adds: ”The serverless framework allows us to automate the
development lifecycle from project creation to deployment and operations. Its
open plugin architecture allows developers such as us to extend the platform
with functionality that streamlines the development lifecycle even further."

### About us (SC5):

We create cloud native applications and solutions that allow you to serve your
customers faster, better and more cost-efficiently. We are experts in the
latest serverless technologies, user centric design and web UI development and
have a track record of over 400 customer projects. SC5 was founded in 2006.

We are an AWS Lambda, API Gateway and DynamoDB APN Partner.

### Serverless contributions by SC5

* https://github.com/SC5/serverless-boilerplate : a boilerplate project for the
  serverless framework, which incorporates optimized deployment and commands for
  test driven development
* https://github.com/SC5/serverless-mocha-plugin : a plugin for creating
  functions, test cases and invoking tests
* https://github.com/SC5/serverless-authentication-boilerplate : a boilerplate
  for creating API gateway custom authorizers
* https://github.com/SC5/serverless-messenger-boilerplate : a boilerplate for
  creating Messenger / Wit.ai bots
* http://serverless.fi : Serverless Finland community
* http://serverless.fi/docs/bot-workshop.pdf : a step-by-step workshop for
  creating a simple serverless blog backend using the Serverless framework
* http://serverless.fi/docs/messenger-workshop.pdf : a step-by-step workshop for
  creating a weather bot on Messenger using the Serverless framework. Featured
  in ServerlessConf London 2016
