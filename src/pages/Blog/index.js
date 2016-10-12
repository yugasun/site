import React, { Component, PropTypes } from 'react'
import enhanceCollection from 'phenomic/lib/enhance-collection'
import Page from '../../layouts/Default'
import {Link} from 'react-router'
import BetaCTA from '../../fragments/BetaCTA'
import AuthorCTA from '../../fragments/AuthorCTA'
// import Newsletter from '../../fragments/Newsletter/Newsletter'
import defaultThumbnail from '../../assets/images/platform_4.gif'
import styles from './Blog.css'

const numberOfLatestPosts = 15
// const isClient = typeof window !== 'undefined'

export default class BlogPage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }
  renderBlogPreview (page, i) {
    let author = 'Serverless'
    let avatarURL = 'https://avatars3.githubusercontent.com/u/13742415?v=3&s=60'
    let thumbnail = defaultThumbnail

    if (page.authors) {
      // console.log('page.authors', page.authors)
    }
    if (page.thumbnail) {
      thumbnail = page.thumbnail
    }
    const avatarImg = (
      <img role='presentation' className={styles.avatarImg} src={avatarURL} />
    )

    return (
      <div key={page.title + '-' + i} className={styles.post}>
        <div className={styles.thumbnail}>
          <img src={thumbnail} role='presentation' />
        </div>
        <div className={styles.content}>
          <Link className={styles.title} to={page.__url}>
            <h3>{page.title}</h3>
          </Link>
          <div className={styles.description}>
            {page.description}
          </div>
          <div className={styles.postMeta}>
            <span>written by</span>
            {avatarImg}
            <span>{author}</span>
          </div>
        </div>
      </div>
    )
  }
  render () {
    const latestPosts = enhanceCollection(this.context.collection, {
      filter: { layout: 'Post' },
      sort: 'date',
      reverse: true,
    })
    .slice(0, numberOfLatestPosts)
    return (
      <Page {...this.props}>
        <h2 className={styles.pageTitle}>Serverless Blog</h2>
        <div className={styles.wrapper}>
          <div className={styles.postList}>
          {latestPosts.map((page, i) => (
            this.renderBlogPreview(page, i)
          ))}
          </div>
          <div className={styles.sidebar}>
            <BetaCTA buttonText='Get early access' />
            <AuthorCTA style={{marginTop: '20px'}} />
          </div>
        </div>
      </Page>
    )
  }
}
