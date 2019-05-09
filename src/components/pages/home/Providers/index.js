import React from 'react'
import { Background, Box } from 'serverless-design-system'
import ringBg from 'src/assets/images/home/rings-bg.svg'
import { Heading } from 'src/fragments/DesignSystem'
import { AppContainerNewest as AppContainer } from 'src/components'
import Logos from './Logos'
import styled from 'styled-components'

const HeadlineBoxWithLaptopFix = styled(Box)`
  @media screen and (min-width: 1200px) and (max-width: 1350px) {
    margin-top: -90px;
  }

  @media screen and (min-width: 1351px) and (max-width: 1400px) {
    margin-top: -60px;
  }
`

const Providers = () => (
  <AppContainer>
    <Box mt={[170, 170, 62, 62, -100]}>
      <Background
        backgroundImage={`url(${ringBg})`}
        backgroundRepeat='no-repeat'
        backgroundSize={['cover', 'cover', 'cover', 'contain', 'contain']}
        backgroundPosition='center'
        width={['100%', '100%', '100%', '100%', '100%', '1146px']}
        height={['100%', '100%', '100%', '100%', '1146px']}
      >
        <Logos />
      </Background>
      <HeadlineBoxWithLaptopFix
        mb={[283, 283, 309, 309, 335, 390]}
        mt={[92, 92, 92, 112, -32, 0]}
      >
        <Heading.h3 align='center'>
          A developer’s guide to going serverless
        </Heading.h3>
      </HeadlineBoxWithLaptopFix>
    </Box>
  </AppContainer>
)

export default Providers
