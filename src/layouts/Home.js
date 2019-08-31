import React from 'react'

import { Box, Column } from 'serverless-design-system'
import Nav from '../components/Nav'
import Footer from 'src/components/pages/home/Footer'
import './Home.css'

//TODO: frameworkPage prop === dirtyPattern - fix

const DefaultLayout = ({
  children,
  transparentHeader,
  frameworkPage,
  startWithWhiteHeader,
}) => {
  return (
    <Column width={1} className='homeContainer'>
      <Nav />
      <Box width={1}>{children}</Box>
      <Footer noPrefooter={true} frameworkPage={frameworkPage} />
    </Column>
  )
}

export default DefaultLayout
