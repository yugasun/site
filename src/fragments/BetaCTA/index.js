import React, {PropTypes} from 'react'
import UserAuth from '../../components/UserAuth'
import platformImage from '../../assets/images/platform_4.gif'
import Block from '../../components/Block'
import Button from '../../components/Button'
import styles from './BetaCTA.css'

const BetaCTA = (props) => {
  return (
    <UserAuth className={props.className} style={props.style}>
      <Block className={styles.container}>
        <h1 className={styles.title}>The Serverless platform is coming</h1>
        <img src={platformImage} className={styles.image} role='presentation' />
        <Button>{props.buttonText}</Button>
      </Block>
    </UserAuth>
  )
}
BetaCTA.defaultProps = {
  buttonText: 'Sign up for the beta'
}

BetaCTA.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
}
export default BetaCTA
