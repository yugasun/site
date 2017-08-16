/**
 * Base Page template
 */
import React, { PropTypes } from 'react'
import { BodyContainer, joinUri } from 'phenomic-serverless'
import Helmet from 'react-helmet'
import classnames from 'classnames'
import getCustomScripts from '../../fragments/CustomScripts'
import Header from '../../fragments/Header'
import Footer from '../../fragments/Footer'
import styles from './Default.css'

const propTypes = {
  /** classname applied to wrapper */
  className: PropTypes.string,
  /** if true, page will be full width */
  fullWidth: PropTypes.bool,
  whiteLogo: PropTypes.bool,
  coloredHeader: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  head: PropTypes.object,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
  __url: PropTypes.string,
}

const DefaultLayout = (props) => {
  const {
    __url,
    head,
    body,
    header,
    footer,
    children,
    className,
    fullWidth,
    whiteLogo,
    coloredHeader,
    isLoading
  } = props

  let metaTitle
  let meta = []
  let wrapperClass = (fullWidth) ? styles.fullWidth : styles.page

  if (!isLoading && head) {
    const uri = joinUri(process.env.PHENOMIC_USER_URL, __url)
    metaTitle = head.metaTitle || head.title
    meta = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: metaTitle },
    { property: 'og:url', content: uri },
    { property: 'og:description', content: head.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:creator', content: `@${process.env.TWITTER}` },
    { name: 'twitter:description', content: head.description },
    { name: 'description', content: head.description },
    ]

    if (head.thumbnail) {
      meta.push({ property: 'og:image', content: head.thumbnail })
    }
    wrapperClass = (head.fullWidth || fullWidth) ? styles.fullWidth : styles.page
  }

  // Remove jumpy footer with loading state
  let footerRender
  if (!isLoading) {
    footerRender = <Footer />
  }

  /* Markdown content will display if it exists */
  const bodyContent = body || '' // reset for loading state
  const markdown = (
    <BodyContainer>
      {bodyContent}
    </BodyContainer>
  )

  const pageClass = (head) ? `layout-${head.layout.toLowerCase()}` : ''
  const classes = classnames(styles.base, wrapperClass, className)
  const customScripts = getCustomScripts(head)
  return (
    <div id='base' className={pageClass}>
      <Helmet title={metaTitle} meta={meta} />
      <Header whiteLogo={whiteLogo} colored={coloredHeader} />
      <div className={classes}>
        {header}
        {children || markdown}
        {footer}
      </div>
      {footerRender}
      {customScripts}
    </div>
  )
}

DefaultLayout.hasLoadingState = true
DefaultLayout.propTypes = propTypes
export default DefaultLayout
