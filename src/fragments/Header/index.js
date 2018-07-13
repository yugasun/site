import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Header.css'
import classnames from 'classnames'


import logo from '../../assets/images/logo.svg'
import Svg from 'react-svg-inline'
import mobilemenu from '../../assets/images/icon-mobile-menu.png'
import close from '../../assets/images/icon-close.png'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {navActive: false};
  }
  navClicked =()=>{
    this.setState(function(prevState){
      return  {navActive: !prevState.navActive}
    })
  }

  render() {
    
    return (
      <header className={styles.mainHeaderWrapper}>
        <div className={`headerContainer`}>
          <div className='headerRow headerJustifySpaceBetween'>
            <div>
              <Svg svg={logo} className={styles.logo} />
            </div>
            <div className={`${styles.navBtn} ${this.state.navActive?styles.active:''}`} onClick={this.navClicked}>
              <img src={mobilemenu} className={`${styles.faBars}`}/>
              <img src={close} className={`${styles.faTimes}`} />
            </div>
            <nav className={`${this.state.navActive?styles.active:''}`} >
              <ul className={styles.mainNav}>
                <li className={styles.active}>
                  <a href=''>platform</a>
                </li>
                <li><a href=''>developers</a></li>
                <li><a href=''>learn</a></li>
                <li><a href=''>resources</a></li>
                <li><a href=''>enterprise</a></li>
                <li><a href=''>sign up</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>        
    )
  }
}

