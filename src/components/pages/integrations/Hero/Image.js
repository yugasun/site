import React from 'react'
import { Flex, Image } from 'serverless-design-system'
import integrationsHeroImage from 'src/assets/images/pages/integrations/integrations-hero.png'

const HeroImage = props => (
  <Flex
    justifyContent={['center']}
    mt={[0, 0, 0, 0, 22]}
    mb={[62, 62, 50, 50, 0]}
  >
    <Image
      src={integrationsHeroImage}
      width={['100%', '100%', 350, 350, 420, 592]}
      height={[350, 350, 400, 400, 470, 392]}
    />
  </Flex>
)

export default HeroImage
