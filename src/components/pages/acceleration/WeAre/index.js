import React from 'react'
import { P, Heading } from 'src/fragments/DesignSystem'
import { Flex, Box } from 'serverless-design-system'
import CommunityNumbers from './CommunityNumbers'

const WhoWeAre = () => (
  <Flex width={[0.5]} flexDirection='column' alignItems='center' mx='auto'>
    <P>Who We Are</P>
    <P color='#5b5b5b' align='center'>
      We are developers who live and breath Serverless and are passionate about
      sharing our knowledge with other developers. We created and maintain the
      Serverless Framework alongside one of the largest and most passionate
      development communities in the world.
    </P>
    <CommunityNumbers />
  </Flex>
)

export default WhoWeAre
