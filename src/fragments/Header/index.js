import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Header.css'
import commonStyles from './../common.css';

import logo from '../../assets/images/logo.svg'
import Svg from 'react-svg-inline'
import mobilemenu from '../../assets/images/icon-mobile-menu.png'
import close from '../../assets/images/icon-close.png'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = { navActive: false };
  }

  navClicked = () => {
    this.setState(function(prevState){
      return  {navActive: !prevState.navActive}
    })
  }

  render() {
    return (
      <header className={styles.mainHeaderWrapper}>
        <div className={`${styles.mainHeaderContainer} ${commonStyles.container}`}>
          <div className={`${commonStyles.row} ${commonStyles.justifySpaceBetween}`}>
            <div className={styles.logoWrapper}>
              <Svg svg={logo} className={styles.logo} />
            </div>
            <div className={`${styles.navBtn} ${this.state.navActive ? styles.active : ''}`} onClick={this.navClicked}>
              <img src={close} className={styles.faTimes} alt="" />
              <img src={mobilemenu} className={styles.faBars} alt="" />
            </div>
            <nav className={`${this.state.navActive ? styles.active : ''}`}>
              <ul className={`${styles.mainNav} ${commonStyles.marg0}`}>
                <li className={styles.active}>
                  <a href="">platform</a>
                </li>
                <li>
                  <a href="">developers</a>
                  <div className={`${styles.devDrop} ${styles.simpleDrop} ${styles.mainNavDropdown}`}>
                    <h3>documentation</h3>
                    <div className={styles.devDropListWrapper}>
                      <div className={styles.devDropList}>
                        <h3>quick starts</h3>
                        <ul>
                          <li><a href="">nodejs</a></li>
                          <li><a href="">python</a></li>
                          <li><a href="">java</a></li>
                          <li><a href="">go</a></li>
                        </ul>
                      </div>
                      <div className={styles.devDropList}>
                        <h3>example & guides</h3>
                        <ul>
                          <li><a href="">API's</a></li>
                          <li><a href="">Cron Jobs</a></li>
                          <li><a href="">Webhooks</a></li>
                          <li><a href="">Event Processing</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="">learn</a>
                  <div className={`${styles.simpleDrop} ${styles.mainNavDropdown}`}>
                    <ul>
                      <li><a href="">why?</a></li>
                      <li><a href="">use cases</a></li>
                      <li><a href="">comparisons</a></li>
                      <li><a href="">case studies</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="">resources</a>
                  <div className={`${styles.resourcesDrop} ${styles.simpleDrop} ${styles.mainNavDropdown}`}>
                    <ul>
                      <li><a href="">blog</a></li>
                      <li><a href="">forum</a></li>
                      <li><a href="">meetups</a></li>
                      <li><a href="">slack</a></li>
                      <li><a href="">workshops</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="">enterprise</a></li>
                <li><a href="">sign up</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

