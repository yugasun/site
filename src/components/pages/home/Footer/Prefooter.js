import React from 'react'
import { Flex, Column, Background } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import { TitleWithIconNewest as TitleWithIcon } from 'src/fragments'
import { AppContainer } from 'src/components'
import Terminal from './Terminal'
import FAQ from './FAQ'
import CTAButtons from './CTAButtons'

const HomePreFooter = () => (
  <Background background='black'>
    <AppContainer>
      <Flex
        pt={166}
        pb={162}
        flexDirection={['column', 'column', 'column', 'column', 'row']}
      >
        <Column width={[1, 1, 1, 1, 0.5]}>
          <TitleWithIcon color='white'>Have a question?</TitleWithIcon>
          <FAQ />
          <CTAButtons />
        </Column>
        <Column ml={8}>
          <TitleWithIcon color='white'>New to serverless?</TitleWithIcon>
          <P mt={0}>Get started in 3 steps</P>
          <Terminal />
        </Column>
      </Flex>
    </AppContainer>
  </Background>
)

export default HomePreFooter
