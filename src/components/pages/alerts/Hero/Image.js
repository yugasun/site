import React from 'react'
import { Background, Flex } from 'serverless-design-system'
import alertsHeroImage from 'src/assets/images/pages/alerts/alerts-hero.png'
import { ImageWithShadow as Image } from 'src/fragments'

const HeroImage = props => (
  <Background
    background={['#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#eaeaea']}
    width={['80%', '80%', 488, 488, 400, 448]}
    height={[300, 300, 382, 382, 400, 476]}
    style={{ borderRadius: '50%', alignSelf: 'center' }}
  >
    <Flex justifyContent={['center']}>
      <Image
        src={alertsHeroImage}
        width={['100%', '100%', 300, 300, 300, 308]}
        height={[350, 350, 400, 400, 420, 476]}
      />
    </Flex>
  </Background>
)

export default HeroImage
