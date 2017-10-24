import React from 'react'
import Default from '../../layouts/Default'
import Form from '../../components/Form'
import TextInput from '../../components/TextInput'
import Checkbox from '../../components/Checkbox/Check'
import RadioGroup from '../../components/Radio/RadioGroup'
import Radio from '../../components/Radio/Radio'
import Button from '../../components/Button'
import formHandler from '../../utils/formHandler'
import styles from './WorkShopPage.css'

const imgBase = 'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/workshops/'
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
    console.log('formId', formId)
    console.log(data)
    this.setState({
      loading: true
    })

    const formData = {
      formId: `${formId}-workshop`,
      fields: data
    }

    formHandler(formData).then((res) => {
      console.log('SUCSSES', res)
      this.setState({
        success: true,
        loading: false
      }, () => {
        window.scrollTo(0, 0)
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
  onChange = (e, name, data, change) => {
    // event.preventDefault()
    // console.log(e, name, data, change)
  }
  renderForm() {
    const { isLoading, __url } = this.props
    const { loading, success } = this.state
    let formId

    if (!isLoading) {
      const url = __url.split('/')[2]
      formId = `${this.props.__url.split('/')[2]}-workshop`
    }

    if (success) {
      return (
        <div>
          <p className={styles.thanks}>
            Great! You’re now on the waitlist for one of our workshops. If you’re new to Serverless, why not <a href="https://serverless.com/framework/docs/">check out our documentation</a> to get started, or head on <a href="https://serverless.com/blog/">over to our blog?</a>
          </p>
        </div>
      )
    }

    const buttonText = (loading) ? "LOADING" : "SUBMIT"

    return (
      <Form id={formId} onSubmit={this.onSubmit} onChange={this.onChange} trimOnSubmit>
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
            Serverless Experience
          </div>
          <div className={styles.inputs}>
            <RadioGroup
               label='Serverless Experience'
               name='experience'
               required
               onChange={this.onChange}
             >
               <Radio label='None' value='none' />
               <Radio label='I’ve played around with it' value='beginner' />
               <Radio label='I run serverless in production' value='professional' />
             </RadioGroup>

          </div>
        </div>
        <div className={styles.fieldSet}>
          <div className={styles.fakeLabel}>
            Platforms of interest
          </div>
          <div className={styles.inputs}>
            <Checkbox name={'poi'} label={'AWS'} />
            <Checkbox name={'poi'} label={'Google Cloud Platform'} />
            <Checkbox name={'poi'} label={'Microsoft Azure'} />
          </div>
        </div>
        <div className={styles.fieldSet}>
          <div className={styles.fakeLabel}>
            Primary developement languages
          </div>
          <div className={styles.inputs}>
            <Checkbox name={'language'} label={'Node JS'} />
            <Checkbox name={'language'} label={'Python'} />
            <Checkbox name={'language'} label={'Java'} />
            <Checkbox name={'language'} label={'Ruby'} />
            <Checkbox name={'language'} label={'PHP'} />
            <Checkbox name={'language'} label={'Go'} />
          </div>
        </div>
        <div className={styles.fieldSet}>
          <div className={styles.fakeLabel}>
            Tell us a little about your goals with serverless
          </div>
          <div className={styles.inputs}>
            <textarea className={styles.textArea} name={'serverless_goals'} />
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
    const { loading, success } = this.state
    let title = '...'
    let background = {}
    if (!isLoading) {
      const url = __url.split('/')[2]
      title = url.replace(/-/, ' ')
      background = {
        backgroundImage: `url(${imgBase}${url}.jpg)`
      }
    }

    return (
      <Default {...this.props} fullWidth>
        <div className={styles.padding} />
        <div className={styles.hero} style={background}>
          <div className={styles.opacity}/>
          <h1 className={styles.title}>
            {title}
          </h1>
          <h2 className={styles.subtitle}>
            Serverless Workshop
          </h2>
        </div>
        <div>
          <div className={styles.content}>
            {this.renderForm()}
          </div>
        </div>

      </Default>
    )
  }
}
