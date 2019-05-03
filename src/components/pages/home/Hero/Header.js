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
    <HeroGithub />
    <Heading.h1
      color='white'
      align={['left']}
      mb={0}
      fontSize={['40px', '40px', '48px']}
      lineHeight={['50px', '50px', '62px']}
      letterSpacing={[0, 0, '0.5px']}
    >
      Build apps with radically less overhead and cost
    </Heading.h1>
  </Column>
)

export default HeroHeader
