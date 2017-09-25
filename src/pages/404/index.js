/**
 * 404 page template
 */
import React, { Component, PropTypes } from 'react'
import axios from 'axios'
import Splash from '../Splash'
import removeURLParams from '../../utils/analytics/source/removeURLParams'
import { getParams } from '../../utils/analytics/source/urlParams'
import { getItem } from '../../utils/storage'
import { twitterShare } from '../../utils/social/share'
import styles from './index.css'

const log404Endpoint = process.env.API.ERROR

export default class PageError extends Component {
  static hasLoadingState = true
  static propTypes = {
    error: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    errorText: PropTypes.string,
  }
  static defaultProps = {
    error: 404,
    errorText: 'Page Not Found',
  }
  constructor (props, context) {
    super(props, context)
    this.state = {
      params: getParams()
    }
  }
  componentDidMount() {
    const { error } = this.props
    const url = window.location.href
    const params = this.state.params

    if (!params || !params.is404) {
      const appendage = (url.match(/\?/)) ? '&' : '?'
      window.location.href = `${url}${appendage}is404=true`
      return false
    }

    if (params && params.is404 && error === 404) {
      if (url.match(/localhost/)) {
        console.log('local 404 recorded')
        return false
      }
      getItem('last_page_seen').then((lastPage) => {
        axios({
          method: 'post',
          url: log404Endpoint,
          data: {
            url,
            referrer: document.referrer || lastPage
          },
        }).then((response) => {
          console.log('true 404 recorded') // eslint-disable-line
        }).catch((err) => {
          console.log(err) // eslint-disable-line
        })
      })
    }
  }
  render() {
    const { error, errorText } = this.props
    const { params } = this.state

    if (!params || !params.is404) {
      // show nothing if 404 not set
      return null
    }

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
