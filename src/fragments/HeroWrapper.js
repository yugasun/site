import React from 'react'
import { withTheme } from 'styled-components'
import { Background, Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'

const HeroWrapper = ({
  children,
  customPb,
  theme,
  ignoreBottomMargin,
  bottomMarginBg,
  bottomMarginId,
  ...otherProps
}) => (
  <React.Fragment>
    <Background
      {...otherProps}
      background={
        otherProps.background
          ? otherProps.background
          : [
              'linear-gradient(150deg,rgb(0,0,0) 80%, #540F0C)',
              'linear-gradient(150deg,rgb(0,0,0) 80%, #540F0C)',
              `linear-gradient(150deg,rgb(0,0,0) 52%, #540F0C)`,
            ]
      }
    >
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
    {ignoreBottomMargin ? null : (
      <Background
        background={bottomMarginBg ? bottomMarginBg : '#f7f7f7'}
        height={[62, 62, 62, 62, 92]}
        id={bottomMarginId ? bottomMarginId : null}
      />
    )}
  </React.Fragment>
)

export default withTheme(HeroWrapper)
