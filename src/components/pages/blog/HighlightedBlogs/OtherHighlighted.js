import React from 'react'
import {
    getAuthorInfo,
    getBlogLink,
    getAuthorLink
} from 'src/utils/blog'
import styles from './HighlightedBlogs.module.css'

const OtherHighlighted = ({blogs}) => {
    delete blogs[0]
    
    return (
       <div className={styles.otherFeaturedBox}>
           <h4 className='sls-h4'>Featured reads</h4>
           {
               blogs.map((blog, index) => {
                const { title, date, description, category: categoryIds, thumbnail } = blog.frontmatter
                return (
                    <React.Fragment key={title}>
                        <div className={styles.featuredListDate}>{date}</div>
                        <h5 key={index} className='sls-h5'>{title}</h5>
                    </React.Fragment>
                )
            })
           }
       </div>
    )
}

export default OtherHighlighted