import React from 'react'
import { Flex, Background } from 'serverless-design-system'
import ServerlessLogo from 'src/assets/images/logo-light-gray.svg'

const sizes = {
  small: ["32px 26px", "32px 26px", "32px 26px", "64px 51px"],
  large: ["79px 63px", "79px 63px", "79px 63px", "131px 104px"]
}

export default ({ children, wrapperProps, size='large' }) => (
  <Flex.center
    width={1}
    height="fullHeight"
    bg="gray.0"
    {...wrapperProps}
  >
    <Background
      width={1}
      height="fullHeight"
      backgroundImage={`url(${ServerlessLogo})`}
      backgroundSize={sizes[size]}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      mx="14px"
      my="12px"
    >
      { children }
    </Background>
  </Flex.center>
)
