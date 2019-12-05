import React from 'react'
import {
    getAuthorInfo,
    getBlogLink,
    getAuthorLink
  } from 'src/utils/blog'
import styles from './HighlightedBlogs.module.css'

const FeaturedBlog = ({blog}) => {
    const { title, description, thumbnail, date} = blog.frontmatter

    return (
        <div className={styles.featuredBox}>
            <img src={thumbnail} />
            <h3 className={`sls-h4 ${styles.headline}`}>{title}</h3>
            <p className={`sls-p ${styles.description}`}>{description}</p>
            <p className={`sls-p ${styles.metaInfo}`}>by Bill Fine - { date}</p>
        </div>    
    )
}

export default FeaturedBlog