import React, { Component } from 'react'
import { getItem, createCookie, readCookie } from '../../utils/storage'
import HelloBar from '../../components/HelloBar'
import UserAuth from '../../components/UserAuth'
import styles from './PlatformSignupFooter.css'

const DISMISS = 'dismissSignup'

export default class PlatformSignupFooter extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      showHelloBar: true,
    }
  }
  componentDidMount () {
    window.addEventListener('serverlessLogin', this.handleToggle, false)
    this.showBar(2000)
  }
  componentWillUnmount () {
    window.clearTimeout(this.delay)
    window.removeEventListener('serverlessLogin', this.handleToggle)
  }
  handleToggle = () => {
    this.setState({
      showHelloBar: false
    })
  }
  showBar = (timeout) => {
    this.delay = setTimeout(() => {
      const isUser = getItem('profile')
      const hasDismissCookie = readCookie(DISMISS)
      if (hasDismissCookie || isUser) {
        return false
      }
      this.setState({
        showHelloBar: true,
      })
    }, timeout)
  }
  setCookie = () => {
    createCookie(DISMISS, true, 2)
  }
  render () {
    let renderElement = null
    if (this.state.showHelloBar) {
      renderElement = (
        <HelloBar
          onClose={this.setCookie}
          active={this.state.showHelloBar}
          position={'bottom'}
          className={styles.signUp}
          >
          <div className={styles.inner}>
            <div className={styles.text}>
              The serverless platform is coming
            </div>
            <UserAuth>
              <button className={styles.button}>Register for the Beta</button>
            </UserAuth>
          </div>
        </HelloBar>
      )
    }
    return renderElement
  }
}
