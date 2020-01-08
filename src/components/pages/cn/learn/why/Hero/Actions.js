import React from 'react'
import { Flex, Text } from 'serverless-design-system'

const RightSection = () => (
  <Flex.column
    width={[1, 1, 0.75, 0.5, 0.5, 4 / 5]}
    pl={[0, 0, 4]}
    pr={[0, 0, 0]}
    alignItems='center'
    justifyContent='flex-end'
  >
    <Text.p
      fontSize={[2, 2, 4]}
      fontFamily='SoleilLt'
      lineHeight={3}
      letterSpacing={0}
      mt={[3, 3, 0]}
      mb={3}
      color='white'
    >
      就像WIFI在某处有网线一样，Serverless架构仍然在某处有具体的服务器。
      <br />
      <br />
      “Serverless”的真正含义是，作为开发者，您不必考虑这些服务器，只需关注自己的代码。
    </Text.p>
  </Flex.column>
)

export default RightSection
