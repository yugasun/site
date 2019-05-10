import React from 'react'
import { Column, Background, Box } from 'serverless-design-system'
import TitleWithIcon from '../TitleWithIcon'
import { P } from 'src/fragments/DesignSystem'
import styled from 'styled-components'

const BackgroundWithShadow = styled(Background)`
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 500px) {
    border: solid 1px rgba(234, 234, 234, 0.3);
  }
`

const Enterprise = () => (
  <Box id={'tooling'}>
    <BackgroundWithShadow background='white' width='100%' height='100%'>
      <Column
        py={[42, 42, 42, 42, 62]}
        px={[35, 35, 58, 58, 104]}
        mt={[42, 42, 0]}
      >
        <TitleWithIcon>Serverless Framework Enterprise</TitleWithIcon>
        <P>
          The Serverless Acceleration Program includes licenses for Serverless
          Framework Enterprise to ensure you have the complete tooling needed to
          scale serverless development in production. From monitoring and
          debugging to secret management and team collaboration, Serverless
          Framework Enterprise will ensure you have the proper Serverless
          tooling standardized across your team.
        </P>
      </Column>
    </BackgroundWithShadow>
    <Box id={'acceleration-contact-form'} />
  </Box>
)

export default Enterprise
