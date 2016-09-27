/**
 * Base Page template
 */
import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import invariant from 'invariant'
import classnames from 'classnames'
import { BodyContainer, joinUri } from 'phenomic'
import styles from './Page.css'

class Shell extends Component {

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

    /* const linkTags = [
      {
        'rel': 'canonical',
        'href': pkg.homepage + __url
      },
       link={linkTags}
    ]*/

    /* Markdown content will display if it exists */
    const markdown = (
      <BodyContainer>
        {body}
      </BodyContainer>
    )

    const contentWrapperClass = (fullWidth) ? styles.fullWidth : styles.page

    let customScript
    if (props.head.script) {
    // if script defined in markdown frontmatter include it
      customScript = (
        <Helmet script={[{'src': props.head.script, 'type': 'text/javascript'}]} />
      )
    }
    const classes = classnames(contentWrapperClass, this.props.className)

    return (
      <div>
        <Helmet title={metaTitle} meta={meta} />
        <div className={classes}>
          {header}
          {props.children || markdown}
          {footer}
        </div>

        {customScript}
      </div>
    )
  }
}

Shell.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  __filename: PropTypes.string.isRequired,
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
  /** if true, page will be full width */
  fullWidth: PropTypes.bool,
  className: PropTypes.string
}

Shell.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Shell
