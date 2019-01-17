import React from 'react'
import Link from 'gatsby-link'
import { Box, Text, Flex } from 'serverless-design-system'
import BlogNavbarContext from '../BlogNavbarContext'

const CategoryItem = ({ children, color }) => (
  <Text.span color={color ? color : '#8c8c8c'} fontSize='12px' lineHeight={0}>
    {children}
  </Text.span>
)

const Category = ({ children, link, color }) => {
  return link ? (
    <Box>
      <Link to={link}>
        <CategoryItem color={color}>{children}</CategoryItem>
      </Link>
    </Box>
  ) : (
    <Box>
      <CategoryItem color={color}>{children}</CategoryItem>
    </Box>
  )
}

const MobileOptions = () => (
  <BlogNavbarContext.Consumer>
    {({ isNavbarActive, toggleNavbarActiveness }) =>
      !isNavbarActive && (
        <Flex width={1} justifyContent='space-between'>
          <Category link={`/blog/`} color='white'>
            all
          </Category>
          <Category link={`/blog/category/guides-and-tutorials/`}>
            guides &amp; tutorials
          </Category>
          <Category link={`/blog/category/user-stories/`}>
            user stories
          </Category>
          <Box onClick={toggleNavbarActiveness}>
            <Category link={null}>more &#x25BE;</Category>
          </Box>
        </Flex>
      )
    }
  </BlogNavbarContext.Consumer>
)

export default MobileOptions
