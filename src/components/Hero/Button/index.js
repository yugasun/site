import React from 'react'
import { Button } from 'src/fragments/DesignSystem'

const HeroButton = ({ children, ...otherProps }) => (
  <Button height={'44px'} {...otherProps}>
    {children}
  </Button>
)

export default HeroButton
