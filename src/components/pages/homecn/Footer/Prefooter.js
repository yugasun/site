import React from 'react'
import { Flex, Column } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import FAQ from './FAQ'
import CTAButtons from './CTAButtons'
import { Heading } from 'src/fragments/DesignSystem'
const HomePreFooter = ({ frameworkPage }) => (
  <AppContainer>
    <Flex
      pt={frameworkPage ? [62, 62, 92, 92, 162] : [62, 62, 92, 92, 162, 22]}
      pb={[30, 30, 30, 30, 92]}
      px={[0, 0, 40, 40, 0]}
      flexDirection={['column', 'column', 'column', 'column', 'row']}
      justifyContent='center'
    >
      <Column width={[1, 1, 1, 1, 800]}>
        <Heading.h4 color='white'>Have a question?</Heading.h4>
        <FAQ />
        <CTAButtons />
      </Column>
    </Flex>
  </AppContainer>
)

export default HomePreFooter
