import React from 'react'

import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Newest'
import Hero from 'src/components/pages/learn/overview/Hero'
import Courses from 'src/components/pages/learn/overview/Courses'
import MoreResources from 'src/components/pages/learn/overview/MoreResources'
import CommunityCourses from 'src/components/pages/learn/overview/CommunityCourses'
import ExamplesAndCaseStudies from 'src/components/pages/learn/overview/ExamplesAndCaseStudies'
import WhitepaperDownload from 'src/components/pages/learn/guide-prefooter/index.js'
import { NewToServerlessPrefooter } from 'src/fragments'
import { AppContainer } from 'src/components'
import { Background, Box } from 'serverless-design-system'
import styled from 'styled-components'
import CourseOutline from 'src/components/pages/learn/course/Details/CourseOutline.js'
import MoreInfoShare from 'src/components/pages/learn/overview/MoreInfoShare/'

const BackgroundWithPaddingBottom = styled(Background)`
  @media only screen and (min-width: 1601px) {
    background: linear-gradient(to bottom, #fff 40%, #f7f7f7 40%);
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
      title='Free Serverless Courses &amp; Training'
      description='These free courses show you how to utilize the power of serverless offerings from AWS, Azure, Google Cloud using Serverless Framework'
      location={location}
    />
    <Hero />
    <AppContainer>
      <CourseOutline />
      <MoreInfoShare />
    </AppContainer>

    <Box mt={[72, 72, 92, 92, 132]}>
      <Box>
        <BackgroundWithPaddingBottom background='#f7f7f7'>
          <WhitepaperDownload />
        </BackgroundWithPaddingBottom>
      </Box>
    </Box>
  </DefaultLayout>
)

export default FrameWorks
