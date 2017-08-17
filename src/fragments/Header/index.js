import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import handleClickAway from '../../utils/handleClickAway'
import Modal from '../../components/Modal/Modal'
import AutoForm from 'react-auto-form'
import airtablePost from '../../utils/forms/airtable'
import styles from './Header.css'
import classnames from 'classnames'

const propTypes = {
  whiteLogo: PropTypes.bool,
  colored: PropTypes.bool,
  fullWidth: PropTypes.bool
}

export default class Header extends Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
    this.state = {
      sideNavOpen: false,
      showModal: false,
      error: false,
      success: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }
  componentDidMount() {
    document.body.addEventListener('click', this.closeNav)
  }
  componentWillUnmount() {
    document.body.removeEventListener('click', this.closeNav)
  }
  openModal = (e) => {
    e.preventDefault()
    this.setState({
      showModal: true,
    })
  }
  handleToggle = (e) => {
    e.preventDefault()
    this.setState({
      showModal: !this.state.showModal,
    })
  }
  handleSubmit = (event, data) => {
    event.preventDefault()
    const token = 'keynoipW7vgeiBMuZ'
    const url = 'https://api.airtable.com/v0/appyZzQmAS6nvzZ5r/Table%201'
    const airTableData = {
      fields: {
        Name: data.name,
        Email: data.email,
        Company: data.company,
        'Date Added': new Date()
      }
    }
    airtablePost(url, airTableData, token).then((_response) => {
      this.setState({
        success: true,
      })
    })
      .catch((err) => {
        this.setState({
          error: err
        })
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
    const { fullWidth, whiteLogo, colored } = this.props
    const { sideNavOpen, showModal } = this.state
    const mobileNav = (sideNavOpen) ? styles.open : ''
    const openClass = (sideNavOpen) ? styles.animate : ''
    const containerStyle = (fullWidth) ? styles.fullWidth : ''
    const headerClasses = (colored) ? classnames(styles.header, styles.coloredHeader) : styles.header
    let errorDiv
    if (this.state.error) {
      errorDiv = (
        <div className={styles.error}>
          Oops! Please fill out all the fields.
        </div>
      )
    }
    let successDiv
    if (this.state.success) {
      successDiv = (
        <div className={styles.success}>
          Thanks! Someone will be in touch shortly.
        </div>
      )
    }
    return (
      <header className={headerClasses}>
        <div className={styles.navFixed}>
          <div className={`${styles.navWrapper} ${containerStyle}`}>
            <div className={styles.navLeft}>
              <Link to='/' className={styles.logo}><img width={28} height={23} src={'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/logos/serverless-logo.svg' + (whiteLogo ? '#white' : '')} className={styles.logoIcon} /><span className={styles.logoText}>serverless</span></Link>
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
                  <Link to='/framework' className={`${styles.link} ${styles.noMobile}`}>
                    Toolkit <svg className={styles.caret} width='8' height='4' viewBox='62 7 10 6'><path d='M71.884 7.698l-4.56 5.116c-.013.022-.008.05-.026.07-.083.084-.192.12-.3.116-.106.004-.214-.033-.295-.117-.02-.02-.014-.047-.028-.068L62.115 7.7c-.154-.16-.154-.42 0-.58.156-.16.408-.16.563 0L67 11.97l4.322-4.85c.155-.16.406-.16.56 0 .157.16.157.418.002.578z' fill='#fff' /></svg>
                  </Link>
                  <ul className={styles.subNavItems}>
                    <li>
                      <Link to='/framework/' className={styles.link}>
                        Framework
                      </Link>
                    </li>
                    <li>
                      <Link to='/event-gateway/' className={styles.link}>
                        Event Gateway
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={styles.navItem}>
                  <Link to='/company/team/' className={styles.link}>
                    Company
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/blog/' className={styles.link}>
                    Blog
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/enterprise/' className={styles.link}>
                    Enterprise
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='javascript:' onClick={this.openModal} className={`${styles.link} ${styles.linkSpecial}`}>
                    Platform beta
                  </Link>
                </li>

              </ul>
            </nav>
          </div>
        </div>
        <Modal
          className={styles.modalWrapper}
          active={showModal}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
        >
          <h3 className={styles.modalHeading}>Platform Beta - coming Q3 2017</h3>
          <p className={styles.modalText}>We like to move fast, but Serverless Platform isn’t quite ready for primetime.<br/><br/>
            We can’t wait, because when it’s ready Platform will be the best way to monitor, manage and collaborate on all your serverless
            applications. Sign up below and we’ll send you an invite to the private beta really soon. We won’t spam you with any
            other email, we promise.</p>
          <div className={styles.sectionBreak} />
          {errorDiv}
          {successDiv}
          <AutoForm id='enterprise' onSubmit={this.handleSubmit} trimOnSubmit className={styles.modalForm}>
            <div className={styles.inputWrap}>
              <input required={true} name='firstname' placeholder='First name' />
              <input required={true} name='lastname' placeholder='Last name' />
            </div>
            <input required={true} type='email' name='email' placeholder='you@example.com' />
            <select required={true} name='role'>
              <option disabled={true} selected={true} value=''>Role</option>
              <option value='frontend-developer'>Frontend developer</option>
              <option value='backend-developer'>Backend developer</option>
              <option value='designer'>Designer</option>
              <option value='product-manager'>Product manager</option>
              <option value='architect'>Architect</option>
              <option value='executive'>Executive</option>
              <option value='other'>Other</option>
            </select>
            <button kind='black' className={styles.btn}>Submit</button>
          </AutoForm>
        </Modal>
      </header>
    )
  }
}

Header.propTypes = propTypes
