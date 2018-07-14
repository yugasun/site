import React from 'react'
import { Link } from 'react-router'
import Default from '../../layouts/Default'
import styles from './styles.css'
import Glitch from '../../components/Glitch'
import PreFooter from '../../fragments/PreFooter'

import iconDashboard from '../../assets/images/icon-dashboard.png';
import Illustration from '../../assets/images/illustration-platform-dash.png';
import IllustrationPart1 from '../../assets/images/illustration-use-case-1.png';
import IllustrationPart2 from '../../assets/images/illustration-use-case-2.png';
import IllustrationPart3 from '../../assets/images/illustration-use-case-3.png';

const baseUrl = process.env.S3_BUCKET

const EventGatewayPage = (props) => {

  return (
    <Default className={ styles.page } {...props} fullWidth whiteLogo coloredHeader={ true } headerHideSignUp={ true }>
      <div className={ `${styles.platformDashboardBg} ${styles.platformInnerHero} ${styles.heroSectionWrapper}` }>
        <div className={ `${styles.heroContainer} ${styles.container}` }>
          <div className={ styles.heroPrimeImage }>
            <img src={iconDashboard} alt="" />
          </div>
          <h2 className={ `${styles.white} ${styles.textCenter}` }>
            serverless
          </h2>
          <h1 className={ `${styles.white} ${styles.textCenter} `}>
            dashboard
          </h1>
          <div className={ `${styles.heroDesc} ${styles.textCenter}` }>
            Visualize, monitor & collaborate on serverless applications
          </div>
          <div className={ `${styles.heroContactWrapper} ${styles.textCenter}` }>
            <a className={ `${styles.btn} ${styles.btnPrimary}` }>sign up</a>
            <a className={ `${styles.btn} ${styles.btnTransparent}` }>contact sales</a>
          </div>
          <div className={ styles.heroPrimeImage }>
            <img src={Illustration} alt="" />
          </div>
          <div className={styles.heroBulletsAlternate}>
            <div className={styles.heroBullets}>
              <h3 className={styles.white}>Visualize Your Applications</h3>
              <p>The Serverless Dashboard gives your team a shared overview of the functions, events, and subscriptions that make up your serverless application.</p>
            </div>
            <div className={styles.heroBullets}>
              <h3 className={styles.white}>Streamline Development</h3>
              <p>View your application logs and metrics from within the UI to ease debugging and increase velocity.</p>
            </div>
            <div className={styles.heroBullets}>
              <h3 className={styles.white}>Collaborate & Manage Access</h3>
              <p>Control your security and compliance needs by managing which team members have access to which cloud resources.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.whiteSectionWrapper}>
        <div className={`${styles.whiteSectionContainer} ${styles.container}`}>
          <div className={styles.useCasesWrapper}>
            <div className={styles.useCasesIntro}>
              <h2 className={styles.textCenter}>Serverless Dashboard Use Cases</h2>
              <p className={styles.textCenter}>These are the 3 main use cases for the Serverless Dashboard that you should know about.</p>
            </div>
            <div className={styles.usesCasesListWrapper}>
              <div className={styles.useCaseItem}>
              <div className={styles.useCaseDetail}>
                  <h3>Onboarding new team members</h3>
                  <div className={styles.info}>
                  <p>The Serverless Dashboard makes onboarding new team members easy, quick, and secure. Architecture visualizions help them get up to speed on your applications, sandbox accounts provide them a safe learning enviroment, and user access controls allow for a secure experience.</p>
                  </div>
                  <div className={styles.btnWrapper}>
                    <a className={ `${styles.btn} ${styles.btnPrimary}` }>view example</a>
                  </div>
              </div>
                <div className={styles.useCaseImage}>
                  <img src={IllustrationPart1} alt="" />
                </div>
              </div>
              <div className={styles.useCaseItem}>
                <div className={styles.useCaseDetail}>
                  <h3>Operating at scale</h3>
                  <div className={styles.info}>
                    <p>The Serverless Dashboard provides the tools you need to build, deploy, and operate Servleress applications at scale. Logging, metrics, and deep observability help you accomplish more with serverless technology.</p>
                  </div>
                  <div className={styles.btnWrapper}>
                    <a className={ `${styles.btn} ${styles.btnPrimary}` }>view example</a>
                  </div>
              </div>
                <div className={styles.useCaseImage}>
                  <img src={IllustrationPart2} alt="" />
                </div>
              </div>
              <div className={styles.useCaseItem}>
              <div className={styles.useCaseDetail}>
                  <h3>Operate applications, not infrastructure </h3>
                  <div className={styles.info}>
                  <p>TThe Serverless Dashboard provides an operations experience that is centered on applications, not on infrastrucutre. Regardless of their cloud experience, any developer will have the power to manage and operate serverless applications from development to production. </p>
                  </div>
                  <div className={styles.btnWrapper}>
                    <a className={ `${styles.btn} ${styles.btnPrimary}` }>view example</a>
                  </div>
              </div>
                <div className={styles.useCaseImage}>
                  <img src={IllustrationPart3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Default>
  )
}

EventGatewayPage.hasLoadingState = true

export default EventGatewayPage
