import React, { Component, PropTypes } from 'react'
import Button from '../../components/Button'
import Auth from '../../components/Auth'

const propTypes = {
  kind: PropTypes.string,
  text: PropTypes.string,
}
export default class PlatformBetaCTA extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const { kind, text } = this.props
    return (
      <Auth loggedInComponent={<span />}>
        <Button kind={kind || 'redBordered'}>{text || 'Sign Up'}</Button>
      </Auth>
    )
  }
}

PlatformBetaCTA.propTypes = propTypes
