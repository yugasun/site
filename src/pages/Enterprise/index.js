import React from 'react'
import Form from '../../components/Form'
import TextInput from '../../components/TextInput'
import Checkbox from '../../components/Checkbox/Check'
import Button from '../../components/Button'
import track from '../../utils/analytics/track'
import Default from '../../layouts/Default'
import styles from './Enterprise.css'
import formHandler from '../../utils/formHandler'
import commonStyles from '../../fragments/common.css'
import ContactForm from './contact-form'

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
            <div className={styles.checkBox}>
              <div className={styles.fakeLabel}>
                Desired use case
              </div>
              <div className={styles.inputs}>
                <Checkbox name={'poi'} label={'Standardizing Development'} />
                <Checkbox name={'poi'} label={'Extending Legacy Infrastructure'} />
                <Checkbox name={'poi'} label={'Multi-Cloud'} />
                <Checkbox name={'poi'} label={'Other'} />
              </div>
        </div>
            <div className={styles.inputs}>
              <textarea
                placeholder='Message'
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
      <Default
        className={ `${commonStyles.body} ${commonStyles.newSite}` }
        {...this.props}
        fullWidth
        whiteLogo={true}
        coloredHeader={false}>
        <div className={commonStyles.container}>
          <div className={`${styles.section} ${styles.contentSection}`}>
            <div className={styles.titleSection}>
              <h2 className={styles.title}>
                Move fast, safely
              </h2>
              <div className={styles.description}>
                The Serverless Platform gives you everything you need to operationalize Serverless development.
              </div>
            </div>

            <div className={styles.featureSection}>
              <h2 className={styles.title}>
                Get Support
              </h2>
              <div className={styles.description}>
                Get 24-hour support from the team behind the Serverless Framework and the Serverless Platform.
              </div>
            </div>
            <div className={styles.featureSection}>
              <h2 className={styles.title}>
                Gain Visibility
              </h2>
              <div className={styles.description}>
                Get team access to the Serverless Dashboard, the vendor-neutral Serverless operations console.
              </div>
            </div>
            <div className={styles.featureSection}>
              <h2 className={styles.title}>
                Standardize Development
              </h2>
              <div className={styles.description}>
                Get custom templates, with policy enforcement, to help standardize development across teams and onboard new team-members quickly.
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <ContactForm />
          </div>
        </div>
      </Default>
    )
  }
}
