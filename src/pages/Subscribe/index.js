/**
 * Subscribe page template
 */
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Newsletter from '../../fragments/Newsletter'
import styles from './index.css'

export default class SubscribePage extends Component {
  static hasLoadingState = true
  render() {
    return (
      <div className={styles.container}>
        <Helmet title={'Serverless Subscribe'} />
        <div className={styles.inner} >
          <div className={styles.hero}>
            <h1>Subscribe for Serverless Updates</h1>
            <div className={styles.sub}>
              <Newsletter className={styles.strip} buttonText={'Get Updates'} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
