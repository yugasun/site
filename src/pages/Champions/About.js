import React from 'react'
import Default from '../../layouts/Default'
import Button from '../../components/Button'
import Separator from '../../components/Separator'
import styles from './About.css'

const imgBase = `${process.env.S3_BUCKET}images/champions`

export default class ChampionsAbout extends React.Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <Default {...this.props} fullWidth>
        <div className={styles.wrapper}>
          <div className={styles.opacity} />
          <div className={styles.lion} />

          <div className={styles.content}>
            <h1>Serverless Champions Program</h1>

            <div className={styles.intro}>
              <p>
                At Serverless, we value open source. We are incredibly proud of the way the Serverless community steps up to the plate on a daily basis to contribute to the project and help guide newcomers.
              </p>
              <p>
                To recognize our community superstars, we established The Serverless Champions program.
              </p>
            </div>

            <div className={styles.listWrapper}>
              <h2 className={styles.sectionTitle}>
                What does it take to become a  Serverless Champion?
              </h2>
              <div className={styles.list}>
                <span>Our Serverless Champions are:</span>
                <ul>
                  <li>Heroes in the serverless community</li>
                  <li>Big evangelists of Serverless projects</li>
                  <li>Thought leaders in an enterprise cheering serverless</li>
                  <li>Major contributors to open-source serverless projects</li>
                  <li>Proactive at answering community questions and resolving issues</li>
                  <li>Speakers at serverless conferences and meetups</li>
                  <li>Builders of serverless projects, and teachers for those who are learning</li>
                </ul>
              </div>
            </div>

            <Separator margin={30} />

            <div className={styles.perksSection}>

              <h3>Nominated members receive:</h3>

              <div className={styles.perksRow}>
                <div className={styles.perk}>
                  <img src={`${imgBase}/shwag.svg`} />
                  <div>Limited-edition t-shirt and jacket with Serverless Champion insignia</div>
                </div>
                <div className={styles.perk}>
                  <img src={`${imgBase}/blog.svg`} />
                  <div>Special recognition post on the Serverless.com blog</div>
                </div>
                <div className={styles.perk}>
                  <img src={`${imgBase}/interview.svg`} />
                  <div>Showcase on the Serverless Champions page with exclusive interview</div>
                </div>
              </div>

              <div className={styles.perksRow}>
                <div className={styles.perk}>
                  <img src={`${imgBase}/badge.svg`} />
                  <div>Serverless Champion sticker and digital badges</div>
                </div>
                <div className={styles.perk}>
                  <img src={`${imgBase}/slack.svg`} />
                  <div>Invitation to the Serverless Champions Slack channel</div>
                </div>
                <div className={styles.perk}>
                  <img src={`${imgBase}/vip.svg`} />
                  <div>Early product announcements and invitations to alpha/beta releases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Default>
    )
  }
}
