/**
 * 404 page template
 */
import React, { Component, PropTypes } from 'react'
import axios from 'axios'
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
    const { error } = this.props
    const url = window.location.href
    if (error === 404 && !url.match(/localhost/)) {
      axios({
        method: 'post',
        url: 'https://h413evrxuk.execute-api.us-west-2.amazonaws.com/dev/report',
        data: {
          url: url,
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
