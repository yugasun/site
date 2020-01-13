import React from 'react'
import { Flex, Box, Text } from 'serverless-design-system'
import { Heading, P } from 'src/fragments/DesignSystem'

const paragraphs = [
  `1. 只关注自己的代码，无需重复构建服务器.,环境等基础设施。`,
  `2. 支持云端调用，无状态计算，时间驱动，API调用，开放源代码。`,
  `3. 保持代码轻量，简洁。`,
  `4. 没有实例，服务器，或者容器概念。`,
  `5. 将客户满意作为开发工程的重中之重。`,
  `6. 提供最大限度的服务选择自由。`,
  `7. 关注产品目标和技术可复用。`,
  `8. 在编写代码之前进行必要的配置。`,
  `9. 拥有构建架构的完整生命周期。`,
  `10. 全新的应用部署。`,
]

const Commandments = props => (
  <Flex mt={[62, 62, 92, 92, 132]} flexDirection={['column', 'column', 'row']}>
    <Box width={[1, 1, 0.45]}>
      <Flex width={[1, 1, 0.7]} flexDirection='column'>
        <Heading.h3>Serverless 基本原则</Heading.h3>
        <Text
          color='#8c8c8c'
          fontFamily='SoleilBk'
          fontSize='18px'
          lineHeight='30px'
          letterSpacing='-0.28px'
          mb={[32, 32, 0]}
        >
        定义无服务器Serverless的基本原则:
        </Text>
      </Flex>
    </Box>
    <Box width={[1, 1, 0.55]}>
      {paragraphs.map((paragraph, index) => (
        <P
          key={index}
          mt={0}
          mb={20}
          pt={index !== 0 ? 16 : 0}
          style={index !== 0 ? { borderTop: '1px solid #9b9b9b' } : {}}
        >
          {paragraph}
        </P>
      ))}
    </Box>
  </Flex>
)

export default Commandments
