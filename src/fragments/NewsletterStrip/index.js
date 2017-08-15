import React, { PropTypes } from 'react'
import Newsletter from '../Newsletter'
import styles from './NewsletterStrip.css'

const NewsletterStrip = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} width={52} height={35} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/logos/serverless-logo.svg' />
      <p className={styles.description}>Join our newsletter and get the latest news about Serverless products and happenings. #nospamwepromise</p>
      <Newsletter className={styles.newsletter} />
    </div>
  )
}

NewsletterStrip.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}
export default NewsletterStrip
