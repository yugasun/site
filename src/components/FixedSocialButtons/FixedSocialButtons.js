import React, {PropTypes} from 'react'
import { twitterShare } from '../../utils/social/share'
import styles from './FixedSocialButtons.css'

const FixedSocialButtons = (props) => {
  const twitterURL = twitterShare('tweet this', props.url, props.hashtags)
  return (
    <div className={styles.social}>
      <a href={twitterURL}>tw</a>
    </div>
  )
}

FixedSocialButtons.propTypes = {
  url: PropTypes.string,
  hashtags: PropTypes.array,
}

export default FixedSocialButtons
