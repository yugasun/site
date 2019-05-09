import React from 'react'
import { Column, Background, Box } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'

const Enterprise = () => (
  <Box>
    <Background background='white' width='100%' height='100%'>
      <Column py={62} px={104}>
        <P>Serverless Framework Enterprise</P>
        <P>
          The Serverless Acceleration Program includes licenses for Serverless
          Framework Enterprise to ensure you have the complete tooling needed to
          scale serverless development in production. From monitoring and
          debugging to secret management and team collaboration, Serverless
          Framework Enterprise will ensure you have the proper Serverless
          tooling standardized across your team.
        </P>
      </Column>
    </Background>
  </Box>
)

export default Enterprise
