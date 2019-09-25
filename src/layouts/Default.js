import React from 'react'
import Nav from '../components/Nav'
import { Footer, Header } from 'src/components'
import { Flex } from 'serverless-design-system'

//TODO: frameworkPage prop === dirtyPattern - fix

const DefaultLayout = ({ children }) => {
  return (
    <div style={{ width: '100%' }}>
      <div className='container'>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
