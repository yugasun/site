import React, {PropTypes} from 'react'
import GoogleAnalytics from './GoogleAnalytics'
import SegmentIO from './SegmentIO'

export default function GlobalScripts (props) {
  return (
    <div>
      <GoogleAnalytics {...props} />
      <div id='footerScripts'
        dangerouslySetInnerHTML={{__html: SegmentIO}}
      />
    </div>
  )
}
GlobalScripts.propTypes = {
  children: PropTypes.any
}
