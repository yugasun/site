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
                  <p>It was in 1982 with a Commodore 64 (you remember that one?) when Frank discovered his passion for programming and computer technology (that time with Basic and machine language) at the age of 12.</p>
                  <p>From then on his journey and passion continued steadily. All along this path the excitement and comprehension for different programming languages and architectures grew - and together with that, the eagerness to find out how to solve specific problems with the appropriate tools for the problems (languages and architectural patterns).</p>
                  <p>At the age of 16 he sold his first application, after finishing school, began to study computer science at the University of Saarbrücken (Germany) just to be overwhelmed by his passion again after 4 years, quit University and founded his own company (network technologies and application development).</p>
                  <p>Ten years later he joined Nero and worked there as software engineer, solution architect, team leader and finally as technical director just to join the then just founded startup Stashimi another ten years later where he now works as architect with a completely serverless based infrastructure.</p>
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
