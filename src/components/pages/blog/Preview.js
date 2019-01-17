import React from 'react'
import { Box } from 'serverless-design-system'
import { AppContainerNewest as AppContainer } from 'src/components'
import BlogPreview from './SingleBlogPreview'
import BlogSignup from 'src/components/pages/blog/FirstBlogListMidSignup'

const Preview = ({ blogs, currentPage, mtFirstBlog }) => {
  return (
    <AppContainer>
        { 
        blogs.map((blog, index) => (
          <React.Fragment key={`blog-${index}`}>
            <Box
              width={[1, 1, 0.8]}
              mx='auto'
              mt={ index === 0 ? mtFirstBlog || ['62px', '62px', '62px', '62px', '132px']: 0}
              mb={ index === 3 && currentPage === 0? ['122px', '122px', '102px', '102px', '122px'] : 0 }
            >
              <BlogPreview {...blog} />
            </Box>
            { index === 3 && currentPage === 0? 
             <Box mb={['132px', '132px', '112px', '112px', '132px']}><BlogSignup /></Box>: null
            }
          </React.Fragment>
        )) 
        
        }
    </AppContainer>
  )
}

export default Preview