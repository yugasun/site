import React from 'react'
import styled from 'styled-components'
import { Position, Absolute } from 'serverless-design-system'
import { Button } from 'src/fragments/DesignSystem'

const ButtonWithNoOutline = styled(Button)`
  &:focus {
    outline: none;
  }
`

const SubscribeOption = ({...props}) => {
    return (
        <Position
          position='sticky'
          top='50%'
          width={1}
          display={['none', 'none', 'none', 'none', 'block']}
          {...props}
        >
          <Absolute
            right={0}
            top={-90}
            style={{
              transform: 'rotate(270deg) translate(0, -100%)',
              transformOrigin: '100% 0'
            }}
          >
            <ButtonWithNoOutline
              py={1}
              width={180}
            >
              subscribe
            </ButtonWithNoOutline>
          </Absolute>
        </Position>
    )
}

export default SubscribeOption