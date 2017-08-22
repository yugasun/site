/**
 * 404 page template
 */
import React, { Component, PropTypes } from 'react'
import axios from 'axios'
import Splash from '../Splash'
import { getItem } from '../../utils/storage'
import { twitterShare } from '../../utils/social/share'
import removeURLParams from '../../utils/analytics/source/removeURLParams'
import { getParams } from '../../utils/analytics/source/urlParams'
import styles from './index.css'

const log404Endpoint = process.env.API.ERROR

export default class PageError extends Component {
  static propTypes = {
    error: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    errorText: PropTypes.string,
  }
  static defaultProps = {
    error: 404,
    errorText: 'Page Not Found',
  }
  componentDidMount() {
    const { error } = this.props
    const url = window.location.href

    const params = getParams()

    if (!params || !params.is404) {
      const appendage = (url.match(/\?/)) ? '&' : '?'
      window.location.href = `${url}${appendage}is404=true`
      return false
    }

    if (params && params.is404) {
      // is true 404. Report it and keep user here
      if (error === 404 && !url.match(/localhost/)) {
        getItem('last_page_seen').then((lastPage) => {
          axios({
            method: 'post',
            url: log404Endpoint,
            data: {
              url,
              referrer: document.referrer || lastPage
            },
          }).then((response) => {
            console.log('404 recorded') // eslint-disable-line
          }).catch((err) => {
            console.log(err) // eslint-disable-line
          })
        })
      }
    }
  }
  render() {
    const { error, errorText } = this.props
    const tweet = twitterShare(
      'Hi @goServerless, It looks like this page is missing ☞( ͡° ͜ʖ ͡°)☞', // msg
      (typeof window !== 'undefined') ? window.location.href : 'localhost.com', // url
      ['FYI'] // hashtags
    )
    const content = (
      <div className={styles.content}>
        <div className={styles.message}>
          Refresh this page to try again
          <br /><br />
          If you are still seeing a 404 please report this page!
        </div>
        <div>
          Tweet at <a target='_blank' rel='noopener noreferrer' href={tweet}>@goServerless</a> or&nbsp;
          <a
            href='https://github.com/serverless/site/issues'
            target='_blank'
            rel='noopener noreferrer'
          >
          open a github issue
          </a>
        </div>
        <div className={styles.otherLinks}>
          <a href='/' title='Go to serverless homepage'>
            Go back to homepage
          </a>
        </div>
      </div>
    )
    return (
      <Splash>
        <div>
          <p className={styles.title}>
            <strong>{error}</strong>
            {' '}
            {errorText}
          </p>
          {error === 404 && content}
        </div>
      </Splash>
    )
  }
}
