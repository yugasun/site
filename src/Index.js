/**
 * Index pass through component for all routes
 */
import React, { Component, PropTypes } from 'react'
import HeadTag from './components/HeadTag/HeadTag'
import Header from './components/Header'
import Footer from './components/Footer'
import GlobalScripts from './components/GlobalScripts/GlobalScripts'
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
    /**
     * this.props.children references /layouts/index or a dynamic route from routes.js
     */

    return (
      <div className={styles.layout}>
        <HeadTag />
        <GlobalScripts params={this.props.params}>
          <Header />
          {this.props.children}
          <Footer />
          <div id='footerScripts'
            dangerouslySetInnerHTML={{__html: segmentIO}}
          />
        </GlobalScripts>
      </div>
    )
  }
}
