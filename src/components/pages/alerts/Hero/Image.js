import React from 'react'
import { Background, Box } from 'serverless-design-system'
import monitoringHeroImage from 'src/assets/images/pages/monitoring/monitoring-hero.png'
import { ImageWithShadow as Image } from 'src/fragments'

const HeroImage = props => (
  <Background
    background={['#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#eaeaea']}
    width={['100%', '100%', 488, 488, 488, 592]}
    height={[235, 235, 382, 382, 488, 592]}
    style={{ borderRadius: '50%', alignSelf: 'center' }}
  >
    <Box mt={[0, 0, 0, 0, 58]}>
      <Image
        src={monitoringHeroImage}
        width={['100%', '100%', 488, 488, 488, 592]}
        height={[235, 235, 382, 382, 382, 463]}
      />
    </Box>
  </Background>
)

export default HeroImage
