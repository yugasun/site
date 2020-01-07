import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>版本环境分离</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      在真实开发中我们可能需要对测试环境，开发环境，生产环境做分割。Serverless
      Framework
      可以在账号层级输出变量和参数分组到配置文件，以便开发者可以集中配置并将应用部署到相关环境。
    </P0>
  </Flex>
)

export default CustomPoliciesContent
