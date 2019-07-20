import React from 'react'

import { Flex, Position, Background } from 'serverless-design-system'
import providersHeroImage from 'src/assets/images/pages/enterprise/providers-hero.png'
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
      top={[null, null, '1%']}
      position={['absolute', 'absolute', 'relative', 'relative', 'absolute']}
    >
      <Background
        backgroundImage={[
          `url(${providersHeroTabletImage})`,
          `url(${providersHeroTabletImage})`,
          `url(${providersHeroTabletImage})`,
          `url(${providersHeroTabletImage})`,
          `url(${providersHeroImage})`,
        ]}
        backgroundSize={['cover', 'cover', 'contain']}
        backgroundRepeat='no-repeat'
        width={[360, 360, 676, 676, 850]}
        height={[500, 500, 490, 490, 932]}
      />
    </Position>
  </Flex>
)

export default HomeHeroImage
