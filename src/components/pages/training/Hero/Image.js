import React from 'react'

import { Flex, Position, Background } from 'serverless-design-system'
import providersHeroImage from 'src/assets/images/pages/enterprise/providers-hero.png'
import providersHeroMobileImage from 'src/assets/images/pages/enterprise/providers-hero-mobile.png'
import providersHeroTabletImage from 'src/assets/images/pages/enterprise/providers-hero-tablet.png'
import styled from 'styled-components'

const BackgroundWithBigDesktopFix = styled(Background)`
  @media only screen and (min-width: 1919px) {
    height: 650px;
    width: 650px;
  }
`

const PositionWithBigDesktopFix = styled(Position)`
  @media only screen and (min-width: 1919px) {
    position: relative;
  }
`

const HomeHeroImage = () => (
  <Flex
    flexDirection={['column', 'column', 'column']}
    width={[1, 1, '40%', '40%', '55%']}
    mt={[0, 0, 48]}
  >
    <PositionWithBigDesktopFix
      zIndex='0'
      left={[0, 0, 0, '28px', '0']}
      top={[null, null, '1%', '1%', '1%']}
      position={[
        'relative',
        'relative',
        'absolute',
        'absolute',
        'absolute',
        'absolute',
      ]}
    >
      <BackgroundWithBigDesktopFix
        backgroundImage={[
          `url(${providersHeroMobileImage})`,
          `url(${providersHeroMobileImage})`,
          `url(${providersHeroTabletImage})`,
          `url(${providersHeroTabletImage})`,
          `url(${providersHeroImage})`,
        ]}
        backgroundSize={['contain', 'contain', 'contain']}
        backgroundRepeat='no-repeat'
        width={[360, 360, 424, 600, 750, 932]}
        height={[266, 266, 490, 600, 850, 932]}
      />
    </PositionWithBigDesktopFix>
  </Flex>
)

export default HomeHeroImage
