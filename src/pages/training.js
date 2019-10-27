import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import Brands from 'src/components/pages/training/Brands'
import Content from 'src/components/pages/training/Content'
import Hero from 'src/components/pages/training/Hero'
import Form from 'src/components/pages/training/Form'
import { NewToServerlessPrefooter, WhitepaperDownloadBanner } from 'src/fragments'
import { Background, Flex } from 'serverless-design-system'
import { AppContainer } from 'src/components'

const Support = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet title='Serverless Training - AWS Lambda Workshops &amp; More' 
    description='Accelerate your serverless adoption via our training - our workshops cover AWS Lambda, API Gateway, Amazon DynamoDB & other serverless related technologies.'
    location={location} />
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

export default Support
