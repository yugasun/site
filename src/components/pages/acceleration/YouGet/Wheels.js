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

const RightWheelBg = styled(Background)`
  margin-top: -138px;
`

const LeftWheelBg = styled(Background)`
  margin-top: 240px;

  @media screen and (min-width: 1200px) and (max-width: 1350px) {
    margin-top: 550px;
  }

  @media screen and (min-width: 1351px) and (max-width: 1430px) {
    margin-top: 440px;
  }

  @media screen and (min-width: 1431px) and (max-width: 1670px) {
    margin-top: 380px;
  }
`

const Wheels = () => (
  <Flex>
    <Box display={['none', 'none', 'none', 'none', 'block']}>
      <LeftWheelImage left="0" zIndex="1" width={[0, 0, 0, 0, '40%', '650px']}>
        <LeftWheelBg
          backgroundImage={`url(${LeftWheel})`}
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          height={['740px']}
          width="100%"
        />
      </LeftWheelImage>
    </Box>
    <Box display={['none', 'none', 'none', 'none', 'block']}>
      <RightWheelImage
        right="0"
        zIndex="1"
        width={[0, 0, 0, 0, '40%', '691px']}
      >
        <RightWheelBg
          backgroundImage={`url(${RightWheel})`}
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          backgroundPosition="100px"
          height="740px"
          width="100%"
        />
      </RightWheelImage>
    </Box>
  </Flex>
)

export default Wheels
