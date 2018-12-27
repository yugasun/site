import React from 'react'
import Link from 'gatsby-link'
import { Box, Text, Flex } from 'serverless-design-system'
import BlogNavbarContext from '../BlogNavbarContext'

const Category = ({ children, link, color }) => (
    <Box>
      <Link to={link}>
        <Text.span
          color={color ? color: '#8c8c8c'}
          fontSize='12px'
          lineHeight={0}
        >
          { children }
        </Text.span>
      </Link>
    </Box>
  )

const MobileOptions = () => (
  <BlogNavbarContext.Consumer>
      {
      ({ isNavbarActive, toggleNavbarActiveness }) => (
        !isNavbarActive && 
            <Flex width={1} justifyContent='space-between'>
                <Category link={`/blog/`} color='white'>
                        all
                </Category>
                <Category link={`/blog/`}>
                        guides &amp; tutorials
                </Category>
                <Category link={`/blog/`}>
                        user stories
                </Category>
                <Box onClick={toggleNavbarActiveness}>
                    <Category>
                            more &#x25BE;
                    </Category>
                </Box>
            </Flex>
    )
      }
  </BlogNavbarContext.Consumer>
)

export default MobileOptions
