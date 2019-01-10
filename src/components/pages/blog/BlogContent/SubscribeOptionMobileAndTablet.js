import React from 'react'
import styled from 'styled-components'
import { Position, Fixed } from 'serverless-design-system'
import { Button } from 'src/fragments/DesignSystem'

const ButtonWithNoOutline = styled(Button)`
  &:focus {
    outline: none;
  }
`

const SubscribeOptionMobileAndTablet = ({...props}) => (
        <Position
          position='sticky'
          width={1}
          display={['block', 'block', 'block', 'block', 'none']}
          zIndex={1}
          {...props}
        >
          <Fixed
            bottom={0}
            width={'100%'}
            
        >
          <ButtonWithNoOutline
            width={'100%'}
            fontSize={1.4}
          >
            subscribe
          </ButtonWithNoOutline>
        </Fixed>
        </Position>
)

export default SubscribeOptionMobileAndTablet
