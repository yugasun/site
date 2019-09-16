import React from 'react'
import { Background, Box } from 'serverless-design-system'
import dashboardHeroImage from 'src/assets/images/pages/dashboard/dashboard-hero.png'
import { ImageWithShadow as Image } from 'src/fragments'

const HeroImage = props => (
  <Background
    background={['#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#eaeaea']}
    width={['100%', '100%', 488, 488, 488, 543]}
    height={[235, 235, 382, 382, 488, 500]}
    style={{ borderRadius: '60%', alignSelf: 'center' }}
  >
    <Box mt={[0, 0, 0, 0, 58]}>
      <Image
        src={dashboardHeroImage}
        width={['100%', '100%', 488, 488, 488, 543]}
        height={[235, 235, 382, 382, 382, 379]}
      />
    </Box>
  </Background>
)

export default HeroImage
