import React from 'react'

import { Flex, Image, Absolute } from 'serverless-design-system'
import homepageHeroPlaceholder from 'src/assets/images/home/hero-placeholder.png'
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
      <Image src={homepageHeroPlaceholder} width={[586, 586, 586, 386, 680]} />
    </HeroLinesBackground>
  </Flex>
)

export default HomeHeroImage
