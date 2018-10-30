import React from 'react'

import { Column, Heading } from 'serverless-design-system'

const HeroHeader = () => (
  <Column mt={[1,1,3]} width={['auto', 'auto', '696px']}>
    <Heading.h1
      fontSize={['40px', '40px', '90px']}
      align='left'
      color='white'
      fontFamily={['Soleil', 'Soleil', 'SoleilLt']}
      mt={[0, 0, 4]}
      mb={[2, 2, 2]}
      lineHeight={['50px', '50px', '100px']}
      letterSpacing={[0, 0, '-2px']}
    >
      The radically simple way to build serverless applications
    </Heading.h1>
  </Column>
)

export default HeroHeader