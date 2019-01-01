import React from 'react'
import { Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import BlogPreview from './SingleBlogPreview'

const AuthorBlogsPreview = ({ blogs }) => (
  <AppContainer>
    <Box
      width={[1, 1, 1, 1]}
      mx='auto'
      mt={[90]}
      mb={[32]}
    >
      { blogs.map((blog, index) => (<BlogPreview key={`blog-${index}`} {...blog} />)) }
    </Box>
  </AppContainer>
)

export default AuthorBlogsPreview