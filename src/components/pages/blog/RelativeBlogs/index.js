import React from 'react'
import { Relative, Background, ResponsiveStack } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import BlogCard from './BlogCard'

const CardContainer = ({ children }) => (
  <Relative width={[1, 1, 0.49]} height={[300, 300, 400]} my={1}>
    {children}
  </Relative>
)

export default ({ blogs }) => (
  <Relative my={5}>
    <AppContainer>
      <ResponsiveStack justifyContent='space-between'>
        {blogs.map(({ id, frontmatter }, index) => (
          <CardContainer key={`relative-${index}`}>
            <BlogCard id={id} frontmatter={frontmatter} />
          </CardContainer>
        ))}
      </ResponsiveStack>
    </AppContainer>
  </Relative>
)
