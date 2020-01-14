import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const EasySetupContent = props => (
  <Flex flexDirection="column" width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>易于设置，零维护</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      连接到Github账户，选择您的存储库，就可以进行测试和部署。在仓库中无需再配置步骤，shell脚本，测试命令，依赖项安装，部署命令或配置文件。
      <br />
      <br />
      Serverless CI/CD 会检查存储库中的 serverless.yml 并自动配置测试和部署。
    </P0>
  </Flex>
)

export default EasySetupContent
