import React from 'react'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import styled from 'styled-components'
import Prefooter from './Prefooter'
import Footer from './Footer'

const HR = styled('hr')`
  width: 100%;
  border-color: #8c8c8c;
`

const HomeFooter = ({ frameworkPage }) => (
  <Background
    backgroundImage={[
      'linear-gradient(150deg,rgb(0,0,0) 60%,#70221f)',
      'linear-gradient(150deg,rgb(0,0,0) 60%,#70221f)',
      'linear-gradient(150deg, rgb(0, 0, 0) 45%, #70221f)',
      'linear-gradient(150deg, rgb(0, 0, 0) 45%, #70221f)',
      'linear-gradient(150deg, rgb(0, 0, 0) 60%, #70221f)',
    ]}
    zIndex='99'
  >
    <Prefooter frameworkPage={frameworkPage} />
    <AppContainer>
      <HR />
    </AppContainer>
    <Footer />
  </Background>
)

export default HomeFooter
