import React from 'react'
import { Box, Row, Background } from 'serverless-design-system'
import styled from 'styled-components'
import FooterIcon from 'src/components/Footer/FooterIcon'
import LeftSection from 'src/components/Footer/LeftSection'
import RightSection from 'src/components/Footer/RightSection'
import Prefooter from './Prefooter'
import Footer from './Footer'

const HR = styled('hr')`
  width: 76%;
  border-color: #8c8c8c;
`

const HomeFooter = props => (
  <Background
    backgroundImage={[
      'linear-gradient(150deg,rgb(0,0,0) 60%,#70221f)',
      'linear-gradient(150deg,rgb(0,0,0) 60%,#70221f)',
      'linear-gradient(150deg, rgb(0, 0, 0) 60%, #70221f)',
    ]}
    zIndex='99'
  >
    <Prefooter />
    <HR />
    <Footer />
  </Background>
)

export default HomeFooter
