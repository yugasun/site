import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { NewToServerlessPrefooter, WhitepaperDownloadBanner } from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/cicd/Hero'
import PreviewDeploys from '../components/pages/cicd/PreviewDeploys'
import SecurityBuiltIn from '../components/pages/cicd/SecurityBuiltIn'
import EasySetup from '../components/pages/cicd/EasySetup'
import WorkflowGuide from '../components/pages/cicd/WorkflowGuide'
import FAQ from '../components/pages/cicd/FAQ'
import Optimized from '../components/pages/cicd/Optimized'

const CiCd = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet title='Serverless CI/CD | Continuous Deployment Optimized for Serverless Architectures using AWS Lambda, S3, API Gateway & more.' 
    description='Easy, zero-maintenance continuous delivery designed for serverless architectures.  Easily connect your AWS, Github accounts and instantly deploy AWS Lambda, API Gateway, AWS S3 and more in a standardized deployment pipeline helping teams move fast, safely.'
    keywords='aws lambda deployment, serverless ci/cd, serverless continuous delivery'
    location={location} />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Optimized />
        <EasySetup/>
        <PreviewDeploys/>
        <SecurityBuiltIn/>
        <WorkflowGuide/>
        <FAQ/>
      </AppContainer>
    </Background>

    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default CiCd
