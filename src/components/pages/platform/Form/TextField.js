import React from 'react'
import styled from 'styled-components'

import { TextField } from 'serverless-design-system'

const TextFieldWithNoOutLine = styled(TextField)`
  opacity: 0.6;
  
  &:focus {
    outline: none;
    opacity: 1;
    background-image: radial-gradient(red 85%, transparent 16%);
    background-size: 2px 100%;
    background-position: left;
    background-repeat: no-repeat;
  }

`

export default (props) => (
  <TextFieldWithNoOutLine
    p={'15px'}
    width={1}
    border='0'
    bg='#f7f7f7'
    webkitAppearance='none'
    placeholderFontFamily='Serverless'
    placeholderFontSize={2}
    placeholderFontWeight='normal'
    placeholderLineHeight={4}
    placeholderLetterSpacing={"h2"}
    fontFamily='Serverless'
    fontWeight='normal'
    fontSize={'14px'}
    letterSpacing={'0.4px'}
    lineHeight={'24px'}
    height='50px'
    color='gray.2'
    placeholderColor='#B6B6B6'
    {...props}
  />
)
