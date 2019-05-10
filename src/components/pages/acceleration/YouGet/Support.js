import React from 'react'
import { Column, Background, Box } from 'serverless-design-system'
import TitleWithIcon from '../TitleWithIcon'
import { P } from 'src/fragments/DesignSystem'

const Support = () => (
  <Box mr={[0, 0, 15, 15, 32]}>
    <Background background='white' width='100%' height='100%'>
      <Column py={[42, 42, 45, 45, 62]} px={[45, 45, 58, 58, 104]}>
        <TitleWithIcon color='black'>Dedicated Support</TitleWithIcon>
        <P>
          The Serverless Acceleration Program includes a 1-year dedicated
          support contract to ensure that you have the assistance you need to
          evolve and grow your serverless development. Our Serverless experts,
          who built the Serverless Framework, will be available to help with
          Serverless devlopment issues, Serverless best practices,
          troubleshooting, configuration and deployment assistance, and AWS
          services inquiries.
        </P>
      </Column>
    </Background>
  </Box>
)

export default Support
