import React from 'react'
import styled from 'styled-components'
import { Position, Absolute } from 'serverless-design-system'
import { Button } from 'src/fragments/DesignSystem'
import { ExternalLink } from 'src/fragments'

const ButtonWithNoOutline = styled(Button)`
  &:focus {
    outline: none;
  }
`

const SubscribeOption = ({ location, ...props }) => {
  return (
    <Position
      position='sticky'
      top='401px'
      width={1}
      display={['none', 'none', 'none', 'none', 'block']}
      {...props}
      zIndex={1}
    >
      <Absolute
        right={0}
        top={0}
        style={{
          transform: 'rotate(270deg) translate(0, -100%)',
          transformOrigin: '100% 0',
        }}
      >
        <ExternalLink to={`/resources/code-of-conduct/`}>
          <ButtonWithNoOutline py={1} width={180}>
            code of conduct
          </ButtonWithNoOutline>
        </ExternalLink>
      </Absolute>
    </Position>
  )
}

export default SubscribeOption
