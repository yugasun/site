import React from 'react'
import { Box } from 'serverless-design-system'
import cicdHeroImage from 'src/assets/images/pages/cicd/cicd-hero.png'
import { ImageWithShadow as Image } from 'src/fragments'

const HeroImage = props => (
  <Box mb={[0, 0, 0, 0, -56, -166]}>
    <Image
      src={cicdHeroImage}
      width={['100%', '100%', 488, 488, 488, 556]}
      height={['61%', '61%', 299, 299, 299, 341]}
    />
  </Box>
)

export default HeroImage
