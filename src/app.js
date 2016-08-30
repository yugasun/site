/* Main entry of all requests */
import React, { Component, PropTypes } from 'react'
import HeadTag from './fragments/HeadTag'
import Header from './fragments/Header'
import Footer from './fragments/Footer'
import Scripts from './fragments/GlobalScripts'
// Import global CSS before other components and their styles
import './index.global.css'
import styles from './index.css'

export default class IndexComponent extends Component {
  static propTypes = {
    /** references /layouts.js or a dynamic route from routes.js **/
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
    return (
      <div className={styles.layout}>
        <HeadTag />
        <Header />
        {this.props.children}
        <Footer />
        <Scripts params={this.props.params} />
      </div>
    )
  }
}
