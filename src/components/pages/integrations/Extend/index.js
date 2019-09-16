import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P } from 'src/fragments/DesignSystem'

const ExtendServerless = props => (
  <Flex
    flexDirection='column'
    mx='auto'
    width={[1, 1, 0.6, 0.5, '40%']}
    pb={[92, 92, 92, 92, 132]}
  >
    <Heading.h3 align={['left', 'left', 'center']}>
      Extend Serverless with Plugins and Components
    </Heading.h3>
    <P align={['left', 'left', 'center']}>
      If you need to setup even deeper integration with Serverless Framework,
      you can also use Serverless Plugins to integrate with the Serverless CLI,
      and use Components to integrate with other service providers.
    </P>
  </Flex>
)

export default ExtendServerless
