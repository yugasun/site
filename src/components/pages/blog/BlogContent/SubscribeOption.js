import React from 'react'
import styled from 'styled-components'
import { Position, Absolute } from 'serverless-design-system'
import { Button } from 'src/fragments/DesignSystem'

const ButtonWithNoOutline = styled(Button)`
  &:focus {
    outline: none;
  }
`

export default class SubscribeOption extends React.Component {
  scrollIntoNewsLetter = () => {
    const newsletterField =  document.getElementById('newsletter-box')
    newsletterField.scrollIntoView()
  }

  render() {
    return (
        <Position
          position='sticky'
          top='50%'
          height={20}
          width={1}
          display={['none', 'none', 'none', 'none', 'block']}
        >
          <Absolute
            right={0}
            top={20}
            style={{
              transform: 'rotate(270deg) translate(0, -100%)',
              transformOrigin: '100% 0'
            }}
          >
            <ButtonWithNoOutline
              py={1}
              width={180}
              onClick={this.scrollIntoNewsLetter}
            >
              subscribe
            </ButtonWithNoOutline>
          </Absolute>
        </Position>
    )
  }
}
