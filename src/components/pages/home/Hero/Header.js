import React from 'react'

import { Column } from 'serverless-design-system'
import { Heading, MobileCenteredBox } from 'src/fragments/DesignSystem'
import HeroGithub from './Logo'
import styled from 'styled-components'

const MobileCenteredTextBox = styled(MobileCenteredBox)`
  @media screen and (max-width: 415px) {
    text-align: center;
  }
`

const HeroHeader = () => (
  <Column>
    <MobileCenteredTextBox>
      <HeroGithub />
    </MobileCenteredTextBox>
    <Heading.h1 color='white' align={['center', 'center', 'left']} mb={0}>
      Build apps with radically less overhead and cost
    </Heading.h1>
  </Column>
)

export default HeroHeader
