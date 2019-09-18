import React from 'react'
import { Flex } from 'serverless-design-system'
import alertsHeroImage from 'src/assets/images/pages/alerts/optimum-performance.png'
import { ImageWithShadow as Image } from 'src/fragments'

const HeroImage = props => (
  <Flex
    justifyContent={['center']}
    mt={[0, 0, 0, 0, 22]}
    mb={[62, 62, 50, 50, 0]}
  >
    <Image
      src={alertsHeroImage}
      width={['100%', '100%', 350, 350, 420, 488]}
      height={[350, 350, 400, 400, 470, 553]}
    />
  </Flex>
)

export default HeroImage
