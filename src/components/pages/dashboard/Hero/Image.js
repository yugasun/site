import React from 'react'
import { Box } from 'serverless-design-system'
import dashboardHeroImage from 'src/assets/images/pages/dashboard/dashboard-hero.png'
import { ImageWithShadow as Image } from 'src/fragments'

const HeroImage = props => (
  <Box mb={[0, 0, 0, 0, -92, -112]}>
    <Image
      src={dashboardHeroImage}
      width={['100%', '100%', 488, 488, 488, 543]}
      height={[235, 235, 382, 382, 382, 379]}
    />
  </Box>
)

export default HeroImage
