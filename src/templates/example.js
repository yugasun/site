import React from 'react'
import DefaultLayout from 'src/layouts/Default'
import Prefooter from 'src/components/pages/blog/Prefooter'
import ExampleContent from 'src/components/pages/example/ExampleContent'
import { Helmet } from 'src/fragments'

export default ({ data }) => (
  <DefaultLayout prefooter={Prefooter}>
   <Helmet />
   <ExampleContent {...data.Example }/>
  </DefaultLayout>
)

export const query = graphql`
  query ExampleDetails($exampleId: String!) {
    Example: example (id: { eq: $exampleId }) {
      id
      frontmatter {
        title,
        language,
        platform,
        description
      }
      content
    }
  }
`
