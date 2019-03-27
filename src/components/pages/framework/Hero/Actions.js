import React from 'react'
import { InternalLink } from 'src/fragments'
import { SecondaryButton } from 'src/fragments/DesignSystem'
import { Flex } from 'serverless-design-system'

const FrameworkHeroActions = () => (
  <Flex justifyContent='center' mb={4} mt={2}>
    <InternalLink to={'/framework/docs/getting-started/'}>
      <SecondaryButton>quick start</SecondaryButton>
    </InternalLink>
  </Flex>
)

export default FrameworkHeroActions
