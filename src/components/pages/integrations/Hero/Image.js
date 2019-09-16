import React from 'react'
import { Flex, Image } from 'serverless-design-system'
import integrationsHeroImage from 'src/assets/images/pages/integrations/integrations-hero.png'

const HeroImage = props => (
  <Flex justifyContent={['center']} mt={[0, 0, 0, 0, 78]}>
    <Image
      src={integrationsHeroImage}
      width={['100%', '100%', 500, 500, 520, 620]}
      height={[210, 210, 300, 300, 340, 390]}
    />
  </Flex>
)

export default HeroImage
