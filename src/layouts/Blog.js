import React from 'react'
import { withTheme } from 'styled-components'
import { Box, Column } from 'serverless-design-system'
import { BlogHeader as Header, FooterNew as Footer } from 'src/components'

const BlogLayout = ({ children, prefooter, transparentHeader, prefooterOnlyDesktop }) => {
  const pbMobile = prefooterOnlyDesktop ? 62: 300

  return (
      <Column width={1}>
        <Header transparent={transparentHeader} />
        <Box
          width={1}
          pb={[pbMobile, pbMobile, pbMobile, pbMobile, 250]}
        >
          {children}
        </Box>
        <Footer prefooter={prefooter} prefooterOnlyDesktop/>
      </Column>
    )
  
  }

export default withTheme(BlogLayout)