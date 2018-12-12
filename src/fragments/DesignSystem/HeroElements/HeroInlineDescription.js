import React from 'react'
import { Flex, P } from 'serverless-design-system'

const HeroInlineDescription = ({ children }) => (
  <Flex.horizontallyCenter pb={1}>
    <P m={0} fontSize={['24px', '24px', '18px']} lineHeight={['32px', '32px', '24px']} color='white' align='center' fontFamily={['SoleilLt', 'SoleilLt', 'SoleilBk']} letterSpacing={[0, 0, '-0.28px']}>
      {children}
    </P>
  </Flex.horizontallyCenter>
)

export default HeroInlineDescription