import React, { Component, PropTypes } from 'react'
import {addScript, removeScript} from '../../utils/manageScripts'
import Page from '../Page'

const isClient = typeof window !== 'undefined'

export default class JobPage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }
  componentDidMount () {
    if (isClient) {
      addScript('//www.workable.com/assets/embed.js', () => {
        whr_embed(94463, {detail: 'titles', base: 'jobs', zoom: 'country', grouping: 'none'}) // eslint-disable-line
      })
    }
  }
  componentWillUnmount () {
    if (isClient) {
      removeScript('//www.workable.com/assets/embed.js')
    }
  }
  render () {
    return (
      <Page {...this.props}>
        <h2>Current Job listings</h2>
        <div id='whr_embed_hook'></div>
      </Page>
    )
  }
}
