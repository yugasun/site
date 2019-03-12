import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import { PL } from 'src/fragments/DesignSystem'

const UseCasesHero = () => (
  <HeroWrapper
    background={[
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      `linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`,
    ]}
    height={[422, 422, 581]}
  >
    <Box mb={[2, 2, 7]}>
      <HeroTabs selected='workshops' />
    </Box>

    <ResponsiveStack mb={[2, 2, 4, 7]} color='white'>
      <Box width={[1, 1, 3 / 4]}>
        <Text.p
          fontSize={[6, 6, 7, 8]}
          fontFamily='Soleil'
          lineHeight={1}
          letterSpacing={'-0.2'}
          m={0}
        >
          Workshops
        </Text.p>
      </Box>
      <Box width={[1, 1, 4 / 5]} pl={[0, 0, 4]} pr={[0, 0, 0]}>
        <PL color='white' mt={[3, 3, 1]} mb={3}>
          Serverless Developer Workshops are a full day focused on training for
          serverless development. Learn about testing, security and operations.
          These workshops will empower developers and technology leaders to
          operationalize serverless across their organization.
        </PL>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default UseCasesHero
