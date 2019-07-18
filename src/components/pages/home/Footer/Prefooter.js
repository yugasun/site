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
      pt={[62, 62, 92, 92, 22]}
      pb={[30, 30, 30, 30, 92]}
      px={[0, 0, 40, 40, 0]}
      flexDirection={['column', 'column', 'column', 'column', 'row']}
      justifyContent='center'
    >
      <Column width={[1, 1, 1, 1, 800]}>
        <TitleWithIcon color='white'>Have a question?</TitleWithIcon>
        <FAQ />
        <Box display={['none', 'none', 'none', 'none', 'block']}>
          <CTAButtons />
        </Box>
      </Column>
      <Box display={['block', 'block', 'block', 'block', 'none']}>
        <CTAButtons />
      </Box>
    </Flex>
  </AppContainer>
)

export default HomePreFooter
