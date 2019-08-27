import React from 'react'

import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Home'
import Hero from 'src/components/pages/learn/main/Hero'
import Courses from 'src/components/pages/learn/main/Courses'
import MoreResources from 'src/components/pages/learn/main/MoreResources'
import CommunityCourses from 'src/components/pages/learn/main/CommunityCourses'
import ExamplesAndCaseStudies from 'src/components/pages/learn/main/ExamplesAndCaseStudies'
import WhitepaperDownload from 'src/components/pages/learn/main/Whitepaper'
import { NewToServerlessPrefooter } from 'src/fragments'
import { AppContainer } from 'src/components'
import { Background, Box } from 'serverless-design-system'

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
      <Courses />
      <MoreResources />
    </AppContainer>
    <Box mt={[92, 92, 92, 92, 162]}>
      <Background background='#f7f7f7'>
        <AppContainer>
          <CommunityCourses />
        </AppContainer>
      </Background>
      <Background background='#fff'>
        <AppContainer>
          <ExamplesAndCaseStudies />
        </AppContainer>
        <Background background='linear-gradient(to bottom, #f7f7f7 60%, #000 40%);'>
          <WhitepaperDownload />
        </Background>
      </Background>
    </Box>
  </DefaultLayout>
)

export default FrameWorks
