import React from 'react'

import { Box, Column } from 'serverless-design-system'
import { Header } from 'src/components'
import Footer from 'src/components/pages/home/Footer'

const DefaultLayout = ({ children, transparentHeader }) => {
  return (
    <Column width={1}>
      <Header transparent={transparentHeader} startWithWhiteHeader={true} />
      <Box width={1}>{children}</Box>
      <Footer noPrefooter={true} />
    </Column>
  )
}
export default DefaultLayout
