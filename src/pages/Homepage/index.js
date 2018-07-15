import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router';
import Default from '../../layouts/Default'
import styles from './Homepage.css'
import commonStyles from './../../fragments/common.css';

import Testimonial from '../../fragments/Testimonial'
import bolt from '../../assets/images/bolt.png'
import iconDashboard from '../../assets/images/icon-dashboard.png'
import group6 from '../../assets/images/group-6.png'

import gcp from '../../assets/images/gcp.png'
import azure from '../../assets/images/azure.png'
import aws from '../../assets/images/aws.png'
import ibm from '../../assets/images/ibm.png'
import kubernetes from '../../assets/images/kubernetes.png'

import vol from '../../assets/images/icon-vol.png'
import graph from '../../assets/images/icon-graph.png'
import dash from '../../assets/images/icon-dash.png'

import illustration1 from '../../assets/images/illustration-1.png'
import illustration2 from '../../assets/images/illustration-2.png'
import illustration3 from '../../assets/images/illustration-3.png'

import ea from '../../assets/images/ea-logo.png'
import cocacolaLogo from '../../assets/images/cocacola-logo.png'
import nordstrom from '../../assets/images/nordstrom-logo.png'
import expedia from '../../assets/images/expedia-logo.png'
import reuters from '../../assets/images/reuters-logo.png'

export default class Homepage extends Component {
  static propTypes = {
    phenomicLoading: PropTypes.bool
  }
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <Default fullWidth className={commonStyles.body}>
    <div className={`${styles.platformBg} ${styles.heroSectionWrapper}`}>
      <div className={`${styles.heroContainer} ${commonStyles.container}`}>
        <h2 className={`${commonStyles.white} ${commonStyles.textCenter}`}>serverless</h2>
        <h1 className={`${commonStyles.white} ${commonStyles.textCenter}`}>platform</h1>
        <div className={`${styles.heroDesc} ${commonStyles.textCenter}`}>
          Everything you need to operationalize serverless development
        </div>
        <div className={styles.heroBulletsWrapper}>
          <div className={styles.heroBullets}>
            <a>
              <figure>
                <img src={bolt} alt='' />
              </figure>
              <h4 className={commonStyles.white}>serverless</h4>
              <h3 className={commonStyles.white}>famework</h3>
            </a>
          </div>
          <div className={styles.heroBullets}>
            <a>
              <figure>
                <img src={iconDashboard} alt='' />
              </figure>
              <h4 className={commonStyles.white}>serverless</h4>
              <h3 className={commonStyles.white}>dashboard</h3>
            </a>
          </div>
          <div className={styles.heroBullets}>
            <a>
              <figure>
                <img src={group6} alt='' />
              </figure>
              <h4 className={commonStyles.white}>serverless</h4>
              <h3 className={commonStyles.white}>gateway</h3>
            </a>
          </div>
        </div>
        <div className={`${styles.heroContactWrapper} ${commonStyles.textCenter}`}>
          <a href="https://dashboard.serverless.com"
            target='_blank'
            className={`${commonStyles.btn} ${commonStyles.btnPrimary} ${styles.btn}`}>
            sign up
          </a>
          &nbsp;
          <Link to={''}
            className={`${commonStyles.btn} ${commonStyles.btnTransparent} ${styles.btn}`}>
            contact sales
          </Link>
        </div>
        <div className={styles.heroClientsWrapper}>
          <p className={commonStyles.textCenter}>
            Build serverless applications using serverless functions and infrastructure on any platform
          </p>
          <ul className={styles.clientList}>
            <li><img src={gcp} alt='' /></li>
            <li><img src={azure} alt='' /></li>
            <li><img src={aws} alt='' /></li>
            <li><img src={ibm} alt='' /></li>
            <li><img src={kubernetes} alt='' /></li>
          </ul>
        </div>
      </div>
    </div>


    <div className={styles.whiteSectionWrapper}>
      <div className={`${styles.whiteSectionContainer} ${commonStyles.container}`}>
        <div className={styles.sectionHighlight}>
          <div>Build more, manage less.</div>
          <div>Serverless lets you focus on driving business value.</div>
        </div>
        <h3>The benefits of serverless technology</h3>
        <div className={`${styles.benifitsBulletsWrapper} ${styles.bulletsWrapper}`}>
          <ul>
            <li>
              <img src={vol} alt="" />
              <h4>Automatic Scaling</h4>
              <p>Forget about provisioning & managing your server fleet. Serverless applications scale with demand.</p>
            </li>
            <li>
              <img src={graph} alt="" />
              <h4>Pay-per execution</h4>
              <p>Never pay for idle. Serverless applications charge you only when they run the service.</p>
            </li>
            <li>
              <img src={dash} alt="" />
              <h4>Low Overhead</h4>
              <p>Serverless teams prototype faster, get to market faster, and spend more time working on new ideas.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Testimonial></Testimonial>


  <div className={styles.whiteSectionWrapper}>
      <div className={`${styles.whiteSectionContainer} ${commonStyles.container}`}>
        <div className={`${styles.sectionHighlight} ${styles.width90} ${styles.padBtm}`}>
          <div>Serverless Platform empowers developers to build & deploy serverless applications, on any provider.</div>
        </div>
        <div className={`${styles.serverlessBulletsWrapper} ${styles.bulletsWrapper}`}>
          <ul>
            <li>
              <figure>
                <img src={illustration1} alt="" />
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
                <img src={illustration3} alt="" />
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
                <img src={illustration2} alt="" />
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


    <div className={`${styles.clientsWrapper} ${styles.footerPrevPad} ${styles.patternSectionWrapper}`}>
      <div className={`${styles.clientContainer} ${commonStyles.container}`}>
        <h4>Serverless Platform is trusted by</h4>
        <ul className={styles.clientList}>
          <li><img src={ea} alt="" /></li>
          <li><img src={cocacolaLogo} alt="" /></li>
          <li><img src={nordstrom} alt="" /></li>
          <li><img src={expedia} alt="" /></li>
          <li><img src={reuters}  alt="" /></li>
        </ul>
      </div>
    </div>
      </Default>
    )
  }
}
