import React from 'react'
import { Button } from 'src/fragments/DesignSystem'
import { Flex } from 'serverless-design-system'
import { HeroActionsNew as HeroActions } from 'src/fragments'

const FrameworkHeroActions = () => (
  <HeroActions
    firstBtn={{
      name: 'see the demo',
      to: '#enterprise-contact-form',
      anchorLink: true,
    }}
    secondBtn={{
      name: 'get support',
      to: '#enterprise-contact-form',
      anchorLink: true,
    }}
    flexDirection={['column', 'column', 'row']}
    justifyContent='center'
  />
)

export default FrameworkHeroActions
