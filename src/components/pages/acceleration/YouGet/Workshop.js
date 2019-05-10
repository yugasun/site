import React from 'react'
import { Flex, Background } from 'serverless-design-system'
import TitleWithIcon from '../TitleWithIcon'
import { P } from 'src/fragments/DesignSystem'

const Workshop = () => (
  <Background background='white' width='100%' height='100%'>
    <Flex
      flexDirection={['column', 'column', 'row']}
      py={[42, 42, 45, 45, 62]}
      px={[35, 35, 58, 58, 104]}
      justifyContent='space-between'
    >
      <Flex flexDirection='column' width={[1, 1, 0.5, 0.5, 0.4]}>
        <TitleWithIcon>Customized Workshop</TitleWithIcon>
        <P>
          The custom 1-day workshop, led by a Serverless expert, is focused on
          helping you solve your most pressing Serverless challenges. Some
          common workshop agenda items include:
        </P>
      </Flex>
      <Flex
        mt={62}
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        width={[1, 1, 0.5, 0.5, 0.7]}
      >
        <Flex flexDirection='column' width={1}>
          <P m={0}>• Standardizing Serverless tooling</P>
          <P m={0}>• Serverless development best practices and how-tos</P>
          <P m={0}>• Custom serverless use case templates</P>
          <P m={0}>• Architectural reviews and AWS best practices</P>
        </Flex>
        <Flex flexDirection='column' width={1}>
          <P m={0}>
            • DevOps strategies including CI/CD, security, operations, and more
          </P>
          <P m={0}>• Serverless API design patterns</P>
        </Flex>
      </Flex>
    </Flex>
  </Background>
)

export default Workshop
