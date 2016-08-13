import React, {PropTypes} from 'react'
import GoogleAnalytics from './GoogleAnalytics'

export default function GlobalScripts (props) {
  return (
    <div>
      {props.children}
      <GoogleAnalytics {...props} />
    </div>
  )
}
GlobalScripts.propTypes = {
  children: PropTypes.any
}
