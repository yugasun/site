import React from 'react'
import {
    getAuthorInfo,
    getBlogLink,
    getAuthorLink
  } from 'src/utils/blog'
import styles from './HighlightedBlogs.module.css'
import { InternalLink } from 'src/fragments'

const FeaturedBlog = ({blog}) => {
    const { title, description, thumbnail, date} = blog.frontmatter
    const frontmatter = blog.frontmatter;
    const author = getAuthorInfo({frontmatter})

    return (
        <div className={styles.mainFeaturedBox}>
            <InternalLink to={getBlogLink(blog.id)}>
            <img src={thumbnail} />
            </InternalLink>
            
            <InternalLink to={getBlogLink(blog.id)}>
                <div className={`sls-h4 ${styles.headline}`}>{title}</div>
            </InternalLink>
            <p className={`sls-p ${styles.description}`}>{description}</p>
    <p className={`sls-p ${styles.metaInfo}`}><InternalLink to={getAuthorLink(author.id)}>by&nbsp;{author.name}</InternalLink> - { date}</p>
        </div>    
    )
}

export default FeaturedBlog