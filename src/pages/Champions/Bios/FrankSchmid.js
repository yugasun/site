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
              <h1>Frank Schmid</h1>
              <div className={styles.personWrapper}>
                <div className={styles.personImage}>
                  <div className={styles.roundedImage}>
                    <img src={`${imgBase}/2018/frank-schmid.jpg`} />
                  </div>
                  <div className={styles.championLogo}>
                    <img src={`${imgBase}/champion_small.svg`} />
                  </div>
                  <span className={styles.personName}>
                    Frank Schmid
                  </span>
                  <span className={styles.personCompany}>
                    Stashimi Inc.
                  </span>
                  <div className={styles.personSocial}>
                    <img src={`${imgBase}/twitter.svg`}/>
                    <a href="https://www.linkedin.com/in/frank-schmid-31468b5/" target="_blank"><img src={`${imgBase}/linkedin.svg`}/></a>
                    <a href="https://github.com/HyperBrain" target="_blank"><img src={`${imgBase}/Github.svg`}/></a>
                  </div>
                </div>
                <div className={styles.personBio}>
                  <p>At the age of 12, Frank discovered his passion for programming and computer technology, on a Commodore 64, with Basic and machine language.</p>
                  <p>His excitement for different programming languages and architectures grew, and with it grew his eagerness to solve specific problems with the appropriate tools.</p>
                  <p>At the age of 16, he sold his first application, and after finishing school, he began to study Computer Science at the University of Saarbrücken (Germany). After 4 years, he quit the university and founded his own company.</p>
                  <p>Ten years later, he joined Nero and worked there as software engineer, solution architect, team leader and finally as technical director.</p>
                  <p>He now works as an architect at the startup Stashimi where he works with a completely serverless based infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <h2>Interview with Frank Schmid</h2>
          </div>
          <h4>Tell us about your background. How did you get into programming?</h4>
          <div>
            <p>It was in 1982 with a Commodore 64 (you remember that one?) when I discovered my passion for programming and computer technology—at that time, with Basic and machine language. I was 12 years old. From then on, my journey and passion continued steadily.</p>
            <p>All along this path, the excitement and comprehension for different programming languages and architectures grew—and together with that, the eagerness to find out how to solve specific problems with the appropriate tools for the problems (languages and architectural patterns).</p>
            <p>At the age of 16 I sold my first application. It was a complete solution for order management. All throughout school and my time at the University I dug further into software development and software architecture and designed and implemented more applications, especially for solving problems in the construction sector. I think it was those kinds of problems, and that practice, which effectively strengthened my capability to solve problems efficiently by finding the right algorithms and the best architecture. This was the ultimate preparation for my development as a software engineer.</p>
            <p>I ran my own company for several years, in the network design, administration and software development space, before finally switching back to pure software development. I joined a much bigger company and stayed there for 10 years.</p>
            <p>During my tenure there, I ran through various positions: senior software engineer, solutions architect, team leader, and finally, technical director. All the practical experience I already had (in languages like C++/C/Assembler/SQL/PHP/Perl, etc.), and knowing how to solve problems with the proper language and architecture from prior experience, helped me to improve in areas of software engineering that were not that important and visible before. It even turned out that cultural differences impose a problem that has to be solved—in my time as team leader, part of my team was located in China—and was an essential part of software engineering. As Technical Director, a strategic component complemented the tactical and operational ones.</p>
            <p>After that I switched back to a small startup—Stashimi. That was nearly 3 years ago. Of course this is completely different, it is agile, hands-on. It is fun, though it actually means more work. :-) It feels like going back in time before the big company, but with a much more complete understanding of the software world.</p>
            <p>You asked <i>How did you get into programming?</i></br>
            Looking back over the years, I think "programming" is only a very small part of what crosses the gap between success and failure. It is a lot more than that—it is more a well-balanced mix of knowledge, problem solution and detection skills, target-orientation, etc. And even as you evolve further over time, you see that more and more areas come in that you initially thought not to be related with "programming" at all. For example, the personal fit of team members, which is as essential for a team's and a project's success as problem solving skills or knowledge. Also things like the best working methodology (agile/SCRUM vs. traditional) for the team.</p>
          </div>

          <h4>How did you get into serverless computing in general? Can you reflect upon your serverless journey over the years?</h4>
          <div>
            <p>At Nero, we had a backend that was completely built up traditionally, with servers, databases, etc. as we knew it years ago. It was completely run on-premise, i.e. on servers that we either rented or owned. Before even thinking of serverless architectures, cloud-based services like AWS, Google or Azure appeared that offered server and database hosting in the cloud.</p>
            <p>But for a big company (at least ours), even the thought to go "hosted" had initiated discussions about data security by people who were scared about giving up any ownership of the data or just the risk of losing data. With some headwind, though, it was finally possible to get some (not really mission critical) services into the cloud.</p>
            <p>Although the cloud based services ran without issues, enabled a better coordination of multinational teams, and were ultimately cheaper, it was not possible to really invent a completely new approach upon the cloud-based services there.</p>
            <p>That completely changed with Stashimi. We had the opportunity to design a new backend from scratch but the point is: we were not scared by the cloud and envisioned the evolution of backends going towards technologies that are completely cloud-hosted.</p>
            <p>With that mindset, it was only a small step to go further—a cloud-hosted serverless architecture.</p>
            <p>We evaluated the available providers, and came to the conclusion that we'd go with AWS (I already had experiences with AWS, Microsoft,and partially Google before with the former company). They just offered everything we needed as easy-to-use and secure services. For us, that was lambda functions (with Node.js support), a cloud API, no-SQL databases (DynamoDB and ElasticSearch), SQL databases and good scaling and regional distribution capabilities, and finally the possibility to have mobile clients easily interact with the backend by using a client SDK compiled for the specific API and AWS Cognito.</p>
            <p>We designed our complete backend based upon the capabilities that AWS offered at that time, and we continuously use new AWS serverless services (e.g. Lex) as we add features to our platform.</p>
          </div>

          <h4>You have been a contributor and an evangelist for the Serverless Framework for a long time. When did you start using the Serverless Framework?</h4>
          <div>
            <p>I started using the Serverless Framework quite early. Although the serverless services themselves worked perfectly in AWS cloud, it was a big problem that they did not have an easy way to deploy them via a CI/CD based system (at least not without creating and managing lots of configurations manually).</p>
            <p>AWS SAM or other helpers weren't on the horizon at that time, and even now they do not offer the needed flexibility to run a real-world deployment infrastructure.</p>
            <p>Austin's JAWS looked very promising, as well as the initial Framework versions (0.1 and 0.2). We experimented with them and set up a deployment system right away. Even though being an early adopter introduced some hurdles in regards to fluctuating features and capabilities, it made our backend deployments reliable and reproducible.</p>
            <p>When the Framework 1.0 version appeared (which was a needed rewrite), it was a vast improvement in regards to reliability and stability. Especially the change from using the AWS REST API to deploy the service to using CloudFormation. It was definitely the right choice.</p>
            <p>We adopted it and upgraded our projects short-term after a short testing phase.</p>
          </div>

          <h4>Talk about a service or an application that satisfactorily made you believe that serverless architectures are the way to go. What did you learn from that experience and what do you think is the biggest challenge in developing serverless applications today?</h4>
          <div>
            <p>It is the architecture at Stashimi, which is completely serverless. We have a backend that serves mobile clients and bots, and with this combination we can really see how powerful and secure a serverless infrastructure is, and how well it scales. The performance and reliability is astonishing.</p>
            <p>As I pointed out already above in my answer to my serverless journey, one big issue that prevents especially big (and often inflexible) companies from going the right way, is the fear of the cloud in general and the missing trust of "legacy" decision makers in the cloud providers. Of course, any cloud-based solution requires the setup of a proper security strategy, but caution is quite different of fear. Even the current Facebook discussion and incidents intensify that for people who are technically not very deeply anchored in the topic.</p>
            <p>If these problems are removed (by better information and training), there should be no obstacle to move any existing server based systems to serverless systems. Cloud providers offer lots of services nowadays that let you model _any_ architecture as serverless architecture. Deployment-wise, the Serverless Framework offers all the flexibility to provide the complete operational part.</p>
            <p>It is like I said at the very beginning: If you know which tool (specific cloud provider service, like databases, queues—SNS or SQS, etc.) to use to solve your actual problem (the backend requirements) you can do it, even if it is not obvious at first sight.</p>
          </div>

          <h4>Which cloud provider do you deploy to the most? Have you used multiple cloud providers? What is the top item on your wishlist for your cloud provider of choice?</h4>
          <div>
            <p>We are full-in on AWS as I mentioned above, so we have modeled the complete backend in there and do not use other providers. This is partially historical, because AWS were the first to quickly offer new needed services, which allowed us to realize new features in a short time frame. Other providers (IMO especially Microsoft) are generally paced slower and offer the features a bit later.</p>
            <p>There is one thing that could be improved on the AWS side: We do image manipulation in a Lambda function, and the only library that is available (in Node) in a portable way is Imagick. I also did an implementation using OpenCV (which offers a lot more functionality), but the problem here is, that native libraries have to be compiled on Amazon Linux (the same OS as running on Lambda) so that they can be invoked in a Lambda.</p>
            <p>I've seen this problem arising already multiple times in my `serverless-webpack` project, where people also tried to upload Node modules that contain native bindings. This is even more complicated if you deploy from a non-Linux OS like Darwin or Windows.</p>
            <p>I'd like to see a better solution in that area, maybe some AWS binary library repo that also includes bindings for the supported Lambda runtimes. Then, any Lambda could just install the packages from their repository (an AWS npm/yarn repository?) instead of the original one and it would work, independently of the runtime or deployment OS used.</p>
          </div>

          <h4>What are your views on the maturity of tooling, observability, service ecosystem and developer experience in the serverless space today?</h4>
          <div>
            <p>Speaking of AWS as an example here, mainly because that's what we use.</p>
            <p>Over the past few years, all services have matured and are nearly error-free now. Of course, newly-invented ones still need some time to mature, but AWS does a good job there and you can give feedback when testing new features that are still in beta.</p>
            <p>The same is true for observability. It is possible to create a completely transparent monitoring of everything you run in their environment. You can create custom metrics easily that track the internal functionality of your implementation and display them in real-time dashboards. That way, we're able to see and react to any inconsistencies in the system quickly.</p>
            <p>Tooling is the only point that lacks a bit behind there. It is overly complex to do things like easy deployment of bigger, dependent projects. But I do not see that as disadvantage, because there are great tools that fill this gap (e.g. the Serverless Framework). I even think it is better if the providers concentrate on the services and less on the tooling and let the tools be done and improved by people that actually build up their architectures on top of the services.</p>
            <p>Developer experience in the serverless area is still quite sparse if you take all developers who are engaged in cloud or network based technologies. But I'm sure that with the continuing trend towards severless architectures and their advantages, this will change over time. However, it is important that there are a few strong evangelists who support and strengthen this trend until in the end, server-based systems are the exception.</p>
          </div>

          <h4>What are your thoughts on what is keeping serverless architectures to be adopted widely by organizations?</h4>
          <div>
            <p>There are some major key points that make a long-term transition inevitable.</p>
            <p>There is the delegation of fixed administration and running costs to the provider—you pay as you go. The costs scale with the actual load of the system. Additionally the provider costs tend to decrease over time (at least from what I see).</p>
            <p>Then, serverless based systems scale better and can cover load spikes more easily. Architecture-wise, serverless architectures are in general modeled more cleanly. They stay extensible and separated and are maintainable in a much better way. New services that are hard to be managed and maintained in a meaningful way appear frequently and offer a better experience (e.g. AWS Lex, AWS Comprehend, etc.)</p>
            <p>Of course, adopting serverless architectures is not an ad-hoc thing. It requires a change in people's minds, which can be a very slow process; you might even have to wait for a new generation of software engineers to occupy senior-level positions. It is also most likely no binary decision where you just state "now we will be serverless"—same as with someone who tries to introduce agile methodologies ad-hoc and for everything, even making coffee. ;-) That would obviously not work, and only be food for objectors who are against changes at any cost.</p>
            <p>I'm sure that we'll continue to see a large shift towards serverless systems over time. Even present-day objectors will most likely follow as the serverless architecture in the end (IMO) leads to a market advantage for the implementers.</p>
          </div>

          <h4>You are embedded in the serverless community and we love it. What is the most asked question you get from developers?</h4>
          <div>
            <p>First of all—thanks! Honestly, answering huge amounts of questions in `serverless` and my projects `serverless-webpack` and `serverless-aws-alias`, I think that there is no specific question that appears more often than others. All questions are important and should be answered properly, and most of them are on how to solve very specific problems.</p>
            <p>In general, you can group the questions in a few categories: questions about things that are broken or missing, general architectural questions (how do I do X?) or interesting discussions about new possible features or different ways to do things. All of these categories have a different effect on the topic that is questioned, but all of them increase community knowledge. They help to drive the Serverless Framework, as well as serverless architectures, into the future.</p>
          </div>

          <h4>Anything else you want to add that is significant that no one is talking about yet...</h4>
          <div>
            <p>I'm not sure I missed anything—oh, yes: The most important one:</br>
            I'm really impressed with the Serverless Framework and the community. The project has managed to attract and gather very competent and nice people from all over the world. I'd like to thank the community to make this work and happen.</p>
            <p>The Serverless Framework helps a lot of companies and people. Having such a living community is of more value than any similar tool any cloud provider could provide.</p>
          </div>

        </div>
      </Default>
    )
  }
}
