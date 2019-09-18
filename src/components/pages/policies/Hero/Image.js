import React from 'react'
import { Box } from 'serverless-design-system'
import policiesHeroImage from 'src/assets/images/pages/policies/policies-hero.png'
import { ImageWithShadow as Image } from 'src/fragments'

const HeroImage = props => (
  <Box mt={[0, 0, 0, 0, 105]}>
    <Image
      src={policiesHeroImage}
      width={['100%', '100%', 488, 488, 488, 592]}
      height={[235, 235, 382, 382, 382, 463]}
    />
  </Box>
)

export default HeroImage
