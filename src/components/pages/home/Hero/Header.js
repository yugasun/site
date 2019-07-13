import React from 'react'

import { Column } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'

const HeroHeader = () => (
  <Column width={0.5}>
    <Heading.h1
      color='#000000'
      mb={0}
      fontSize={['40px', '40px', '48px']}
      lineHeight={['50px', '50px', '62px']}
      letterSpacing={[0, 0, '0.5px']}
      align='center'
      mt={3}
    >
      Build apps with radically less overhead and cost
    </Heading.h1>
  </Column>
)

export default HeroHeader
