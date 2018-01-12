import React from 'react'
import Default from '../../layouts/Default'
import Form from '../../components/Form'
import TextInput from '../../components/TextInput'
import Checkbox from '../../components/Checkbox/Check'
import Button from '../../components/Button'
import HeroProduct from '../../fragments/HeroProduct'
import formHandler from '../../utils/formHandler'
import styles from './styles.css'

const urlBase = process.env.S3_BUCKET
const bg = `${urlBase}images/toolkit-ground.png`
/* single workshop view */
export default class WorkShopPage extends React.Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
    this.state = {
      success: false
    }
  }
  onSubmit = (event, data) => {
    event.preventDefault()
    const formId = this.props.__url.split('/')[2]

    if (process.env.NODE_ENV !== 'production') {
      console.log('Form ID', formId)
      console.log('Form data', data)
      return false
    }

    this.setState({
      loading: true
    })

    const formData = {
      formId: `event-gateway-beta`,
      fields: data
    }

    formHandler(formData).then((res) => {
      this.setState({
        success: true,
        loading: false
      }, () => {
        window.scrollTo(0, 0)
      })
    }).catch((e) => {
      this.setState({
        success: false,
        loading: false,
        error: e
      })
    })
  }

  renderForm() {
    const { loading, success } = this.state

    if (success) {
      return (
        <div>
          <p className={styles.thanks}>
            Thanks for requesting beta access! We will be in touch shortly
          </p>
        </div>
      )
    }

    const buttonText = (loading) ? 'LOADING' : 'REQUEST BETA ACCESS'

    return (
      <Form id='event-gateway-beta' onSubmit={this.onSubmit} trimOnSubmit>
        <div className={styles.fieldSet}>
          <div className={styles.fakeLabel}>
            Contact information
          </div>
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
          </div>
        </div>
        <div className={styles.fieldSet}>
          <div className={styles.fakeLabel}>
            Where do you host your infrastructure?
          </div>
          <div className={styles.inputs}>
            <Checkbox name={'poi'} label={'AWS'} />
            <Checkbox name={'poi'} label={'Google Cloud Platform'} />
            <Checkbox name={'poi'} label={'Microsoft Azure'} />
            <Checkbox name={'poi'} label={'On-premise'} />
          </div>
        </div>
        <div className={styles.fieldSet}>
          <div className={styles.fakeLabel}>
            What do you hope to accomplish with the Event Gateway?
          </div>
          <div className={styles.inputs}>
            <Checkbox name={'goals'} label={'Build event-driven APIs'} />
            <Checkbox name={'goals'} label={'Extend legacy systems'} />
            <Checkbox name={'goals'} label={'Avoid platform lockin'} />
            <Checkbox name={'goals'} label={'Implement multiple cloud platforms'} />
          </div>
        </div>
        <div className={styles.fieldSet}>
          <div className={styles.fakeLabel}>
            Which tools would you be interested in intregrating with your Event Gateway?
          </div>
          <div className={styles.inputs}>
            <Checkbox name={'integrations'} label={'Apache Kafka'} />
            <Checkbox name={'integrations'} label={'AWS Kinesis'} />
            <Checkbox name={'integrations'} label={'Azure Event Hub'} />
            <Checkbox name={'integrations'} label={'AWS SNS'} />
          </div>
        </div>
        <div className={styles.fieldSet}>
          <div className={styles.fakeLabel}>
            Tell us a little about your goals with Event Gateway (optional)
          </div>
          <div className={styles.inputs}>
            <textarea className={styles.textArea} name={'other'} />
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
    const { isLoading, __url } = this.props

    const content = (
      <div className={styles.contents}>
        <p>Event Gateway Enterprise is fully hosted and serverless</p>
      </div>
    )

    return (
      <Default {...this.props} fullWidth  whiteLogo coloredHeader={false}>
        <HeroProduct
          background={{
            backgroundColor: '#000000a3',
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center top',
            backgroundSize: '100%, 94%'
          }}
          content={content}
          title='Event Gateway Enterprise Beta'
        />
        <div className={styles.content}>
          {this.renderForm()}
        </div>
      </Default>
    )
  }
}
