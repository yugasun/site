import React from 'react'

import { Box, Flex, Image } from 'serverless-design-system'
import { PL, Heading } from 'src/fragments/DesignSystem'
import serverlessLogo from 'src/assets/images/pages/enterprise/serverless-logo-white-bg.svg'

const LearnHomepageHero = () => {
  return (
      <Flex color='black' flexDirection='column' alignItems='center' mt={152}>
        <Box width={[1]}>
          <Heading.h0 mt={[42, 42, 0, 0]} align='center' fontFamily='SoleilSB'>
            Learn
          </Heading.h0>
          <Flex>
            <Heading.h3>by</Heading.h3>
            <Image src={serverlessLogo} width='200px' height='40px'/>
          </Flex>
          
        </Box>
        <Flex.verticallyCenter
          width={[1, 1, 1, 0.6, 0.6]}
          px={[0, 0, 0, 5, 7]}
          ml={[0, 0, 4, 0, 0]}
        >
          <PL
            mt={[22, 22, 1.5]}
            mb={0}
            align={['center', 'center', 'center']}
          >
            Free courses, tutorials, and guides for developers who want to harness the power of Serverless.
          </PL>
        </Flex.verticallyCenter>
      </Flex>
  )
}

export default LearnHomepageHero
