import React from 'react'
import { withTheme } from 'styled-components'
import { Background, Box } from 'serverless-design-system'

import { AppContainer } from 'src/components'

const HeroWrapper = ({ children, theme, ...otherProps }) => (
  <React.Fragment>
    <Background {...otherProps}>
      <Box width={1} pt={[92, 92, 72, 72, 115, 85]}>
        <AppContainer>
          <Box pb={[62, 62, 62, 62, 92]} pt={['14px', '14px', 4, 4, '15px']}>
            {children}
          </Box>
        </AppContainer>
      </Box>
    </Background>
    <Background background='#f7f7f7' height={[62, 62, 62, 62, 92]} />
  </React.Fragment>
)

export default withTheme(HeroWrapper)
