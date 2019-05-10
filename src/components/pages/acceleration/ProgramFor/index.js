import React from 'react'
import { P } from 'src/fragments/DesignSystem'
import { Flex, Box } from 'serverless-design-system'
import TitleWithIcon from '../TitleWithIcon'
import { AppContainerNewest as AppContainer } from 'src/components'

const WhoIsThisProgramFor = () => (
  <AppContainer>
    <Flex
      width={[1]}
      flexDirection='column'
      alignItems='center'
      mx='auto'
      pt={[96, 96, 96, 96, 136]}
    >
      <TitleWithIcon>Who the program is for</TitleWithIcon>
      <Box display={['none', 'none', 'none', 'none', 'block']}>
        <Flex width={0.85}>
          <Box width={0.75} mr={32}>
            <P color='#5b5b5b' mt={0}>
              The Serverless Accelerator Program is designed for development
              teams that are interested in doing Serverless development right.
              If you've realized the value that Serverless, from faster time to
              market to lower total cost of ownership, and would like assistance
            </P>
          </Box>
          <Box width={0.75}>
            <P color='#5b5b5b' mt={0}>
              with standardizing tooling, defining best practices, architectural
              design, deployment strategies, and training your team then the
              Serverless Accelerator Program is probably right for you.
            </P>
          </Box>
        </Flex>
      </Box>
      <Box display={['block', 'block', 'block', 'block', 'none']}>
        <Flex width={[1, 1, 0.7]} justifyContent='center' mx='auto'>
          <P color='#5b5b5b' mt={0} align='center'>
            The Serverless Accelerator Program is designed for development teams
            that are interested in doing Serverless development right. If you've
            realized the value that Serverless, from faster time to market to
            lower total cost of ownership, and would like assistance with
            standardizing tooling, defining best practices, architectural
            design, deployment strategies, and training your team then the
            Serverless Accelerator Program is probably right for you.
          </P>
        </Flex>
      </Box>
    </Flex>
  </AppContainer>
)

export default WhoIsThisProgramFor
