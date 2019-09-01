import React from 'react'

import { Box, Column } from 'serverless-design-system'
import Nav from '../components/Nav'
import Footer from 'src/components/pages/home/Footer'

//TODO: frameworkPage prop === dirtyPattern - fix

const DefaultLayout = ({
  children,
  transparentHeader,
  frameworkPage,
  startWithWhiteHeader,
}) => {
  return (
    <div className='container'>
      <Nav />
      {children}
      <Footer noPrefooter={true} frameworkPage={frameworkPage} />
    </div>
  )
}

export default DefaultLayout
