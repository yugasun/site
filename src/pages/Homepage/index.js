import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router';
import Default from '../../layouts/Default'
import styles from './../common.css'
import commonStyles from './../../fragments/common.css';

import Testimonial from '../../fragments/Testimonial'
import bolt from '../../assets/images/bolt.png'
import iconDashboard from '../../assets/images/icon-dashboard.png'
import group6 from '../../assets/images/group-6.png'
import video from '../../assets/images/video.png'

import vol from '../../assets/images/icon-vol.png'
import graph from '../../assets/images/icon-graph.png'
import dash from '../../assets/images/icon-dash.png'

import illustration1 from '../../assets/images/illustration-1.png'
import illustration2 from '../../assets/images/illustration-2.png'
import illustration3 from '../../assets/images/illustration-3.png'

import TrustedClients from '../../fragments/TrustedClients';
import PreFooter from '../../fragments/PreFooter';

export default class Homepage extends Component {
  static propTypes = {
    phenomicLoading: PropTypes.bool
  }
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
    this.state = { show: true }
  }

  renderPrefooter() {
    return  (
      <PreFooter
        heading='Next Steps'
        descriptions={[
          'Check out all the different use cases for serverless applications. Take a peek at how the Serverless Framework compares to other software.',
          'Or if you\'re ready, follow our step-by-step guide to start building a Serverless Application with your favorite language.'
        ]}
        links={[
          { url: '/learn/use-cases/', title: 'use cases' },
          { url: '/learn/comparisons', title: 'comparisons' }
        ]}
      />
    );
  }


  // <div className={styles.heroClientsWrapper}>
  //   <ul className={styles.clientList}>
  //     <li><img src={gcp} alt='Google Cloud Provider' /></li>
  //     <li><img src={azure} alt='Microsoft Azure' /></li>
  //     <li><img src={aws} alt='Amazon Web Services' /></li>
  //     <li><img src={ibm} alt='IBM Open Whisk' /></li>
  //     <li><img src={kubernetes} alt='Kubernetes' /></li>
  //   </ul>
  // </div>

  render() {
    return (
      <Default
        {...this.props}
        fullWidth
        navbarInitialTransparency
        className={`${commonStyles.body} ${commonStyles.newSite}`}
        renderPrefooter={this.renderPrefooter}
      >
        <div className={`${styles.homeBg} ${styles.heroSectionWrapper} ${commonStyles.newSite}`}>
          <div className={`${styles.heroContainer} ${commonStyles.container}`}>
            <h2 className={`${commonStyles.white} ${commonStyles.textCenter}`}>serverless</h2>
            <h1 className={`${commonStyles.white} ${commonStyles.textCenter}`}>platform</h1>
            <div className={`${styles.heroDesc} ${commonStyles.textCenter}`}>
              Everything you need to operationalize serverless development
            </div>
            <div className={styles.heroBulletsWrapper}>
              <div className={styles.heroBullets}>
                <a href='/framework/'>
                  <figure>
                    <img src={bolt} alt='Serverless Framework' />
                  </figure>
                  <h4 className={commonStyles.white}>serverless</h4>
                  <h3 className={commonStyles.white}>framework</h3>
                </a>
              </div>
              <div className={styles.heroBullets}>
                <a href='/dashboard/'>
                  <figure>
                    <img src={iconDashboard} alt='Serverless Dashboard' />
                  </figure>
                  <h4 className={commonStyles.white}>serverless</h4>
                  <h3 className={commonStyles.white}>dashboard</h3>
                </a>
              </div>
              <div className={styles.heroBullets}>
                <a href='/event-gateway/'>
                  <figure>
                    <img src={group6} alt='Serverless Gateway' />
                  </figure>
                  <h4 className={commonStyles.white}>event</h4>
                  <h3 className={commonStyles.white}>gateway</h3>
                </a>
              </div>
            </div>
            <div className={`${styles.heroContactWrapper} ${commonStyles.textCenter}`}>
              <a href='https://serverless.com/framework/docs/getting-started/'
                target='_blank'
                className={`${commonStyles.btn} ${commonStyles.btnPrimary} ${styles.btn}`}>
                start with framework
              </a>
              <Link to='/enterprise'
                className={`${commonStyles.btn} ${commonStyles.btnTransparent} ${styles.btn}`}>
                enterprise demo
              </Link>
            </div>
            <Link
              className={styles.heroAnnouncementWrapper}
              to='/overview-video'>
              <img src={video} alt='serverless platform overview video' />
              watch the video to learn more
            </Link>
          </div>
        </div>

        <div className={`${styles.whiteSectionWrapper} ${styles.newSite}`}>
          <div className={`${styles.whiteSectionContainer} ${commonStyles.container}`}>
            <div className={styles.sectionHighlight}>
              <div>Build more, manage less.</div>
              <div>Serverless lets you focus on driving business value.</div>
            </div>
            <h3>The benefits of serverless technology</h3>
            <div className={`${styles.benifitsBulletsWrapper} ${styles.bulletsWrapper}`}>
              <ul>
                <li>
                  <img src={vol} alt='Automatic Scaling' />
                  <h4>Automatic Scaling</h4>
                  <p>Forget about provisioning & managing your server fleet. Serverless applications scale with demand.</p>
                </li>
                <li>
                  <img src={graph} alt='Pay per execution' />
                  <h4>Pay-per execution</h4>
                  <p>Never pay for idle. Serverless applications charge you only when they run the service.</p>
                </li>
                <li>
                  <img src={dash} alt='Low Overhead' />
                  <h4>Low Overhead</h4>
                  <p>Serverless teams prototype faster, get to market faster, and spend more time working on new ideas.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Testimonial></Testimonial>


        <div className={`${styles.whiteSectionWrapper} ${styles.newSite}`}>
          <div className={`${styles.whiteSectionContainer} ${commonStyles.container}`}>
            <div className={`${styles.sectionHighlight} ${styles.width90} ${styles.padBtm}`}>
              <div>Serverless Platform empowers developers to build & deploy serverless applications, on any provider.</div>
            </div>
            <div className={`${styles.serverlessBulletsWrapper} ${styles.bulletsWrapper}`}>
              <ul>
                <li>
                  <figure>
                    <img src={illustration1} alt='Vendor Agnostic' />
                  </figure>
                  <h4>Serverless Framework</h4>
                  <p>Build serverless applications quickly on any vendor.</p>
                  <Link to='/framework/'
                    className={`${commonStyles.btn} ${commonStyles.btnPrimary} ${styles.btn}`}>
                    learn more
                  </Link>
                </li>
                <li>
                  <figure>
                    <img src={illustration3} alt='Serverless Dashboard' />
                  </figure>
                  <h4>Serverless Dashboard</h4>
                  <p>Observe and monitor your functions in action.</p>
                  <Link to='/dashboard/'
                    className={`${commonStyles.btn} ${commonStyles.btnPrimary} ${styles.btn}`}>
                    learn more
                  </Link>
                </li>
                <li>
                  <figure>
                    <img src={illustration2} alt='Event Gateway' />
                  </figure>
                  <h4>Event Gateway</h4>
                  <p>Integrate serverless & legacy applications via event-driven extensibility.</p>
                  <Link to='/event-gateway/'
                    className={`${commonStyles.btn} ${commonStyles.btnPrimary} ${styles.btn}`}>
                    learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <TrustedClients />
      </Default>
    )
  }
}
