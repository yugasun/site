import React, { PropTypes, Component } from 'react'
import Default from '../../layouts/Default'
import Button from '../../components/Button'
import styles from './Homepage.css'
import NewsletterStrip from '../../fragments/NewsletterStrip'
import ClientsLogos from '../../fragments/ClientsLogos'
import PlatformBetaCTA from '../../fragments/PlatformBetaCTA'

export default class Homepage extends Component {

  static propTypes = { phenomicLoading: PropTypes.bool }

  constructor(props, context) {
    super(props, context)
    this.state = {
      show: true
    }
  }

  render() {
    return (
      <Default {...this.props} fullWidth coloredHeader={false} headerHideCTA={true}>
        <div className={styles.wrapper}>
          <div className={`${styles.hero} ${styles.boundLarge}`}>
            <div className={styles.heroText}>
              <div className={styles.heroTextServerless}>serverless</div>
              <div className={styles.heroTextPlatform}>platform</div>
              <div className={styles.heroTextTagline}>Everything you need to operationalize serverless development</div>
            </div>
            <div className={styles.heroGraphic}>

            </div>
            <div className={styles.heroCta}>
              <Button href='/framework/docs/getting-started/' kind='redBordered'>Quick Start Docs</Button>
              <PlatformBetaCTA kind='red' text='Sign Up'/>
            </div>
            <div className={styles.heroGraphic}>
            </div>
          </div>
        </div>
      </Default>
    )
  }
}
