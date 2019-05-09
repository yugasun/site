import React from 'react'

import { Flex } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import Logos from './Logos'

const WhoWeHaveHelped = () => (
  <React.Fragment>
    <Flex width={[0.5]} flexDirection='column' alignItems='center' mx='auto'>
      <P>Who we've helped</P>
      <P align='center'>
        We’ve also helped many development organizations evolve from early
        adopters in to some of the most advanced serverless development
        organizations in the world. We love partnering with development teams
        that are interested in building more and managing less.{' '}
      </P>
    </Flex>
    <Logos />
  </React.Fragment>
)

export default WhoWeHaveHelped
