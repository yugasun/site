import React from 'react'
import AutoForm from 'react-auto-form'
import airtablePost from '../../utils/forms/airtable'
import Default from '../../layouts/Default'
import styles from './Enterprise.css'
import NewsletterStrip from '../../fragments/NewsletterStrip'

export default class PartnersPage extends React.Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
    this.state = {
      error: false,
      success: false,
    }
  }
  handleSubmit = (event, data) => {
    event.preventDefault()
    const token = 'keynoipW7vgeiBMuZ'
    const url = 'https://api.airtable.com/v0/appyZzQmAS6nvzZ5r/Table%201'
    const airTableData = {
      fields: {
        Name: data.name,
        Email: data.email,
        Company: data.company,
        'Date Added': new Date()
      }
    }
    airtablePost(url, airTableData, token).then((_response) => {
      this.setState({
        success: true,
      })
    })
    .catch((err) => {
      this.setState({
        error: err
      })
    })
  }
  render() {
    const svgSize = { height: '50px', width: '50px' }
    let errorDiv
    if (this.state.error) {
      errorDiv = (
        <div className={styles.error}>
          Oops! Please fill out all the fields.
        </div>
       )
    }
    let successDiv
    if (this.state.success) {
      successDiv = (
        <div className={styles.success}>
          Thanks! Someone will be in touch shortly.
        </div>
       )
    }
    return (
      <Default className={styles.enterprise} {...this.props} fullWidth>
        <div className={styles.hero}>
          <div className={styles.boundSmall}>
            <h1 className={styles.heroTitle}>Accelerate serverless adoption</h1>
            <p className={`${styles.heroDescription} ${styles.boundSmaller}`}>With Serverless Framework & Event Gateway, your team can rapidly deploy to any cloud provider. Build, test and launch new features in weeks. Let us show you how.</p>
          </div>
        </div>
        <div className={`${styles.sectionAction} ${styles.bound}`}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3 className={styles.heading}>Train your team</h3>
              <p className={styles.featureDescription}>As the creators and maintainers of the framework, we are the first to centralize best practices and use cases from serverless enterprises. Our workshops pass on that knowledge directly to you. Learn how to do serverless ops at scale, service discovery, and deploy serverless applications from start to finish.</p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.heading}>Operationalize</h3>
              <p className={styles.featureDescription}>Centralize your events and functions in one interface, across all your cloud services. Serverless Platform makes it easy to expose and share pieces of serverless applications for quick repurposing. Give your team the tools they need to create and iterate—without pausing to provision test environments and infrastructure.</p>
            </div>
          </div>
          <div className={styles.form}>
            <h2 className={styles.header}>Let’s talk!</h2>
            {errorDiv}
            {successDiv}
            <AutoForm id='enterprise' onSubmit={this.handleSubmit} trimOnSubmit>
              <input required='true' name='name' placeholder='Name' />
              <input required='true' type='email' name='email' placeholder='Email' />
              <input name='company' placeholder='Company' />
              <span className={styles.feedbackSubmit}>
            <button kind='black' className={styles.btn}>
              Submit
            </button>
          </span>
            </AutoForm>
          </div>
        </div>
        <div className={`${styles.bound} ${styles.clientsSection}`}>
          <h3 className={styles.heading}>Developers at these companies use Serverless</h3>
          <div className={`${styles.boundSmall} ${styles.clientsLogos}`}>
            <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/client-ea.png' />
            <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cocacola-logo.png' />
            <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/nordstorm-logo.png' />
            <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/client-expedia.png' />
            <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/client-reuters.png' />
          </div>
        </div>
        <div className={`${styles.boundSmall} ${styles.newsletterSection}`}>
          <NewsletterStrip />
        </div>
      </Default>
    )
  }
}
