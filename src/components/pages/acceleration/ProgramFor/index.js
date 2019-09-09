import React from 'react'
import { P, Heading } from 'src/fragments/DesignSystem'
import { Flex, Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'

const WhoIsThisProgramFor = () => (
  <AppContainer>
    <Flex
      width={[1]}
      flexDirection='column'
      alignItems='center'
      mx='auto'
      pt={[96, 96, 96, 96, 136]}
    >
      <Heading.h4
        color='black'
        fontSize={[18, 18, 18, 18, 24]}
        lineHeight={['24px', '24px', '30px', '30px', '38px']}
        letterSpacing={['-0.28px', '-0.28px', '-0.28px', '-0.28px', '-0.38px']}
      >
        Who the program is for
      </Heading.h4>
      <Box display={['block', 'block', 'block', 'block', 'block']}>
        <Flex width={[1, 1, 0.7, 0.7, 0.5]} justifyContent='center' mx='auto'>
          <P color='#5b5b5b' mt={0} align='center'>
            The Serverless Accelerator Program is designed for development teams
            that are interested in doing Serverless development right. If you've
            realized the value that Serverless brings, from faster time to
            market to lower total cost of ownership, and would like assistance
            with standardizing tooling, defining best practices, architectural
            design, deployment strategies, and training your team then the
            Serverless Accelerator Program is probably right for you.
          </P>
        </Flex>
      </Box>
    </Flex>
  </AppContainer>
)

export default WhoIsThisProgramFor
