import React from 'react'
import {
    getAuthorInfo,
    getBlogLink,
    getAuthorLink
} from 'src/utils/blog'

const OtherHighlighted = ({blogs}) => {
    return (
       <div style={{display: 'flex', flexDirection: 'column'}}>
           <h4>Featured reads</h4>
           {
               blogs.map((blog, index) => {
                const { title, date, description, category: categoryIds, thumbnail } = blog.frontmatter
                return (
                    <p key={index}>{title}</p>
                )
            })
           }
       </div>
    )
}

export default OtherHighlighted