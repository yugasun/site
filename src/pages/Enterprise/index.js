import React from 'react'
import Default from '../../layouts/Default'
import PreFooter from './../../fragments/PreFooter'
import styles from './Enterprise.css'
import commonStyles from '../../fragments/common.css'
import ContactForm from './contact-form'

export default class PartnersPage extends React.Component {
  static hasLoadingState = true

  renderPrefooter() {
    return  (
      <PreFooter
        heading='New to serverless?'
        descriptions={[
          'To get started, pop open your terminal & run:',
          'npm install serverless -g'
        ]}
        links={[
          { url: '/framework/docs', title: 'documentation' },
          { url: '/framework/docs/providers/aws/examples/', title: 'serverless example' },
          { url: 'https://github.com/serverless/serverless', title: 'github repo' }
        ]}
      />
    );
  }

  render() {
    return (
      <Default
        className={ `${commonStyles.body} ${commonStyles.newSite}` }
        {...this.props}
        fullWidth
        whiteLogo={true}
        coloredHeader={false}
        renderPrefooter={this.renderPrefooter}>
        <div className={`${commonStyles.container} ${styles.container}`}>
          <div className={`${styles.section} ${styles.contentSection}`}>
            <div className={styles.titleSection}>
              <h2 className={styles.title}>
                Move fast, safely
              </h2>
              <div className={styles.description}>
                The Serverless Platform gives you everything you need to operationalize Serverless development.
              </div>
            </div>

            <div className={styles.featureSection}>
              <h2 className={styles.title}>
                Get Support
              </h2>
              <div className={styles.description}>
                Get 24-hour support from the team behind the Serverless Framework and the Serverless Platform.
              </div>
            </div>
            <div className={styles.featureSection}>
              <h2 className={styles.title}>
                Gain Visibility
              </h2>
              <div className={styles.description}>
                Get team access to the Serverless Dashboard, the vendor-neutral Serverless operations console.
              </div>
            </div>
            <div className={styles.featureSection}>
              <h2 className={styles.title}>
                Standardize Development
              </h2>
              <div className={styles.description}>
                Get custom templates, with policy enforcement, to help standardize development across teams and onboard new team-members quickly.
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <ContactForm />
          </div>
        </div>
      </Default>
    )
  }
}
