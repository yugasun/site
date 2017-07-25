import React, { Component, PropTypes } from 'react'
import EmitLogo from '../../assets/images/emit-logo.png'
import styles from './EmitCTA.css'

const propTypes = {
  fullWidth: PropTypes.bool
}

export default class Header extends Component {
  constructor(props, context) {
    super(props, context)
  }
  handleClick() {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    })
  }
  render() {
    return (
      <div className={ styles.banner }>
        <div className={ styles.wrapper }><a href='http://www.emitconference.com/' target='_blank'><img alt='Emit Conference logo' src={EmitLogo} draggable='false' className={ styles.logo } /></a> August 17: the conference on event-driven architectures. <a href='http://www.emitconference.com/' target='_blank'>learn more</a></div>
      </div>
    )
  }
}

Header.propTypes = propTypes
