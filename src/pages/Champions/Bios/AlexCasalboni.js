import React from 'react'
import Default from '../../../layouts/Default'
import Button from '../../../components/Button'
import styles from './Bio.css'

const imgBase = `${process.env.S3_BUCKET}images/champions`

export default class ChampionBiosMV extends React.Component {
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
              <h1>Alex Casalboni</h1>
              <div className={styles.personWrapper}>
                <div className={styles.personImage}>
                  <div className={styles.roundedImage}>
                    <img src={`${imgBase}/2018/alex-casalboni.jpg`} />
                  </div>
                  <div className={styles.championLogo}>
                    <img src={`${imgBase}/champion_small.svg`} />
                  </div>
                  <span className={styles.personName}>
                    Alex Casalboni
                  </span>
                  <span className={styles.personCompany}>

                  </span>
                  <div className={styles.personSocial}>
                    <a href="https://twitter.com/alex_casalboni" target="_blank"><img src={`${imgBase}/twitter.svg`}/></a>
                    <a href="https://www.linkedin.com/in/alexcasalboni/" target="_blank"><img src={`${imgBase}/linkedin.svg`}/></a>
                    <a href="https://github.com/alexcasalboni" target="_blank"><img src={`${imgBase}/Github.svg`}/></a>
                  </div>
                </div>
                <div className={styles.personBio}>
                  <p>Alex is a Sr. Software Engineer from Italy. He started his career as a musician, before his passion for coding brought him to Sound & Music Engineering and Web Development.</p>
                  <p>That's how he ended up spending the last four years building web products in the startup world and deepening his knowledge on full stack web development and architecture design in the Cloud.</p>
                  <p>Alex has been evangelizing the Serverless Cloud since early 2016, contributing to the Serverless Framework, speaking at conferences and meetups around the world, co-organizing JeffConfs (now ServerlessDays), and buiding prototypes, open-source libraries, and live webinars.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <h2>Interview with Alex Casalboni</h2>
          </div>
          <h4>Tell us about your background. How did you get into programming?</h4>
          <div>
            <p>I got into programming by chance during high school. I was studying to become an accountant and I randomly ended up in the programming specialization of my school, where I walked my very first steps with Visual Basic 6 and learned a few scripting tricks.</p>
            <p>Building accounting software wasn't that exciting, to be honest. But I fell in love with the idea of creating silly things such as animations and games. I shared some of my early experiments, doubts, and failures <a href="https://blog.alexcasalboni.com/serverless-computing-machine-learning-baf52b89e1b0" target="_blank">here</a>.</p>
            <p>A couple of years later I stumbled upon web development, when HTML5, CSS2, Flash, Java Applets, and PHP were the trending topics (and Chrome didn't exist yet!).</p>
            <p>When I realized that a future as a musician or as an accountant wasn't my best option, I turned my programming passion into serious business and applied for a Software Engineering bachelor degree, immediately followed by a master in Sound & Music Engineering.</p>
            <p>Then the world "Cloud" was invented, "Serverless" followed a few years later, and the rest is history :)</p>
          </div>

          <h4>How did you get into serverless computing in general? Can you reflect upon your serverless journey over the years?</h4>
          <div>
            <p>I got into serverless computing around early 2016, just a couple of months after AWS re:Invent 2015 in Las Vegas (which was my master graduation gift to myself) and more or less 10 month after AWS Lambda reached general availability.</p>
            <p>I had been experimenting with a lot of machine learning frameworks and platforms, so that my newly formed data science team could be operational and productive as soon as possible. While we already had a few ML models ready to be deployed and tuned, we didn't have a clear idea of how to make the system scale properly without depending too much on other teams (and skills).</p>
            <p>That's why AWS Lambda sounded like the perfect match: zero administration, seamless scaling, and stateless execution were ideal for our scenario.</p>
            <p>I also had a chance to share <a href="https://aws.amazon.com/blogs/aws/machine-learning-recommendation-systems-and-data-analysis-at-cloud-academy/" target="_blank">our architecture on Jeff Barr's blog</a> a few months later.</p>
            <p>After that initial PoC, I literally started using FaaS for 99% of my projects, whether they involved ML, web APIs, data processing, or just simple automation tasks.</p>
          </div>

          <h4>You have been a contributor and an evangelist for the Serverless Framework for a long time. When did you start using the Serverless Framework?</h4>
          <div>
            <p>I started using the Serverless Framework as soon as we realized that a system with more than a handful of Functions would never scale without proper tooling.</p>
            <p>It was May 2016 and I wrote <a href="https://cloudacademy.com/blog/serverless-framework-aws-lambda-api-gateway-python/" target="_blank">my first review of the framework v0.5</a>. The project was still early stage (only 60 contributors, now they are almost 400!) and the serverless ecosystem was so immature that nobody could clearly define "serverless", at least not without making a few enemies (well, that still happens, especially on Twitter!).</p>
            <p>Then I met Austen Collins at the first ServerlessConf in New York a few days later and I finally realized the scope of what the team was going to build in the upcoming months.</p>
          </div>

          <h4>Talk about a service or an application that satisfactorily made you believe that serverless architectures is the way to go. What did you learn from that experience and what do you think is the biggest challenge in developing serverless applications today?</h4>
          <div>
            <p>After my initial success with serverless, I have seen plenty of migration projects first-hand, and I've built a lot of PoC's, demos, and weekend projects myself. Every time I manage to go from "new idea" to "code in production" in less than a couple of hours, it's one additional confirmation that this is what the future of development looks like.</p>
            <p>The biggest challenge I see is also the consequence of the perceived velocity of serverless, especially when you get started. You may end up thinking that you can simply ignore all the pieces and best practices that make serverless possible. For example, most developers don't invest enough time in learning Amazon CloudFormation and AWS IAM. These services are complex, and it may seem like a lot of useless work, but it'll actually save you a lot of troubles during debugging and also make your Functions safer and more robust.</p>
          </div>

          <h4>Which cloud provider do you deploy to the most? Have you used multiple cloud providers? What is the top item on your wishlist for your cloud provider of choice?</h4>
          <div>
            <p>I mostly use AWS on a daily basis, but I've been experimenting with other Clouds and FaaS, such as Google Cloud Functions, Azure Functions, Apache OpenWhisk, etc.</p>
            <p>When the Framework reached version 1.0 and offered multi-provider support, I spent some time benchmarking different FaaS platforms and services out of curiosity. Although these experiments never reached a mature multi-cloud setup, I must admit that the vendor neutrality offered by the Serverless Framework really made a difference.</p>
            <p>My <a href="https://awswishlist.com" target="_blank">#awswishlist</a> includes items related to AWS Cloud9, CodeStar, StepFunctions, and many more services. When it comes to AWS Lambda, I really wish runtimes were updated more often (or customizable) and that the corresponding roadmaps were public (at least partially).</p>
          </div>

          <h4>What are your views on the maturity of tooling, observability, service ecosystem and developer experience in the serverless space today?</h4>
          <div>
            <p>Tooling finally exists, best practices are still emerging, and Cloud vendors are doing their best to keep up with features requests and provide built-in functionalities.</p>
            <p>The developer experience has gotten so much better with respect to just a couple of years ago. I believe that "Cloud-native" tools and services will improve it and speed up adoption even more.</p>
            <p>I think the shift from DIY infrastructure to ephemeral compute and FaaS will be seen as a very natural and straightforward evolution of the Cloud, looking back in a few years. But it took a lot of time and efforts to build and embed in culture and best practices.</p>
          </div>

          <h4>What are your thoughts on what is keeping serverless architectures to be adopted widely by organizations?</h4>
          <div>
            <p>I would say the last 20 years of web development tooling, well-established full-stack frameworks, and the often poorly managed fear of change.</p>
            <p>The good news is that organizations that already embraced the Cloud can easily use serverless to extend their existing solution and gradually migrate to FaaS and managed services.</p>
            <p>On the other hand, larger enterprises that adopted multi-cloud and container-based technologies out of "vendor lock-in fear” might still benefit from an on-premises FaaS approach, which could provide a very similar development experience to their teams.</p>
          </div>

          <h4>You are embedded in the serverless community and we love it. What is the most asked question you get from developers?</h4>
          <div>
            <p><i>I'm afraid of lock-in: Can you recommend a neutral tool that improves portability? Did you ever have to migrate to a different Cloud?</i></br>
            <b>Answer</b>: No, that really happens once a decade. But you can make your manager happy with an agnostic tool like the Serverless Framework.</p>
            <p><i>Debugging and monitoring functions seems pretty obscure: what tools do you use?</i></br>
            <b>Answer</b>: I use a mix of Serverless Framework and AWS SAM for local debugging and plain CloudWatch for monitoring and logs. I recommend investing on 3rd-party monitoring tools only after you've mastered the native tool of your Cloud provider and found out it's not enough for you.</p>
            <p><i>How do I choose the "power" (i.e. RAM) of my Lambda Functions?</i></br>
            <b>Answer</b>Answer: I built a <a href="https://github.com/alexcasalboni/aws-lambda-power-tuning" target="_blank">StepFunctions state machine</a> to empirically find out the optimal configuration for your specific use case.</p>
          </div>

          <h4>Anything else you want to add that is significant that no one is talking about yet...</h4>
          <div>
            <p>JeffConfs have recently been renamed to <a href="https://serverlessdays.io" target="_blank">ServerlessDays</a>. The conference motto is still <b>"One Day, One Track, One Community."</b> and the main goal is to foster new local serverless communities, supported by local meetups, speakers, and sponsors.</p>
            <p>There will be more than 10 ServerlessDays by the end of 2018, and I'll do my best to attend all of them (I won't make it to New Zealand, unfortunately!).</p>
            <p>Stay tuned for the upcoming ServerlessDays near you, or get in touch and <a href="https://serverlessdays.io/organise" target="_blank">become an organizer</a>!</p>
          </div>

        </div>
      </Default>
    )
  }
}
