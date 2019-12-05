import React from 'react'
import {
    getAuthorInfo,
    getBlogLink,
    getAuthorLink
} from 'src/utils/blog'
import styles from './HighlightedBlogs.module.css'
import { InternalLink } from 'src/fragments'

const OtherHighlighted = ({blogs}) => {
    delete blogs[0]
    
    return (
       <div className={styles.otherFeaturedBox}>
           <div className={`sls-h4 ${styles.featuredReads}`}>Featured reads</div>
           {
               blogs.map((blog, index) => {
                const { title, date, description, category: categoryIds, thumbnail } = blog.frontmatter
                return (
                    <React.Fragment key={title}>
                        <div className={styles.featuredListDate}>{date}</div>
                        <InternalLink to={getBlogLink(blog.id)}>
                            <div key={index} className={`sls-h5 ${styles.otherFeaturedBoxTitle}`}>{title}</div>
                        </InternalLink>
                    </React.Fragment>
                )
            })
           }
       </div>
    )
}

export default OtherHighlighted