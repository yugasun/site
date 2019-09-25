import React from 'react'

import { Box, Text, ResponsiveStack, Flex } from 'serverless-design-system'
import { HeroWrapperWithTabs as HeroWrapper } from 'src/fragments'
import HeroTabs from 'src/components/pages/resources/HeroTabs.js'
import { Heading } from 'src/fragments/DesignSystem'

const PartnersHero = () => {
  return (
    <HeroWrapper
      height={[450, 490, 480, 570, 515, 485]}
    >
      <HeroTabs selected='partners' />

      <ResponsiveStack mb={[2, 2, 4, 9]} color='white'>
        <Box width={[1]}>
          <Heading.h0 m={0}>Partners</Heading.h0>
        </Box>
        <Flex.verticallyCenter width={[1, 1, 1, 1]} px={[0, 0, 2]}>
          <Text.p
            fontSize={[2, 2, 2, 4]}
            fontFamily={['SoleilBk', 'SoleilBk', 'SoleilLt']}
            lineHeight={[1.63, 1.63, 1.33]}
            letterSpacing={0}
            mt={[22, 22, 1.5]}
            mb={0}
          >
            Serverless enables developers to prototype new features and get to
            market, fast. Our Serverless Partner Network is full of
            serverless-forward organizations, vetted by us, who are experts on
            modern development stacks and serverless ecosystems. Feel free to
            start up a conversation with them about your business needs.
          </Text.p>
        </Flex.verticallyCenter>
      </ResponsiveStack>
    </HeroWrapper>
  )
}

export default PartnersHero
