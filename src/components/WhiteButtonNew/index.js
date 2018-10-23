import React from 'react'
import { withTheme } from 'styled-components'
import { SecondaryButton } from 'serverless-design-system'

const comp = ({ children, theme }) => (
  <SecondaryButton
    width='280px'
    borderWidth='2.5px'
    color='white'
    p={0}
    height='50px'
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
