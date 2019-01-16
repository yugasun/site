import React from 'react'
import styled from 'styled-components'
import { Position, Fixed } from 'serverless-design-system'
import { Button } from 'src/fragments/DesignSystem'
import { ExternalLink } from 'src/fragments'

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
          <ExternalLink to={`/resources/code-of-conduct/`}>
            <ButtonWithNoOutline
              width={'100%'}
              fontSize={1.4}
            >
              code of conduct
            </ButtonWithNoOutline>
          </ExternalLink>
        </Fixed>
        </Position>
)

export default SubscribeOptionMobileAndTablet
