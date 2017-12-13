import React from 'react'
import Default from '../../../layouts/Default'
import Button from '../../../components/Button'
import styles from './Bio.css'

const imgBase = `${process.env.S3_BUCKET}images/champions`

export default class ChampionBiosRSB extends React.Component {
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
              <h1>Ryan Scott Brown</h1>
              <div className={styles.personWrapper}>
                <div className={styles.personImage}>
                  <div className={styles.roundedImage}>
                    <img src={`${imgBase}/2017/ryan-scott-brown.jpg`} />
                  </div>
                  <div className={styles.championLogo}>
                    <img src={`${imgBase}/champion_small.svg`} />
                  </div>
                  <span className={styles.personName}>
                    Ryan Scott Brown
                  </span>
                  <span className={styles.personCompany}>
                    Ansible
                  </span>
                  <div className={styles.personSocial}>
                    <a href="https://twitter.com/ryan_sb" target="_blank"><img src={`${imgBase}/twitter.svg`}/></a>
                    <img src={`${imgBase}/linkedin.svg`}/>
                    <a href="https://github.com/ryansb" target="_blank"><img src={`${imgBase}/Github.svg`}/></a>
                  </div>
                </div>
                <div className={styles.personBio}>
                  <p>Ryan has been building out cloud infrastructures since 2010, and currently focuses on automation tooling and Infrastructure-as-Code practices. He’s both a contributor and user of Ansible and the Serverless Framework, and loves building in the open as much as possible.</p>
                  <p>Beginning with the Lambda developer preview, Ryan has built event-driven behaviors into infrastructure/deployment pipelines with Python and Lambda. Early on, he started sharing successes (and failed experiments) on ServerlessCode.com to help others and push for a common set of practices. One of those practices is the Serverless Framework: a common language spec for multiple providers to smooth the way from idea to implementation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <h2>Interview with Ryan Scott Brown</h2>
          </div>
          <p>Coming soon!</p>
        </div>
      </Default>
    )
  }
}
