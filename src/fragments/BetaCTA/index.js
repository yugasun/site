import React, {PropTypes} from 'react'
import UserAuth from '../../components/UserAuth'
import Block from '../../components/Block'
import Button from '../../components/Button'

const BetaCTA = (props) => {
  return (
    <UserAuth>
      <Block>
        <h1>The platform</h1>
        <Button>{props.buttonText}</Button>
      </Block>
    </UserAuth>
  )
}
BetaCTA.defaultProps = {
  buttonText: 'Sign up for the beta'
}

BetaCTA.propTypes = {
  buttonText: PropTypes.string
}
export default BetaCTA
