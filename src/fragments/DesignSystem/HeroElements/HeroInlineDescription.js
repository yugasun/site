import React from 'react'
import { Flex, P } from 'serverless-design-system'

const HeroInlineDescription = ({ children }) => (
  <Flex.horizontallyCenter px={[2, 2, 0]} pb={1}>
    <P m={0} fontSize={'2.4rem'} lineHeight={'32px'} color='white' align='center' fontFamily='SoleilLt'>
      {children}
    </P>
  </Flex.horizontallyCenter>
)

export default HeroInlineDescription