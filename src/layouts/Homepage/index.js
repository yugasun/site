import React, { Component } from 'react'
import Page from '../Page'
import styles from './Homepage.css'

export default class Homepage extends Component {

  render () {
    return (
      <Page {...this.props} fullWidth>
        <div className={styles.wrapper}>
          <div className={styles.tagline}>
            <h1 className={styles.heading}>The Serverless Application </h1>
            <h2 className={styles.subHeading}>
              Framework
              <span className={styles.ampersand}>
                &
              </span>
                Ecosystem
            </h2>
          </div>
          <video className={styles.video} autoPlay loop poster='http://serverless.com/images/video_poster.png'>
            <source
              src='http://serverless.com/video/serverless_framework_intro_v2.mp4' type='video/mp4'
            />
              Your browser does not support the video tag.
          </video>

        </div>
      </Page>
    )
  }
}
