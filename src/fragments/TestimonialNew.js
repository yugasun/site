import React from 'react'
import styled from 'styled-components'
import {
  Absolute,
  Testimonial,
  Box,
} from 'serverless-design-system'

import { AppContainerNewest as AppContainer } from 'src/components'
import testimonialBackground from 'src/assets/images/testimonial-background.svg'
import cocaColaLogo from 'src/assets/images/cocacola-logo.png'

/*
const TestimonialWrapper = styled(Relative)`
  & > ${Relative} {
    &:before {
      content: " ";
      height: 600px;
      width: 100%;
      display: block;
      position: absolute;
      z-index: -1;
      left: 0;
      top: 50%;
      margin-top: -340px;
      background: #fd5750 url(${testimonialBackground}) no-repeat;
      opacity: 1;
    }
  }
`
*/

const TestimonialWrapper = styled(Box)`
    background: #fd5750;
    @media screen and (min-width: 414px) {
        background: #fd5750 url(${testimonialBackground}) no-repeat center;
        height: 646px;
    }
`

const TestimonialComponent = () => (
  <Box mt={100}>
  <TestimonialWrapper>
      <AppContainer>
        <Testimonial
          img={cocaColaLogo}
          name='Patrick Brandt'
          designation='Solutions Architect at The Coca Cola Company'
          alt='Coca Cola'
        >
          "The Serverless Framework is a core component of The Coca-Cola
          Company's initiative to reduce IT operational costs and deploy
          services faster."
        </Testimonial>
      </AppContainer>
  </TestimonialWrapper>
  </Box>
)

export default TestimonialComponent