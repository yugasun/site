import React from 'react'
import AutoForm from 'react-auto-form'
import Form from '../../components/Form'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import track from '../../utils/analytics/track'
import Default from '../../layouts/Default'
import styles from './Enterprise.css'
import formHandler from '../../utils/formHandler'
import NewsletterStrip from '../../fragments/NewsletterStrip'
import ClientsLogos from '../../fragments/ClientsLogos'

export default class PartnersPage extends React.Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
    this.state = {
      loading: false,
      error: false,
      success: false,
    }
  }
  onSubmit = (event, data) => {
    event.preventDefault()
    const formId = event.target.id

    this.setState({
      loading: true
    })

    const formData = {
      formId: formId,
      fields: data
    }

    // return false

    formHandler(formData).then((res) => {
      this.setState({
        success: true,
        loading: false
      })
    }).catch((e) => {
      console.log('ERROR', e)
      this.setState({
        success: false,
        loading: false,
        error: e
      })
    })
  }
  renderForm() {
    const { loading, success } = this.state
    const formId = 'enterprise-contact-us'

    if (success) {
      track('site:enterprise_contact', {
        category: 'Contact Form'});
      return (
        <div>
          <p className={styles.thanks}>
            Thanks we will be in touch shortly.
          </p>
        </div>
      )

    }

    const buttonText = (loading) ? "LOADING" : "SUBMIT"

    return (
      <Form id={formId} onSubmit={this.onSubmit} onChange={this.onChange} trimOnSubmit>
        <div className={styles.fieldSet}>
          <h2 className={styles.header}>Let’s talk!</h2>
          <div className={styles.inputs}>
            <TextInput
              name='name'
              validation={'isFullName'}
              placeholder='Name'
              required
            />
            <TextInput
              name='email'
              validation={'isEmail'}
              placeholder='Email'
              errorMessageClassName={styles.errorMessage}
              required
            />
            <TextInput
              name='company'
              placeholder='Company'
              errorMessageClassName={styles.errorMessage}
              required
            />
            <div className={styles.inputs}>
              <textarea
                placeholder='How can we help you'
                className={styles.textArea}
                name={'message'}
               />
            </div>
          </div>
        </div>
        <div className={styles.submit}>
          <Button kind={'red'} style={{padding: '13px 48px'}}>
            {buttonText}
          </Button>
        </div>
      </Form>
    )
  }
  render() {
    return (
      <Default className={styles.enterprise} {...this.props} fullWidth whiteLogo={true} coloredHeader={false}>
        <div className={styles.hero}>
          <div className={styles.boundMedium}>
            <h1 className={styles.heroTitle}>
              Accelerate serverless adoption
            </h1>
            <p className={`${styles.heroDescription} ${styles.boundSmall}`}>
              With Serverless Framework & Event Gateway, your team can rapidly deploy to any cloud provider. Build, test and launch new features in weeks. Let us show you how.
            </p>
          </div>
        </div>
        <div className={`${styles.sectionAction} ${styles.bound}`}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3 className={styles.heading}>
                Train your team
              </h3>
              <p className={styles.featureDescription}>
                As the creators and maintainers of the framework, we are the first to centralize best practices and use cases from serverless enterprises. Our workshops pass on that knowledge directly to you. Learn about serverless ops at scale, service discovery, and deploying serverless applications from start to finish.
              </p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.heading}>
                Operationalize
              </h3>
              <p className={styles.featureDescription}>
                Centralize your events and functions in one interface, across all your cloud services. Serverless Platform makes it easy to expose and share pieces of serverless applications for quick repurposing. Give your team the tools they need to create and iterate—without pausing to provision test environments and infrastructure.
              </p>
            </div>
          </div>
          <div className={styles.form}>
            {this.renderForm()}
          </div>
        </div>
        <div className={`${styles.bound} ${styles.clientsSection}`}>
          <h3 className={styles.heading}>
            Developers at these companies use Serverless
          </h3>
          <div className={styles.boundMedium}>
            <ClientsLogos style={{marginTop: '3rem'}} />
          </div>
        </div>
        <div className={`${styles.boundMedium} ${styles.newsletterSection}`}>
          <NewsletterStrip />
        </div>
      </Default>
    )
  }
}
