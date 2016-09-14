import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { BodyContainer } from 'phenomic'
import Page from '../Page'
import Block from '../../components/Block'
import styles from './Post.css'
import disqus from './disqus-script'

class Post extends Component {

  render () {
    const { props } = this
    const { head, body } = props
    const pageDate = head.date ? new Date(head.date) : null

    const postMeta = (
      <header>
        {pageDate &&
          <time key={pageDate.toISOString()}>
            {pageDate.toDateString()}
          </time>}
      </header>
    )

    const markdownContent = (
      <BodyContainer>
        {body}
      </BodyContainer>
    )

    const disqusScript = (
      <Helmet script={[{'type': 'text/javascript', 'innerHTML': disqus}]} />
    )

    return (
      <Page {...props} className={styles.postPage} >
        <div className={styles.postWrapper}>
          <div className={styles.content}>

            <h1>{head.title}</h1>

            <div className={styles.postMeta}>
              {postMeta}
            </div>
            {markdownContent}
          </div>
          <div className={styles.sidebar}>
             Post sidebar
            <Block>
            lol
            </Block>
          </div>
        </div>
        <div id='disqus_thread'></div>
        {disqusScript}
      </Page>
    )
  }
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
