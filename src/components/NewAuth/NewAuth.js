import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../../redux/user'

const AuthComponent = ({
  login,
  logout,
  isAuthenticated,
  profile,
  children
}) => {
  let render = (
    <div onClick={login}>
     {children}
    </div>
  )
  if (isAuthenticated) {
    render = (
      <ul className='list-inline'>
        <li><img src={profile.picture} role='presentation' height='40px' /></li>
        <li><span>Welcome, {profile.nickname}</span></li>
        <li><button className='btn btn-primary' onClick={logout}>Logout</button></li>
      </ul>
    )
  }
  return render
}

AuthComponent.propTypes = {
  children: PropTypes.any,
  login: PropTypes.func,
  logout: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  profile: PropTypes.object
}

function mapStateToProps (state) {
  const { auth } = state
  const { isAuthenticated, profile } = auth
  return {
    isAuthenticated,
    profile
  }
}

export default connect(mapStateToProps, {
  login,
  logout
})(AuthComponent)
