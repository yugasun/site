import React from 'react'
import styled from 'styled-components'

import { TextField } from 'serverless-design-system'

const TextFieldWithNoOutLine = styled(TextField)`
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    opacity: 0.6;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    opacity: 0.6;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    opacity: 0.6;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    opacity: 0.6;
  }

  /* Safari */
  border-radius: 0;
  -webkit-appearance: none;

  &:focus {
    outline: none;
    background-image: linear-gradient(black 100%, transparent 16%);
    background-size: 2px 100%;
    background-position: left;
    background-repeat: no-repeat;
  }

  &:focus::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    opacity: 1;
  }
  &:focus::-moz-placeholder {
    /* Firefox 19+ */
    opacity: 1;
  }
  &:focus:-ms-input-placeholder {
    /* IE 10+ */
    opacity: 1;
  }
  &:focus:-moz-placeholder {
    /* Firefox 18- */
    opacity: 1;
  }
`

export default props => (
  <TextFieldWithNoOutLine
    p={'15px'}
    width={1}
    border='0'
    bg='#f7f7f7'
    webkitAppearance='none'
    placeholderFontFamily='SoleilBk'
    placeholderFontSize={2}
    placeholderFontWeight='normal'
    placeholderLineHeight={4}
    placeholderLetterSpacing={'h2'}
    fontFamily='SoleilBk'
    fontWeight='normal'
    fontSize={'14px'}
    letterSpacing={'0.4px'}
    lineHeight={'24px'}
    height='50px'
    color='#000'
    placeholderColor='#8c8c8c'
    {...props}
  />
)
