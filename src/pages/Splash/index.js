/**
 * 404 page template
 */
import Helmet from 'react-helmet'
import React, { Component } from 'react'
import { BodyContainer } from 'phenomic'
import Logo from '../../assets/images/serverless_logo.png'
import { getParams } from '../../utils/analytics/source/urlParams'
import styles from './index.css'

export default class Splash extends Component { // eslint-disable-line
  render() {
    const { head, body, children } = this.props
    /* Markdown content will display if it exists */
    const bodyContent = body || '' // reset for loading state
    const markdown = (
      <BodyContainer>
        {bodyContent}
      </BodyContainer>
    )
    const params = getParams()
    const msg = (params) ? params.msg : null

    return (
      <div className={styles.container}>
        <Helmet title={head.title} />
        <a href='/' title='Go to serverless homepage'>
          <img alt='Serverless logo' src={Logo} draggable='false' />
        </a>
        <div className={styles.text}>
          {children || msg || markdown}
        </div>
      </div>
    )
  }
}
