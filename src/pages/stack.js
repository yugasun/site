import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import { NewToServerlessPrefooter } from 'src/fragments'
import Hero from 'src/components/pages/stack/Hero'
import Content from 'src/components/pages/stack/Content'
import { Helmet } from 'src/fragments'

const stacks = ({ data: stacks }) => {
  const edges = stacks.allStacks.edges.filter(stack => stack.node.name !== '')

  return (
    <DefaultLayout
      prefooter={NewToServerlessPrefooter}
      transparentHeader={true}
    >
      <Helmet title='Serverless Stack Explorer' />
      <Hero />
      <Content stacks={edges.map(({ node }) => node)} />
    </DefaultLayout>
  )
}

export const query = graphql`
  query Stacks {
    allStacks(limit: 13, filter: { highlighted: { eq: true } }) {
      totalCount
      edges {
        node {
          id
          name
          provider
          category
          otherFallbackCategory
          link
        }
      }
    }
  }
`

export default stacks
