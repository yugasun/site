import React from 'react'

import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Newest'
import Hero from 'src/components/pages/learn/overview/Hero'
import Courses from 'src/components/pages/learn/overview/Courses'
import Tutorials from 'src/components/pages/learn/overview/Tutorials'
import Guides from 'src/components/pages/learn/overview/Guides'
import WhitepaperDownload from 'src/components/pages/learn/guide-prefooter/index.js'
import { NewToServerlessPrefooter } from 'src/fragments'
import { AppContainer } from 'src/components'
import { Background, Box } from 'serverless-design-system'

const FrameWorks = ({ location }) => (
  <DefaultLayout
    prefooter={NewToServerlessPrefooter}
    frameworkPage={false}
    startWithWhiteHeader={false}
  >
    <Helmet
      title='Free Serverless Courses &amp; Training'
      description='These free courses show you how to utilize the power of serverless offerings from AWS, Azure, Google Cloud using Serverless Framework'
      location={location}
    />
    <AppContainer>
      <Hero />
      <Courses />
      <Tutorials />
      <Guides />
    </AppContainer>

    <Box mt={[72, 72, 92, 92, 132]}>
      <Box>
        <Background
          background={[
            '#f7f7f7',
            '#f7f7f7',
            '#f7f7f7',
            '#f7f7f7',
            'linear-gradient(to bottom, #fff 40%, #f7f7f7 40%)',
          ]}
        >
          <WhitepaperDownload />
        </Background>
      </Box>
    </Box>
  </DefaultLayout>
)

export default FrameWorks
