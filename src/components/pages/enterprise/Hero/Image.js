import React from 'react'

import { Flex, Position, Background } from 'serverless-design-system'
import TerminalBgImage from 'src/assets/images/pages/framework/terminal-graphics.svg'
import styled from 'styled-components'

const BackgroundWithBigScreenCoverage = styled(Background)`
  @media screen and (min-width: 1025px) and (max-width: 1366px) {
    width: 530px;
  }

  @media screen and (min-width: 1920px) {
    width: 826px;
  }

  @media screen and (min-width: 2220px) {
    width: 1026px;
  }
`

const HomeHeroImage = () => (
  <Flex
    flexDirection={['column', 'column', 'column']}
    width={[1, 1, 0, 0, '55%']}
    mt={[0, 0, 48]}
  >
    <Position
      zIndex='5'
      left={[null, null, 0, '28px', '78px']}
      position={['relative', 'relative', 'absolute']}
    >
      <BackgroundWithBigScreenCoverage
        width={['325px', '325px', '353px', '458px', '580px', '720px']}
        height={['337px', '337px', '462px', '472px', '580px', '687px']}
        backgroundImage={`url(${TerminalBgImage})`}
        backgroundRepeat='no-repeat'
        backgroundSize='contain'
        backgroundPosition='center'
      />
    </Position>
  </Flex>
)

export default HomeHeroImage
