import React from 'react'
import { Background } from 'serverless-design-system'
import styled from 'styled-components'
import Prefooter from './Prefooter'
import Footer from './Footer'

const HR = styled('hr')`
  width: 76%;
  border-color: #8c8c8c;

  @media screen and (min-width: 770px) and (max-width: 1024px) {
    width: 93%;
  }

  @media screen and (max-width: 769px) {
    width: 90%;
  }
`

const HomeFooter = ({ frameworkPage }) => (
  <Background className='container' background={'#000000'} zIndex='99'>
    <Footer />
  </Background>
)

export default HomeFooter
