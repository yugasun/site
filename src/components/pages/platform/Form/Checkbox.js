import styled from 'styled-components'
import { Checkbox } from 'serverless-design-system'
import checkedCheckbox from 'src/assets/images/checked-checkbox.svg'
import unCheckedRadio from 'src/assets/images/unchecked-radio.png'

export default styled(Checkbox)`
  appearance: none;
  
  &:before {
    content: "";
    display: inline-block;
    margin-top: -2px;
    margin-left: -2px;
    width: 18px;
    height: 18px;
    background-position: center;
    background-size: contain;
    background-image: url(${unCheckedRadio});
    background-repeat: no-repeat;
  }

  &:checked {
    &:before {
      background-image: url(${checkedCheckbox});
    }
  }

  &:focus {
    outline: none;
  }
`