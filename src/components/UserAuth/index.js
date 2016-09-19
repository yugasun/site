import React, { PropTypes} from 'react'

export class UserAuth extends React.Component {
  static contextTypes = {
    auth: React.PropTypes.object.isRequired,
  };

  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    loggedInComponent: PropTypes.any,
  }
  constructor (props, context) {
    super(props, context)
    this.auth = this.context.auth
    this.login = this.auth.login.bind(this)
    this.logout = this.auth.logout.bind(this)

    this.state = {
      loggedIn: this.auth.loggedIn(),
    }
  }
  handleToggle = () => {
    this.setState({active: !this.state.active})
  }
  render () {
    const { loggedIn } = this.state
    const { children, loggedInComponent, style, className } = this.props
    let renderedContent = children
    if (loggedIn && loggedInComponent) {
      renderedContent = loggedInComponent
    }
    return (
      <div className={className} style={style} onClick={this.login}>
        {renderedContent}
      </div>
    )
  }
}

export default UserAuth
