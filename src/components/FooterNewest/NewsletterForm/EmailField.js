import React from 'react'
import styled from 'styled-components'
import { TextField } from 'serverless-design-system'

const TextFieldWithNoOutline = styled(TextField)`
  outline: none;
  background-image: linear-gradient(#8c8c8c 100%, transparent 16%);
  background-size: 2px 100%;
  background-position: left;
  background-repeat: no-repeat;

  &:focus {
    outline: none;
  }
`

export default class EmailField extends React.Component {
  constructor(props) {
    super(props)
    this.state = { placeholder: props.placeholder }
  }

  clearPlaceholder = () => this.setState({ placeholder: '' })
  restorePlaceholder = () => {
    this.setState({ placeholder: this.props.placeholder })
  }

  render() {
    return (
      <TextFieldWithNoOutline
        color='#8c8c8c'
        bg='#f7f7f7'
        border='none'
        letterSpacing='0'
        lineHeight={'26px'}
        px={[2]}
        py={15}
        m={0}
        width={[1, 1, 0.7]}
        height={'37px'}
        borderRadius={0}
        fontSize={'16px'}
        fontFamily='SoleilBk'
        placeholderColor='#8c8c8c'
        required
        {...this.props}
        onFocus={this.clearPlaceholder}
        onBlur={this.restorePlaceholder}
        placeholder={this.state.placeholder}
        className='newsletter-email'
      />
    )
  }
}
