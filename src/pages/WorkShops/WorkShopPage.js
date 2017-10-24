import React from 'react'
import Default from '../../layouts/Default'
import styles from './WorkShops.css'

/* single workshop view */
export default class WorkShopPage extends React.Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const { isLoading } = this.props
    let title = '...'
    if (!isLoading) {
      title = 'page location'
    }

    return (
      <Default {...this.props} fullWidth>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.title}>
              {title}
            </h1>
            <h2 className={styles.subtitle}>
              Serverless Workshop
            </h2>
          </div>
        </div>
        <div>
          <div>
            Form
          </div>
        </div>

      </Default>
    )
  }
}
