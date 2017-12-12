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
                <img src={`${imgBase}/2017/horike.jpg`} />
              </div>
              <span className={styles.personName}>
                Takahiro Horike
              </span>
              <span className={styles.personCompany}>
                DigitalCube Co. Ltd
              </span>
            </div>
            <div className={styles.personBio}>
              <p>Takahiro Horike is Software Engineer at DigitalCube Co. Ltd. He's the author of Serverless Dashboard for Atom and Serverless Step Functions Plugin, and Serverless Framework core maintainer.</p>
            </div>
          </div>

          <div className={styles.personWrapper}>
            <div className={styles.personImage}>
              <div className={styles.roundedImage}>
                <img src={`${imgBase}/2017/marcia.jpg`} />
              </div>
              <span className={styles.personName}>
                Marcia Villalba
              </span>
              <span className={styles.personCompany}>
                Rovio
              </span>
            </div>
            <div className={styles.personBio}>
              <p>Marcia is a Senior Full-stack Developer, from Uruguay located in Finland. She has been designing and developing software professionally in very renown companies for over 10 years such as Rovio, IBM, and Nokia.</p>
              <p>Marcia has a broad experience in all the different stages of building scaling and performant software. She has deep knowledge of the public cloud and architecting for it. She has been working with AWS for more many years and for almost two years mostly with serverless technologies.</p>
              <p>Marcia runs her own Youtube channel, in which she publishes at least one new video every week. In her channel, she focuses on teaching how to use AWS serverless technologies and managed services. She is also an AWS Community Hero and runs the Finland AWS User Group.</p>
            </div>
          </div>

          <div className={styles.personWrapper}>
            <div className={styles.personImage}>
              <div className={styles.roundedImage}>
                <img src={`${imgBase}/2017/ryan-scott-brown.jpg`} />
              </div>
              <span className={styles.personName}>
                Ryan Scott Brown
              </span>
              <span className={styles.personCompany}>
                Ansible
              </span>
            </div>
            <div className={styles.personBio}>
              <p>Ryan has been building out cloud infrastructures since 2010, and currently focuses on automation tooling and Infrastructure-as-Code practices. He's both a contributor and user of Ansible and the Serverless Framework, and loves building in the open as much as possible.</p>
            </div>
          </div>
        </div>
      </Default>
    )
  }
}
