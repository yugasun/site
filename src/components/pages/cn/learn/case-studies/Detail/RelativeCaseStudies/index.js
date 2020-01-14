import React from 'react'
import { Relative, Background, ResponsiveStack } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import CaseStudiesCard from './CaseStudiesCard'

const CardContainer = ({ children }) => (
  <Relative width={[1, 1, 0.49]} height={[300, 300, 400]} my={1}>
    {children}
  </Relative>
)

export default ({ caseStudies }) => (
  <Relative my={5}>
    <AppContainer>
      <ResponsiveStack justifyContent='space-between'>
        {caseStudies.map(({ id, frontmatter }, index) => (
          <CardContainer key={`relative-${index}`}>
            <CaseStudiesCard id={id} frontmatter={frontmatter} />
          </CardContainer>
        ))}
      </ResponsiveStack>
    </AppContainer>
  </Relative>
)
