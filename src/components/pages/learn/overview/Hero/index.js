import React from 'react'

import { Box, Flex, Image } from 'serverless-design-system'
import { PL, Heading } from 'src/fragments/DesignSystem'
import serverlessLogo from 'src/assets/images/pages/enterprise/serverless-logo-white-bg.svg'

const LearnHomepageHero = () => {
  return (
      <Flex color='black' flexDirection='column' alignItems='center' mt={[62, 62, 102, 102, 152]}>
        <Box width={[1]}>
          <Heading.h0 mt={[42, 42, 0, 0]} align='center' fontFamily='SoleilSB'>
            Learn
          </Heading.h0>
          <Flex justifyContent='center'>
            <Heading.h4 color='black' mb={0}>by &nbsp;&nbsp;</Heading.h4>
            <Image src={serverlessLogo} />
          </Flex>
          
        </Box>
        <Flex.verticallyCenter
          width={[1, 1, 0.6, 0.6, 0.6]}
          px={[0, 0, 0, 5, 7]}
          ml={[0, 0, 4, 0, 0]}
          mt={32}
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
