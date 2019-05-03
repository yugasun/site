import React from 'react'
import { Flex, Image } from 'serverless-design-system'
import sfoLogo from 'src/assets/images/home/sfo-logo.svg'

const HomeHeroLogo = () => (
  <Flex width={[1, 1, 1]} mt={[5, 5, 60, 60, 205]} mb={2} flexWrap='wrap'>
    <Image src={sfoLogo} />
  </Flex>
)

export default HomeHeroLogo
