import React from 'react'
import { withTheme } from 'styled-components'
import { SecondaryButton } from 'src/fragments/DesignSystem'

const comp = ({ children, theme }) => (
  <SecondaryButton
    borderWidth='2px'
    color='white'
    p={0}
    height='36px'
    letterSpacing={'0.8px'}
    lineHeight='21px'
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
