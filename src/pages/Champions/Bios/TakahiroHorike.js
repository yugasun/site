import React from 'react'
import Default from '../../../layouts/Default'
import Button from '../../../components/Button'
import styles from './Bio.css'

const imgBase = `${process.env.S3_BUCKET}images/champions`

export default class ChampionBiosTH extends React.Component {
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
              <h1>Takahiro Horike</h1>
              <div className={styles.personWrapper}>
                <div className={styles.personImage}>
                  <div className={styles.roundedImage}>
                    <img src={`${imgBase}/2017/horike.jpg`} />
                  </div>
                  <div className={styles.championLogo}>
                    <img src={`${imgBase}/champion_small.svg`} />
                  </div>
                  <span className={styles.personName}>
                    Takahiro Horike
                  </span>
                  <span className={styles.personCompany}>
                    DigitalCube Co. Ltd
                  </span>
                  <div className={styles.personSocial}>
                    <a href="https://twitter.com/horike37" target="_blank"><img src={`${imgBase}/twitter.svg`}/></a>
                    <a href="https://www.linkedin.com/in/takahiro-horike-69894a133/" target="_blank"><img src={`${imgBase}/linkedin.svg`}/></a>
                    <a href="https://github.com/horike37" target="_blank"><img src={`${imgBase}/Github.svg`}/></a>
                  </div>
                </div>
                <div className={styles.personBio}>
                  <p>Takahiro Horike is a Software Engineer at DigitalCube Co. Ltd. He is the author of Serverless Dashboard for Atom and Serverless Step Functions plugin, and a Serverless Framework core maintainer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <h2>Interview with Takahiro Horike</h2>
          </div>
          <h4>Tell us about your background. How did you get into programming?</h4>
          <div>
            <p>I majored in electrical engineering as a college student. In Japan, during your senior year of college, everyone is assigned to a lab.</p>
            <p>During my lab assignment, I ended up needing to write a simulation of visualizing electromagnetic waves. That’s how I got involved in software programming for the first time. I instantly loved it.</p>
            <p>After graduating, I started working at an IT company near my hometown, creating a mobile web application with PHP, JavaScript and HTML. From there, I worked on various other web application projects. The foundation of my programming skills was built on those experiences.</p>
            <p>One day, I started learning WordPress from my co-worker. That was my first experience diving into the OSS community. I really took advantage of their events and meetups. Then I started organizing events myself, creating WordPress plugins, and so on.</p>
            <p>I think my open-source mindset was formed at that time.</p>
          </div>

          <h4>How did you get into serverless computing in general? Can you reflect upon your serverless journey over the years?</h4>
          <div>
            <p>Since the announcement for Lambda and API Gateway in 2014!</p>
            <p>I had been an AWS user since my current company, Digital Cube, started offering a hosting service for WordPress on AWS.</p>
            <p>After graduating, I started working at an IT company near my hometown, creating a mobile web application with PHP, JavaScript and HTML. From there, I worked on various other web application projects. The foundation of my programming skills was built on those experiences.</p>
            <p>It was hard to deploy and manage Lambda functions (and by default serverless architectures). I noticed serverless computing had various issues and problems. I wanted to improve them because I could tell that my ideal programming world was so, so close. And I could help make it a reality!</p>
            <p>However, improving Lambda was too hard, because to do that I’d have to join the team at AWS. That’s a high hurdle.</p>
            <p>Then, I found the Serverless Framework. I love Cloud and OSS, so the Serverless Framework attitude and way just fit my mindset well. OSS was <i>not</i> a high hurdle. It was then that I decided to improve the serverless computing world by working on the Serverless Framework movement.</p>
          </div>

          <h4>You have been a contributor and an evangelist for the Serverless Framework for a long time. When did you start using the Serverless Framework?</h4>
          <div>
            <p>A couple of months later after Lambda was released, I was participating in a conference related to AWS. The Serverless Framework was introduced in a session.</p>
          </div>

          <h4>Talk about a service or an application that satisfactorily made you believe that serverless architectures is the way to go. What did you learn from that experience and what do you think is the biggest challenge in developing serverless applications today?</h4>
          <div>
            <p>I think these are the two biggest challenges:</p>
            <ul>
              <li>How should we manage an application that has many microservices?</li>
              <li>How should we manage security across many microservices?</li>
            </ul>
            <p>A lot of serverless applications need to be composed of several services (like CloudFormation in AWS), and then we may need to create many Git repositories to manage each service. The bigger the service you have, the more complex it gets. We should find a way to manage and visualize a bunch of microservices.</p>
            <p>The other important thing is a security across microservices. For example, when microservices are divided into organizations or roles, it would be nice if those were protected by something on a security filter like AWS IAM.</p>
          </div>

          <h4>Which cloud provider do you deploy to the most? Have you used multiple cloud providers? What is the top item on your wishlist for your cloud provider of choice?</h4>
          <div>
            <p>I write most of my functions on AWS because I use that at work.</p>
            <p>The top item on my wishlist would be to provide something that makes it easier to realize what I want to do.</p>
            <p>Recently, I’ve been playing with GCP a little bit because interested in self-hosted FaaS, like OpenFaas and Kubeless. GCP makes it easy to build a Kubernetes cluster.</p>
          </div>

          <h4>What are your views on the maturity of tooling, service ecosystem and developer experience in the serverless space today?</h4>
          <div>
            <p>I feel today’s serverless space is still too complex.</p>
            <p>I expect that serverless computing will be programming-less computing in the future. I don’t know exactly what this will look like, but for example—I think we’ll be able to build applications by choosing a service and any data sources via GUI, sort of like IFTTT. Then we’d be able to connect them together by unified-specification events.</p>
            <p>For example, the goal of Serverless Dashboard for Atom is to make developers not even aware of the cloud. They can publish a service by just clicking the ‘deploy’ button.</p>
            <p>I think the <a href="https://github.com/RafalWilinski/deploy-with-serverless" target="_blank">deploy-with-serverless plugin</a> has a similar concept.</p>
          </div>

          <h4>What are your thoughts on what is keeping serverless architectures to be adopted widely by organizations?</h4>
          <div>
            <p>One of the key features of FaaS is that it’s event-driven. However, building any system by only event-driven architecture is a little bit too restrictive.</p>
            <p>In the near future, It may be important to build those by combining containers and FaaS. This may facilitate serverless architecture adoption by larger organizations.</p>
          </div>

          <h4>You are embedded in the serverless community and we love it. What is the most asked question you get from developers?</h4>
          <div>
            <p>The most are about the Serverless Step Functions plugin. I’m always happy to hear that someone’s application went live with the plugin!</p>
          </div>

          <h4>Anything specific you think needs to be done for the developer community in Japan. Language support? Blog post translations? What would you like to do, and how can we help?</h4>
          <div>
            <p>I hope that more people who are in the Japanese serverless community will actively participate in the global serverless community.</p>
            <p>Serverless computing hasn’t yet reached maturity, and the serverless computing community in general is centered around the global one. If many of us can participate in the global community, the evolution of serverless will be even more powerful.</p>
            <p>The Japanese community is huge but it is a local one. We have to overcome the language barrier.</p>
            <p>To be honest, I’m not sure what I should do to have this be realized. Japanese language support or blog post translations might be effective, but we won’t know until we try.</p>
            <p>For another idea, I’ve been considering a workshop on how to contribute to the Serverless Framework, where I would prepare some relatively easy-to-resolve Framework issues in advance and attendees will send PRs during the workshop. I would support, review and merge those there. It would be nice to do if it’d end up being an entrance to the global community for them.</p>
          </div>
        </div>
      </Default>
    )
  }
}
