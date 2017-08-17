import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './index.css'
import Modal from '../../components/Modal/Modal'
import AutoForm from 'react-auto-form'
import airtablePost from '../../utils/forms/airtable'
import headerStyles from '../Header/Header.css'

const propTypes = {

}

export default class Footer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      showModal: false,
      error: false,
      success: false,
    }
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
  render() {
    const { showModal } = this.state
    const year = new Date().getFullYear()
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
      <footer id='footer' className={styles.footer}>
        <div className={styles.bound}>
          <nav className={styles.navBlocks}>
            <div className={styles.navBlock}>
              <h4 className={styles.navTitle}>Toolkit</h4>
              <Link to='/framework/'>Serverless Framework</Link>
              <Link to='/event-gateway/'>Event Gateway</Link>
              <Link to='/platform/docs'>Serverless Platform</Link>
              <a href='https://github.com/serverless/guide'>Serverless Guide</a>
            </div>
            <div className={styles.navBlock}>
              <h4 className={styles.navTitle}>Work with us</h4>
              <Link to='/enterprise/'>Enterprise</Link>
              <a href='https://github.com/serverless/plugins'>Plugins</a>
            </div>
            <div className={styles.navBlock}>
              <h4 className={styles.navTitle}>Talk to us</h4>
              <a href='https://gitter.im/serverless/serverless'>Gitter</a>
              <a href='https://forum.serverless.com/'>Forum</a>
              <a href='https://twitter.com/goserverless'>Twitter</a>
              <a href='https://www.facebook.com/serverless/'>Facebook</a>
              <a href='https://www.instagram.com/serverlessinc/'>Instagram</a>
            </div>
            <div className={styles.navBlock}>
              <h4 className={styles.navTitle}>About</h4>
              <Link to='/company/team/'>Company</Link>
              <Link to='/blog/'>Blog</Link>
            </div>
          </nav>
          <div className={styles.ctaBlock}>
            <p className={styles.ctaText}>It’s not too late - sign up for the Platform beta and we’ll let you know when it’s ready for prime time.</p>
            <a onClick={this.openModal} className={styles.cta} href='javascript:'>Platform beta</a>
            <p className={styles.madeStatement}>Made with love in San Francisco + Atlanta, Austria, Germany, Pakistan, Poland, Tennessee & Thailand.<br/><br/>
              Serverless, Inc. © {year}</p>
          </div>
        </div>
        <Modal
          className={headerStyles.modalWrapper}
          active={showModal}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
        >
          <h3 className={headerStyles.modalHeading}>Platform Beta - coming Q3 2017</h3>
          <p className={headerStyles.modalText}>We like to move fast, but Serverless Platform isn’t quite ready for primetime.<br/><br/>
            We can’t wait, because when it’s ready Platform will be the best way to monitor, manage and collaborate on all your serverless
            applications. Sign up below and we’ll send you an invite to the private beta really soon. We won’t spam you with any
            other email, we promise.</p>
          <div className={headerStyles.sectionBreak} />
          {errorDiv}
          {successDiv}
          <AutoForm id='enterprise' onSubmit={this.handleSubmit} trimOnSubmit className={headerStyles.modalForm}>
            <div className={headerStyles.inputWrap}>
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
      </footer>
    )
  }
}

Footer.propTypes = propTypes
