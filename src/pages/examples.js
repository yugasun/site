import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNew'
import { NewToServerlessPrefooterNew as NewToServerlessPrefooter } from 'src/fragments'
import Hero from 'src/components/pages/examples/Hero'
import Content from 'src/components/pages/examples/Content'
import { Helmet } from 'src/fragments'

const Examples = ({ data: examples }) => {
  const edges = examples.allExample.edges.filter(examples => examples.node.frontmatter.title !== '')
  
  return (
    
    <DefaultLayout prefooter={NewToServerlessPrefooter} footerBackground={false} transparentHeader={true}>
       <Helmet title='Examples Explorer | Serverless Functions Directory' />
       <Hero />
       <Content examples={edges.map(({ node }) => node)} />
    </DefaultLayout>
  )
}

export const query = graphql`
  query Examples {
    allExample(
    limit: 15,
    sort: {fields: [frontmatter___highlighted], order: ASC}) {
        totalCount
        edges {
            node {
              id
              frontmatter {
                title
                platform
                language
                description
              }
            }
        }
      }
  }
`

export default Examples
