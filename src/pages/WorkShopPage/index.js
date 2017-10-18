import React from 'react'
import Default from '../../layouts/Default'
import AutoForm from 'react-auto-form'
import TextInput from '../../components/TextInput'
import Checkbox from '../../components/Checkbox/Check'
import RadioGroup from '../../components/Radio/RadioGroup'
import Radio from '../../components/Radio/Radio'
import Button from '../../components/Button'
import styles from './WorkShopPage.css'

/* single workshop view */
export default class WorkShopPage extends React.Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
  }
  onSubmit = (event, data) => {
    event.preventDefault()
    console.log(data)
  }
  render() {
    const { isLoading } = this.props
    let title = '...'
    if (!isLoading) {
      const url = window.location.pathname.split('/')[2]
      title = url.replace(/-/, ' ')
    }

    return (
      <Default {...this.props} fullWidth>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            {title}
          </h1>
          <h2 className={styles.subtitle}>
            Serverless Workshop
          </h2>
        </div>
        <div>
          <div className={styles.content}>
            <AutoForm onSubmit={this.onSubmit} trimOnSubmit>
              <div className={styles.fieldSet}>
                <div className={styles.fakeLabel}>
                  Contact information
                </div>
                <div className={styles.inputs}>
                  <TextInput
                    ref={(c) => { this.title = c }}
                    name='name'
                    placeholder='Name'
                    required
                  />
                  <TextInput
                    ref={(c) => { this.url = c }}
                    name='email'
                    validation={'isEmail'}
                    placeholder='Email'
                    errorMessageClassName={styles.errorMessage}
                    required
                  />
                  <TextInput
                    ref={(c) => { this.url = c }}
                    name='company'
                    validation={'isURL'}
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
                     isStateless
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
                  <Checkbox name={'interest__AWS'} label={'AWS'} />
                  <Checkbox name={'interest__Google_Cloud_Platform'} label={'Google Cloud Platform'} />
                  <Checkbox name={'interest__Microsoft_Azure'} label={'Microsoft Azure'} />
                </div>
              </div>
              <div className={styles.fieldSet}>
                <div className={styles.fakeLabel}>
                  Primary developement languages
                </div>
                <div className={styles.inputs}>
                  <Checkbox name={'language__nodejs'} label={'Node JS'} />
                  <Checkbox name={'language__python'} label={'Python'} />
                  <Checkbox name={'language__java'} label={'Java'} />
                  <Checkbox name={'language__ruby'} label={'Ruby'} />
                  <Checkbox name={'language__php'} label={'PHP'} />
                  <Checkbox name={'language__go'} label={'Go'} />
                </div>
              </div>
              <div className={styles.fieldSet}>
                <div className={styles.fakeLabel}>
                  Tell us a little about your goals with serverless
                </div>
                <div className={styles.inputs}>
                  <textarea name={'serverless_goals'} />
                </div>
              </div>
              <div className={styles.button}>
                <Button kind={'red'}>
                  Submit Resource
                </Button>
              </div>
            </AutoForm>
          </div>
        </div>

      </Default>
    )
  }
}
