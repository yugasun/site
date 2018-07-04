/**
 * CLI login Success Page
 */
import React from 'react'
import identify from '../../utils/analytics/identify'
import track from '../../utils/analytics/track'
import decode from 'jwt-decode'
import { getParams } from '../../utils/analytics/source/urlParams'

export default class CLISuccessNew extends React.Component {
  static hasLoadingState = true
  componentDidMount() {
    const params = getParams()
    // set framework ID
    if (params.idtoken) {
      const decoded = decode(params.idtoken)
      const userID = decoded.tracking_id || decoded.sub

      let data = {
        created_at: decoded.created_at,
        email: decoded.email,
        name: decoded.name,
        // login_count: params.login_count,
        // frameworkId: params.id
      }
      if (decoded.name) {
        data.name = decoded.name
      }
      // ID call
      identify(userID, data)
      // Track Login Success
      track('site:cli_loginCompleted', {
        label: 'Framework Login Completed'
      })
    }
  }
  render() {
    // this returns in iframe on dashboard.serverless.com
    return null
  }
}
