import React from 'react'
import styled from 'styled-components'

import { TextArea } from 'serverless-design-system'

const TextAreaWithNoOutLine = styled(TextArea)`

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #B6B6B6;
  opacity: 0.6;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #B6B6B6;
  opacity: 0.6;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #B6B6B6;
  opacity: 0.6;
}
:-moz-placeholder { /* Firefox 18- */
  color: #B6B6B6;
  opacity: 0.6;
}

resize:none;

/* Safari */
border-radius: 0;
-webkit-appearance: none;
  
&:focus {
  outline: none;
  background-image: linear-gradient(red 100%, transparent 16%);
  background-size: 2px 100%;
  background-position: left;
  background-repeat: no-repeat;
}

&:focus::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  opacity: 1;
}
&:focus::-moz-placeholder { /* Firefox 19+ */
  opacity: 1;
}
&:focus:-ms-input-placeholder { /* IE 10+ */
  opacity: 1;
}
&:focus:-moz-placeholder { /* Firefox 18- */
  opacity: 1;
}
`

export default (props) => (
  <TextAreaWithNoOutLine
    height='150px'
    width='100%'
    border='none'
    fontFamily='Serverless'
    fontSize={2}
    fontWeight='normal'
    lineHeight={4}
    letterSpacing='h2'
    color='gray.2'
    bg='#eaeaea'
    px='14.5px'
    py='10px'
    {...props}
  />
)
