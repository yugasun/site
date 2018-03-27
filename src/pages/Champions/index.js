import React from 'react'
import Default from '../../layouts/Default'
import Button from '../../components/Button'
import styles from './Champions.css'

const imgBase = `${process.env.S3_BUCKET}images/champions`

export default class ChampionsPage extends React.Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <Default {...this.props} fullWidth>
        <div className={styles.heroWrapper}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <div className={styles.heroLeftbackground} />
              <h2>Serverless Champions</h2>
              <p>
                We are incredibly proud of the way the Serverless community steps up to the plate on a daily basis to contribute to the project and help guide newcomers.
              </p>
              <p>
                To recognize our community superstars, we established the  Serverless Champions program.
              </p>
              <p>
                Our champions show serverless thought leadership. They contribute to serverless open source projects. They are all-around ambassadors in the community.
              </p>
              <div className={styles.heroButton}>
                <Button kind="red" href="/community/champions/program/">
                  LEARN MORE
                </Button>
              </div>
            </div>
            <div className={styles.heroRight}>
              <img src={`${imgBase}/logo.png`} className={styles.logo} />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading}>Our Serverless Champions, handpicked by us:</h2>

          <div className={styles.personWrapper}>
            <div className={styles.personImage}>
              <div className={styles.roundedImage}>
                <img src={`${imgBase}/2018/rowan-udell.jpg`} />
              </div>
              <span className={styles.personName}>
                <a href="rowan-udell/">Rowan Udell</a>
              </span>
              <span className={styles.personCompany}>
                Versent
              </span>
            </div>
            <div className={styles.personBio}>
              <p>Rowan began his career in support and operations before branching out to development 10 years ago. He first worked with the AWS platform over five years ago and has been an avid fan and user of AWS Lambda since it was announced.</p>
              <p>In his day job as Cloud Practice Director at Versent (an AWS Premier Partner) he helps teams and enterprises get the most out of the AWS platform. He's also an APN (AWS Partner Network) Cloud Warrior.</p>
              <p>He published the online video course The Serverless Framework: Build a Chatbot course on ACloud.Guru and is the co-author of the AWS Administration Cookbook. Aside from blogging and commenting on the Serverless Framework Forum, Rowan has spoken at local events like the AWS Summit Sydney, Serverless Sydney, and the AWS Sydney User Group.</p>
            </div>
          </div>

          <div className={styles.personWrapper}>
            <div className={styles.personImage}>
              <div className={styles.roundedImage}>
                <img src={`${imgBase}/2018/frank-schmid.jpg`} />
              </div>
              <span className={styles.personName}>
                <a href="frank-schmid/">Frank Schmid</a>
              </span>
              <span className={styles.personCompany}>
                Stashimi Inc.
              </span>
            </div>
            <div className={styles.personBio}>
              <p>It was in 1982 with a Commodore 64 (you remember that one?) when Frank discovered his passion for programming and computer technology (that time with Basic and machine language) at the age of 12.</p>
              <p>From then on his journey and passion continued steadily. All along this path the excitement and comprehension for different programming languages and architectures grew - and together with that, the eagerness to find out how to solve specific problems with the appropriate tools for the problems (languages and architectural patterns).</p>
              <p>At the age of 16 he sold his first application, after finishing school, began to study computer science at the University of Saarbrücken (Germany) just to be overwhelmed by his passion again after 4 years, quit University and founded his own company (network technologies and application development).</p>
              <p>Ten years later he joined Nero and worked there as software engineer, solution architect, team leader and finally as technical director just to join the then just founded startup Stashimi another ten years later where he now works as architect with a completely serverless based infrastructure.</p>
            </div>
          </div>

          <div className={styles.personWrapper}>
            <div className={styles.personImage}>
              <div className={styles.roundedImage}>
                <img src={`${imgBase}/2018/alex-casalboni.jpg`} />
              </div>
              <span className={styles.personName}>
                <a href="alex-casalboni/">Alex Casalboni</a>
              </span>
              <span className={styles.personCompany}>
                company inc.
              </span>
            </div>
            <div className={styles.personBio}>
              <p>Bio para here.</p>
              <p>Bio para here.</p>
            </div>
          </div>

          <div className={styles.personWrapper}>
            <div className={styles.personImage}>
              <div className={styles.roundedImage}>
                <img src={`${imgBase}/2017/horike.jpg`} />
              </div>
              <span className={styles.personName}>
                <a href="takahiro-horike/">Takahiro Horike</a>
              </span>
              <span className={styles.personCompany}>
                DigitalCube Co. Ltd
              </span>
            </div>
            <div className={styles.personBio}>
              <p>Takahiro Horike is Software Engineer at DigitalCube Co. Ltd. He's the author of Serverless Dashboard for Atom and Serverless Step Functions Plugin, and is a Serverless Framework core maintainer.</p>
            </div>
          </div>

          <div className={styles.personWrapper}>
            <div className={styles.personImage}>
              <div className={styles.roundedImage}>
                <img src={`${imgBase}/2017/marcia.jpg`} />
              </div>
              <span className={styles.personName}>
                <a href="marcia-villalba/">Marcia Villalba</a>
              </span>
              <span className={styles.personCompany}>
                Rovio
              </span>
            </div>
            <div className={styles.personBio}>
              <p>Marcia is a Senior Full-stack Developer from Uruguay, located in Finland. She has been designing and developing software professionally in companies like Rovio, IBM and Nokia for over 10 years.</p>
              <p>Marcia has broad experience building and scaling performant software, and knows a lot about how to architect for the public cloud. She's got a long history with AWS, and has been working with serverless technologies since not long after Lambda was released.</p>
              <p>In addition to being an engineering rockstar, she runs her own Youtube channel, in which she publishes at least one new video every week. In her channel, she focuses on teaching others how to use AWS serverless technologies and managed services. She is also an AWS Community Hero and runs the Finland AWS User Group.</p>
            </div>
          </div>

          <div className={styles.personWrapper}>
            <div className={styles.personImage}>
              <div className={styles.roundedImage}>
                <img src={`${imgBase}/2017/ryan-scott-brown.jpg`} />
              </div>
              <span className={styles.personName}>
                <a href="ryan-scott-brown/">Ryan Scott Brown</a>
              </span>
              <span className={styles.personCompany}>
                Ansible
              </span>
            </div>
            <div className={styles.personBio}>
              <p>Ryan has been building out cloud infrastructures since 2010, and currently focuses on automation tooling and Infrastructure-as-Code (IaC) practices. He's both a contributor and user of Ansible and the Serverless Framework, and loves building in the open as much as possible.</p>
              <p>Beginning with the Lambda developer preview, Ryan has built event-driven behaviors into infrastructure/deployment pipelines with Python and Lambda. Early on, he started sharing successes (and failed experiments) on ServerlessCode.com to help others and push for a common set of practices. One of those practices is the Serverless Framework: a common language spec for multiple providers to smooth the way from idea to implementation.</p>
            </div>
          </div>

        </div>
      </Default>
    )
  }
}
