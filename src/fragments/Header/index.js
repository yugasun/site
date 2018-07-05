import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import handleClickAway from '../../utils/handleClickAway'
import styles from './Header.css'
import classnames from 'classnames'
import PlatformBetaCTA from '../../fragments/PlatformBetaCTA'
const logo = process.env.LOGO

const propTypes = {
  whiteLogo: PropTypes.bool,
  colored: PropTypes.bool,
  fullWidth: PropTypes.bool,
  hideCTA: PropTypes.bool,
}

export default class Header extends Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
    this.state = {
      sideNavOpen: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.closeNav = this.closeNav.bind(this)
    this.handleScroll = this.handleScroll.bind(this)

    this.scrolling = false
  }
  componentDidMount() {
    document.body.addEventListener('click', this.closeNav)
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    document.body.removeEventListener('click', this.closeNav)
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll(e) {
    if (this.scrolling) {
      return
    }
    requestAnimationFrame(() => {
      this.scrolling = true

      let st = window.pageYOffset || document.documentElement.scrollTop

      if (st > 10) {
        this.header.classList.add(styles.coloredHeader)
        if (this.props.whiteLogo) {
          this.logo.src = this.logo.src.includes('#white') ? this.logo.src.substr(0, this.logo.src.length - 6) : this.logo.src
        }
        if (this.props.hideCTA) {
          this.cta.classList.remove(styles.mobileOnly)
        }
      } else {
        if (!this.props.colored) {
          this.header.classList.remove(styles.coloredHeader)
        }
        if (this.props.whiteLogo) {
          this.logo.src = this.logo.src.includes('#white') ? this.logo.src : this.logo.src + '#white'
        }
        if (this.props.hideCTA) {
          this.cta.classList.add(styles.mobileOnly)
        }
      }
      this.scrolling = false
    })
  }
  closeNav(e) {
    const toggleNode = this.refs.toggle
    const isOutsideClick = handleClickAway(toggleNode, e)
    if (toggleNode && isOutsideClick) {
      this.setState({
        sideNavOpen: false
      })
    }
  }
  handleClick() {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    })
  }
  render() {
    const { fullWidth, whiteLogo, colored, hideCTA, hideSignUp } = this.props
    const { sideNavOpen } = this.state
    const mobileNav = (sideNavOpen) ? styles.open : ''
    const openClass = (sideNavOpen) ? styles.animate : ''
    const containerStyle = (fullWidth) ? styles.fullWidth : ''
    let headerClasses = colored ? classnames(styles.header, styles.coloredHeader) : styles.header
        headerClasses = whiteLogo ? classnames(headerClasses, styles.whiteLogo) : headerClasses
    return (
      <header id='header' className={headerClasses} ref={header => { this.header = header }}>
        <div className={`${styles.navWrapper} ${containerStyle} ${styles.bound}`}>

          <div className={styles.navLeft}>
            <Link to='/' className={styles.logo}>
              <span className={styles.logoIcon}>
              ß
              </span>
              <span className={styles.logoText}>
                serverless
              </span>
            </Link>
          </div>

          <div ref='toggle' onClick={this.handleClick} className={styles.toggle}>
            <div className={styles.ham}>
              <div className={`${styles.bar} ${openClass}`} />
            </div>
          </div>

          <nav className={`${styles.navRight} ${mobileNav}`}>
            <ul className={styles.navItems}>
              <li className={styles.navItem}>
                <Link to='/' className={`${styles.link} ${styles.mobileOnly}`}>Home</Link>
              </li>
              <li className={styles.navItem}>
                <Link to='/learn/' className={styles.link}>
                  learn
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to='/framework/docs/' className={styles.link}>
                  docs
                </Link>
              </li>
              <li className={styles.navItem}>
                <a href='javascript:' className={`${styles.link} ${styles.noMobile}`}>
                  toolkit
                </a>
                <ul className={styles.subNavItems}>
                  <li>
                    <Link to='/framework/' className={styles.link}>
                      framework
                    </Link>
                  </li>
                  <li>
                    <Link to='/event-gateway/' className={styles.link}>
                      event gateway
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={styles.navItem}>
                <a href='javascript:' className={`${styles.link} ${styles.noMobile}`}>
                  community
                </a>
                <ul className={styles.subNavItems}>
                  <li>
                    <Link to='/community/meetups/' className={styles.link}>
                      meetups
                    </Link>
                  </li>
                  <li>
                  <Link to='/workshops/' className={styles.link}>Workshops</Link>
                  </li>
                  <li>
                    <Link to='/community/champions/' className={styles.link}>
                      champions
                    </Link>
                  </li>
                  <li>
                    <a
                      target='_blank'
                      href='https://forum.serverless.com/'
                      className={styles.link}>
                      forum
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://join.slack.com/t/serverless-contrib/shared_invite/enQtMzgxMTkxMzIzNTU3LTY0OGZlYWI2OTI4YTliMWQ0YWNlZGZjMDhkNDAyZGQyZDYwMzYwMTlmNmVmMzMzNmI4YzAyNjg0ZjZkYTdmMzU' className={styles.link}>Slack</a>
                  </li>
                </ul>
              </li>
              <li className={styles.navItem}>
                <Link to='/blog/' className={styles.link}>
                  blog
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to='/enterprise/' className={styles.link}>
                  enterprise
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to='/enterprise/' className={styles.link}>
                  sign-up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

Header.propTypes = propTypes
