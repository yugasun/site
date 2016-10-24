import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import defaultThumbnail from '../../assets/images/platform_4.gif'
import styles from './Blog.css'

const propTypes = {
  page: PropTypes.object
}

const BlogPreview = ({ page }) => {
  const author = 'Serverless'
  const avatarURL = 'https://avatars3.githubusercontent.com/u/13742415?v=3&s=60'
  let thumbnail = defaultThumbnail

  if (page.authors) {
    // console.log('page.authors', page.authors)
  }
  if (page.draft) {
    return null
  }
  if (page.thumbnail) {
    thumbnail = page.thumbnail
  }
  const avatarImg = (
    <img role='presentation' className={styles.avatarImg} src={avatarURL} />
  )

  return (
    <div className={styles.post}>
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

BlogPreview.propTypes = propTypes
export default BlogPreview
