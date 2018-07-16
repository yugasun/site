import React, { Component } from 'react'
import { Link } from 'react-router'

import commonStyles from './../common.css'
import styles from './index.css'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className={ `${this.props.renderPrefooter ? styles.withPreFooter : ''} ${commonStyles.newSite}` }>
        <div className={`${styles.footerContainer} ${commonStyles.container}`}>
          { this.props.renderPrefooter ? this.props.renderPrefooter() : null }
          <div className={styles.footerLogo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.footerBottomWrapper}>
            <div className={styles.footerNavWrapper}>
              <div className={styles.listWrapper}>
                <div className={styles.footerList}>
                  <h4>platform</h4>
                  <ul>
                    <li>
                      <Link to='/framework/'>framework</Link>
                    </li>
                    <li>
                      <Link to='/dashboard/'>dashboard</Link>
                    </li>
                    <li>
                      <Link to='/event-gateway/'>event gateway</Link>
                    </li>
                    <li>
                      <Link to='/enterprise/'>enterprise</Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.footerList}>
                  <h4>developers</h4>
                  <ul>
                    <li>
                      <Link to='/framework/docs/'>docs</Link>
                    </li>
                    <li>
                      <Link to='/framework/docs/getting-started/'>quick starts</Link>
                    </li>
                    <li>
                      <Link to='/framework/docs/providers/aws/examples/'>examples & guides</Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.footerList}>
                  <h4>learn</h4>
                  <ul>
                    <li>
                      <Link to='/'>why?</Link>
                    </li>
                    <li>
                      <Link to='/'>use cases</Link>
                    </li>
                    <li>
                      <Link to='/'>comparisions</Link>
                    </li>
                    <li>
                      <Link to='/'>case studies</Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.footerList}>
                  <h4>resources</h4>
                  <ul>
                    <li>
                      <Link to='/blog/'>blog</Link>
                    </li>
                    <li>
                      <a href='https://forum.serverless.com' target='_blank'>forum</a>
                    </li>
                    <li>
                      <Link to='/community/meetups/'>meetups</Link>
                    </li>
                    <li>
                      <a href='https://join.slack.com/t/serverless-contrib/shared_invite/enQtMzgxMTkxMzIzNTU3LTY0OGZlYWI2OTI4YTliMWQ0YWNlZGZjMDhkNDAyZGQyZDYwMzYwMTlmNmVmMzMzNmI4YzAyNjg0ZjZkYTdmMzU'>slack</a>
                    </li>
                    <li>
                      <Link to='/workshops/'>workshops</Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.footerList}>
                  <h4>company</h4>
                  <ul>
                    <li>
                      <a href='https://jobs.lever.co/serverless' target='_blank'>
                        jobs
                      </a>
                    </li>
                    <li>
                      <Link to='/community/champions/'>champions</Link>
                    </li>
                    <li>
                      <Link to='/'>contact</Link>
                    </li>
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
                  <li><Link to='/'>terms of service</Link></li>
                  <li><Link to='/'>privacy policy</Link></li>
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
                  <li>
                    <a href='https://www.facebook.com/serverless/' target='_blank'>
                      <img src={facebook} alt='facebook' />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/serverlessinc/' target='_blank'>
                      <img src={instagram} alt='instagram' />
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/goserverless' target='_blank'>
                      <img src={twitter} alt='twitter' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
