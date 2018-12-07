import styled from 'styled-components'
import { RadioButton } from 'serverless-design-system'
import checkedRadio from 'src/assets/images/checked-radio.png'
import unCheckedRadio from 'src/assets/images/unchecked-radio.png'

export default styled(RadioButton)`
  appearance: none;
  -webkit-border-radius:0px;
  -webkit-appearance: none;

  &:focus {
    outline: none
  }

  &:before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -2px;
    margin-right: 5px;
    margin-top: -2px;
    background-position: center;
    background-size: contain;
    background-image: url(${unCheckedRadio});
    background-repeat: no-repeat;
  }

  &:checked {
    &:before {
      background-image: url(${checkedRadio});
    }
  }
`
