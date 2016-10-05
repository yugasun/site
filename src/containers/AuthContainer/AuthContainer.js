import UserAuth from '../../components/UserAuth'
import * as actionCreators from '../../redux/user'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function mapStateToProps (state) {
  return {
    profile: state.user.profile,
    loggedIn: (state.user.profile) ? true : false
  }
}

function mapDispachToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const AuthContainer = connect(mapStateToProps, mapDispachToProps)(UserAuth)
export default AuthContainer
