import React from 'react'
import { TitleWithIconNewest as TitleWithIcon } from 'src/fragments'

const TitleWithIconAcceleration = ({ children }) => (
  <TitleWithIcon
    color='black'
    fontSize={[18, 18, 18, 18, 24]}
    lineHeight={['24px', '24px', '30px', '30px', '38px']}
    letterSpacing={['-0.28px', '-0.28px', '-0.28px', '-0.28px', '-0.38px']}
  >
    {children}
  </TitleWithIcon>
)

export default TitleWithIconAcceleration
