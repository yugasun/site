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
              <a href='http://blog.serverless.com/' className={styles.link}>
                BLOG
              </a>
              <a href='https://www.github.com/serverless/serverless' className={styles.link}>
                Github
              </a>
              <a href='https://github.com/serverless/serverless/tree/master/docs' className={styles.link}>
                DOCUMENTATION
              </a>
              <a href='https://gitter.im/serverless/serverless' className={styles.link}>
                GITTER
              </a>
              <a href='http://forum.serverless.com/' className={styles.link}>
                FORUM
              </a>
              <a href='http://serverless.com/hiring.html' className={`${styles.link} ${styles.hiring}`}>
                WE'RE HIRING
              </a>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
