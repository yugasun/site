import React from 'react'
import Nav from '../components/Nav'
import { FooterCn, HeaderCn } from 'src/components'
import { Flex } from 'serverless-design-system'

//TODO: frameworkPage prop === dirtyPattern - fix

const DefaultLayout = ({ children }) => {
  return (
    <div style={{ width: '100%' }}>
      <div className='container'>
        <HeaderCn />
        {children}
      </div>
      <FooterCn />
    </div>
  )
}

export default DefaultLayout
