import React, { PropTypes} from 'react'
import AuthService from '../../utils/AuthService'

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
      sideNavOpen: false
    }
    const auth = this.props.route.auth
    this.login = auth.login.bind(this)
    this.logout = auth.logout.bind(this)
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
      </div>
    )
  }
}

export default Login
