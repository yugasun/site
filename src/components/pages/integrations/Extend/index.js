import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P } from 'src/fragments/DesignSystem'
import { InternalLinkText } from 'src/fragments'
import { plugins, cli, components } from 'src/constants/newUrls'

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
      you can also use{' '}
      <InternalLinkText to={plugins}>Serverless Plugins</InternalLinkText> to
      integrate with the{' '}
      <InternalLinkText to={cli}>Serverless CLI</InternalLinkText>, and use{' '}
      <InternalLinkText to={components}>Components</InternalLinkText> to
      integrate with other service providers.
    </P>
  </Flex>
)

export default ExtendServerless
