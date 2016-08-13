/**
 * Index pass through component for all routes
 */
import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleAnalyticsTracker from './components/GoogleAnalyticsTracker/GoogleAnalyticsTracker'
import segmentIO from './assets/segment'
// Import global CSS before other components and their styles
import './index.global.css'
import styles from './index.css'

export default class IndexComponent extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    /** React Router params **/
    params: PropTypes.object,
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render () {
    const {
      pkg,
    } = this.context.metadata
    const dynamicContent = this.props.children

    return (
      <div className={styles.layout}>
        <GoogleAnalyticsTracker params={this.props.params}>
          <style>{"@-ms-viewport { width: device-width; }"}</style>
          <Helmet
            meta={[
              { property: 'og:site_name', content: pkg.name },
              { name: 'twitter:site', content: `@${pkg.twitter}` },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]}
          />

          <Header />
          {dynamicContent}
          <Footer />
          <div
            id='footerScripts'
            dangerouslySetInnerHTML={{__html: segmentIO}}
          />
        </GoogleAnalyticsTracker>
      </div>
    )
  }
}
