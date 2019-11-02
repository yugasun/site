import React from 'react'

import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Newest'
import Hero from 'src/components/pages/learn/tutorial/Hero'
import Details from 'src/components/pages/learn/tutorial/Details'
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

const TutorialPage = ({location, pathContext}) => {
  return (
  <DefaultLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={false}
    frameworkPage={false}
    startWithWhiteHeader={false}
  >
    <Helmet
      title={`${pathContext.tutorial.title} (Free Video Tutorial)`}
      description={`${pathContext.tutorial.lessonInfo}`}
      location={location}
    />
    <Background background='#f7f7f7'>
        <AppContainer>
            <Hero title={pathContext.tutorial.title} 
            courseName={pathContext.courseName} 
            courseLink={pathContext.courseLink}
            />
        </AppContainer>
    </Background>
    <AppContainer>
      <Details  content={pathContext.tutorial} outline={pathContext.outline}/>
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
}

export default TutorialPage