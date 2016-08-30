import React from 'react'
import {addScript, removeScript} from '../../utils/manageScripts'
import Page from '../../layouts/Page'

const isClient = typeof window !== 'undefined'

export default class JobPage extends React.Component {
  componentDidMount () {
    if (isClient) {
      addScript('//www.workable.com/assets/embed.js', () => {
        // Run workable script on mount
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
