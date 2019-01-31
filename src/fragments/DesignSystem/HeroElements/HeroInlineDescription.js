import React from 'react'
import { Flex, P } from 'serverless-design-system'

const HeroInlineDescription = ({ children }) => (
  <Flex.horizontallyCenter pb={1}>
    <P
      m={0}
      fontSize={['18px']}
      lineHeight={['24px']}
      color='white'
      align='center'
      fontFamily={['SoleilBk']}
      letterSpacing={['-0.28px']}
    >
      {children}
    </P>
  </Flex.horizontallyCenter>
)

export default HeroInlineDescription
