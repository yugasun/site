import React from 'react'

import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Newest'
import Hero from 'src/components/pages/learn/course/Hero'
import Details from 'src/components/pages/learn/course/Details'
import MoreCourses from 'src/components/pages/learn/course/MoreCourses'
import WhitepaperDownload from 'src/components/pages/learn/guide-prefooter/index.js'
import { NewToServerlessPrefooter } from 'src/fragments'
import { AppContainer } from 'src/components'
import { Background, Box } from 'serverless-design-system'
import styled from 'styled-components'

const BackgroundWithPaddingBottom = styled(Background)`
  @media only screen and (min-width: 1601px) {
    background: linear-gradient(to bottom, #fff 40%, #000 40%);
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
      title='Full Stack AWS Application Development (Free Course)'
      description='Learn how you can use the power of Serverless Framework along with AWS Lambda, DynamoDB, API Gateway, SNS, SQS & S3 to build a full-stack application.'
      location={location}
    />
    <Hero />
    <AppContainer>
      <Details />
    </AppContainer>
    <Box mt={[72, 72, 92, 92, 132]}>
      <Background background='#fff'>
        <BackgroundWithPaddingBottom background='linear-gradient(to bottom, #fff 60%, #000 40%);'>
          <WhitepaperDownload />
        </BackgroundWithPaddingBottom>
      </Background>
    </Box>
  </DefaultLayout>
)

export default FrameWorks
