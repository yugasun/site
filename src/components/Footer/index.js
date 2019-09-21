import React from 'react'
import { Background } from 'serverless-design-system'
import Footer from './Footer'

const HomeFooter = ({ prefooter, frameworkPage }) => (
  <React.Fragment>
    {prefooter ? prefooter() : null}
    <Background background='#f7f7f7' style={{ zIndex: '9999' }}>
      <Footer />
    </Background>
  </React.Fragment>
)

export default HomeFooter
