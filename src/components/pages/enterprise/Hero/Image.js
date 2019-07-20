import React from 'react'

import { Flex, Position, Background } from 'serverless-design-system'
import providersHeroImage from 'src/assets/images/pages/enterprise/providers-hero.png'
import providersHeroMobileImage from 'src/assets/images/pages/enterprise/providers-hero-mobile.png'
import providersHeroTabletImage from 'src/assets/images/pages/enterprise/providers-hero-tablet.png'

const HomeHeroImage = () => (
  <Flex
    flexDirection={['column', 'column', 'column']}
    width={[1, 1, 0, 0, '55%']}
    mt={[0, 0, 48]}
  >
    <Position
      zIndex='5'
      left={['15px', '15px', 0, '28px', '0']}
      top={[null, null, '12%', '12%', '1%']}
      position={['absolute']}
    >
      <Background
        backgroundImage={[
          `url(${providersHeroMobileImage})`,
          `url(${providersHeroMobileImage})`,
          `url(${providersHeroTabletImage})`,
          `url(${providersHeroTabletImage})`,
          `url(${providersHeroImage})`,
        ]}
        backgroundSize={['cover', 'cover', 'contain']}
        backgroundRepeat='no-repeat'
        width={[360, 360, 340, 600, 750, 932]}
        height={[500, 500, 490, 600, 850, 932]}
      />
    </Position>
  </Flex>
)

export default HomeHeroImage
