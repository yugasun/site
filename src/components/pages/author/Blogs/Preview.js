import React from 'react'
import { Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import BlogPreview from './SingleBlogPreview'

export default ({ blogs }) => (
  <AppContainer>
    <Box
      width={[1, 1, 1, 1]}
      mx='auto'
    >
      { blogs.map((blog, index) => (<BlogPreview key={`blog-${index}`} {...blog} />)) }
    </Box>
  </AppContainer>
)
