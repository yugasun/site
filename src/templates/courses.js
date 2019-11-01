import React from 'react'

import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Newest'
import Hero from 'src/components/pages/learn/course/Hero'
import Details from 'src/components/pages/learn/course/Details'
import WhitepaperDownload from 'src/components/pages/learn/guide-prefooter/index.js'
import { NewToServerlessPrefooter } from 'src/fragments'
import { AppContainer } from 'src/components'
import { Background, Box } from 'serverless-design-system'
import styled from 'styled-components'

const BackgroundWithPaddingBottom = styled(Background)`
  @media only screen and (min-width: 1601px) {
    background: linear-gradient(to bottom, #fff 40%, #f7f7f7 40%);
  }
`

const Courses = ({ location, pathContext: {course} }) => (
  <DefaultLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    frameworkPage={false}
    startWithWhiteHeader={false}
  >
    <Helmet
      title={course.metaTitle}
      description={course.metaDescription}
      location={location}
    />
    <Hero {...course} />
    <AppContainer>
      <Details {...course} />
    </AppContainer>
    <Box mt={[72, 72, 92, 92, 132]}>
      <Background background='#fff'>
        <BackgroundWithPaddingBottom background='linear-gradient(to bottom, #fff 60%, #f7f7f7 40%);'>
          <WhitepaperDownload />
        </BackgroundWithPaddingBottom>
      </Background>
    </Box>
  </DefaultLayout>
)

export default Courses
