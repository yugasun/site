import React from 'react'
import {addScript, removeScript} from '../../utils/manageScripts'
import Page from '../../layouts/Page'

export default class JobPage extends React.Component {
  componentDidMount () {
    addScript('//www.workable.com/assets/embed.js', () => {
      // Run workable script on mount
      whr_embed(94463, {detail: 'titles', base: 'jobs', zoom: 'country', grouping: 'none'}) // eslint-disable-line
    })
  }
  componentWillUnmount () {
    removeScript('//www.workable.com/assets/embed.js')
  }
  render () {
    return (
      <Page {...this.props} />
    )
  }
}
