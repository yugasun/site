import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
// import Button from '@serverless/components/Button'
import Default from '../../layouts/Default'
import styles from './Homepage.css'

export default class Homepage extends Component {
  static propTypes = {
    phenomicLoading: PropTypes.bool
  }
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <Default {...this.props} fullWidth>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.bg}>
              <div className={styles.hero}>
                <h1 className={styles.tagline}>The way cloud should be.</h1>
                <p className={styles.heroDescription}>Serverless is your single toolkit for deploying cloud functions to any provider. You build the features, we hook up the infrastructure. Done.</p>
              </div>
              <div className={styles.logoWrapper}>
                <img className={styles.providerLogos} src={'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/providers_black.png'} alt='aws Lambda' />
              </div>
            </div>
          </div>
          <div className={`${styles.introSecondary} ${styles.boundSmall}`}>
            <h2 className={styles.sectionHeading}>Server management is over.</h2>
            <p className={`${styles.boundSmall} ${styles.introSecondaryText}`}>Serverless isn’t the future web—it’s already here and happening. Fortune 500 companies are deploying serverless apps every day. Will you be the first on your team?</p>
          </div>
          <div className={styles.sectionBreak} />
          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Build apps without maintaining infrastructure.</h2>
            <div className={styles.featuresColumns}>
              <div className={styles.feature}>
                <img className={styles.featureIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cloud-box.svg' />
                <h3 className={styles.featureName}>Provider agnostic</h3>
                <p className={styles.featureDescription}>Use our Framework to build, test and deploy cloud functions to any provider. Skip the setup; deploy your function right now.</p>
              </div>
              <div className={styles.feature}>
                <img className={styles.featureIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cloud-box.svg' />
                <h3 className={styles.featureName}>Automatic scaling</h3>
                <p className={styles.featureDescription}>Serverless backends expand and contract with demand. Go get on the front page of HackerNews, we dare you.</p>
              </div>
              <div className={styles.feature}>
                <img className={styles.featureIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cloud-box.svg' />
                <h3 className={styles.featureName}>Zero waste</h3>
                <p className={styles.featureDescription}>Don’t spend time and resources provisioning unused infrastructure. Serverless cuts weeks off development cycles and slashes server costs by more than half.</p>
              </div>
            </div>
          </div>
          <div className={`${styles.section} ${styles.testimonialSection}`}>
            <div className={`${styles.boundSmall} ${styles.clientsLogos}`}>
              <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cocacola-logo.png' />
              <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/nike-logo.png' />
              <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/nordstorm-logo.png' />
              <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/autodesk-logo.png' />
            </div>
            <div className={`${styles.testimonial} ${styles.boundSmall}`}>
              <div className={styles.testimonialTextBlock}>
                <div className={styles.testimonialGround} />
                <p className={styles.testimonialText}>“The Serverless Framework is a core component of The Coca-Cola Company's initiative to reduce IT operational costs and deploy services faster.”</p>
              </div>
              <div className={styles.testimonialMeta}>
                <h3 className={styles.testimonialAuthor}>Patrick Brandt</h3>
                <p className={styles.testimonialAuthorTitle}>Solutions Architect at The Coca-Cola Company</p>
              </div>
            </div>
          </div>
          <div className={`${styles.section} ${styles.toolkitSection}`}>
            <div className={`${styles.toolCard} ${styles.toolCardFramework}`}>
              <div className={styles.toolCardTop}>
                <h3 className={styles.toolCardTitle}><img src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/serverless-logo-white.svg' />Framework</h3>
                <img  className={styles.toolCardIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/platform.svg' />
              </div>
              <h4 className={styles.toolCardTagline}>Rapid serverless deployment</h4>
              <p>Turn 200 lines of code into 4. At 18,000 stars on GitHub, the Framework started a movement.</p>
              <Link to='/framework/'>Learn more</Link>
            </div>
            <div className={`${styles.toolCard} ${styles.toolCardEventGateway}`}>
              <div className={styles.toolCardTop}>
                <h3 className={styles.toolCardTitle}><img src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/serverless-logo-white.svg' />Event Gateway</h3>
                <img className={styles.toolCardIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/gateway.svg' />
              </div>
              <h4 className={styles.toolCardTagline}>Centralize events & data</h4>
              <p>React to any event, with any function, on any cloud.</p>
              <Link to='/event-gateway/'>Learn more</Link>
            </div>
          </div>
        </div>
      </Default>
    )
  }
}
