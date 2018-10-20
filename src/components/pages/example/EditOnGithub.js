import React from 'react'
import styled from 'styled-components'
import { Position, Absolute, Button, Fixed, Box } from 'serverless-design-system'

const EditGithubButton = styled(Button)`
  &:focus {
    outline: none;
  }
`

export default class EditOnGithubOption extends React.Component {
  scrollIntoNewsLetter = () => {
    const newsletterField =  document.getElementById('newsletter-box')
    newsletterField.scrollIntoView()
  }

  render() {
    return (
        <Position
        position='sticky'
        top='50%'
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
          <EditGithubButton
            height={32}
            width={162}
            py={1}
            onClick={this.scrollIntoNewsLetter}
            fontSize={1.4}
          >
            edit on Github
          </EditGithubButton>
        </Absolute>

        <Fixed
            bottom={0}
            width={'100%'}
            display={['block', 'block', 'none']}
        >
          <EditGithubButton
            width={'100%'}
            py={1}
            fontSize={1.4}
          >
            edit on Github
          </EditGithubButton>
        </Fixed>
      </Position>
    )
  }
}
