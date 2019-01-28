import React from 'react'
import { Button } from 'src/fragments/DesignSystem'
import { Flex } from 'serverless-design-system'

const FrameworkHeroActions = () => (
  <Flex justifyContent='center' mt={[4, 4, 4, 4, 4]}>
    <a href='#enterprise-contact-form'>
      <Button>see the demo</Button>
    </a>
  </Flex>
)

export default FrameworkHeroActions
