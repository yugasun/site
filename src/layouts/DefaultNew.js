import React from 'react'

import { Box, Column } from 'serverless-design-system'
import { Header, FooterNew as Footer } from 'src/components'

const DefaultLayout = ({ children, prefooter, transparentHeader }) => (
  <Column width={1}>
    <Header transparent={transparentHeader} />
    <Box width={1}>{children}</Box>
    <Footer prefooter={prefooter} />
  </Column>
)

export default DefaultLayout