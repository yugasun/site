import React, {PropTypes} from 'react'
import GoogleAnalytics from './GoogleAnalytics'
import SegmentIO from './SegmentIO'
import Sentry from './Sentry'

export default function GlobalScripts (props) {
  return (
    <div>
      <GoogleAnalytics {...props} />
      <div dangerouslySetInnerHTML={{__html: SegmentIO}} />
      <div dangerouslySetInnerHTML={{__html: Sentry}} />
    </div>
  )
}
GlobalScripts.propTypes = {
  children: PropTypes.any
}
