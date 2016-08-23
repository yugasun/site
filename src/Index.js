/* Main entry of all requests */
import React, { Component, PropTypes } from 'react'
import HeadTag from './components/HeadTag'
import Header from './components/Header'
import Footer from './components/Footer'
import GlobalScripts from './components/GlobalScripts'
import segmentIO from './assets/segment'
// Import global CSS before other components and their styles
import './index.global.css'
import styles from './index.css'

export default class IndexComponent extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    /** React Router params **/
    params: PropTypes.object,
    route: PropTypes.object,
  };
  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };
  static childContextTypes = {
    auth: PropTypes.object.isRequired,
  };
  // Add Auth object to this.context
  getChildContext () {
    return {
      auth: this.props.route.auth
    }
  }

  render () {
    /**
     * this.props.children references /layouts/index or a dynamic route from routes.js
     */
    // console.log(this.props.route.auth)
    /* provide auth prop to all children?
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth // sends auth instance to children
      })
      console.log('add auth to child')
    }
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
