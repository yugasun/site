import React, { PropTypes } from 'react'
import { addScript, removeScript } from '../../utils/manageScripts'
import Default from '../../layouts/Default'

export default class JobPage extends React.Component {
  static propTypes = {
    phenomicLoading: PropTypes.bool
  }
  componentDidMount() {
    addScript('//www.workable.com/assets/embed.js', () => {
      // Run workable script on mount
      whr_embed(94463, {detail: 'titles', base: 'jobs', zoom: 'country', grouping: 'none'}) // eslint-disable-line
    })
  }
  componentWillUnmount() {
    removeScript('//www.workable.com/assets/embed.js')
  }
  render() {
    return (
      <Default {...this.props} />
    )
  }
}
