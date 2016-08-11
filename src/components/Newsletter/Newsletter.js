import React, {Component, PropTypes} from 'react'
import axios from 'axios'
import styles from './Newsletter.css'

function validateEmail (value) {
  const test = /^([\w_\.\-\+])+@([\w\-]+\.)+([\w]{2,10})+$/.test(value)
  return test
}

const propTypes = {
  children: PropTypes.any
}
export default class Newsletter extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      isSubscribed: false,
      isFetching: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    const emailNode = this.refs.email
    const email = emailNode.value
    if (!validateEmail(email)) {
      alert('Woops! invalid email address') // eslint-disable-line
      return false
    }
    this.setState({
      isFetching: true,
      error: false
    })
    var data = {
      'email': email,
      'name': ''
    }
    var that = this
    axios({
      method: 'post',
      url: 'https://3upqirwiuc.execute-api.us-west-2.amazonaws.com/dev/subscribe',
      data: data,
    }).then(function (response) {
      console.log(response.data)
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);
      if (response && response.data && response.data.created) {
        console.log('creation succeed')
        that.setState({
          isSubscribed: true,
          isFetching: false
        })
        emailNode.value = ''
      } else {
        console.log('failed creation')
        that.setState({
          error: 'alreadyEntered'
        })
      }
    }).catch(function (error) {
      console.log(error)
      that.setState({
        error: 'serviceDown'
      })
    })
  }
  render () {
    const { isFetching, error } = this.state
    let buttonText = (isFetching) ? 'You got it!' : 'subscribe'
    let copy = 'We Move Fast. Stay Updated.'

    if (error) {
      copy = 'Yikes network error!'
      buttonText = 'try again'
    }

    return (
      <div className='sl-email'>
        <div className={styles.row}>
          <div className='col-sm-6 email-ask hidden-xs hidden-sm'>
            <span className='pull-right oswald'>
              {copy}
            </span>
          </div>
          <div className='col-sm-6 email-form hidden-xs hidden-sm'>
            <div className='form-group'>
              <input
                ref='email'
                type='email'
                className='form-control email'
                name='EMAIL'
                placeholder='Your Email'
              />
            </div>
            <button onClick={this.handleSubmit} className='btn btn-action'>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Newsletter.propTypes = propTypes
