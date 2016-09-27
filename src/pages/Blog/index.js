import React, { Component, PropTypes } from 'react'
import enhanceCollection from 'phenomic/lib/enhance-collection'
// import {addScript, removeScript} from '../../utils/manageScripts'
import Page from '../../layouts/Page'
import {Link} from 'react-router'
import BetaCTA from '../../fragments/BetaCTA'
import AuthorCTA from '../../fragments/AuthorCTA'
// import Newsletter from '../../fragments/Newsletter/Newsletter'
import defaultThumbnail from '../../assets/images/platform_4.gif'
import styles from './Blog.css'

const numberOfLatestPosts = 10
const isClient = typeof window !== 'undefined'

export default class BlogPage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }
  componentWillMount () {
    if (isClient) {
      // addScript('//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.js')
    }
  }
  componentWillUnmount () {
    if (isClient) {
      // removeScript('//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.js')
      // delete window.jQuery
    }
  }
  renderBlogPreview (page, i) {
    let author = 'serverless'
    let avatarURL = 'http://www.fillmurray.com/200/200'
    let thumbnail = defaultThumbnail
    if (page.author && page.author.name) {
      author = page.author.name
    }
    if (page.author && page.author.avatar) {
      avatarURL = page.author.avatar
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
