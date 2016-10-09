import React, { Component } from 'react'
import UserAuth from '../../components/UserAuth'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import getURLParams from '../../utils/urlHelpers'
import styles from './Submit.css'

export default class SubmitResource extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      url: '',
      title: '',
    }
  }
  componentDidMount () {
    const test = getURLParams()
    this.setState({
      title: decodeURI(test.title),
      url: test.url
    })
  }
  handleInputChange = (value, event) => {
    this.setState({
      [`${event.target.id}`]: value
    })
  }
  renderForm () {
    return (
      <div className={styles.background}>
        <div className={styles.submitContent}>
          <h1>Submit Resource</h1>
          <div>
            <TextInput id='title' value={this.state.title} onChange={this.handleInputChange} />
          </div>
          <div>
            <TextInput id='url' value={this.state.url} onChange={this.handleInputChange} />
          </div>
          <div className={styles.button}>
            <Button>
              Submit Resource
            </Button>
          </div>
        </div>
      </div>
    )
  }
  render () {
    const test = this.renderForm()
    return (
      <UserAuth loggedInComponent={test}>
        you need to log in bro
      </UserAuth>
    )
  }
}
