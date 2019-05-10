import React from 'react'
import { Column, Background, Box } from 'serverless-design-system'
import TitleWithIcon from '../TitleWithIcon'
import { P } from 'src/fragments/DesignSystem'
import styled from 'styled-components'

const BackgroundWithShadow = styled(Background)`
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(234, 234, 234, 0.3);
`

const Support = () => (
  <Box mr={[0, 0, 15, 15, 32]}>
    <BackgroundWithShadow background='white' width='100%' height='100%'>
      <Column py={[42, 42, 42, 42, 62]} px={[35, 35, 58, 58, 104]}>
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
    </BackgroundWithShadow>
  </Box>
)

export default Support
