import React from 'react'
import { withTheme } from 'styled-components'
import { Background, Box } from 'serverless-design-system'

import { AppContainer } from 'src/components'

//TODO: consolidate so there's just 1 HeroWrapper

const HeroWrapper = ({ children, theme, customPb, ...otherProps }) => (
  <Background 
  {...otherProps}
  background={
    otherProps.background
      ? otherProps.background
      : [
        'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
        'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
        `linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`,
        ]
  }>
    <Box
      width={1}
      pt={[
        theme.navbarHeights.mobile,
        theme.navbarHeights.mobile,
        '80px',
        '80px',
        '85px',
      ]}
    >
      <AppContainer>
        <Box pb={customPb ? customPb : ['14px', '14px', 4]} pt={['14px', '14px', 4, 4, '15px']}>
          {children}
        </Box>
      </AppContainer>
    </Box>
  </Background>
)

export default withTheme(HeroWrapper)
