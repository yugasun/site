import React from 'react'

import { Flex, Image, Absolute } from 'serverless-design-system'
import homepageHeroPlaceholder from 'src/assets/images/home/hero-placeholder.png'
import styled from 'styled-components'

const HeroLinesBackground = styled(Absolute)`
  position: absolute;
  left: 0;
  z-index: 5;

  @media screen and (max-width: 1024px) {
    position: relative;
    margin: 0 auto;
  }
`

const HomeHeroImage = () => (
  <Flex
    flexDirection={['column', 'column', 'column']}
    width={[1, 1, 1, 1, '55%']}
    mb={[1, 1, 4]}
  >
    <HeroLinesBackground
      mt={[0, 0, 0, 0, '72px']}
      pt={['92px', '92px', '92px', '92px', 0]}
    >
      <Image
        src={homepageHeroPlaceholder}
        width={[586, 586, 680, 680, 580, 680]}
      />
    </HeroLinesBackground>
  </Flex>
)

export default HomeHeroImage
