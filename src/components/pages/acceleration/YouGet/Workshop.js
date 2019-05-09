import React from 'react'
import { Flex, Background } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'

const Workshop = () => (
  <Background background='white' width='100%' height='100%'>
    <Flex flexDirection='column' py={62} px={104}>
      <P>Customized Workshop</P>
      <P>
        The custom 1-day workshop, led by a Serverless expert, is focused on
        helping you solve your most pressing Serverless challenges. Some common
        workshop agenda items include:
      </P>
    </Flex>
  </Background>
)

export default Workshop
