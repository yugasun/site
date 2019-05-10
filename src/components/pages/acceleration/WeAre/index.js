import React from 'react'
import { P } from 'src/fragments/DesignSystem'
import TitleWithIcon from '../TitleWithIcon'
import { Flex } from 'serverless-design-system'
import CommunityNumbers from './CommunityNumbers'

const WhoWeAre = () => (
  <Flex flexDirection='column'>
    <Flex
      width={[1, 1, 0.7, 0.7, 0.5]}
      flexDirection='column'
      alignItems='center'
      mx='auto'
    >
      <TitleWithIcon>Who We Are</TitleWithIcon>
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
