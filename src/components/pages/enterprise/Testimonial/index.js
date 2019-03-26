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
  <Box>
    <TestimonialWrapper>
      <Position pt={[0, 0, 150]}>
        <AppContainer>
          <Testimonial
            img={shamrockLogo}
            name='Tim Bachta'
            designation='CTO of Shamrock Trading Corporation'
            alt='Shamrock Trading Corporation'
          >
            “With Serverless Framework Enterprise, our developers were able to
            focus on building out what was needed. They could just code.”
          </Testimonial>
          <CaseStudyDownload />
        </AppContainer>
      </Position>
    </TestimonialWrapper>
  </Box>
)

export default TestimonialComponent
