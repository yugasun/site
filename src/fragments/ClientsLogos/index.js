import React from 'react'
import styles from './ClientsLogos.css'

const ClientsLogos = (props) => {
  return (
    <div className={styles.container} style={props.style}>
      <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/client-ea.png' />
      <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cocacola-logo.png' />
      <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/nordstorm-logo.png' />
      <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/client-expedia.png' />
      <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/client-reuters.png' />
    </div>
  )
}

export default ClientsLogos
