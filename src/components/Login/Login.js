import React, { PropTypes} from 'react'
import AuthService from '../../utils/AuthService'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'

/*
accessToken
:
"aLO6vMrbhTNj8Rqu"
idToken
:
"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlcnZlcmxlc3NpbmMuYXV0aDAuY29tLyIsInN1YiI6ImdpdGh1Ynw1MzIyNzIiLCJhdWQiOiJSOEVmOGwwSERCQW55T3V4U293SVY4dmlnNlViUnhHaSIsImV4cCI6MTQ3MTk0NTc2OCwiaWF0IjoxNDcxOTA5NzY4fQ.NQN0byhcclbcy3-p345mv2w8s1LQBMWSauJtcaDO4es"
idTokenPayload
:
Object
aud
:
"R8Ef8l0HDBAnyOuxSowIV8vig6UbRxGi"
exp
:
1471945768
iat
:
1471909768
iss
:
"https://serverlessinc.auth0.com/"
sub
:
"github|532272"
__proto__
:
Object
refreshToken
:
undefined
state
:
"VnuJ8sA5QZ2qiJzu45XnvbW8"
 */

export class Login extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    location: PropTypes.object,
    route: PropTypes.object,
    auth: PropTypes.instanceOf(AuthService)
  }
  constructor (props, context) {
    super(props, context)
    this.state = {
      sideNavOpen: false,
      active: true,
    }
    const auth = this.props.route.auth
    this.login = auth.login.bind(this)
    this.logout = auth.logout.bind(this)
  }
  handleToggle = () => {
    this.setState({active: !this.state.active})
  }
  render () {
    const auth = this.props.route.auth
    const loggedIn = auth.loggedIn()

    const text = (loggedIn) ? 'logged in' : 'logged out!!!'
    return (
      <div>
        {text}
        <button onClick={this.login}>Login</button>
        <button onClick={this.logout}>Logout</button>
        <Button label='Show my dialog' onClick={this.handleToggle} />
        <Modal
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='My awesome dialog'
        >
          <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
        </Modal>
      </div>
    )
  }
}

export default Login
