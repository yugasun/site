import React from 'react'
import { Box } from 'serverless-design-system'
import { ImageWithShadow as Image } from 'src/fragments'

const HeroImage = props => (
  <Box mb={[0, 0, 0, 0, -56, -166]}>
    <Image
      src={'http://www.fillmurray.com/1184/926'}
      width={['100%', '100%', 488, 488, 488, 592]}
      height={['78%', '78%', 382, 382, 382, 463]}
    />
  </Box>
)

export default HeroImage
