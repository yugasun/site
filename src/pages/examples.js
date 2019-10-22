import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import { NewToServerlessPrefooter } from 'src/fragments'
import Hero from 'src/components/pages/examples/Hero'
import Content from 'src/components/pages/examples/Content'
import { Helmet } from 'src/fragments'

const Examples = ({ data: examples }) => {
  const edges = examples.allExample.edges.filter(
    examples => examples.node.frontmatter.title !== ''
  )

  return (
    <DefaultLayout
      prefooter={NewToServerlessPrefooter}
      transparentHeader={true}
    >
      <Helmet title='Serverless Examples Directory (90+ Examples w/ Filters)'
      description='Serverless Examples Explorer is a directory with 90+ examples of serverless applications &amp; architectures built using Serverless Framework filterable by cloud platforms &amp; programming languages' />
      <Hero />
      <Content examples={edges.map(({ node }) => node)} />
    </DefaultLayout>
  )
}

export const query = graphql`
  query Examples {
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

export default Examples
