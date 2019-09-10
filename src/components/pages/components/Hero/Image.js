import React from 'react'
import { Image, Flex } from 'serverless-design-system'
import componentsHeroImage from 'src/assets/images/pages/components/components-hero.png'

const HeroImage = props => (
  <Flex mt={[0, 0, 0, 0, 92]} mx={['auto']} justifyContent={'center'}>
    <Image
      src={componentsHeroImage}
      width={['70%', '70%', 280, 280, 300, 353]}
      height={[235, 235, 280, 280, 289, 344]}
    />
  </Flex>
)

export default HeroImage
