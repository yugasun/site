/* Main entry of all requests */
import React, { Component, PropTypes } from 'react'
import HeadTag from './fragments/HeadTag'
import Scripts from './fragments/GlobalScripts'
import PlatformSignupFooter from './fragments/PlatformSignupFooter'
// Import global CSS before other components and their styles
import './index.global.css'
import styles from './index.css'
import {initializeVisitorID, getVisitorID} from './utils/analytics/visitor' // eslint-disable-line

export default class Root extends Component {
  componentDidMount () {
    initializeVisitorID()
    const id = getVisitorID()
    console.log('uuid', id)
  }
  render () {
    const { location, params } = this.props
    const currentQuery = location && location.query
    return (
      <div>
        <HeadTag params={params} query={currentQuery} />
        <div className={styles.minHeight}>
          {this.props.children}
        </div>
        <PlatformSignupFooter />
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
