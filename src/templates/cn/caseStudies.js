import React from 'react'
import { Helmet } from 'src/fragments'
import schema from 'src/constants/schema.js'
import CaseStudiesLayout from 'src/layouts/cn/CaseStudies'
import { NewToServerlessPrefooter } from 'src/fragments/cn'
import CaseStudiesContent from 'src/components/pages/cn/learn/case-studies/Detail/CaseStudiesContent'
import RelativeCaseStudiess from 'src/components/pages/cn/learn/case-studies/Detail/RelativeCaseStudies'

const CaseStudiesTemplate = ({
  data: { currentCaseStudies, previousCaseStudies, nextCaseStudies },
  location,
}) => (
  <CaseStudiesLayout prefooter={NewToServerlessPrefooter} prefooterOnlyDesktop>
    <Helmet {...currentCaseStudies.frontmatter} location={location} />
    <CaseStudiesContent {...currentCaseStudies} />
    {
      /*
    <RelativeCaseStudiess caseStudies={[previousCaseStudies, nextCaseStudies]} />
       */
    }
  </CaseStudiesLayout>
)

export default CaseStudiesTemplate

export const query = graphql`
  query CaseStudiesDetails(
    $caseStudiesId: String!
    $previousCaseStudiesId: String!
    $nextCaseStudiesId: String!
  ) {
    currentCaseStudies: caseStudies(id: { eq: $caseStudiesId }) {
      id
      frontmatter {
        title
        date
        description
        authors
        authorslink
        thumbnail
        gitLink
      }
      content
    }

    previousCaseStudies: caseStudies(id: { eq: $previousCaseStudiesId }) {
      id
      frontmatter {
        title
        date
        description
        authors
        authorslink
        thumbnail
        gitLink
      }
    }

    nextCaseStudies: caseStudies(id: { eq: $nextCaseStudiesId }) {
      id
      frontmatter {
        title
        date
        description
        authors
        authorslink
        thumbnail
        gitLink
      }
    }
  }
`
