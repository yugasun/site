import React from 'react'
import { Box } from 'serverless-design-system'
import BlogPreview from './SingleBlogPreview'

const AuthorBlogsPreview = ({ blogs }) => (
    <Box
      width={[1, 1, 1, 1]}
      px={['auto', 'auto', 'auto', 'auto', 15]}
      mt={[0, 0, 0, 0, 55]}
      mb={[0, 0, 15, 32]}
    >
      { blogs.map((blog, index) => (<BlogPreview key={`blog-${index}`} {...blog} />)) }
    </Box>
)

export default AuthorBlogsPreview