import React from 'react'
import { Flex, Background } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'

const Workshop = () => (
  <Background color='white' width='100%' height='100%'>
    <Flex flexDirection='column'>
      <P>Customized Workshop</P>
    </Flex>
    <Flex>
      <P>
        The custom 1-day workshop, led by a Serverless expert, is focused on
        helping you solve your most pressing Serverless challenges. Some common
        workshop agenda items include:
      </P>
    </Flex>
  </Background>
)

export default Workshop
