import React, {Component, PropTypes} from 'react'
import styles from './Video.css'

const propTypes = {
  children: PropTypes.any
}
export default class Video extends Component {

  render () {
    return (
      <div>
        <video className={styles.video} autoPlay loop poster='http://serverless.com/images/video_poster.png'>
          <source
            src='http://serverless.com/video/serverless_framework_intro_v2.mp4' type='video/mp4'
            />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }
}

Video.propTypes = propTypes
