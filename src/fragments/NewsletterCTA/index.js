import React, { PropTypes } from 'react'
import Newsletter from '../Newsletter'
import Block from '../../components/Block'

const NewsletterCTA = (props) => {
  return (
    <Block className={props.className} style={props.style}>
      <h3>
        Stay up to date<br />
        Subscribe to the Newsletter
      </h3>
      <Newsletter black={props.black} />
    </Block>
  )
}

NewsletterCTA.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  black: PropTypes.bool,
}
export default NewsletterCTA
