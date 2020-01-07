import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
    <Heading.h3 mb={22}>监控视图</Heading.h3>

    <P0 mb={[42, 42, 0]}>
      打开 Serverless Framework
      Dashboard，即可轻松了解Serverless服务装填，包括错误提示，冷启动时间，超时，调用，请求方式等等。轻松浏览最新告警信息，并追踪排障。
      <br/>
      <br/>
      无需花费时间来测试代码，监控应用。在部署时，Serverless Framework
      会自动检测您的服务。
    </P0>
  </Flex>
)

export default IndustryStandardContent
