import React from 'react'

import { Column } from 'serverless-design-system'
import DesktopUpArrows from './DesktopUpArrows'
import { Heading, P, MobileCenteredBox } from 'src/fragments/DesignSystem'
import HeroGithub from './Github'
import styled from 'styled-components'

const MobileCenteredTextBox = styled(MobileCenteredBox)`
  @media screen and (max-width: 415px) {
    text-align: center;
  }
`

const HeroHeader = () => (
  <Column>
    <DesktopUpArrows />
    <MobileCenteredTextBox>
        <HeroGithub />
    </MobileCenteredTextBox>
    <Heading.h3 color='white' align={['center', 'center', 'left']}>
      The most widely-adopted toolkit for building serverless applications.
    </Heading.h3>
    <P align={['center', 'center', 'left']} m={0} color='gray.2'>
      Any provider. Same experience.
    </P>
  </Column>
)

export default HeroHeader