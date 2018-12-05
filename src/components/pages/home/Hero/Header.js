import React from 'react'

import { Column } from 'serverless-design-system'
import DesktopUpArrows from './DesktopUpArrows'
import { Heading, P, MobileCenteredBox } from 'src/fragments/DesignSystem'
import HeroGithub from './Github'

const HeroHeader = () => (
  <Column mt={[3]}>
    <DesktopUpArrows />
    <MobileCenteredBox>
        <HeroGithub />
    </MobileCenteredBox>
    <Heading.h3 color='white' align={['center', 'center', 'left']}>
      The most widely-adopted toolkit for building serverless applications.
    </Heading.h3>
    <P align={['center', 'center', 'left']} m={0}>
      Any provider. Same experience.
    </P>
  </Column>
)

export default HeroHeader