import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import Page from '../Page'

class Post extends Component {

  // it's up to you to choose what to do with this layout ;)

  render () {
    const { props } = this
    const { head } = props
    const pageDate = head.date ? new Date(head.date) : null
    const header = (
      <header>
        {pageDate &&
          <time key={pageDate.toISOString()}>
            {pageDate.toDateString()}
          </time>}
      </header>
    )
    return (
      <Page
        {...props}
        header={header}
      >
        <Helmet
          script={[
             {'src': 'http://davidwells.io/wp-content/themes/david-wells/js/prism.js', 'type': 'text/javascript'}
          ]}
          link={[
             {'rel': 'stylesheet', 'href': 'http://davidwells.io/wp-content/themes/david-wells/css/prism.css'},
          ]}
        />
      </Page>
    )
  }
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
