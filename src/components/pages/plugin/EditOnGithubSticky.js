import React from 'react'
import styled from 'styled-components'
import { Position, Absolute, Button } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'

const EditGithubButton = styled(Button)`
line-height: 14px;

  &:focus {
    outline: none;
  }
`

const EditOnGithubSticky = ({gitLink}) => (
        <Position
        position='sticky'
        top='30%'
        zIndex={1}
      >
        <Absolute
          display={['none', 'none', 'block']}
          right={0}
          style={{
            transform: 'rotate(270deg) translate(0, -100%)',
            transformOrigin: '100% 0'
          }}
        >
        <ExternalLink
          to={gitLink}
        >
          <EditGithubButton
            height={32}
            width={161}
            fontSize={'14px'}
            letterSpacing={'0.6px'}
            py={1}
          >
            view on Github
          </EditGithubButton>
         </ExternalLink>
        </Absolute>
      </Position>
)

export default EditOnGithubSticky
