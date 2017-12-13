import React from 'react'
import Default from '../../../layouts/Default'
import Button from '../../../components/Button'
import styles from './Bio.css'

const imgBase = `${process.env.S3_BUCKET}images/champions`

export default class ChampionBios extends React.Component {
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
              <h1>Marcia Villalba</h1>
              <div className={styles.personWrapper}>
                <div className={styles.personImage}>
                  <div className={styles.roundedImage}>
                    <img src={`${imgBase}/2017/marcia.jpg`} />
                  </div>
                  <div className={styles.championLogo}>
                    <img src={`${imgBase}/champion_small.svg`} />
                  </div>
                  <span className={styles.personName}>
                    Marcia Villalba
                  </span>
                  <span className={styles.personCompany}>
                    Rovio
                  </span>
                  <div className={styles.personSocial}>
                    <a href="https://twitter.com/mavi888uy" target="_blank"><img src={`${imgBase}/twitter.svg`}/></a>
                    <a href="https://www.linkedin.com/in/marciavillalba/" target="_blank"><img src={`${imgBase}/linkedin.svg`}/></a>
                    <a href="https://github.com/mavi888" target="_blank"><img src={`${imgBase}/Github.svg`}/></a>
                  </div>
                </div>
                <div className={styles.personBio}>
                  <p>Marcia is a Senior Full-stack Developer, from Uruguay located in Finland. She has been designing and developing software professionally in very renown companies for over 10 years such as Rovio, IBM, and Nokia.</p>
                  <p>Marcia has a broad experience in all the different stages of building scaling and performant software. She has deep knowledge of the public cloud and architecting for it. She has been working with AWS for more many years and for almost two years mostly with serverless technologies.</p>
                  <p>Marcia runs her own Youtube channel, in which she publishes at least one new video every week. In her channel, she focuses on teaching how to use AWS serverless technologies and managed services. She is also an AWS Community Hero and runs the Finland AWS User Group.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <h2>Interview with Marcia Villalba</h2>
          </div>
          <h4>Tell us about your background. How did you get into programming?</h4>
          <div>
            <p>I got into programming when I was very young. My dad bought our first computer when I was 6, and since the beginning he let me do whatever I wanted with it. I broke Windows 3.1 so many times!</p>
            <p>My dad believed that programming was a very important life skill, so when I was around 7 he bought me this game that was teaching BASIC for kids, where you needed to write some Basic commands to help a dog to navigate through a maze. That was my first encounter with programming; I didn’t know by then that I was programming.</p>
            <p>During my whole childhood, I was playing with different logic games and puzzle solving games on the computer, like Monkey Island and Indiana Jones.</p>
            <p>In the beginning of my teens, the internet became popular. I was really into the Backstreet Boys, and I learned how to make web pages so I could run a Backstreet Boys fan site. From there, I discovered my love for programming and all the power it brings you—how much you can express yourself with code, and how much you can share with the world.</p>
            <p>I made a <a href="https://www.youtube.com/watch?v=UoJAoclqXeA&t=2s" target="_blank">video about my life as a developer</a>, actually, for my Foobar YouTube channel.</p>
          </div>

          <h4>How did you get into serverless computing in general? Can you reflect upon your serverless journey over the years?</h4>
          <div>
            <p>When I first heard about AWS Lambda at re:Invent 2014, I saw that Lambda had a lot of potential, but I could not see it fitting in my work. At the time, I was building mostly REST backends; AWS Lambda seemed more like an infrastructure tool.</p>
            <p>However, some months later AWS released API Gateway support for AWS Lambda, and then I realized how powerful those two together could be.</p>
            <p>By then, I was working on a project where I was one of the few server developers and we were facing a lot of technical debt issues. We were trying to fix them, but nothing was working, and we were looking into new architectures and new ways to try and solve those problems. Serverless seemed perfect for our use case.</p>
            <p>Luckily, the other server developer on the team and the technical director of the project agreed, so it was quite easy to start rewriting our backend in a serverless manner.</p>
            <p>The experience was tough at first. It took me a while to learn how to think in an event-driven way, how to create nano services or very minimal micro-services, but with time it became better and better.</p>
            <p>I gave a <a href="https://www.youtube.com/watch?v=rULteFMDKuQ" target="_blank">conference talk</a> about the whole story of migrating an existing service to serverless at ServerlessConf 2017.</p>
          </div>

          <h4>You have been a contributor and an evangelist for the Serverless Framework for a long time. When did you start using the Serverless Framework?</h4>
          <div>
            <p>I started using Serverless Framework at the same time I got started with AWS Lambda and API Gateway. It was a natural thing for me, to keep all my code and infrastructure together as code.</p>
            <p>Since the beginning, I’ve really liked the Serverless Framework and I am still using it in all my production services.</p>
          </div>

          <h4>Talk about a service or an application that satisfactorily made you believe that serverless architectures is the way to go. What did you learn from that experience and what do you think is the biggest challenge in developing serverless applications today?</h4>
          <div>
            <p>I think serverless is a great match for REST-based game servers and for prototypes. When you don’t know how many people will be playing your game, and you cannot estimate the load that you will be having on your servers. Serverless gives you a lot of flexibility.</p>
            <p>Serveless is also great in case the game gets discontinued, because you can leave the game server up with very little costs and almost no maintenance.</p>
            <p>Plus, its very fast to get something up and working in few hours. When you are developing the traditional way, you need to set up an infrastructure and have a lot of things in place before you can start getting things out.</p>
            <p>The biggest challenges that I am facing right now are monitoring my serverless infrastructure and having good accessibility to the logs when something goes wrong. I still haven’t found a good service that is fully serverless and that I can host in my infra, that I like. I am using a lot of CloudWatch capabilities but I think it’s still not enough.</p>
          </div>

          <h4>Which cloud provider do you deploy to the most? Have you used multiple cloud providers? What is the top item on your wishlist for your cloud provider of choice?</h4>
          <div>
            <p>I still use AWS with the serverless framework.</p>
            <p>The top thing on my wishlist for AWS is a fully Serverless Relational Database. Luckily, during re:Invent 2017, they announced Serverless Aurora and I am really excited for it!</p>
          </div>

          <h4>What are your views on the maturity of tooling, service ecosystem and developer experience in the serverless space today?</h4>
          <div>
            <p>There are still a lot of things to improve on the tooling. I like the approach of the Serverless Framework of being extensible by community plugins; that makes the framework very powerful. And lots of cool improvements to the framework have come from the community.</p>
            <p>But other tools and services are still far behind. Lots of the services don’t take Lambda and its resources as first-class citizens, so it’s hard to have a clear overview of the whole ecosystem when you are only using fully managed services.</p>
            <p>Additionally, inside AWS it’s hard to see and understand your Serverless architecture, as there are no good internal services to manage the whole infrastructure.</p>
          </div>

          <h4>What are your thoughts on what is keeping serverless architectures to be adopted widely by organizations?</h4>
          <div>
            <p>Experience and technology maturity. Lots of companies are adopting serverless technologies—but they are afraid as the technology is quite new and they don’t have enough experienced people inside the company.</p>
            <p>In addition, as there are not many appropriate corporate tools to manage a Serverless infrastructure and not that many formalized best practices, companies are afraid of adopting Serverless.</p>
            <p>But I think this will change with time, as more developers and architects are exposed to these technologies, and more tools appear. Serverless provides a lot of benefits for organizations.</p>
          </div>

          <h4>You are embedded in the serverless community and we love it. What is the most asked question you get from developers?</h4>
          <div>
            <p>How do I get started? Can I test it locally? If I use this wouldn’t I be locked in to a single vendor?</p>
          </div>

          <h4>Anything specific you think needs to be done for the Hispanic or Women developer community. What would you like to do, and how can we help?</h4>
          <div>
            <p>There are few female developers, and most of them don’t participate a lot in the community.</p>
            <p>I am part of many different groups that allow me to work with women in technology and I am trying to do 2 things there. First, encouraging women to start learning to code and help them to change their career if they want to. Second, helping women to stay in tech, by helping them to be more active in the community and gain confidence.</p> 
            <p>I’ve been considering organizing some kind of meetup for female cloud developers, as I noticed in the AWS Finland User Group there are very few women. I’d really like to grow that community.</p>
            <p>You can help by trying to find more women who are good references for Serverless and helping them to be more exposed to the community. You can also help by collaborating with women-centric user groups.</p>
          </div>
        </div>
      </Default>
    )
  }
}
