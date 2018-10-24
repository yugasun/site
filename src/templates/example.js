import React from 'react'
import DefaultLayout from 'src/layouts/DefaultNew'
import ExampleContent from 'src/components/pages/example/ExampleContent'
import { Helmet } from 'src/fragments'
import { NewToServerlessPrefooterNew as NewToServerlessPrefooter } from 'src/fragments'

export default ({ data }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter}>
   <Helmet {...data.Example.frontmatter }/>
   <ExampleContent {...data.Example }/>
  </DefaultLayout>
)

export const query = graphql`
  query ExampleDetails($exampleId: String!) {
    Example: example (id: { eq: $exampleId }) {
      id
      frontmatter {
        title
        language
        platform
        description
        authorLink
        authorName
        authorAvatar
        gitLink
      }
      content
    }
  }
`
