import React from 'react'
import { Flex, Image } from 'serverless-design-system'
import integrationsHeroImage from 'src/assets/images/pages/integrations/integrations-hero.png'

const HeroImage = props => (
  <Flex justifyContent={['center']} mt={[0, 0, 0, 0, 22]}>
    <Image
      src={integrationsHeroImage}
      width={['100%', '100%', 470, 470, 470, 592]}
      height={[200, 230, 300, 300, 330, 392]}
    />
  </Flex>
)

export default HeroImage
