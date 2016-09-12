/**
 * 404 page template
 */
import React, { Component, PropTypes } from 'react'
// import axios from 'axios'
import styles from './index.css'

export default class PageError extends Component {

  static propTypes = {
    error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    errorText: PropTypes.string,
  };

  static defaultProps = {
    error: 404,
    errorText: 'Page Not Found',
  };
  componentDidMount () {
    var payload = {
      url: window.location.href,
      // user?
    }
    console.log(payload)
    /* axios({
      method: 'post',
      url: 'https://3upqirwiuc.execute-api.us-west-2.amazonaws.com/dev/subscribe',
      data: payload,
    }).then(function (response) {
      console.log(response)
      console.log(response.data)
    }).catch(function (error) {
      console.log(error)
    })*/
  }
  // Todo add 404 tracking
  render () {
    const {
      error,
      errorText,
    } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.title}>
            <strong>{error}</strong>
            {" "}
            {errorText}
          </p>
          {error === 404 &&
            <div>
              {"It seems you found a broken link. "}
              {"Do not hesitate to report this page! @goserverless"}
            </div>}
        </div>
      </div>
    )
  }
}
