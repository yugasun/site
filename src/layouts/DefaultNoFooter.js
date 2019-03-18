import React from 'react'

import { Box, Column } from 'serverless-design-system'
import { Header } from 'src/components'

const DefaultLayout = ({ children, transparentHeader }) => {
  return (
    <Column width={1}>
      <Header transparent={transparentHeader} />
      <Box width={1}>{children}</Box>
    </Column>
  )
}
export default DefaultLayout
