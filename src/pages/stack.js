import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import { NewToServerlessPrefooterNewest as NewToServerlessPrefooter } from 'src/fragments'
import Hero from 'src/components/pages/stack/Hero'
import Content from 'src/components/pages/stack/Content'
import { Helmet } from 'src/fragments'

const Stack = ({ data: examples }) => {
  const edges = examples.allExample.edges.filter(
    examples => examples.node.frontmatter.title !== ''
  )

  return (
    <DefaultLayout
      prefooter={NewToServerlessPrefooter}
      transparentHeader={true}
    >
      <Helmet title='Serverless Stack Explorer | Serverless Functions Directory' />
      <Hero />
      <Content examples={edges.map(({ node }) => node)} />
    </DefaultLayout>
  )
}

export const query = graphql`
  query Stack {
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

export default Stack
