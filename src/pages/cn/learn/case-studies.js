import React from 'react'
import graphql from 'graphql'
import DefaultLayout from 'src/layouts/cn/DefaultNewest'
import { NewToServerlessPrefooter } from 'src/fragments/cn'
import Hero from 'src/components/pages/cn/learn/case-studies/Hero'
import Content from 'src/components/pages/cn/learn/case-studies/Content'
import { Helmet } from 'src/fragments'

const CaseStudies = ({ location, data: caseStudies }) => {
  const edges = caseStudies.allCaseStudies.edges
    .filter(items => items.node.title !== '')
  return (
    <DefaultLayout
      prefooter={NewToServerlessPrefooter}
      transparentHeader={true}
    >
      <Helmet title='Serverless Case Studies' noIndex={true}/>
      <Hero />
      <Content casestudies={edges.map(({ node }) => node)} />
    </DefaultLayout>
  )
}

export const query = graphql`
  query CnCaseStudies {
    allCaseStudies(
      limit: 12
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            title
            description
            thumbnail
            gitLink
            authors
            authorslink
          }
        }
      }
    }
  }
`

export default CaseStudies