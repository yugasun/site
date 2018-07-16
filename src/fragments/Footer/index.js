import React, { Component } from 'react'
import { Link } from 'react-router'

import commonStyles from './../common.css'
import styles from './index.css'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'


import axios from 'axios'
import { getItemSync, setItemSync } from '../../utils/storage'
const newsletterSubscribeAPI = process.env.API.NEWSLETTER
import track from '../../utils/analytics/track'

function validateEmail(value) {
  return /^([\w_\.\-\+])+@([\w\-]+\.)+([\w]{2,10})+$/.test(value)
}

export default class Footer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isSubscribed: getItemSync('newsletterSubscribed') === true,
      isFetching: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    const user = getItemSync('profile')
    if (user) {
      this.refs.email.value = user.email
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    if (this.state.isFetching) return
    const emailNode = this.refs.email
    const email = emailNode.value
    if (!validateEmail(email)) {
      alert('Woops! invalid email address') // eslint-disable-line
      return false
    }
    this.setState({
      isFetching: true,
      error: false
    })
    const that = this
    axios({
      method: 'post',
      url: newsletterSubscribeAPI,
      data: {
        email: email,
        name: ''
      },
    }).then((response) => {
      if (response && response.data && response.data.created) {
        console.info('Newsletter subscription creation succeed') // eslint-disable-line
        // Customer.io
        // https://segment.com/academy/collecting-data/naming-conventions-for-clean-data/
        track('site:newsletter_subscribed', {
          label: 'Newsletter Subscription',
          value: window.location.href
        })
        that.setState({
          isSubscribed: true,
          isFetching: false
        }, () => {
          // trigger callback
          emailNode.value = ''
        })
        setItemSync('newsletterSubscribed', true)
        that.container.innerHTML = '<p>Thank you for subscribing!</p>'
      } else {
        console.error('Newsletter subscription failed creation',
            (response && response.data && response.data.message) ? response.data.message : '')
      }
    }).catch((error) => {
      console.error(error) // eslint-disable-line
      that.setState({
        error: 'serviceDown'
      })
    })
  }
  render() {
    const { isFetching, error } = this.state
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
                      <Link to='/learn/'>why?</Link>
                    </li>
                    <li>
                      <Link to='/learn/use-cases/'>use cases</Link>
                    </li>
                    <li>
                      <Link to='/learn/comparisons'>comparisions</Link>
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
              <div className={styles.newsLetterWrapper} ref={container => this.container = container}>
                <form className={styles.subscribeForm} action="">
                  <input ref='email' className={styles.greyTextbox} type="text" placeholder="email address" />
                  <button
                    onClick={this.handleSubmit}
                    className={`${commonStyles.btn} ${styles.btn} ${commonStyles.btnPrimary}`}
                    type="submit"
                    disabled={isFetching}
                    >
                      {error ? 'Try Again' : 'sign up'}
                  </button>
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
