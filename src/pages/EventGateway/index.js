import React from 'react'
import { Link } from 'react-router'
import Default from '../../layouts/Default'
import styles from './EventGateway.css'

const EventGatewayPage = (props) => {
  return (
    <Default className={styles.page} {...props} fullWidth>
      <div className={styles.toolHero}>
        <div className={styles.boundSmaller}>
          <img className={styles.toolIcon} width={200} height={200} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/gateway.svg' />
          <h1 className={styles.toolTitle}>Event Gateway</h1>
          <p className={styles.toolDescription}>React to any event, with any function, on any provider. Serverless architectures can hop across the cloud.</p>
          <a className={`${styles.btn} ${styles.btnGrey}`} href='https://github.com/serverless/event-gateway'><img width={24} height={24} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/github-icon.svg' /> Github</a>
        </div>
      </div>
      <div className={styles.bound}>
        <div className={styles.sectionFeatures}>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>API gateway + pub/sub</h3>
            <p>A single piece of infrastructure for any type of serverless application.</p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Send events from any cloud</h3>
            <p>Data streams in your application become events. Centralize events from any cloud provider to get a bird’s eye view of all the data flowing through your cloud.</p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>React to cross-cloud events</h3>
            <p>You aren’t locked in to events and functions being on the same provider: Any event, on any cloud, can trigger any function. Set events and functions up like dominoes and watch them fall.</p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Extendable through middleware</h3>
            <p>Perform data transforms, authorizations, serializations, and other custom computes straight from the Gateway.</p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Expose events to your team</h3>
            <p>Share events and functions to other parts of the application. Your teammates can find them and utilize them in their own services.</p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Platform agnostic</h3>
            <p>All your cloud services are now compatible with one another: share cross-cloud functions and events with AWS Lambda, Microsoft Azure, IBM OpenWhisk and Google Cloud Platform.</p>
          </div>
        </div>
      </div>
    </Default>
  )
}
EventGatewayPage.hasLoadingState = true

export default EventGatewayPage
