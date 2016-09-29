/* Main entry of all requests */
import React, { Component, PropTypes } from 'react'
import HeadTag from './fragments/HeadTag'
import Scripts from './fragments/GlobalScripts'
// Import global CSS before other components and their styles
import './index.global.css'
import styles from './index.css'

export default class Root extends Component {
  render () {
    const { location, params } = this.props
    const currentQuery = location && location.query
    return (
      <div>
        <HeadTag params={params} query={currentQuery} />
        <div className={styles.minHeight}>
          {this.props.children}
        </div>
        <Scripts params={params} query={currentQuery} />
      </div>
    )
  }
}

Root.propTypes = {
  /** references /layouts.js or a dynamic route from routes.js **/
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  /** React Router params **/
  params: PropTypes.object,
  location: PropTypes.object,
}
