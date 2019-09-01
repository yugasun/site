import React from 'react'
import { Flex, Background, Box } from 'serverless-design-system'
import TitleWithIcon from '../TitleWithIcon'
import { P } from 'src/fragments/DesignSystem'
import styled from 'styled-components'

const BackgroundWithShadow = styled(Background)`
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(234, 234, 234, 0.3);

  &:hover {
    box-shadow: 2px 10px 24px 0 rgba(0, 0, 0, 0.08);
  }
`

const DotAndSpace = () => <P m={0}>•&nbsp;&nbsp;&nbsp;</P>
const Workshop = () => (
  <BackgroundWithShadow background='white' width='100%' height='100%'>
    <Flex
      flexDirection={['column', 'column', 'row']}
      py={[42, 42, 42, 42, 62]}
      px={[35, 35, 58, 58, 104]}
      justifyContent='space-between'
    >
      <Flex
        flexDirection='column'
        width={[1, 1, 0.5, 0.5, 0.4]}
        mr={[0, 0, '15px', '15px', 0]}
      >
        <TitleWithIcon>Customized Workshop</TitleWithIcon>
        <P>
          The custom 1-day workshop, led by a Serverless expert, is focused on
          helping you solve your most pressing Serverless challenges. Some
          common workshop agenda items include:
        </P>
      </Flex>
      <Flex
        mt={[22, 22, 55, 55, 62]}
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        width={[1, 1, 0.5, 0.5, 0.7]}
      >
        <Flex flexDirection='column' width={1}>
          <Flex>
            <DotAndSpace />
            <P m={0}>Standardizing Serverless tooling</P>
          </Flex>

          <Flex>
            <DotAndSpace />
            <P m={0}>Serverless development best practices and how-tos</P>
          </Flex>
          <Flex>
            <DotAndSpace />
            <P m={0}>Custom serverless use case templates</P>
          </Flex>
          <Flex>
            <DotAndSpace />
            <P m={0}>Architectural reviews and AWS best practices</P>
          </Flex>
        </Flex>
        <Flex flexDirection='column' width={1}>
          <Flex>
            <DotAndSpace />
            <P m={0}>
              DevOps strategies including CI/CD, security, operations, and more
            </P>
          </Flex>
          <Flex>
            <DotAndSpace />
            <P m={0}>Serverless API design patterns</P>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    <Box id={'support'} />
  </BackgroundWithShadow>
)

export default Workshop
