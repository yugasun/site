import React from 'react'
import {
  Flex,
  Box,
  Absolute,
  Image,
  Background,
} from 'serverless-design-system'
import styled from 'styled-components'
import LeftWheel from 'src/assets/images/acceleration/red-wheel-left.svg'
import RightWheel from 'src/assets/images/acceleration/red-wheel-right.svg'

const LeftWheelImage = styled(Absolute)`
  @media screen and (min-width: 2300px) {
    left: 15%;
  }

  @media screen and (min-width: 3000px) {
    left: 25%;
  }
`

const RightWheelImage = styled(Absolute)`
  @media screen and (min-width: 2300px) {
    right: 15%;
  }

  @media screen and (min-width: 3000px) {
    right: 25%;
  }
`

const Wheels = () => (
  <Flex>
    <Box
      display={['none', 'none', 'none', 'none', 'block']}
      mt={[0, 0, 0, 0, '35%', '30%']}
    >
      <LeftWheelImage left='0' zIndex='1' width={[0, 0, 0, 0, '40%', '650px']}>
        <Background
          backgroundImage={`url(${LeftWheel})`}
          backgroundRepeat='no-repeat'
          backgroundSize='contain'
          height='740px'
          width='591px'
        />
      </LeftWheelImage>
    </Box>
    <Box
      display={['none', 'none', 'none', 'none', 'block']}
      mt={[0, 0, 0, 0, '-10%', 0]}
    >
      <RightWheelImage
        right='0'
        zIndex='1'
        width={[0, 0, 0, 0, '40%', '680px']}
        top='2'
      >
        <Background
          backgroundImage={`url(${RightWheel})`}
          backgroundRepeat='no-repeat'
          backgroundSize='contain'
          height='740px'
          width='591px'
        />
      </RightWheelImage>
    </Box>
  </Flex>
)

export default Wheels
