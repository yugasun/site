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
            <p></p>
          </div>

          <h4>How did you get into serverless computing in general? Can you reflect upon your serverless journey over the years?</h4>
          <div>
            <p></p>
          </div>

          <h4>You have been a contributor and an evangelist for the Serverless Framework for a long time. When did you start using the Serverless Framework?</h4>
          <div>
            <p></p>
          </div>

          <h4>Talk about a service or an application that satisfactorily made you believe that serverless architectures is the way to go. What did you learn from that experience and what do you think is the biggest challenge in developing serverless applications today?</h4>
          <div>
            <p></p>
          </div>

          <h4>Which cloud provider do you deploy to the most? Have you used multiple cloud providers? What is the top item on your wishlist for your cloud provider of choice?</h4>
          <div>
            <p></p>
          </div>

          <h4>What are your views on the maturity of tooling, observability, service ecosystem and developer experience in the serverless space today?</h4>
          <div>
            <p></p>
          </div>

          <h4>What are your thoughts on what is keeping serverless architectures to be adopted widely by organizations?</h4>
          <div>
            <p></p>
          </div>

          <h4>You are embedded in the serverless community and we love it. What is the most asked question you get from developers?</h4>
          <div>
            <p></p>
          </div>

        </div>
      </Default>
    )
  }
}
