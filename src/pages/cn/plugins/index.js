import React from 'react'

import DefaultLayout from 'src/layouts/cn/Newest'
import Hero from 'src/components/pages/cn/plugins/Hero'
import Content from 'src/components/pages/cn/plugins/Content'
import { Helmet, WhitepaperDownloadBanner } from 'src/fragments'
import { Background } from 'serverless-design-system'

const Plugins = ({ location, data: plugins }) => {
  const edges = plugins.allPlugin.edges
    .filter(plugins => plugins.node.frontmatter.title !== '')
    .reverse()

  return (
    <DefaultLayout transparentHeader={true} pathName={location.pathname}>
      <Helmet
        title='Serverless Plugins Directory (210+ Plugins w/ Download Count + Filters)'
        description='This serverless plugins explorer contains an option to filter by status so you know which serverless plugins are approved &amp; certified '
        noIndex={true}
      />
      <Hero />
      <Content plugins={edges.reverse().map(({ node }) => node)} />
      <Background background='#f7f7f7'>
        <WhitepaperDownloadBanner />
      </Background>
    </DefaultLayout>
  )
}

export const query = graphql`
  query CnPlugins {
    allPlugin(
      limit: 15
      sort: { fields: [frontmatter___npmDownloads], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
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

export default Plugins
