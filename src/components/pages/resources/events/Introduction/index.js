import React from 'react'

import { Box, Column, Image } from 'serverless-design-system'

import { AppContainer } from 'src/components'
import resourcesMeetupMap from 'src/assets/images/resourcesMeetupMap.png'
import { Heading, P } from 'src/fragments/DesignSystem'
import { ExternalLink } from 'src/fragments'
import styled from 'styled-components'

const StyledLink = styled(ExternalLink)`
  &:hover {
    color: #5b5b5b;
  }
  color: #5b5b5b;
  border-bottom: 1px solid red;
`
const Introduction = () => (
  <Column alignItems='center' mb={[4, 4, 4, 5]} mt={[62, 62, 62, 62, 92]}>
    <AppContainer>
      <Heading.h2 align='center'>Find a Serverless meetup near you.</Heading.h2>
      <P
        fontFamily='SoleilBk'
        color='gray.3'
        fontSize={2}
        lineHeight={4}
        align='center'
      >
        Don't see an meetup in your city ?{' '}
        <StyledLink to='mailto:hello@serverless.com'>Contact us</StyledLink> and
        start your own.
      </P>
    </AppContainer>
    <Box mt={4} width={1}>
      <AppContainer>
        <Column alignItems='center'>
          <Image src={resourcesMeetupMap} alt='resources-map' />
        </Column>
      </AppContainer>
    </Box>
  </Column>
)

export default Introduction
