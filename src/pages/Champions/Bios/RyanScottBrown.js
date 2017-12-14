import React from 'react'
import Default from '../../../layouts/Default'
import Button from '../../../components/Button'
import styles from './Bio.css'

const imgBase = `${process.env.S3_BUCKET}images/champions`

export default class ChampionBiosRSB extends React.Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <Default {...this.props} fullWidth>
        <div className={styles.heroWrapper}>
          <div className={styles.heroContent}>
            <div className={styles.hero}>
              <h2><a href="/community/champions/">Serverless Champions</a></h2>
              <h1>Ryan Scott Brown</h1>
              <div className={styles.personWrapper}>
                <div className={styles.personImage}>
                  <div className={styles.roundedImage}>
                    <img src={`${imgBase}/2017/ryan-scott-brown.jpg`} />
                  </div>
                  <div className={styles.championLogo}>
                    <img src={`${imgBase}/champion_small.svg`} />
                  </div>
                  <span className={styles.personName}>
                    Ryan Scott Brown
                  </span>
                  <span className={styles.personCompany}>
                    Ansible
                  </span>
                  <div className={styles.personSocial}>
                    <a href="https://twitter.com/ryan_sb" target="_blank"><img src={`${imgBase}/twitter.svg`}/></a>
                    <img src={`${imgBase}/linkedin.svg`}/>
                    <a href="https://github.com/ryansb" target="_blank"><img src={`${imgBase}/Github.svg`}/></a>
                  </div>
                </div>
                <div className={styles.personBio}>
                  <p>Ryan has been building out cloud infrastructures since 2010, and currently focuses on automation tooling and Infrastructure-as-Code practices. He’s both a contributor and user of Ansible and the Serverless Framework, and loves building in the open as much as possible.</p>
                  <p>Beginning with the Lambda developer preview, Ryan has built event-driven behaviors into infrastructure/deployment pipelines with Python and Lambda. Early on, he started sharing successes (and failed experiments) on ServerlessCode.com to help others and push for a common set of practices. One of those practices is the Serverless Framework: a common language spec for multiple providers to smooth the way from idea to implementation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <h2>Interview with Ryan Scott Brown</h2>
          </div>
          <h4>Tell us about your background. How did you get into programming?</h4>
          <div>
            <p>I started in a Systems Administration degree, and was introduced to programming via Perl and bash scripting. I picked up a Software Engineering minor and got familiar with Python for web applications—Django, Flask, etc.</p>
            <p>My first Open Source contribution was to Boto, the Python AWS SDK, and since then I’ve been building or using tools for cloud infrastructure nonstop.</p>
          </div>

          <h4>How did you get into serverless computing in general? Can you reflect upon your serverless journey over the years?</h4>
          <div>
            <p>My first encounter with "serverless" was with Iron.io’s Iron Worker service, where you could bring code and hook it up to the Iron MQ messaging service to respond to events. I never used it beyond playing around, but when AWS Lambda entered Developer Preview I could see that the event-driven model for cloud functions was maturing.</p>
            <p>Lambda started out pretty limited in what was available, and I mostly used it to add dynamic features here and there on top of static S3 sites. API Gateway really supercharged my Lambda usage, because I could hook up to *any* webhook or event.</p>
            <p>That was about when I met Austen, and learned about what was then called JAWS.</p>
          </div>

          <h4>You have been a contributor and an evangelist for the Serverless Framework for a long time. When did you start using the Serverless Framework?</h4>
          <div>
            <p>JAWS (JavaScript AWS) was the earliest name for the Serverless Framework, and I ran across it in the then-very-small serverless community on Hackernews. I contributed the first version of Python support, and a few smaller features like function versioning.</p>
            <p>I used it at first just for web apps on Lambda, but with the 1.0 release and introduction of CloudFormation native support I started using it for just about any Lambda-related project—frontend webapps, infrastructure glue, data processing/ETL, most things Lambda supports can be expressed in serverless.yml or orchestrated with Ansible.</p>
          </div>

          <h4>Talk about a service or an application that satisfactorily made you believe that serverless architectures is the way to go. What did you learn from that experience and what do you think is the biggest challenge in developing serverless applications today?</h4>
          <div>
            <p>I’m a "seeing is believing" type of person, so what sold me was refactoring a Django+SQL service to a Lambda+API Gateway+DynamoDB, and getting rid of the custom auth and ORM in the process. The amount of code in the backend was cut roughly by a third (more if you count using less libraries), and performance was comparable.</p>
            <p>For new developers, the challenge is knowing where to start. There's loads of services that aren't all easy to understand, and choices on the frontend compound the confusion.</p>
          </div>

          <h4>Which cloud provider do you deploy to the most? Have you used multiple cloud providers? What is the top item on your wishlist for your cloud provider of choice?</h4>
          <div>
            <p>I primarily work on AWS, but I’ve tested out the Azure Functions support. For me, data locality/network transfer costs make multi-cloud apps less feasible, because you have to pay for public transit if an Azure service calls into your Lambdas to get some data or other.</p>
          </div>

          <h4>What are your views on the maturity of tooling, service ecosystem and developer experience in the serverless space today?</h4>
          <div>
            <p>The tooling for serverless apps is top notch—I think this is a result of all these services being so new. Providers understand that developers want to use services with great APIs, then automate them.</p>
            <p>There are now a bunch of companies making strides in second-line tools like graphical infra builders, and AWS itself is working on tools like Cloud9. There's *plenty* of tooling, and it's improving all the time.</p>
            <p>The ecosystem of developer practices is the area I think needs to mature the most right now.</p>
            <p>There are still plenty of projects that are starting with Express-on-Lambda or similar, and not taking advantage of all the services like Auth0, Cognito, AWS WAF, and such that remove responsibility from your own code/framework. You don't need a whole framework like Django with auth, middleware, and everything built in because so much of that can be found as a service.</p>
          </div>

          <h4>What are your thoughts on what is keeping serverless architectures to be adopted widely by organizations?</h4>
          <div>
            <p>Lots of developers aren’t looking to switch stacks, and organizations have processes and shared tooling around their existing architectures. The tooling is there, and there are companies like iRobot betting big on serverless architectures.</p>
            <p>What we don’t have yet is a critical mass of skilled developers that companies can draw on.</p>
          </div>

          <h4>You are embedded in the serverless community and we love it. What is the most asked question you get from developers?</h4>
          <div>
            <p>Most questions I get come from people who hear about the benefits, and understand the value proposition, but just aren't sure if XYZ use case is possible. Often, the answer is in building a bridge between legacy systems and a serverless-enabled event source.</p>
            <p>They might get emails from clients today, and need to know how to take those emails and make them an event source for Lambda. With the catalog of services in AWS as big as it is (and growing) education is the #1 barrier. They just don't know that SES can take in emails and invoke Lambdas, or that they can use API Gateway as a webhook receiver.</p>
            <p>Add to that the number of third-party services and you have a really hard ecosystem to get started in because of the preponderance of options.</p>
          </div>

          <h4>With your experience working with large distributed systems and being involved closely in the DevOps community, what are your views on solutions around serverless architectures? What are the use cases that are not ready for primetime? Performance?</h4>
          <div>
            <p>Hard low-latency requirements (trading, ad bidding, etc) are still blocked by the problems most providers have with guaranteeing response times.</p>
            <p>AWS doesn’t have a strong response latency SLA for Lambda, and other providers are in the same boat. There’s also plenty of applications out there that <i>could</i> be serverless but aren’t because it would require big architectural changes.</p>
            <p>Take for example an ETL application that today loads the whole dataset, transforms it, and stores it somewhere. That’s not going to fit in a 5 minute max execution time for Lambda, but if you rearchitect it to do small portions in parallel it’s possible.</p>
            <p>The question for most of these use cases isn’t "will it be possible?" but rather "is the cost of change low enough?</p>
            <p>For existing apps, that change cost is high and can be risky if a system isn’t well-tested today. For new applications I take the serverless-first approach: try it, and fall back to traditional architectures if it’s impossible.</p>
          </div>

          <h4>Anything else you want to add that is significant that no one is talking about yet...</h4>
          <div>
            <p>It’s not news, but monitoring and automation are both hard, and both critical to success.</p>
            <p>When you start out, get set up with a good automation/deployment tool, and a good monitoring system as soon as you possibly can. Future you will skip a lot of frustration if you start out with a good foundation.</p>
          </div>

        </div>
      </Default>
    )
  }
}
