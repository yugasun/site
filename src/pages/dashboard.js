import React from 'react'
import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/dashboard/Hero'
import SinglePane from 'src/components/pages/dashboard/SinglePane'
import StageSpecific from 'src/components/pages/dashboard/StageSpecific'
import SecurelyManaged from 'src/components/pages/dashboard/SecurelyManaged'
import ForTeams from 'src/components/pages/dashboard/ForTeams'
import { WhitepaperDownloadBanner } from 'src/fragments'

const Dashboard = ({ location }) => (
  <HomeLayout transparentHeader={true}>
    <Helmet 
    title='Serverless Dashboard | Visualize, Monitor & Collaborate on Serverless Architectures' 
    description='A comprehensive dashboard for your serverless architectures, featuring charts, alerts, functions, APIs, invocations, deployments of AWS Lambda, API Gateway, S3, DynamoDB and more.'
    keywords='serverless dashboard, serverless architecture, monitor serverless architectures, aws lambda dashboard'
    location={location} />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <SinglePane />
        <StageSpecific />
        <SecurelyManaged />
        <ForTeams />
      </AppContainer>
    </Background>

    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default Dashboard
