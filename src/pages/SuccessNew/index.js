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
      const email = decoded.email
      const name = decoded.name
      const createdAt = decoded.created_at

      console.log('IDENTITy Call')
      console.log(userID)

      const data = {
        created_at: createdAt,
        email: email,
        name: name,
        // login_count: params.c,
        // frameworkId: params.id
      }
      console.log('LOG DATA', data)
      // ID call
      // identify(userID, data)
      // Track Login Success
      // track('site:cli_loginCompleted', {
      //   label: 'Framework Login Completed'
      // })
    }
  }
  render() {
    return null
  }
}
