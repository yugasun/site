import React, { Component, PropTypes } from 'react'
import Button from '../../components/Button'
import Auth from '../../components/Auth'

const propTypes = {
  kind: PropTypes.string,
  text: PropTypes.string,
  loggedInComponent: PropTypes.element,
}
export default class PlatformBetaCTA extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const { kind, text, loggedInComponent } = this.props
    return <Button
      kind={kind || 'redBordered'}
      href='https://dashboard.serverless.com'
      target='_blank'
    >{text || 'Sign Up'}</Button>
  }
}

PlatformBetaCTA.propTypes = propTypes
