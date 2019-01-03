import React from 'react'
import styled from 'styled-components'
import { Position, Fixed } from 'serverless-design-system'
import { Button } from 'src/fragments/DesignSystem'

const ButtonWithNoOutline = styled(Button)`
  &:focus {
    outline: none;
  }
`

export default class SubscribeOption extends React.Component {
  scrollIntoNewsLetter = () => {
    const newsletterField =  document.getElementById('newsletter-box-footer')
    newsletterField.scrollIntoView()
  }

  render() {
    return (
        <Position
          position='sticky'
          width={1}
          display={['block', 'block', 'block', 'block', 'none']}
          zIndex={1}
        >
          <Fixed
            bottom={0}
            width={'100%'}
            
        >
          <ButtonWithNoOutline
            width={'100%'}
            fontSize={1.4}
            onClick={this.scrollIntoNewsLetter}
          >
            subscribe
          </ButtonWithNoOutline>
        </Fixed>
        </Position>
    )
  }
}
