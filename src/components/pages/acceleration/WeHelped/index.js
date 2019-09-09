import React from 'react'
import { Flex, Box } from 'serverless-design-system'
import { P, Heading } from 'src/fragments/DesignSystem'
import Logos from './Logos'

const WhoWeHaveHelped = () => (
  <Box mb={[92, 92, 92, 92, 132]}>
    <Flex
      width={[1, 1, 0.7, 0.7, 0.5]}
      flexDirection='column'
      alignItems='center'
      mx='auto'
      mt={[136, 136, 136, 136, 196]}
    >
      <Heading.h4
        color='black'
        fontSize={[18, 18, 18, 18, 24]}
        lineHeight={['24px', '24px', '30px', '30px', '38px']}
        letterSpacing={['-0.28px', '-0.28px', '-0.28px', '-0.28px', '-0.38px']}
      >
        Who we've helped
      </Heading.h4>
      <P align='center' mt={0} mb={[42, 42, 42, 42, 62]}>
        We’ve also helped many development organizations evolve from early
        adopters into some of the most advanced serverless development
        organizations in the world. We love partnering with development teams
        that are interested in building more and managing less.{' '}
      </P>
    </Flex>
    <Logos />
  </Box>
)

export default WhoWeHaveHelped
