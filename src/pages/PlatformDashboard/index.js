import React from 'react'
import { Link } from 'react-router'
import Default from '../../layouts/Default'
import styles from './../common.css'
import commonStyles from './../../fragments/common.css'
import UseCasesSection from '../../fragments/UseCasesSection'
import Features from './../../fragments/Features'
import PreFooter from './../../fragments/PreFooter'

import iconDashboard from '../../assets/images/icon-platform-dash.png'
import Illustration from '../../assets/images/dashboard-illustration.png'
import IllustrationPart1 from '../../assets/images/illustration-use-case-1.png'
import IllustrationPart2 from '../../assets/images/illustration-use-case-2.png'
import IllustrationPart3 from '../../assets/images/illustration-use-case-3.png'
import glitchDivider from '../../assets/images/glitch-divider.png'
import iconFeature1 from '../../assets/images/dashboard-feature-1.png'
import iconFeature2 from '../../assets/images/dashboard-feature-2.png'
import iconFeature3 from '../../assets/images/dashboard-feature-3.png'
import iconFeature4 from '../../assets/images/dashboard-feature-4.png'
import iconFeature5 from '../../assets/images/dashboard-feature-5.png'
import iconFeature6 from '../../assets/images/dashboard-feature-6.png'

class PlatformDashboardPage extends React.Component {
  renderPrefooter() {
    return  (
      <PreFooter
        heading='New to serverless?'
        descriptions={[
          'To get started, pop open your terminal & run:',
          'npm install serverless -g'
        ]}
        links={[
          { url: '/framework/docs', title: 'documentation' },
          { url: '/framework/docs/providers/aws/examples/', title: 'serverless example' },
          { url: 'https://github.com/serverless/serverless', title: 'github repo' }
        ]}
      />
    );
  }

  render() {
    return (
      <Default className={ `${commonStyles.body} ${commonStyles.newSite}` }
        {...this.props}
        fullWidth
        whiteLogo
        navbarInitialTransparency
        coloredHeader={ true }
        headerHideSignUp={ true }
        renderPrefooter={this.renderPrefooter}
      >
        <div className={ `${styles.dashboardBg} ${styles.platformInnerHero} ${styles.heroSectionWrapper}  ${commonStyles.newSite}` }>
          <div className={ `${styles.heroContainer} ${commonStyles.container}` }>
            <div className={ `${styles.heroPrimeImage}` }>
              <img src={iconDashboard} alt='Serverless Dashboard' />
            </div>
            <h2 className={ `${commonStyles.white} ${commonStyles.textCenter} ${commonStyles.medium}` }>
              serverless
            </h2>
            <h1 className={ `${commonStyles.white} ${commonStyles.textCenter} ${styles.medium}`}>
              dashboard
            </h1>
            <div className={ `${styles.heroDesc} ${styles.helfPad} ${commonStyles.textCenter}` }>
              Visualize, monitor & collaborate on serverless applications
            </div>
            <div className={ `${styles.heroContactWrapper} ${commonStyles.textCenter}` }>
              <a href='https://dashboard.serverless.com'
                target='_blank'
                className={ `${commonStyles.btn} ${commonStyles.btnPrimary} ${styles.btn}` }>
                sign up
              </a>
              <Link to='/enterprise'
                className={ `${commonStyles.btn} ${commonStyles.btnTransparent} ${styles.btn}` }>
                contact sales
              </Link>
            </div>
            <div className={ `${styles.heroPrimeImage} ${styles.heroMainImage}` }>
              <img src={Illustration} alt='Serverless Dashboard' />
            </div>
            <div className={`${styles.heroBulletsAlternate} ${commonStyles.padBottom0}`}>
              <div className={styles.heroBullets}>
                <span className={commonStyles.white}>Visualize Your Applications</span>
                <p>The Serverless Dashboard gives your team a shared overview of the functions, events, and subscriptions that make up your serverless application.</p>
              </div>
              <div className={styles.heroBullets}>
                <span className={commonStyles.white}>Streamline Development</span>
                <p>View your application logs and metrics from within the UI to ease debugging and increase velocity.</p>
              </div>
              <div className={styles.heroBullets}>
                <span className={commonStyles.white}>Collaborate & Manage Access</span>
                <p>Control your security and compliance needs by managing which team members have access to which cloud resources.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.whiteSectionWrapper} ${commonStyles.newSite} ${styles.noMobileBottom}`}>
          <div className={`${styles.whiteSectionContainer} ${commonStyles.container}`}>
            <UseCasesSection
              title='Serverless Dashboard Use Cases'
              description='These are the 3 main use cases for the Serverless Dashboard that you should know about.'
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

        <div className={styles.sectionSeperator}>
          <img src={glitchDivider} />
        </div>

        <div className={`${styles.footerPrevPad} ${styles.whiteSectionWrapper} ${commonStyles.newSite}`}>
          <div className={`${styles.whiteSectionContainer} ${commonStyles.container}`}>
            <Features features={[
              {
                title: 'Architecture Visualization',
                description: 'Let your team share the functions, events, and subscriptions that make up your serverless application.',
                image: iconFeature1
              },
              {
                title: 'Easy Logs',
                description: 'Access logs from within the dashboard, making it easier to debug and deploy your serverless applications.',
                image: iconFeature2
              },
              {
                title: 'User Access Control',
                description: 'Manage which team members have access to which cloud resources, making security and compliance for serverless seamless.',
                image: iconFeature3
              },
              {
                title: 'Application Metrics',
                description: 'View all vital serverless application metrics in one place, making serverless operations simple and intuitive.',
                image: iconFeature4
              },
              {
                title: 'Streaming Events',
                description: 'Data streams in your application become events. Centralize events from any cloud provider to get a birdâ€™s eye view of all the data flowing through your cloud.',
                image: iconFeature5
              },
              {
                title: 'Audit Logs',
                description: 'View and manage key operations events, such as deployments, in one single place for all your serverless applications.',
                image: iconFeature6
              }
            ]} />
          </div>
        </div>
      </Default>
    )
  }
}

PlatformDashboardPage.hasLoadingState = true

export default PlatformDashboardPage
