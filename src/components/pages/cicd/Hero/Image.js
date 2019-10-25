import React from 'react'
import { Box } from 'serverless-design-system'
import monitoringHeroImage from 'src/assets/images/pages/monitoring/monitoring-hero.png'
import { ImageWithShadow as Image } from 'src/fragments'

const HeroImage = props => (
  <Box mb={[0, 0, 0, 0, -56, -166]}>
    <Image
      src={monitoringHeroImage}
      width={['100%', '100%', 488, 488, 488, 592]}
      height={[235, 235, 382, 382, 382, 463]}
    />
  </Box>
)

export default HeroImage
