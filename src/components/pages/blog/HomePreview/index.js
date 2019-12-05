import React from 'react'
import { Box, Flex } from 'serverless-design-system'
import BlogPreview from './SingleBlogPreview'
import styles from '../BlogList.module.css'

const Preview = ({ blogs, currentPage, mtFirstBlog }) => {
  return (
    <div style={{fontFamily: 'Soleil'}}>
      <h3 className={`sls-h3 ${styles.recentlyPublishedTitle}`}>Recently Published</h3>
      <Flex width={1} flexWrap='wrap'>
        { 
        blogs.map((blog, index) => (
          <React.Fragment key={`blog-${index}`}>
            <Box
              width={[1, 1, 0.33 ]}
              mx='auto'
            >
              <BlogPreview {...blog} />
            </Box>
          </React.Fragment>
        )) 
        
        }
      </Flex>
    </div>
  )
}

export default Preview