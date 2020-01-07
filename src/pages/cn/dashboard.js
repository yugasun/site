import React from 'react'
import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/cn/Newest'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/cn/dashboard/Hero'
import SinglePane from 'src/components/pages/cn/dashboard/SinglePane'
import StageSpecific from 'src/components/pages/cn/dashboard/StageSpecific'
import SecurelyManaged from 'src/components/pages/cn/dashboard/SecurelyManaged'
import ForTeams from 'src/components/pages/cn/dashboard/ForTeams'
import { WhitepaperDownloadBanner } from 'src/fragments'

const Dashboard = ({ location }) => (
  <HomeLayout transparentHeader={true} pathName={location.pathname}>
    <Helmet
      title='Serverless 仪表盘 |  Serverless Dashboard'
      description='Serverless 组件是为比较高阶的用例（例如Express，Koa，Vue）构建的。开发者无需关系底层基础设备，提供更加简单，便捷的serverless部署体验。'
      keywords='Serverless组件,ServerlessExpress,ServerlessKoa, ServerlessVue, ServerlessLaravel'
      location={location}
      noIndex={true}
    />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <SinglePane />
        <StageSpecific />
        {/* <SecurelyManaged /> */}
        <ForTeams />
      </AppContainer>
    </Background>

    {/*
      <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
     */}
  </HomeLayout>
)

export default Dashboard
