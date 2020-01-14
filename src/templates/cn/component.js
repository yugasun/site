import React from 'react'
import DefaultLayout from 'src/layouts/cn/DefaultNewest'
import ComponentContent from 'src/components/pages/cn/component/ComponentContent'
import { Helmet } from 'src/fragments'
import { NewToServerlessPrefooter } from 'src/fragments/cn'

const ComponentPage = ({ data }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter} footerBackground={false}>
    <Helmet
      title={data.CnComponent.frontmatter.seoTitle}
      description={data.CnComponent.frontmatter.description}
    />
    <ComponentContent {...data.CnComponent} />
  </DefaultLayout>
)

module.exports = ComponentPage

export const query = graphql`
  query ComponentDetails($componentId: String!) {
    CnComponent: cnComponent(id: { eq: $componentId }) {
      id
      frontmatter {
        avatar
        title
        description
        authorLink
        authorName
        gitLink
        seoTitle
      }
      content
    }
  }
`
