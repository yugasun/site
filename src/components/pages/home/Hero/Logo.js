import React from 'react'
import { ExternalLink } from 'src/fragments'
import { Flex, Image } from 'serverless-design-system'
import sfoLogo from 'src/assets/images/home/sfo-logo.svg'

const HomeHeroLogo = () => (
  <ExternalLink to='https://github.com/serverless/serverless'>
    <Flex width={[1, 1, 1]} mt={['12px', '12px', 5]} mb={2} flexWrap='wrap'>
      <Image src={sfoLogo} />
    </Flex>
  </ExternalLink>
)

export default HomeHeroLogo
