import React, { Component } from 'react'
import Page from '../Page'
import Newsletter from '../../components/Newsletter/Newsletter'
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

          <Newsletter />
        </div>

        <section className={styles.content}>
          <h3 className={styles.center}>Overview</h3>
          <p>
            The <a href='https://www.github.com/serverless/serverless' target='_blank'>Serverless Framework</a> is an application framework for building web, mobile
            and IoT applications powered by <a href='https://aws.amazon.com/lambda/' target='_blank'>AWS Lambda,</a>
            <a href='https://aws.amazon.com/api-gateway/' target='_blank'>
              AWS API Gateway
            </a> and in the future other Function as a Service providers.
          </p>
          <p>
            A Serverless application can be a single Lambda function that responds to an event, or an entire
            REST API comprised of hundreds of Lambda functions and API Gateway endpoints. By plugging serverless functions into your infrastructure events you can even automate operations of your non function based infrastructure.
          </p>
          <p>
            The Framework itself is completely extensible. Every operation it does is implemented through plugins and you can easily replace or extend every plugin. We want every team to have an easy time to get started with Serverless, but be able to extend it to fulfill all your future needs.
          </p>
          <p>
            Serverless is built daily by a dedicated team backed by some of the most experienced Investors in the development tools space. Serverless also has a wonderful community building our open source tooling where everyone is welcome.  Join our
            <a href='https://gitter.im/serverless/serverless' target='_bank'>Gitter channel</a>,
            where we work on the project transparently, every day.
          </p>
          <p>
            To get started, view our Documentation:
          </p>
          <p className={styles.center}>
            <a href='http://docs.serverless.com' className={styles.btn}>
              View The Documentation
            </a>
            <a href='https://www.github.com/serverless/serverless' className={styles.btn}>
              View on Github
            </a>
          </p>
        </section>

      </Page>
    )
  }
}
