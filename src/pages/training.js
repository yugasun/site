import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import Brands from 'src/components/pages/training/Brands'
import Content from 'src/components/pages/training/Content'
import Form from 'src/components/pages/training/Form'
import { NewToServerlessPrefooter } from 'src/fragments'
import { Background, Flex } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import WhitepaperDownloadBanner from 'src/components/pages/framework/Whitepaper'

const Support = ({ location }) => (
  <HomeLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    startWithWhiteHeader={true}
  >
    <Helmet title='Serverless Training' location={location} />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Flex
          pt={[138, 138, 138, 138, 156]}
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

export default Support
