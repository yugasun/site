import React from 'react'
import { withTheme } from 'styled-components'
import { Background, Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'

const HeroWrapper = ({ children, customPb, theme, ...otherProps }) => (
  <React.Fragment>
    <Background {...otherProps}>
      <Box
        width={1}
        pt={[106, 106, 112, 112, 130, 126]}
        pb={customPb ? customPb : [62, 62, 62, 62, 92]}
      >
        <AppContainer>
          <Box color='white'>{children}</Box>
        </AppContainer>
      </Box>
    </Background>
    <Background background='#f7f7f7' height={[62, 62, 62, 62, 92]} />
  </React.Fragment>
)

export default withTheme(HeroWrapper)
