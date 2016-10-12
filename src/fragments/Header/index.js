import React, { Component } from 'react'
import { Link } from 'react-router'
import UserAuth from '../../components/UserAuth'
import handleClickAway from '../../utils/handleClickAway'
import Svg from 'react-svg-inline'
import gitHubSvg from '../../assets/icons/github.svg'
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
  componentWillUnmount () {
    document.body.removeEventListener('click', this.closeNav)
  }
  closeNav (e) {
    const toggleNode = this.refs.toggle
    const isOutsideClick = handleClickAway(toggleNode, e)
    if (toggleNode && isOutsideClick) {
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
        <div className={styles.navFixed}>
          <div className={styles.navWrapper}>
            <div className={styles.navLeft}>
              <Link to='/' className={styles.logo}>
                <img alt='Serverless logo' src={Logo} draggable='false' />
              </Link>
            </div>
            <div ref='toggle' onClick={this.handleClick} className={styles.toggle}>
              <div className={styles.ham}>
                <div className={styles.bar + ' ' + openClass}></div>
              </div>
            </div>
            <nav className={styles.navRight + ' ' + mobileNav}>
              <ul className={styles.navItems}>
                <li className={styles.navItem}>
                  <Link to='/framework' className={styles.link}>
                    Framework
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/framework/docs' className={styles.link}>
                    Documentation
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/blog' className={styles.link}>
                    Blog
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='http://forum.serverless.com/' className={styles.link}>
                    Forum
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/partners' className={styles.link}>
                    Partners
                  </Link>
                </li>
                <UserAuth>
                  <li className={styles.navItem}>
                    <a to='/partners' className={styles.link + ' ' + styles.yellowLink}>
                      Join Beta
                    </a>
                  </li>
                </UserAuth>
                <li className={styles.navItem}>
                  <a href='https://www.github.com/serverless/serverless' target='_blank' className={styles.link}>
                    <Svg svg={gitHubSvg} cleanup />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}
