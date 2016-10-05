import React, { Component } from 'react'
import Header from '../../fragments/Header'
import Footer from '../../fragments/Footer'
import Helmet from 'react-helmet'
import styles from './index.css'

export default class PageLoading extends Component {

  render () {
    return (
      <div style={{height: '100vh'}}>
        <Helmet
          title={"Loading..."}
        />
        <Header />
        <div className={styles.loader}>
          <div className={styles.loadingWrapper}>
            <div className={styles.spinnerWrapper}>
              <div className={styles.spinner}></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
