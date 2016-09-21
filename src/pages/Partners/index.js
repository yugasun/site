import React from 'react'
// import AutoForm from 'react-auto-form'
import Modal from '../../components/Modal/Modal'
import Page from '../../layouts/Page'
import partners from './partners.json'
import styles from './Partners.css'

const defaultPartner = 'trek10'

export default class PartnersPage extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      showModal: false,
      partner: partners[defaultPartner]
    }
  }
  openModal = (e) => {
    e.preventDefault()
    const currentPartner = e.target.dataset.partner || defaultPartner
    this.setState({
      showModal: true,
      partner: partners[currentPartner]
    })
  }
  handleToggle = (e) => {
    e.preventDefault()
    this.setState({
      showModal: !this.state.showModal,
    })
  }
  listPartners () {
    var handler = this.openModal
    return Object.keys(partners).map(function (company, i) {
      return (
        <div className={styles.block} >
          <span className={styles.image}>
            <div className={styles.imageBG}>
              <img src={partners[company].logo} alt='' />
            </div>
          </span>
          <a href='' data-partner={company} onClick={handler}>
            <div className={styles.content}>
              <h2>{partners[company].name}</h2>
              <p>{partners[company].tagline}</p>
            </div>
          </a>
        </div>
      )
    })
  }
  render () {
    return (
      <Page {...this.props} >
        <h1>Serverless Partners Program</h1>
        <p>Serverless Partners are consultants and agencies who are verified experts in serverless application development with the Serverless Framework</p>
        <p>
          If you are interested in learning more about our partners program send us an email <a href='mailto:partners@serverless.com'>partners@serverless.com</a>
        </p>
        <section className={styles.tiles}>
          {this.listPartners()}
        </section>

        <Modal
          className={styles.modalWrapper}
          active={this.state.showModal}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
        >
          <div className={styles.modalLogoWrapper} >
            <img className={styles.modalLogo} src={this.state.partner.logo} alt='' />
          </div>
          <h2>{this.state.partner.name}</h2>
          <div>
            <div>
              {this.state.partner.description}
            </div>
            <div className={styles.siteLink}>
              <a href={this.state.partner.website} target='_blank'>
                Visit {this.state.partner.name}'s site
              </a>
            </div>
          </div>
        </Modal>
      </Page>
    )
  }
}
