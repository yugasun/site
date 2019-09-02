import React from 'react'

import Nav from '../components/Nav'
import Footer from 'src/components/pages/home/Footer'

//TODO: frameworkPage prop === dirtyPattern - fix

const DefaultLayout = ({
  children
}) => {
  return (
    <div className='container'>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout
