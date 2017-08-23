import React, { Component, PropTypes } from 'react'
import Button from '../../components/Button'
import Auth from '../../components/Auth'

const propTypes = {
  kind: PropTypes.string,
}
export default class PlatformBetaCTA extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const { kind } = this.props
    return (
      <Auth loggedInComponent={<span />}>
        <Button href='javascript:' kind={kind || 'redBordered'} onClick={this.openModal}>
          Sign up for Beta
        </Button>
      </Auth>
    )
  }
}

PlatformBetaCTA.propTypes = propTypes
