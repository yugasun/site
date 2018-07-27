import React from 'react'
import Dropdown from 'react-dropdown'
import Form from '../../components/Form'
import TextInput from '../../components/TextInput'
import formHandler from '../../utils/formHandler'
import track from '../../utils/analytics/track'
import './dropdown.css'

import commonStyles from './../../fragments/common.css'
import styles from './Enterprise.css'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: false,
      success: false,
      poi: '',
      devCount: ''
    }
  }

  onSubmit = (event, data) => {
    event.preventDefault()
    const formId = event.target.id
    const { poi, devCount } = this.state;

    this.setState({ loading: true })

    const formData = {
      formId: formId,
      fields: { ...data, poi, developers_count: devCount }
    }

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

  render() {
    const { loading, success, poi, devCount } = this.state
    const formId = 'enterprise-contact-us'

    if (success) {
      track('site:enterprise_contact', { category: 'Contact Form' });
      return (
        <div>
          <p className={styles.thanks}>
            Thanks we will be in touch shortly.
          </p>
        </div>
      )
    }

    return (
      <Form onSubmit={this.onSubmit} id={formId}>
        <div className={styles.formGroup}>
          <h3 className={styles.formHeading}>
            Wanna know how Serverless can help your company? Let’s talk.
          </h3>
        </div>
        <TextInput
          name='email'
          type='email'
          validation='isEmail'
          placeholder='Email'
          className={styles.formField}
          wrapperClassName={styles.formGroup}
          errorMessageClassName={styles.errorMessage}
          required
        />
        <div className={`${styles.formGroup} ${styles.formInputGroup}`}>
          <TextInput
            name='first_name'
            type='text'
            placeholder='First Name'
            validation='isFirstName'
            className={styles.formField}
            wrapperClassName={styles.inputWrapper}
            errorMessageClassName={styles.errorMessage}
            required
          />
          <TextInput
            name='last_name'
            type='text'
            placeholder='Last Name'
            validation='isLastName'
            className={styles.formField}
            wrapperClassName={styles.inputWrapper}
            errorMessageClassName={styles.errorMessage}
            required
          />
        </div>
        <TextInput
          name='company'
          type='text'
          placeholder='Company Name'
          className={styles.formField}
          wrapperClassName={styles.formGroup}
          required
        />
        <div className={styles.formGroup}>
          <label>
            How is your company currently using the Serverless Framework?
          </label>
          <Dropdown
            options={[
              { label: 'In Development', value: 'In Development' },
              { label: 'In Production', value: 'In Production' },
              { label: 'Not at all', value: 'Not at all' }
            ]}
            name='poi'
            className={styles.input}
            placeholderClassName={styles.placeholder}
            placeholder='Select'
            value={poi}
            onChange={({ value }) => this.setState({ ...this.state, poi: value })}
          />
        </div>
        <div className={styles.formGroup}>
          <label>
            How many developers in your organization plan on doing serverless development?
          </label>
          <Dropdown
            name='developers_count'
            options={[
              { label: 'Less than 5', value: 'Less than 5' },
              { label: '5 - 15', value: '5 - 15' },
              { label: '15 - 30', value: '15 - 30' },
              { label: '30 - 100', value: '30 - 100' },
              { label: '100 +', value: '100 +' }
            ]}
            className={styles.input}
            placeholderClassName={styles.placeholder}
            placeholder='Select'
            value={devCount}
            onChange={({ value }) => this.setState({ ...this.state, devCount: value })}
          />
        </div>
        <div className={`${styles.formGroup} ${styles.formInputGroup}`}>
          <label>
            Which infrastructure providers you are utilizing with the Serverless Framework?
          </label>
          <div>
            <div className={`${styles.formField} ${styles.inputContainer}`}>
              <input
                type='checkbox'
                className={styles.radioBtn}
                value='AWS'
                id='aws'
                name='infrastructure'
              />
              <label htmlFor='aws'>AWS</label>
            </div>
            <div className={`${styles.formField} ${styles.inputContainer}`}>
              <input
                type='checkbox'
                className={styles.radioBtn}
                value='Google Cloud Platform'
                id='google-cloud'
                name='infrastructure'
              />
              <label htmlFor='google-cloud'>Google Cloud Platform</label>
            </div>
          </div>
          <div>
            <div className={`${styles.formField} ${styles.inputContainer}`}>
              <input
                type='checkbox'
                className={styles.radioBtn}
                value='Microsoft Azure'
                name='infrastructure'
                id='azure'
              />
              <label htmlFor='azure'>Microsoft Azure</label>
            </div>
            <div className={`${styles.formField} ${styles.inputContainer}`}>
              <input
                type='checkbox'
                className={styles.radioBtn}
                value='Other'
                name='infrastructure'
                id='other'
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>
        </div>
        <div className={styles.formGroup}>
          <textarea
            placeholder='Please describe your Serverless use-case and any goals your team has with Serverless.'
            className={styles.formField}
            name='message'
          />
        </div>
        <div className={styles.formGroup}>
          <button
            type='submit'
            className={`${commonStyles.btn} ${commonStyles.btnPrimary}`}
            disabled={loading}
          >
            {loading ? "Loading" : "Submit"}
          </button>
        </div>
      </Form>
    )
  }
}

export default ContactForm
