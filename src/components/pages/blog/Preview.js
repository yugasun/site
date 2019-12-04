import React from 'react'
import { Box, Flex } from 'serverless-design-system'
import BlogPreview from './SingleBlogPreview'
import BlogSignup from 'src/components/pages/blog/FirstBlogListMidSignup'
import styles from './BlogList.module.css'

const Preview = ({ blogs, currentPage, mtFirstBlog }) => {
  return (
    <React.Fragment>
      <div className={styles.recentlyPublishedTitle}>Recently Published</div>
      <Flex width={1} flexWrap='wrap'>
        { 
        blogs.map((blog, index) => (
          <React.Fragment key={`blog-${index}`}>
            <Box
              width={[1, 1, 0.33]}
              mx='auto'
            >
              <BlogPreview {...blog} />
            </Box>
          </React.Fragment>
        )) 
        
        }
      </Flex>
    </React.Fragment>
  )
}

export default Preview