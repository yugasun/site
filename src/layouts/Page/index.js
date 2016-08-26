/**
 * Base Page template
 */
import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import invariant from 'invariant'
import { BodyContainer, joinUri } from 'phenomic'
import styles from './Page.css'

class Page extends Component {
  render () {
    const { props, context } = this

    const {
      pkg,
    } = context.metadata

    const {
      __filename,
      __url,
      head,
      body,
      header,
      footer,
      fullWidth
    } = props

    invariant(
      typeof head.title === 'string',
      `Your page '${__filename}' needs a title`
    )

    const metaTitle = head.metaTitle ? head.metaTitle : head.title

    const meta = [
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: metaTitle },
      {
        property: 'og:url',
        content: joinUri(process.env.PHENOMIC_USER_URL, __url),
      },
      { property: 'og:description', content: head.description },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: metaTitle },
      { name: 'twitter:creator', content: `@${pkg.twitter}` },
      { name: 'twitter:description', content: head.description },
      { name: 'description', content: head.description },
    ]

    const link = [
      {rel: 'stylesheet', href: '//fast.fonts.net/cssapi/8910c467-c1de-4614-8be3-d7c21abde84e.css'}
    ]

    /* Markdown content will display if it exists */
    const markdownContent = (
      <BodyContainer>
        {body}
      </BodyContainer>
    )

    const contentWrapperClass = (fullWidth) ? styles.fullWidth : styles.page

    return (
      <div>
        <Helmet title={metaTitle} meta={meta} link={link} />

        <div className={contentWrapperClass}>
          {header}
          {markdownContent}
          {props.children}
        </div>
        {footer}
        <div dangerouslySetInnerHTML={{__html: props.head.script}} />
      </div>
    )
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  __filename: PropTypes.string.isRequired,
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
  /** if true, page will be full width */
  fullWidth: PropTypes.bool,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
