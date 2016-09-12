import React, { Component, PropTypes } from 'react'
import enhanceCollection from 'phenomic/lib/enhance-collection'
// import {addScript, removeScript} from '../../utils/manageScripts'
import Page from '../../layouts/Page'
import {Link} from 'react-router'
import Newsletter from '../../fragments/Newsletter/Newsletter'
import dummyImg from '../../assets/images/platform_4.gif'
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
  renderBlogPreview (page) {
    console.log(page)
    return (
      <div key={page.title} className={styles.post}>
        <div className={styles.thumbnail}>
          <img src={dummyImg} role='presentation' />
        </div>
        <div className={styles.content}>
          <Link className={styles.title} to={page.__url}>
            <h3>{page.title}</h3>
          </Link>
          <div className={styles.description}>
            {page.description}
          </div>
          <div>
            written by
          </div>
        </div>
      </div>
    )
  }
  render () {
    console.log('collection', this.context.collection)
    const latestPosts = enhanceCollection(this.context.collection, {
      filter: { layout: 'Post' },
      sort: 'date',
      reverse: true,
    })
    .slice(0, numberOfLatestPosts)
    console.log('latestPosts', latestPosts)
    return (
      <Page {...this.props}>
        <h2>{"Blog"}</h2>
        <div className={styles.wrapper}>
          <div className={styles.postList}>
          {latestPosts.map((page) => (
            this.renderBlogPreview(page)
          ))}
          </div>
          <div className={styles.sidebar}>
            <div className={styles.widget}>
              Write for us
              <Newsletter buttonText={'🔥'} />
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
