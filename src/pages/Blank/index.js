/**
 * 404 page template
 */
import Helmet from 'react-helmet'
import React from 'react'
import { BodyContainer } from 'phenomic-serverless'
import getCustomScripts from '../../fragments/CustomScripts'
import styles from './index.css'

export default class Blank extends React.Component { // eslint-disable-line
  static hasLoadingState = true
  render() {
    const { head, body, children } = this.props
    /* Markdown content will display if it exists */
    const bodyContent = body || '' // reset for loading state
    const markdown = (
      <BodyContainer>
        {bodyContent}
      </BodyContainer>
    )
    const title = (head) ? head.title : null
    const customScripts = getCustomScripts(head)
    return (
      <div className={styles.container}>
        <Helmet title={title} />
        {children || markdown}
        {customScripts}
      </div>
    )
  }
}
