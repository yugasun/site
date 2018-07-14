import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './index.css'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

export default class Footer extends Component {
  render() {
    const year = new Date().getFullYear()

    return (
      <footer className={styles.footer}>
            <div className={`${styles.footerContainer} ${styles.container}`}>
        
        <div className={styles.footerLogo}><img src={logo} alt='' /></div>
        <div className={styles.footerBottomWrapper}>
          <div className={styles.footerNavWrapper}>
            <div className={styles.listWrapper}>
              <div className={styles.footerList}>
                <h4>platform</h4>
                <ul>
                  <li><a href=''>framework</a></li>
                  <li><a href=''>dashboard</a></li>
                  <li><a href=''>event gateway</a></li>
                  <li><a href=''>enterprise</a></li>
                </ul>  
              </div>
              <div className={styles.footerList}>
                <h4>developers</h4>
                <ul>
                  <li><a href=''>docs</a></li>
                  <li><a href=''>quick starts</a></li>
                  <li><a href=''>examples & guides</a></li>
                </ul>  
              </div>
              <div className={styles.footerList}>
                <h4>learn</h4>
                <ul>
                  <li><a href=''>why?</a></li>
                  <li><a href=''>use cases</a></li>
                  <li><a href=''>comparisions</a></li>
                  <li><a href=''>case studies</a></li>
                </ul>  
              </div>
              <div className={styles.footerList}>
                <h4>resources</h4>
                <ul>
                  <li><a href=''>blog</a></li>
                  <li><a href=''>forum</a></li>
                  <li><a href=''>meetups</a></li>
                  <li><a href=''>slack</a></li>
                  <li><a href=''>workshops</a></li>
                </ul>  
              </div>
              <div className={styles.footerList}>
                <h4>company</h4>
                <ul>
                  <li><a href=''>jobs</a></li>
                  <li><a href=''>campions</a></li>
                  <li><a href=''>contact</a></li>
                </ul>  
              </div>
            </div>
            <div className={styles.madeWithText}>
              <p>Made with love in San Francisco + Atlanta, Austria, Germany, Pakistan, Poland, Nebraska & Thailand</p>
            </div>
            <div className={styles.copyrightWrapper}>
              <div className={styles.text}><p>Serverless, Inc. &copy; 2018</p></div>
              <ul className={styles.policyNav}>
                <li><a href=''>terms of service</a></li>
                <li><a href=''>privacy policy</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerSocialWrapper}>
            <p>
              Join our newsletter and get the latest news about Serverless products and happenings. #noSpamWePromise
            </p>
            <div className={styles.newsLetterWrapper}>
              <form className={styles.subscribeForm} action=''>
                <input className={styles.greyTextbox} type='text' placeholder='email address' />
                <button className={`${styles.btn} ${styles.btnPrimary}`} type='submit'>sign up</button>
              </form>
            </div>
            <div className={styles.socialNavWrapper}>
              <ul className={styles.socialNav}>
                <li><a href=''><img src={facebook} alt='' /></a></li>
                <li><a href=''><img src={instagram} alt='' /></a></li>
                <li><a href=''><img src={twitter} alt='' /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </footer>
    )
  }
}
