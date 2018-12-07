import React from 'react'
import { withTheme } from 'styled-components'
import { SecondaryButton } from 'src/fragments/DesignSystem'

const comp = ({ children, theme, ...otherProps }) => (
  <SecondaryButton
    borderWidth='2px'
    color='white'
    p={0}
    height='36px'
    letterSpacing={'1.5px'}
    lineHeight='24px'
    {...otherProps}
    theme={{
      colors: {
        primaryColor: theme.colors.white,
        secondaryColor: theme.colors.white,
      },
    }}
    
  >
    {children}
  </SecondaryButton>
)

export default withTheme(comp)
