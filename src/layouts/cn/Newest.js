//TODO: consolidate layouts to this one

import React from 'react'

import { Box, Column } from 'serverless-design-system'
import { Header, Footer } from 'src/components/cn'

//TODO: frameworkPage prop === dirtyPattern - fix

const DefaultLayout = ({
  pathName,
  children,
  transparentHeader,
  frameworkPage,
  startWithWhiteHeader,
}) => {
  return (
    <Column width={1}>
      <Header
        pathName={pathName}
        transparent={transparentHeader}
        startWithWhiteHeader={startWithWhiteHeader ? true : false}
      />
      <Box width={1}>{children}</Box>
      <Footer noPrefooter={true} frameworkPage={frameworkPage} />
    </Column>
  )
}
export default DefaultLayout
