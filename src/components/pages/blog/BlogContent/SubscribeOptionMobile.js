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
        width={1}
        display={['block', 'block', 'block', 'block', 'none']}
      >
        <Absolute
          bottom={0}
          width={1}
        >
          <ButtonWithNoOutline
            py={1}
            width={1}
            onClick={this.scrollIntoNewsLetter}
          >
            subscribe
          </ButtonWithNoOutline>
        </Absolute>
      </Position>
    )
  }
}
