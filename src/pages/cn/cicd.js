import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/cn/Newest'
import {
  NewToServerlessPrefooter,
  WhitepaperDownloadBanner,
} from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/cn/cicd/Hero'
import PreviewDeploys from 'src/components/pages/cn/cicd/PreviewDeploys'
import SecurityBuiltIn from 'src/components/pages/cn/cicd/SecurityBuiltIn'
import EasySetup from 'src/components/pages/cn/cicd/EasySetup'
import WorkflowGuide from 'src/components/pages/cn/cicd/WorkflowGuide'
import FAQ from 'src/components/pages/cn/cicd/FAQ'
import Optimized from 'src/components/pages/cn/cicd/Optimized'

const CiCd = ({ location }) => (
  <HomeLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    pathName={location.pathname}
  >
    <Helmet
      title='Serverless CI/CD'
      description='Serverless CI/CD是一套针对Serverless应用开发的工作流,它包括自动化测试和自动化部署。如果您是Serverless老用户,只需简单配置,即可轻松使用该CI/CD工作流。'
      keywords='Serverless  CI/CD,Serverless工作流,ServerlessCI配置,Serverless部署'
      location={location}
    />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Optimized />
        <EasySetup />
        <PreviewDeploys />
        {/*
          <SecurityBuiltIn />
        <WorkflowGuide />
        <FAQ />
         */}
      </AppContainer>
    </Background>

    {/*
      <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
     */}
  </HomeLayout>
)

export default CiCd
