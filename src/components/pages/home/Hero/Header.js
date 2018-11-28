import React from 'react'

import { Column } from 'serverless-design-system'
import DesktopUpArrows from './DesktopUpArrows'
import { Heading } from 'src/fragments/DesignSystem'

const HeroHeader = () => (
  <Column mt={[1,1,1]} width={['auto', 'auto', '696px']}>
    <DesktopUpArrows />
    <Heading.h1>
      The most widely-adopted toolkit for building serverless applications.
    </Heading.h1>
    <Heading.h4>
      Any provider. Same experience.
    </Heading.h4>
  </Column>
)

export default HeroHeader