import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Position
} from 'serverless-design-system'
import Testimonial from './DesignSystem/Testimonial'

import { AppContainer } from 'src/components'
import testimonialBackground from 'src/assets/images/testimonial-background.svg'
import cocaColaLogo from 'src/assets/images/cocacola-logo.png'

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
    </Position>
  </TestimonialWrapper>
  </Box>
)

export default TestimonialComponent