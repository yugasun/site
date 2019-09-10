import React from 'react'
import { Background, Flex } from 'serverless-design-system'
import alertsHeroImage from 'src/assets/images/pages/alerts/optimum-performance.png'
import { ImageWithShadow as Image } from 'src/fragments'

const HeroImage = props => (
  <Background
    background={['#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#eaeaea']}
    width={['80%', '80%', 488, 488, 520, 590]}
    height={[300, 300, 382, 382, 520, 590]}
    style={{ borderRadius: '50%', alignSelf: 'center' }}
  >
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
  </Background>
)

export default HeroImage
