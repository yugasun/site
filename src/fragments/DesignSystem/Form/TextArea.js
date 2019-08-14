import React from 'react'
import styled from 'styled-components'

import { TextArea } from 'serverless-design-system'

const TextAreaWithNoOutLine = styled(TextArea)`
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #b6b6b6;
    opacity: 0.6;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #b6b6b6;
    opacity: 0.6;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: #b6b6b6;
    opacity: 0.6;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: #b6b6b6;
    opacity: 0.6;
  }

  resize: none;

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
  <TextAreaWithNoOutLine
    height='150px'
    width='100%'
    border='none'
    placeholderFontFamily='SoleilBk'
    fontFamily='SoleilBk'
    fontSize={2}
    fontWeight='normal'
    lineHeight={4}
    letterSpacing='h2'
    color='#000'
    bg='#f7f7f7'
    px='14.5px'
    py='10px'
    {...props}
  />
)
