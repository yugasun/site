import React from 'react'
import { Footer, Header } from 'src/components/cn'

//TODO: frameworkPage prop === dirtyPattern - fix

const DefaultLayout = ({ pathName, children, setHeadComponents }) => {
  return (
    <div style={{ width: '100%' }}>
      <div className='container'>
        <Header pathName={pathName}/>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
