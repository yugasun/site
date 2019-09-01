import React from 'react'
import { withTheme } from 'styled-components'
import { Box, Column } from 'serverless-design-system'
import { BlogHeader as Header, Footer } from 'src/components'

const BlogLayout = ({
  children,
  prefooter,
  transparentHeader,
  prefooterOnlyDesktop,
}) => {
  const pbMobile = prefooterOnlyDesktop ? 62 : 300
  const prefooterOnlyDesktopBool = prefooterOnlyDesktop ? true : false

  return (
    <Column width={1}>
      <Header transparent={transparentHeader} />
      <Box width={1} pb={[62, 62, 0, 0, 62]}>
        {children}
      </Box>
      <Footer
        prefooter={prefooter}
        prefooterOnlyDesktop={prefooterOnlyDesktopBool}
      />
    </Column>
  )
}

export default withTheme(BlogLayout)
