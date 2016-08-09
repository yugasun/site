import React, { Component } from 'react'
import { Link } from 'react-router'
import Logo from '../../assets/images/serverless_logo.gif'
import styles from './Header.css'

export default class Header extends Component {
  render () {
    return (
      <header className={styles.header}>
        <div className={styles.bumper} />
        <nav className={styles.navFixed}>
          <div className={styles.nav}>
            <div className={styles.navPart1}>
              <Link to='/'>
                <img alt='Serverless logo' className={styles.logo} src={Logo} />
              </Link>
            </div>
            <div className={styles.navPart2}>
              <Link
                className={styles.link}
                to='/learn'
              >
                {"Learn"}
              </Link>
              <Link
                className={styles.link}
                to='/community'
              >
                {"Community"}
              </Link>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
