import React from 'react'
import Default from '../../layouts/Default'
import Button from '../../components/Button'
import styles from './WebinarPage.css'

const imgBase = `${process.env.S3_BUCKET}images/webinars`
const webinarRegUrl = 'https://attendee.gotowebinar.com/register/1509032821037135873?utm_source=sls_website&utm_campaign=webinar'

export default class WebinarPage extends React.Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <Default {...this.props}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div>
            <h1>Join us for a live webinar session on Serverless Security</h1>
            <h3>Tuesday, June 19th, 2018 at 9:30am PDT / 12:30 pm EDT</h3>
            <p>
              Serverless architectures is the next wave of cloud computing. While everyone is excited about the potential of serverless computing, there are many considerations in developer tooling and evolving areas of security, observability, monitoring, debugging, logging and auditing. Especially in the area of security, there are a lot of loose ends that need to be addressed.
            </p>
            <ul>
              <li>What are the security challenges that organizations are facing when migrating or adopting serverless?</li>
              <li>How is security stack different from the traditional architectures?</li>
              <li>How does security compliance factor in?</li>
              <li>What security measures need to enforced above and beyond the cloud provider?</li>
              <li>Does security impact performance?</li>
            </ul>
            <p>
              Join us for an hour of discussion with <strong>Rupak Ganguly, Serverless Inc.</strong> and <strong>Ory Segal, PureSec</strong>, delving into the ever challenging path to serverless security. We will talk about the concerns, the challenges, and the mindset while thinking about security for serverless architectures.
            </p>
            <div className={styles.registerButton}>
              <Button kind='red' href={`${webinarRegUrl}`} target='_blank'>
                Register
              </Button>
            </div>
          </div>
          <h2 className={styles.center}>Speakers</h2>
          <div className={styles.speakerBio}>
            <img src={`${imgBase}/rupak_oval.png`} className={styles.speakerPicLeft}/>
            <div className={styles.speakerText}>
              <strong>Rupak Ganguly</strong> is an Enterprise Advocate at Serverless Inc. He strives to take the excitement around serverless into the enterprises. He actively works with the community, developers & thought leaders. He writes articles, hosts webinars, runs workshops and speaks at meetups and conferences.
            </div>
          </div>
          <div className={styles.speakerBio}>
            <img src={`${imgBase}/ory_oval.png`} className={styles.speakerPicRight} />
            <div className={styles.speakerText}>
              <strong>Ory Segal</strong> is the CTO & Co-founder of PureSec. He is a world-renowned expert and veteran in application security with 20 years of experience. Prior to joining PureSec, Ory was Senior Director of Threat Research at Akamai.
            Ory holds numerous patents in the field of application security. He serves as an officer of the Web Application Security Consortium (WASC), and is a former OWASP (IL) board member. He participated in many projects and working groups including SANS Top 25, MITRE CWE and W3C WebAppSec Working Group.
            </div>
          </div>
        </div>
      </div>
      </Default>
    )
  }
}
