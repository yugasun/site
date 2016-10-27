import React, { Component, PropTypes } from 'react'
import enhanceCollection from 'phenomic/lib/enhance-collection'
import Page from '../../layouts/Default'
import BetaCTA from '../../fragments/BetaCTA'
import AuthorCTA from '../../fragments/AuthorCTA'
import NewsletterCTA from '../../fragments/NewsletterCTA'
import BlogPreview from './BlogPreview'
// import Newsletter from '../../fragments/Newsletter/Newsletter'
import styles from './Blog.css'

const numberOfLatestPosts = 15
// const isClient = typeof window !== 'undefined'

export default class BlogPage extends Component {
  static hasLoadingState = true
  static propTypes = {
    isLoading: PropTypes.bool
  }
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {
    const { isLoading } = this.props
    const latestPosts = enhanceCollection(this.context.collection, {
      filter: { layout: 'Post' },
      sort: 'date',
      reverse: true,
    })
    .slice(0, numberOfLatestPosts)
    let renderContent = (
      <div className={styles.postList}>
        {latestPosts.map((page, i) => (
          <BlogPreview key={i} page={page} />
        ))}
      </div>
    )
    if (isLoading) {
      renderContent = (
        <div className={styles.postList}>
          <BlogPreview page={{ title: 'loading...', description: 'olololo' }} isLoading />
          <BlogPreview page={{ title: 'loading....', description: 'olololo' }} isLoading />
          <BlogPreview page={{ title: 'loading...', description: 'olololo' }} isLoading />
        </div>
      )
    }
    return (
      <Page {...this.props}>
        <h2 className={styles.pageTitle}>Serverless Blog</h2>
        <div className={styles.wrapper}>
          {renderContent}
          <div className={styles.sidebar}>
            <BetaCTA buttonText='Get early access' />
            <NewsletterCTA style={{ marginTop: '20px' }} />
            <AuthorCTA style={{ marginTop: '20px' }} />
          </div>
        </div>
      </Page>
    )
  }
}
