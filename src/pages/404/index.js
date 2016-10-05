/**
 * 404 page template
 */
import React, { Component, PropTypes } from 'react'
import axios from 'axios'
import styles from './index.css'
const log404Endpoint = process.env.ERROR_ENDPOINT

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
    const { error } = this.props
    const url = window.location.href
    // console.log(document.referrer || window.localStorage.getItem('sls_last_page'))
    if (error === 404 && !url.match(/localhost/)) {
      axios({
        method: 'post',
        url: log404Endpoint,
        data: {
          url: url,
          referrer: document.referrer || window.localStorage.getItem('sls_last_page')
        },
      }).then(function (response) {
        console.log('404 recorded')
        console.log(response)
        console.log(response.data)
      }).catch(function (error) {
        console.log(error)
      })
    }
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
