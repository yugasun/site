import React from 'react'
import {
  Flex,
  Background,
  Text,
  Box,
  Container,
} from 'serverless-design-system'
import { Button } from 'src/fragments/DesignSystem'
import styled from 'styled-components'
import bannerWheelLeft from 'src/assets/images/banner-wheel-left.svg'
import bannerWheelRight from 'src/assets/images/banner-wheel-right.svg'
import { NewsletterFormPrefooter as NewsletterForm } from 'src/components'

const DownloadButton = styled(Button)`
  background-color: white;
  color: #fd5750;
  margin-top: 32px;

  &:hover {
    background-color: white;
    color: #b73833;
  }
`

const LeftSpinningWheel = styled(Background)`
  @media screen and (min-width: 1301px) {
    background-position: -32px -32px;
  }

  @media screen and (min-width: 1025px) and (max-width: 1300px) {
    background-position: -45px -32px;
  }

  @media screen and (max-width: 1024px) {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 415px) and (max-width: 1024px) {
    background-position: -5% -16%;
  }

  @media screen and (max-width: 415px) {
    background-position: -151% -16%;
  }
`

const RightSpinningWheel = styled(Background)`
  @media screen and (min-width: 1025px) {
    background-position: 0 30px;
  }

  @media screen and (max-width: 1024px) {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 415px) and (max-width: 1024px) {
    background-position: 106% 14%;
  }

  @media screen and (max-width: 415px) {
    background-position: 234% 54%;
    z-index: 2;
  }
`

const FlexWithZIndex = styled(Flex)`
  z-index: 5;
`

const GuideUpdatesPrefooter = props => (
  <React.Fragment>
    <Container maxWidth={['100%', '100%', '100%', '100%', '76%', 1216]} pb={3} id='course-updates'>
      <Background background='#fd5750' style={{ display: 'flex' }}>
        <LeftSpinningWheel
          backgroundImage={`url(${bannerWheelLeft})`}
          width='315px'
          backgroundRepeat='no-repeat'
        />
        <FlexWithZIndex
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          width={[1, 1, 1, 1, 0.5]}
          height={[460, 460, 240]}
        >
          <Box width={[0.8, 0.8, 0.7, 0.5, 1]}>
            <Text
              fontSize={[24]}
              lineHeight={'38px'}
              letterSpacing={'-0.38px'}
              color='#fff'
              fontFamily='Soleil'
              align='center'
            >
              Get updated when a new course is released
            </Text>
          </Box>
          <Box width={[0.6]} mt={42}>
            <NewsletterForm />
          </Box>
        </FlexWithZIndex>
        <RightSpinningWheel
          backgroundImage={`url(${bannerWheelRight})`}
          width={315}
          backgroundRepeat='no-repeat'
        />
      </Background>
    </Container>
  </React.Fragment>
)

export default GuideUpdatesPrefooter
