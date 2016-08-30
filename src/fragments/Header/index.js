import React, { Component } from 'react'
import { Link } from 'react-router'
import handleClickAway from '../../utils/handleClickAway'
import Logo from '../../assets/images/serverless_logo.png'
import styles from './Header.css'

export default class Header extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      sideNavOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }
  componentDidMount () {
    document.body.addEventListener('click', this.closeNav)
  }
  closeNav (e) {
    const toggleNode = this.refs.toggle
    const isOutsideClick = handleClickAway(toggleNode, e)
    if (isOutsideClick) {
      this.setState({
        sideNavOpen: false
      })
    }
  }
  handleClick () {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    })
  }
  render () {
    const { sideNavOpen } = this.state
    const mobileNav = (sideNavOpen) ? styles.open : ''
    const openClass = (sideNavOpen) ? styles.animate : ''
    return (
      <header className={styles.header}>
        <div className={styles.bumper} />
        <nav className={styles.navFixed}>
          <div className={styles.nav}>
            <div className={styles.navPart1}>
              <Link to='/'>
                <img alt='Serverless logo' className={styles.logo} src={Logo} draggable='false' />
              </Link>
            </div>
            <div ref='toggle' onClick={this.handleClick} className={styles.toggle}>
              <div className={styles.ham}>
                <div className={styles.bar + ' ' + openClass}></div>
              </div>
            </div>
            <div className={styles.navPart2 + ' ' + mobileNav}>
              <a href='http://blog.serverless.com/' target='_blank' className={styles.link}>
                Blog
              </a>
              <a href='https://www.github.com/serverless/serverless' target='_blank' className={styles.link}>
                Github
              </a>
              <a href='http://docs.serverless.com' target='_blank' className={styles.link}>
                Documentation
              </a>
              <a href='https://gitter.im/serverless/serverless' target='_blank' className={styles.link}>
                Gitter
              </a>
              <a href='http://forum.serverless.com/' target='_blank' className={styles.link}>
                Forum
              </a>
              <Link to='/company/jobs' className={`${styles.link} ${styles.hiring}`}>
                We're Hiring
              </Link>
              <Link to='/framework/docs/' className={`${styles.link} ${styles.hiring}`}>
               link
              </Link>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
