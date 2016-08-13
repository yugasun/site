import React, {Component, PropTypes} from 'react'
import Helmet from 'react-helmet'

export default class HeadTag extends Component {
  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };
  render () {
    const { pkg } = this.context.metadata
    return (
      <div>
        <style>{"@-ms-viewport { width: device-width; }"}</style>
        <Helmet
          meta={[
            { property: 'og:site_name', content: pkg.name },
            { name: 'twitter:site', content: `@${pkg.twitter}` },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ]}
        />
      </div>
    )
  }
}
