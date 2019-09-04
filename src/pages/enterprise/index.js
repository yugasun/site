import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Home'
import Hero from 'src/components/pages/enterprise/Hero'
import Brands from 'src/components/pages/enterprise/Brands'
import Form from 'src/components/pages/enterprise/Form'
import { NewToServerlessPrefooter } from 'src/fragments'
import { Background, Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import WhitepaperDownloadBanner from 'src/components/pages/framework/Whitepaper'
import styled from 'styled-components'

const FormBoxWithBigDesktopFix = styled(Box)`
  @media only screen and (min-width: 1919px) {
    margin-top: -287px;
  }

  @media only screen and (max-width: 416px) {
    margin-top: -87px;
  }
`

const Enterprise = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} startWithWhiteHeader={false}>
    <Helmet title='Serverless Framework Enterprise' location={location} />
    <Hero />
    <Background background={'black'}>
      <AppContainer>
        <FormBoxWithBigDesktopFix>
          <Form customPb={[74, 74, 74, 74, 115]} />
        </FormBoxWithBigDesktopFix>
        <Brands />
      </AppContainer>
    </Background>

    <Background background='black'>
      <Box pb={[0, 0, 0, 0, 0, 142]}>
        <WhitepaperDownloadBanner />
      </Box>
    </Background>
  </HomeLayout>
)

export default Enterprise
