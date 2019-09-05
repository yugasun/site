import React from 'react'
import { P, Heading } from 'src/fragments/DesignSystem'
import { Flex } from 'serverless-design-system'
import CommunityNumbers from './CommunityNumbers'

const WhoWeAre = () => (
  <Flex flexDirection='column' mt={[-82, -82, -228, -228, -228]}>
    <Flex
      width={[1, 1, 0.7, 0.7, 0.5]}
      flexDirection='column'
      alignItems='center'
      mx='auto'
    >
      <Heading.h4
        color='black'
        fontSize={[18, 18, 18, 18, 24]}
        lineHeight={['24px', '24px', '30px', '30px', '38px']}
        letterSpacing={['-0.28px', '-0.28px', '-0.28px', '-0.28px', '-0.38px']}
      >
        Who We Are
      </Heading.h4>
      <P color='#5b5b5b' align='center' mt={0} mb={0}>
        We are developers who live and breath Serverless and are passionate
        about sharing our knowledge with other developers. We created and
        maintain the Serverless Framework alongside one of the largest and most
        passionate development communities in the world.
      </P>
    </Flex>
    <CommunityNumbers />
  </Flex>
)

export default WhoWeAre
