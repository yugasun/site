import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P } from 'src/fragments/DesignSystem'
import { InternalLink } from 'src/fragments'
import { plugins, components } from 'src/constants/urls'
import { cli } from 'src/constants/urls.cn'

const ExtendServerless = props => (
  <Flex
    flexDirection='column'
    mx='auto'
    width={[1, 1, 0.6, 0.5, '40%']}
    pb={[92, 92, 92, 92, 132]}
  >
    <Heading.h3 align={['left', 'left', 'center']}>
      使用插件和组件扩展 Serverless
    </Heading.h3>
    <P align={['left', 'left', 'center']}>
      如果您需要对Serverless Framework进行更深层次的集成，可以使用{' '}
      <InternalLink to={plugins} underline>
        Serverless 插件
      </InternalLink>{' '}
      与{' '}
      <InternalLink to={cli} underline>
        Serverless 命令行工具
      </InternalLink>
      ，并结合{' '}
      <InternalLink to={components} underline>
        Components
      </InternalLink>{' '}
      与云端服务进行集成。
    </P>
  </Flex>
)

export default ExtendServerless
