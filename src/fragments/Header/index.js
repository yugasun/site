import React, { Component } from 'react'
import { Link } from 'react-router'
import Svg from 'react-svg-inline'

import styles from './Header.css'
import commonStyles from './../common.css';

import logo from '../../assets/images/logo.svg'
import mobilemenu from '../../assets/images/icon-mobile-menu.png'
import close from '../../assets/images/icon-close.png'
import frameworkIcon from '../../assets/images/bolt.png'
import gatewayIcon from '../../assets/images/group-6.png'
import dashboardIcon from '../../assets/images/icon-dashboard.png'

export default class Header extends Component {
  defaultProps = { navbarInitialTransparency: false };

  constructor(props){
    super(props);
    this.state = {
      navActive: false,
      currentNavClass: props.navbarInitialTransparency ? '' : styles.blackBackground
    };
  }

  scrollHandler = () => {
    if (window.scrollY > 34) {
      if (this.state.currentNavClass !== '') { return; }
      this.setState({ currentNavClass: styles.blackBackground });
    } else if (this.state.currentNavClass === styles.blackBackground) {
      this.setState({ currentNavClass: '' });
    }
  }

  componentDidMount() {
    if (this.props.navbarInitialTransparency) {
      document.addEventListener('scroll', this.scrollHandler);
    }
  }

  componentWillUnmount() {
    if (this.props.navbarInitialTransparency) {
      document.removeEventListener('scroll', this.scrollHandler);
    }
  }

  navClicked = () => {
    this.setState(function(prevState) {
      return { navActive: !prevState.navActive };
    })
  }

  render() {
    const { navActive, currentNavClass } = this.state;
    return (
      <header className={`${styles.mainHeaderWrapper} ${commonStyles.newSite} ${currentNavClass}`}>
        <div className={`${styles.mainHeaderContainer} ${commonStyles.container}`}>
          <div className={`${commonStyles.row} ${commonStyles.justifySpaceBetween} ${commonStyles.alignCenter}`}>
            <div className={styles.logoWrapper}>
              <Link to='/'>
                <Svg svg={logo} className={styles.logo} />
              </Link>
            </div>
            <div className={`${styles.navBtn} ${navActive ? styles.active : ''}`} onClick={this.navClicked}>
              <img src={close} className={styles.faTimes}  />
              <img src={mobilemenu} className={styles.faBars}  />
            </div>
            <nav className={`${navActive ? styles.active : ''}`}>
              <ul className={`${commonStyles.marg0} ${styles.mainNav}`}>
                <li>
                  <Link to='' className={commonStyles.noLink}>platform</Link>
                  <div className={`${styles.platformDrop} ${styles.mainNavDropdown}`}>
                    <ul>
                      <li>
                        <Link to='/framework/' onClick={this.navClicked}>
                          <img src={frameworkIcon} alt='Framework' />
                          <div className={styles.text}>
                            <span className={styles.top}>serverless</span>
                            <span className={styles.bottom}>framework</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to='/event-gateway/' onClick={this.navClicked}>
                          <img src={gatewayIcon} alt='Event Gateway' />
                          <div className={styles.text}>
                            <span className={styles.top}>serverless</span>
                            <span className={styles.bottom}>event gateway</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to='/dashboard/' onClick={this.navClicked}>
                          <img src={dashboardIcon} alt='Dashboard' />
                          <div className={styles.text}>
                            <span className={styles.top}>serverless</span>
                            <span className={styles.bottom}>dashboard</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to='' className={commonStyles.noLink}>developers</Link>
                  <div className={`${styles.devDrop} ${styles.simpleDrop} ${styles.mainNavDropdown}`}>
                    <div className={styles.devDropListWrapper}>
                      <div className={styles.devDropList}>
                        <h3>documentation</h3>
                        <ul>
                          <li><Link to='/framework/docs' onClick={this.navClicked}>framework</Link></li>
                          <li><a target='_blank' href='https://github.com/serverless/platform/tree/master/docs'>platform</a></li>
                        </ul>
                      </div>
                    </div>
                    <br />
                    <div className={styles.devDropListWrapper}>
                      <div className={styles.devDropList}>
                        <h3>quick starts</h3>
                        <ul>
                          <li><Link to='/framework/docs/providers/aws/guide/quick-start/' onClick={this.navClicked}>AWS</Link></li>
                          <li><Link to='/framework/docs/providers/azure/guide/quick-start/' onClick={this.navClicked}>Azure</Link></li>
                          <li><Link to='/framework/docs/providers/google/guide/quick-start/' onClick={this.navClicked}>Google Cloud</Link></li>
                          <li><Link to='/framework/docs/' onClick={this.navClicked}>Others</Link></li>
                        </ul>
                      </div>
                      <div className={styles.devDropList}>
                        <h3>example & guides</h3>
                        <ul>
                          <li><a href='https://github.com/serverless/examples' target='_blank'>API's</a></li>
                          <li><a href='https://github.com/serverless/examples' target='_blank'>Cron Jobs</a></li>
                          <li><a href='https://github.com/serverless/examples' target='_blank'>Webhooks</a></li>
                          <li><a href='https://github.com/serverless/examples' target='_blank'>Event Processing</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to='' className={commonStyles.noLink}>learn</Link>
                  <div className={`${styles.simpleDrop} ${styles.mainNavDropdown}`}>
                    <ul>
                      <li><Link to='/learn' onClick={this.navClicked}>why?</Link></li>
                      <li><Link to='/learn/use-cases' onClick={this.navClicked}>use cases</Link></li>
                      <li><Link to='/learn/comparisons' onClick={this.navClicked}>comparisons</Link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to='' className={commonStyles.noLink}>resources</Link>
                  <div className={`${styles.resourcesDrop} ${styles.simpleDrop} ${styles.mainNavDropdown}`}>
                    <ul>
                      <li><Link to='/blog' onClick={this.navClicked}>blog</Link></li>
                      <li><a href='https://forum.serverless.com' target='_blank'>forum</a></li>
                      <li><Link to='/community/meetups' onClick={this.navClicked}>meetups</Link></li>
                      <li><a href='/slack/' target='_blank'>slack</a></li>
                      <li><Link to='/workshops' onClick={this.navClicked}>workshops</Link></li>
                    </ul>
                  </div>
                </li>
                  <a
                    href="https://serverless.com/enterprise/"
                    target='_blank'
                    className={`${commonStyles.btn} ${commonStyles.btnPrimary}`}
                  >
                    enterprise
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
