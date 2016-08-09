/**
 * Index pass through component for all routes
 */
import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import Header from './components/Header'
import Footer from './components/Footer'
// Import global CSS before other components and their styles
import './index.global.css'
import styles from './index.css'

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render () {
    const {
      pkg,
    } = this.context.metadata
    const dynamicContent = this.props.children

    console.log('dynamicContent', dynamicContent)

    return (
      <div className={styles.layout}>
        <Helmet
          meta={[
            {
              name: 'generator', content: `${
              process.env.PHENOMIC_NAME} ${process.env.PHENOMIC_VERSION}`,
            },
            { property: 'og:site_name', content: pkg.name },
            { name: 'twitter:site', content: `@${pkg.twitter}` },
          ]}
          script={[
            { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' },
          ]}
        />

        {}
        <Helmet
          meta={[ {
            name: 'viewport', content: 'width=device-width, initial-scale=1',
          } ]}
        />
        <style>{"@-ms-viewport { width: device-width; }"}</style>

        <Header />

        {dynamicContent}

        <Footer />
      </div>
    )
  }
}
