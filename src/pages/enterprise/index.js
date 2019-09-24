import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import Brands from 'src/components/pages/enterprise/Brands'
import Content from 'src/components/pages/enterprise/Content'
import Hero from 'src/components/pages/enterprise/Hero'
import Form from 'src/components/pages/enterprise/Form'
import { NewToServerlessPrefooter, WhitepaperDownloadBanner } from 'src/fragments'
import { Background, Flex } from 'serverless-design-system'
import { AppContainer } from 'src/components'

const Enterprise = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet
      title='Serverless Framework Enterprise | Contact Us'
      location={location}
    />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Flex
          justifyContent='space-between'
          flexDirection={['column', 'column', 'column', 'column', 'row']}
        >
          <Content />
          <Form customPb={[74, 74, 74, 74, 115]} />
        </Flex>
        <Brands />
      </AppContainer>
    </Background>

    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default Enterprise
