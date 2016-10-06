/**
 * 404 page template
 */
import React, { Component, PropTypes } from 'react'
import axios from 'axios'
import styles from './index.css'
const log404Endpoint = process.env.API.ERROR

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
    const currentUrl = (window !== 'undefined') ? window.location.href : 'localhost.com'
    let content = (
      <div className={styles.content}>
        <div className={styles.message}>
          It seems you found a broken link. Do not hesitate to report this page!
        </div>
        <div>
          Tweet at <a target='_blank' href={`http://twitter.com/share?text=Hi%20@goServerless%20looks%20like%20this%20page%20is%20missing&url=${currentUrl}`}>@goServerless</a> or <a target='_blank' href='https://github.com/serverless/site/issues'>open a github issue</a>
        </div>
      </div>
    )
    return (
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.title}>
            <strong>{error}</strong>
            {" "}
            {errorText}
          </p>
          {error === 404 && content}
        </div>
      </div>
    )
  }
}
