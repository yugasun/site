import React from 'react'
import { Flex, Column, Background } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import { AppContainerNewest as AppContainer } from 'src/components'
import Terminal from './Terminal'
import FAQ from './FAQ'

const HomePreFooter = () => (
  <Background background='black'>
    <AppContainer>
      <Flex>
        <Column width={0.5}>
          <P>Have a question?</P>
          <FAQ />
        </Column>
        <Column>
          <P>New to serverless?</P>
          <P>Get started in 3 steps</P>
          <Terminal />
        </Column>
      </Flex>
    </AppContainer>
  </Background>
)

export default HomePreFooter
