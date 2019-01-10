import React from 'react'
import { Flex } from 'serverless-design-system'
import BlogPreview from './SingleBlogPreview'

const AuthorBlogsPreview = ({ blogs }) => (
  <Flex
      flexDirection={['column', 'column', 'column', 'column', 'row']}
      flexWrap='wrap'
      justifyContent='left'
    >
      { blogs.map((blog, index) => (<BlogPreview key={`blog-${index}`} {...blog} />)) }
  </Flex>
)

export default AuthorBlogsPreview