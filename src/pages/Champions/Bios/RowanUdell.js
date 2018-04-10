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
              <h1>Rowan Udell</h1>
              <div className={styles.personWrapper}>
                <div className={styles.personImage}>
                  <div className={styles.roundedImage}>
                    <img src={`${imgBase}/2018/rowan-udell.jpg`} />
                  </div>
                  <div className={styles.championLogo}>
                    <img src={`${imgBase}/champion_small.svg`} />
                  </div>
                  <span className={styles.personName}>
                    Rowan Udell
                  </span>
                  <span className={styles.personCompany}>
                    Versent
                  </span>
                  <div className={styles.personSocial}>
                    <a href="https://twitter.com/elrowan" target="_blank"><img src={`${imgBase}/twitter.svg`}/></a>
                    <a href="https://www.linkedin.com/in/rowanu/" target="_blank"><img src={`${imgBase}/linkedin.svg`}/></a>
                    <a href="https://github.com/rowanu" target="_blank"><img src={`${imgBase}/Github.svg`}/></a>
                  </div>
                </div>
                <div className={styles.personBio}>
                  <p>Rowan began his career in support and operations before branching out to development 10 years ago. He first worked with the AWS platform over five years ago and has been an avid fan and user of AWS Lambda since it was announced.</p>
                  <p>In his day job as Cloud Practice Director at Versent (an AWS Premier Partner) he helps teams and enterprises get the most out of the AWS platform. He's also an APN (AWS Partner Network) Cloud Warrior.</p>
                  <p>He published the online video course The Serverless Framework: Build a Chatbot course on ACloud.Guru and is the co-author of the AWS Administration Cookbook. Aside from blogging and commenting on the Serverless Framework Forum, Rowan has spoken at local events like the AWS Summit Sydney, Serverless Sydney, and the AWS Sydney User Group.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <h2>Interview with Rowan Udell</h2>
          </div>
          <h4>Tell us about your background. How did you get into programming?</h4>
          <div>
            <p>I started out my career in support and operations, before deciding to go all-in on development. I took a job as a programmer at a startup, and learnt on the job. After that I took a few different front and back-end web development positions, before taking on more of a tech lead role. I'm now Cloud Practice Director at Versent, and Australian AWS Premier Partner. I still enjoy coding, even if I don't get as much chance to do it myself daily.</p>
          </div>

          <h4>How did you get into serverless computing in general? Can you reflect upon your serverless journey over the years?</h4>
          <div>
            <p>The idea of serverless really resonated with me when I first discovered it (via AWS Lambda). Having both built, run, and maintained servers and applications in production, I saw the benefits to the approach immediately; there was no convincing needed. I also really liked the event-driven approach to compute, which fits well in the web-based, asynchronous world that many of our applications now live in.</p>
          </div>

          <h4>You have been a contributor and an evangelist for the Serverless Framework for a long time. When did you start using the Serverless Framework?</h4>
          <div>
            <p>I knew about the framework when it was still JAWS (which was an awesome name), but hadn't had much chance to use it (mainly because Lambda was not in the Sydney region at the time). I started using it more extensively when Lambda came to Sydney, which was around when it changed name to The Serverless Framework and started using CloudFormation. Given the early focus on the AWS platform, the framework fit really nicely with my own focus on AWS.</p>
          </div>

          <h4>Talk about a service or an application that satisfactorily made you believe that serverless architectures is the way to go. What did you learn from that experience and what do you think is the biggest challenge in developing serverless applications today?</h4>
          <div>
            <p>As I mentioned earlier, I never really needed convincing. For me the chatbot application was one of the best example of a good fit for a serverless and event-driven application, which is why I chose it as the subject of the video course I made. Other than that I've found serverless really suited to automating operational tasks, since it reduces the overhead for intermittent - but important - maintenance jobs.</p>
            <p>I think the biggest challenges for developers new to serverless are in the management of state: You can no longer assume that the machine that executed the code last time will do it again this time. What makes it more confusing is that it might be the same machine! Understanding the value and implementation nuances of idempotent activities (which are key to a robust, distributed system) is another thing which has a steep learning curve for developers new to serverless.</p>
          </div>

          <h4>Which cloud provider do you deploy to the most? Have you used multiple cloud providers? What is the top item on your wishlist for your cloud provider of choice?</h4>
          <div>
            <p>Obviously AWS! I work for an AWS Partner, so I’m lucky enough to work with AWS day-in-day-out.</p>
            <p>The feature I'm looking forward to the most is private (i.e. VPC-based) API Gateway endpoints, so that we can easily do internal-only APIs.</p>
          </div>

          <h4>What are your views on the maturity of tooling, observability, service ecosystem and developer experience in the serverless space today?</h4>
          <div>
            <p>It’s still early days. The cloud platforms give us unprecedented observability in to our systems with no effort on our part, which is a game changer. That being said, the tooling around managing infrastructure-as-code is a long way behind the kind of tooling we’re used to in the “pure” software development world (e.g. for testing, analysis, etc), and I’m looking forward to it catching-up.</p>
          </div>

          <h4>What are your thoughts on what is keeping serverless architectures to be adopted widely by organizations?</h4>
          <div>
            <p>My impression is that it’s being driven by developers. The source of the excitement and uptake of serverless is a real grass-roots phenomenon, which is why I'm convinced it's here to stay. As there's more and more success stories using serverless (e.g. reducing costs, easily scaling, automating, etc) developers will get even more comfortable, and serverless will become the default approach to developing web applications - you'll only do "server-based" applications if you really have to.</p>
          </div>

          <h4>You are embedded in the serverless community and we love it. What is the most asked question you get from developers?</h4>
          <div>
            <p>The most asked questions are usually around how to do something that the developer knows, but in the context of the cloud platform (i.e. AWS). The reality is serverless applications are by definition distributed applications, and distributed applications are hard! There's a implicit complexity involved in serverless - which is totally worth it - that can be tough to learn at the very beginning. There are many developers out there that are super excited about serverless, and they're taking on learning AWS and serverless at the same time, which definitely has a learning curve. Once you internalise the concepts behind the platform the problems go away quickly, just like they do when you're using a new language or framework.</p>
          </div>

          <h4>Anything else you want to add that is significant that no one is talking about yet...</h4>
          <div>
            <p>That would be my new serverless monitoring dashboard and observability tool, Dashboardless! It will soon be live at http://dashboardless.com/</p>
          </div>

        </div>
      </Default>
    )
  }
}
