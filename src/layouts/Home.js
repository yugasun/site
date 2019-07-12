import React from 'react'

import { Box, Column } from 'serverless-design-system'
import { Header } from 'src/components'
import Footer from 'src/components/pages/home/Footer/Prefooter'

const DefaultLayout = ({ children, transparentHeader }) => {
  return (
    <Column width={1}>
      <Header transparent={transparentHeader} />
      <Box width={1}>{children}</Box>
      <Footer noPrefooter={true} />
    </Column>
  )
}
export default DefaultLayout
