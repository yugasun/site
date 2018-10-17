import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system'
import { HeroWrapper } from 'src/fragments'
import HeroTabs from '../HeroTabs'

const ExamplesHero = () => {
  return (
  <HeroWrapper
    background={['linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)', 'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',`linear-gradient(135deg, rgb(0, 0, 0) 75%, #70221f)`]}
    height={[422, 422, 490]}
  >
    <Box mb={[2, 2, 7]}>
      <HeroTabs
       selected='examples-and-guides'
      />
    </Box>

    <ResponsiveStack
      mb={[2, 2, 4, 9]}
      color='white'
    >
      <Box width={[1]}>
        <Text.p
          fontSize={[8, 7, 8]}
          fontFamily='SoleilLt'
          lineHeight={1.1}
          letterSpacing={'-2'}
          m={0}
          mt={[4,4,0,0]}
        >
          Examples
        </Text.p>        
      </Box>
      <Box
        width={[1, 1, 1, 1]}
        pl={[0, 0, 6]}
        pr={[0, 0, 2]}
      >
        <Text.p
          fontSize={[2, 2, 2, 4]}
          fontFamily={['SoleilBk', 'SoleilBk', 'SoleilLt']}
          lineHeight={3}
          letterSpacing={0}
          mt={[3, 3, 1]}
          mb={3}
        >
          Search our full examples repository for project examples using all languages and FaaS providers.
        </Text.p>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
  )
  }

export default ExamplesHero