import React from 'react'
import { Link } from 'react-router'
import Default from '../../layouts/Default'
import styles from './styles.css'
import Glitch from '../../components/Glitch'
import PreFooter from '../../fragments/PreFooter'

import iconDashboard from '../../assets/images/icon-dashboard.png';
import platformDashboardIllustration from '../../assets/images/illustration-platform-dash.png';

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
            <img src={platformDashboardIllustration} alt="" />
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
    </Default>
  )
}

EventGatewayPage.hasLoadingState = true

export default EventGatewayPage
