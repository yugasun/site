import React from 'react'

import { Column, Heading } from 'serverless-design-system'
import DesktopUpArrows from './DesktopUpArrows'

const HeroHeader = () => (
  <Column mt={[1,1,1]} width={['auto', 'auto', '696px']}>
    <DesktopUpArrows />
    <Heading.h1
      fontSize={['32px', '32px', '48px']}
      align={['center', 'center', 'left']}
      color='white'
      fontFamily={'Soleil'}
      mt={[0, 0, 4]}
      mb={[2, 2, 2]}
      lineHeight={['44px', '44px', '62px']}
      letterSpacing={[0, 0, '0.5px']}
    >
      The most widely-adopted toolkit for building serverless applications.
    </Heading.h1>
    <Heading.h4
      color='white'
      fontSize={['24px']}
      lineHeight={['32px', '32px', '44px']}
      letterSpacing={['-0.4px', '-0.4px', '-0.5px']}
      fontFamily={'Soleil'}
      align={['center', 'center', 'left']}
    >
      Any provider. Same experience.
    </Heading.h4>
  </Column>
)

export default HeroHeader