import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNew'
import { NewToServerlessPrefooterNew as NewToServerlessPrefooter } from 'src/fragments'
import Hero from 'src/components/pages/plugins/Hero'
import Content from 'src/components/pages/plugins/Content'
import { Helmet } from 'src/fragments'

const Plugins = ({ data: examples }) => {
  const edges = examples.allExample.edges.filter(
    examples => examples.node.frontmatter.title !== ''
  )

  return (
    <DefaultLayout
      prefooter={NewToServerlessPrefooter}
      transparentHeader={true}
    >
      <Helmet title='Plugins Explorer | Serverless Plugins Directory' />
      <Hero />
      <Content examples={edges.map(({ node }) => node)} />
    </DefaultLayout>
  )
}

export const query = graphql`
  query Plugins {
    allExample(
      limit: 15
      sort: { fields: [frontmatter___highlighted], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            platform
            language
            description
            gitLink
          }
        }
      }
    }
  }
`

export default Plugins
