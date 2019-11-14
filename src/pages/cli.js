import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { NewToServerlessPrefooter, WhitepaperDownloadBanner } from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/cli/Hero'
import Build from 'src/components/pages/cli/Build'
import Deploy from 'src/components/pages/cli/Deploy'
import Run from 'src/components/pages/cli/Run'
import MultipleCloudProviders from 'src/components/pages/cli/MultipleCloudProviders'
import CommunityNumbers from 'src/components/pages/cli/Community/index.js'

const CLI = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet
      title='Serverless CLI | Develop Serverless REST APIs, GraphQL APIs, Data Processing, Websites &amp; more'
      description='The most powerful CLI for building serverless architectures.  Develop AWS Lambda, API Gateway, AppSync, S3 based applications.  Develop AWS Lambda locally, deploy instantly, extend with plugins with the Serverless Framework CLI.'
      keywords='aws lambda, aws lambda development, aws lambda local, serverless rest apis, graphql'
      location={location}
    />
    <Hero />
    <Background background={'#fff'}>
      <AppContainer>
        <CommunityNumbers />
        <Build />
        <Deploy />
        <Run />
        <MultipleCloudProviders />
      </AppContainer>
    </Background>

    <Background
      background={[
        '#f7f7f7',
        '#f7f7f7',
        '#f7f7f7',
        '#f7f7f7',
        'linear-gradient(to bottom, #fff 40%, #f7f7f7 40%)',
      ]}
    >
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default CLI
