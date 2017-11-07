import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { BodyContainer } from 'phenomic-serverless'
import { Link } from 'react-router'
import Default from '../Default'
import ContentLoading from '../../components/ContentLoading/Paragraph'
import styles from './Learn.css'
import globalStyles from './Learn.global.css'

class Learn extends Component {
  static hasLoadingState = true
  render() {
    const { props } = this
    const { head, body, isLoading, loadingData } = props
    let markdownContent
    let title = (head) ? head.title : '...'

    if (loadingData && loadingData.title) {
      title = loadingData.title
    }

    if (!isLoading) {

      markdownContent = (
        <BodyContainer>
          {body}
        </BodyContainer>
      )

      title = head.title
    }

    if (isLoading) {
      markdownContent = (
        <div className={styles.loadingWrapper}>
          <ContentLoading numberOfLines={30} />
        </div>
      )
    }

    return (
      <Default {...props} fullWidth className={styles.learnPage} coloredHeader={true}>
        <div className={styles.contentWrapper}>
          <Link className={styles.backLink} to='/learn'>Back to all resources</Link>
          <h1 className={styles.title}>
            {title}
          </h1>
          <div className={styles.postContent}>
            {markdownContent}
          </div>
        </div>
      </Default>
    )
  }
}

Learn.propTypes = {
  head: PropTypes.object.isRequired,
  __url: PropTypes.string,
  phenomicLoading: PropTypes.bool,
}

export default Learn
