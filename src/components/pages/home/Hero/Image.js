import React from 'react'

import { Flex, Image, Absolute } from 'serverless-design-system'
import homepageHeroLinesMain from 'src/assets/images/home/hero-lines.svg'
import homepageHeroLinesStatic from 'src/assets/images/home/hero-lines-static.svg'
import styled from 'styled-components'

const HeroLinesBackground = styled(Absolute)`
  position: absolute;
  left: 0;

  @media screen and (max-width: 415px) {
    left: 0px;
  }
`

const HomeHeroImage = ({ usingSafariDesktop }) => (
  <Flex
    flexDirection={['column', 'column', 'column']}
    width={[1, 1, '55%']}
    mb={[1, 1, 4]}
  >
    <HeroLinesBackground mt={['42px', '42px', '67px', '27px', '43px']}>
      <Image
        src={
          usingSafariDesktop ? homepageHeroLinesStatic : homepageHeroLinesMain
        }
        width={[586, 586, 586, 386, 586, 586]}
      />
    </HeroLinesBackground>
  </Flex>
)

export default HomeHeroImage
