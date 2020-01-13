import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/cn/Newest'
import { NewToServerlessPrefooter, WhitepaperDownloadBanner } from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/cn/cli/Hero'
import Build from 'src/components/pages/cn/cli/Build'
import Deploy from 'src/components/pages/cn/cli/Deploy'
import Run from 'src/components/pages/cn/cli/Run'
import MultipleCloudProviders from 'src/components/pages/cn/cli/MultipleCloudProviders'
import CommunityNumbers from 'src/components/pages/cn/cli/Community/index.js'

const CLI = ({ location }) => (
  <HomeLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    pathName={location.pathname}
    noIndex={true}
  >
    <Helmet
      title='Serverless 命令行工具 | Serverless CLI'
      description='提供开箱即用的Serverless自动化构建和最佳实践。开发者可以专注于构建复杂的，事件驱动的无服务器架构。'
      keywords='Serverless命令行工具,ServerlessCLI,Serverless REST APIs, GraphQL APIs'
      location={location}
    />
    <Hero />
    <Background background={'#fff'}>
      <AppContainer>
        <CommunityNumbers />
        <Build />
        <Deploy />
        <Run />
        {/* <MultipleCloudProviders /> */}
      </AppContainer>
    </Background>

    {/*
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
     */}
  </HomeLayout>
)

export default CLI
