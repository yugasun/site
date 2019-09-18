import React from 'react'
import { Flex, Image } from 'serverless-design-system'
import integrationsHeroImage from 'src/assets/images/pages/integrations/integrations-hero.png'

const HeroImage = props => (
  <Flex mb={[0, 0, 0, 0, '-20px', -78]}>
    <Image
      src={integrationsHeroImage}
      width={['100%', '100%', 550, 550, 500, 550]}
      height={[230, 230, 350, 350, 300, 350]}
    />
  </Flex>
)

export default HeroImage
