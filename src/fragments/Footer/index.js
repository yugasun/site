import React, { Component } from 'react'

import commonStyles from './../common.css';
import styles from './index.css'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={`${styles.footerContainer} ${commonStyles.container}`}>
          <div className={styles.footerHighlight}>
            <div className={styles.fhighText}>
              <h2 className={commonStyles.white}>Next Steps</h2>
              <p className={commonStyles.white}>Check out all the different use cases for serverless applications. Take a peek at how the Serverless Framework compares to other software.</p>
              <p className={commonStyles.white}>Or if you're ready, follow our step-by-step guide to start building a Serverless Application with your favorite language.</p>
            </div>
            <div className={styles.fhighLinks}>
              <ul>
                <li>
                  <a className={`${commonStyles.btn} ${styles.btn} ${commonStyles.btnTransparentWhite}`}>
                    use cases
                  </a>
                </li>
                <li>
                  <a className={`${commonStyles.btn} ${styles.btn} ${commonStyles.btnTransparentWhite}`}>
                    comparisions
                  </a>
                </li>
                <li>
                  <a className={`${commonStyles.btn} ${styles.btn} ${commonStyles.btnTransparentWhite}`}>
                    case studies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerLogo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.footerBottomWrapper}>
            <div className={styles.footerNavWrapper}>
              <div className={styles.listWrapper}>
                <div className={styles.footerList}>
                  <h4>platform</h4>
                  <ul>
                    <li><a>framework</a></li>
                    <li><a>dashboard</a></li>
                    <li><a>event gateway</a></li>
                    <li><a>enterprise</a></li>
                  </ul>
                </div>
                <div className={styles.footerList}>
                  <h4>developers</h4>
                  <ul>
                    <li><a>docs</a></li>
                    <li><a>quick starts</a></li>
                    <li><a>examples & guides</a></li>
                  </ul>
                </div>
                <div className={styles.footerList}>
                  <h4>learn</h4>
                  <ul>
                    <li><a>why?</a></li>
                    <li><a>use cases</a></li>
                    <li><a>comparisions</a></li>
                    <li><a>case studies</a></li>
                  </ul>
                </div>
                <div className={styles.footerList}>
                  <h4>resources</h4>
                  <ul>
                    <li><a>blog</a></li>
                    <li><a>forum</a></li>
                    <li><a>meetups</a></li>
                    <li><a>slack</a></li>
                    <li><a>workshops</a></li>
                  </ul>
                </div>
                <div className={styles.footerList}>
                  <h4>company</h4>
                  <ul>
                    <li><a>jobs</a></li>
                    <li><a>campions</a></li>
                    <li><a>contact</a></li>
                  </ul>
                </div>
              </div>
              <div className={styles.madeWithText}>
                <p>Made with love in San Francisco + Atlanta, Austria, Germany, Pakistan, Poland, Nebraska & Thailand</p>
              </div>
              <div className={styles.copyrightWrapper}>
                <div className={styles.text}>
                  <p>Serverless, Inc. &copy; 2018</p>
                </div>
                <ul className={styles.policyNav}>
                  <li><a>terms of service</a></li>
                  <li><a>privacy policy</a></li>
                </ul>
              </div>
            </div>
            <div className={styles.footerSocialWrapper}>
              <p>
                Join our newsletter and get the latest news about Serverless products and happenings. #noSpamWePromise
              </p>
              <div className={styles.newsLetterWrapper}>
                <form className={styles.subscribeForm} action="">
                  <input className={styles.greyTextbox} type="text" placeholder="email address" />
                  <button className={`${commonStyles.btn} ${styles.btn} ${commonStyles.btnPrimary}`} type="submit">submit</button>
                </form>
              </div>
              <div className={styles.socialNavWrapper}>
                <ul className={styles.socialNav}>
                  <li><a><img src={facebook} alt="" /></a></li>
                  <li><a><img src={instagram} alt="" /></a></li>
                  <li><a><img src={twitter} alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
