import React, { Component } from 'react'
import AutoForm from 'react-auto-form'
import NewAuth from '../../components/NewAuth'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import getURLParams from '../../utils/urlHelpers'
import styles from './Submit.css'

export default class SubmitResource extends Component {
  componentDidMount () {
    const params = getURLParams()
    // grab ref and input of that ref
    this.refs.title.refs.input.value = decodeURI(params.title)
    this.refs.url.refs.input.value = params.url
  }
  handleSubmit = (event, data) => {
    event.preventDefault()
    console.log(data)
    // handle data
  }
  renderForm () {
    return (
      <div className={styles.background}>
        <div className={styles.submitContent}>
          <h1>Submit Resource</h1>
          <AutoForm onSubmit={this.handleSubmit} trimOnSubmit>
            <TextInput
              ref='title'
              name='title'
              placeholder='Resouce Title'
              required
            />
            <TextInput
              ref='url'
              name='url'
              validation={'isURL'}
              placeholder='Enter the Resource URL'
              errorMessageClassName={styles.errorMessage}
              required
              />
            <div className={styles.button}>
              <Button>
                Submit Resource
              </Button>
            </div>
          </AutoForm>
        </div>
      </div>
    )
  }
  render () {
    const loggedInContent = this.renderForm()
    return (
      <NewAuth loggedInComponent={loggedInContent}>
        <div className={styles.login}>
          <div>
            <div>Please login to submit a resource</div>
            <Button>
              Login
            </Button>
          </div>
        </div>
      </NewAuth>
    )
  }
}
