import React from 'react'
import { Link } from 'react-router'
import Default from '../../layouts/Default'
import styles from './styles.css'
import Glitch from '../../components/Glitch'
import PreFooter from '../../fragments/PreFooter'
import UseCasesSection from '../../fragments/UseCasesSection'

import iconDashboard from '../../assets/images/icon-dashboard.png';
import Illustration from '../../assets/images/illustration-platform-dash.png';
import IllustrationPart1 from '../../assets/images/illustration-use-case-1.png';
import IllustrationPart2 from '../../assets/images/illustration-use-case-2.png';
import IllustrationPart3 from '../../assets/images/illustration-use-case-3.png';
import iconFeature1 from '../../assets/images/icon-feature-1.png';
import iconFeature2 from '../../assets/images/icon-feature-2.png';
import iconFeature3 from '../../assets/images/icon-feature-3.png';
import iconFeature4 from '../../assets/images/icon-feature-4.png';
import iconFeature5 from '../../assets/images/icon-feature-5.png';
import iconFeature6 from '../../assets/images/icon-feature-6.png';

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
          <UseCasesSection
            title="Serverless Dashboard Use Cases"
            description="These are the 3 main use cases for the Serverless Dashboard that you should know about."
            usecases={[
              {
                title: 'Onboarding new team members',
                description: 'The Serverless Dashboard makes onboarding new team members easy, quick, and secure. Architecture visualizions help them get up to speed on your applications, sandbox accounts provide them a safe learning enviroment, and user access controls allow for a secure experience.',
                image: IllustrationPart1,
              },
              {
                title: 'Operating at scale',
                description: 'The Serverless Dashboard provides the tools you need to build, deploy, and operate Servleress applications at scale. Logging, metrics, and deep observability help you accomplish more with serverless technology.',
                image: IllustrationPart2,
              },
              {
                title: 'Operate applications, not infrastructure',
                description: 'The Serverless Dashboard provides an operations experience that is centered on applications, not on infrastrucutre. Regardless of their cloud experience, any developer will have the power to manage and operate serverless applications from development to production.',
                image: IllustrationPart3,
              },
            ]}
          />
        </div>
      </div>

      <div className={styles.greySectionSeperator}></div>
      <div className={`${styles.footerPrevPad} ${styles.whiteSectionWrapper}`}>
        <div className={`${styles.whiteSectionContainer} ${styles.container}`}>
          <div className={styles.featuresListWrapper}>
            <h2 className={styles.textCenter}>Features</h2>
            <ol className={styles.featureList}>
              <li>
                <figure>
                  <img src={iconFeature1} alt="" />
                </figure>
                <h3>Architecture Visualization</h3>
                <p>Let your team share the functions, events, and subscriptions that make up your serverless application.</p>
              </li>
              <li>
                <figure>
                  <img src={iconFeature2} alt="" />
                </figure>
                <h3>Easy Logs</h3>
                <p>Access logs from within the dashboard, making it easier to debug and deploy your serverless applications.</p>
              </li>
              <li>
                <figure>
                  <img src={iconFeature3} alt="" />
                </figure>
                <h3>User Access Control</h3>
                <p>Manage which team members have access to which cloud resources, making security and compliance for serverless seamless.</p>
              </li>
              <li>
                <figure>
                  <img src={iconFeature4} alt="" />
                </figure>
                <h3>Application Metrics</h3>
                <p>View all vital serverless application metrics in one place, making serverless operations simple and intuitive.</p>
              </li>
              <li>
                <figure>
                  <img src={iconFeature5} alt="" />
                </figure>
                <h3>Streaming Events</h3>
                <p>Data streams in your application become events. Centralize events from any cloud provider to get a bird’s eye view of all the data flowing through your cloud.</p>
              </li>
              <li>
                <figure>
                  <img src={iconFeature6} alt="" />
                </figure>
                <h3>Audit Logs</h3>
                <p>View and manage key operations events, such as deployments, in one single place for all your serverless applications.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={`${styles.footerContainer} ${styles.container}`}>
          <div className={`${styles.footerHighlight}`}>
            <div className={styles.fhighText}>
              <h2 className={styles.white}>Next Steps</h2>
              <p className={styles.white}>Check out all the different use cases for serverless applications. Take a peek at how the Serverless Framework compares to other software.</p>
              <p className={styles.white}>Or if you're ready, follow our step-by-step guide to start building a Serverless Application with your favorite language.</p>
            </div>
            <div className={styles.fhighLinks}>
              <ul>
                <li><a href='' className={`${styles.btn} ${styles.btnTransparentWhite}`}>use cases</a></li>
                <li><a href='' className={`${styles.btn} ${styles.btnTransparentWhite}`}>comparisions</a></li>
                <li><a href='' className={`${styles.btn} ${styles.btnTransparentWhite}`}>case studies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Default>
  )
}

EventGatewayPage.hasLoadingState = true

export default EventGatewayPage
