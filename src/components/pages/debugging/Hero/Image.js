import React from 'react'
import { Box } from 'serverless-design-system'
import debuggingHeroImage from 'src/assets/images/pages/debugging/debugging-hero.png'
import { ImageWithShadow as Image } from 'src/fragments'

const HeroImage = props => (
  <Box mt={[0, 0, 0, 0, '-20px', 0]}>
    <Image
      src={debuggingHeroImage}
      width={['100%', '100%', 592, 592, 512, 592]}
      height={[235, 235, 298, 298, 298, 298]}
    />
  </Box>
)

export default HeroImage
