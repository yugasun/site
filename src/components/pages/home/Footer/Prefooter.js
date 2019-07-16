import React from 'react'
import { Flex, Column, Box } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import { TitleWithIconNewest as TitleWithIcon } from 'src/fragments'
import { AppContainer } from 'src/components'
import Terminal from './Terminal'
import FAQ from './FAQ'
import CTAButtons from './CTAButtons'

const HomePreFooter = () => (
  <AppContainer>
    <Flex
      pt={[122]}
      pb={[30, 30, 30, 30, 132]}
      px={[0, 0, 40, 40, 0]}
      flexDirection={['column', 'column', 'column', 'column', 'row']}
    >
      <Column width={[1, 1, 1, 1, 0.5]}>
        <TitleWithIcon color='white'>Have a question?</TitleWithIcon>
        <FAQ />
        <Box display={['none', 'none', 'none', 'none', 'block']}>
          <CTAButtons />
        </Box>
      </Column>
      <Column ml={[0, 0, 0, 0, 8]} mt={[92, 92, 136, 136, 0]}>
        <TitleWithIcon color='white'>New to serverless?</TitleWithIcon>
        <P mt={0}>Get started in 3 steps</P>
        <Terminal />
      </Column>
      <Box display={['block', 'block', 'block', 'block', 'none']}>
        <CTAButtons />
      </Box>
    </Flex>
  </AppContainer>
)

export default HomePreFooter
