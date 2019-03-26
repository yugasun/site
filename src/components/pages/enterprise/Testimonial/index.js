import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Position } from 'serverless-design-system'
import Testimonial from './TestimonialComp'

import { AppContainerNewest as AppContainer } from 'src/components'
import testimonialBackground from 'src/assets/images/testimonial-background.svg'
import shamrockLogo from 'src/assets/images/shamrock-logo.png'
import CaseStudyDownload from '../CaseStudyDownload'

const TestimonialWrapper = styled(Box)`
  background: #fd5750;
  @media screen and (min-width: 415px) {
    background: #fd5750 url(${testimonialBackground}) no-repeat center;
    height: 646px;
  }
  @media screen and (max-width: 414px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

const TestimonialComponent = () => (
  <Box mt={[92, 92, 0]}>
    <TestimonialWrapper>
      <Position pt={[0, 0, 150]}>
        <AppContainer>
          <Testimonial
            img={shamrockLogo}
            name='Tim Bachta'
            designation='CTO of Shamrock Trading Corporation'
            alt='Shamrock Trading Corporation'
          >
            “With Serverless, it’s as easy as — I need this API to be connected
            to this Lambda, go.The ability for developers to test and experiment
            and get stuff out there is huge.”
          </Testimonial>
          <CaseStudyDownload />
        </AppContainer>
      </Position>
    </TestimonialWrapper>
  </Box>
)

export default TestimonialComponent
