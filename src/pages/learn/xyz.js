import React from 'react'

import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Home'
import Hero from 'src/components/pages/learn/course/Hero'
import Details from 'src/components/pages/learn/course/Details'
import MoreCourses from 'src/components/pages/learn/course/MoreCourses'
import WhitepaperDownload from 'src/components/pages/learn/course/Whitepaper'
import { NewToServerlessPrefooter } from 'src/fragments'
import { AppContainer } from 'src/components'
import { Background, Box } from 'serverless-design-system'
import styled from 'styled-components'

const BackgroundWithPaddingBottom = styled(Background)`
  @media only screen and (min-width: 1601px) {
    background: linear-gradient(to bottom, #f7f7f7 40%, #000 40%);
    padding-bottom: 115px;
  }
`

const FrameWorks = ({ location }) => (
  <DefaultLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    frameworkPage={false}
    startWithWhiteHeader={false}
  >
    <Helmet
      title='Serverless Framework - Build applications on AWS Lambda, Google CloudFunctions, Azure Functions, AWS Flourish and more'
      description='The application framework for building web, mobile and IoT applications on AWS Lambda, Google CloudFunctions, Azure Functions, IBM OpenWhisk, AWS Flourish and more.'
      location={location}
    />
    <Hero />
    <AppContainer>
      <Details />
    </AppContainer>
    <Box mt={[72, 72, 92, 92, 132]}>
      <Background background='#f7f7f7'>
        <AppContainer>
          <MoreCourses />
        </AppContainer>
        <BackgroundWithPaddingBottom background='linear-gradient(to bottom, #f7f7f7 60%, #000 40%);'>
          <WhitepaperDownload />
        </BackgroundWithPaddingBottom>
      </Background>
    </Box>
  </DefaultLayout>
)

export default FrameWorks
