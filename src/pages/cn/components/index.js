import React from 'react'
import graphql from 'graphql'
import DefaultLayout from 'src/layouts/cn/Newest'
import Hero from 'src/components/pages/cn/components/Hero'
import Content from 'src/components/pages/cn/components/Content'
import { Helmet, WhitepaperDownloadBanner } from 'src/fragments'
import { Background } from 'serverless-design-system'

const Components = ({ location, data: components }) => {
  const edges = components.allCnComponent.edges
    .filter(components => components.node.frontmatter.title !== '')
    .reverse()

  return (
    <DefaultLayout transparentHeader={true} pathName={location.pathname}>
      <Helmet
        title='Serverless 组件 |  Serverless components'
        description='Serverless 组件是为比较高阶的用例（例如Express，Koa，Vue）构建的。开发者无需关系底层基础设备，提供更加简单，便捷的serverless部署体验。'
        keywords='Serverless组件,ServerlessExpress,ServerlessKoa, ServerlessVue, ServerlessLaravel'
        noIndex={true}
      />
      <Hero />
      <Content components={edges.reverse().map(({ node }) => node)} />
      {/*
      <Background background='#f7f7f7'>
        <WhitepaperDownloadBanner />
      </Background>
       */}
    </DefaultLayout>
  )
}

export const query = graphql`
  query CnComponents {
    allCnComponent(
      limit: 12
      sort: { fields: [frontmatter___npmDownloads], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            avatar
            title
            description
            gitLink
            npmDownloads
            githubStars
            status
          }
        }
      }
    }
  }
`

export default Components
