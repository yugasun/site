import styled from 'styled-components'
import { RadioButton } from 'serverless-design-system'
import checkedRadio from 'src/assets/images/form/checked-radio.png'
import unCheckedRadio from 'src/assets/images/form/unchecked-radio.png'

export default styled(RadioButton)`
  appearance: none;

  &:focus {
    outline: none;
  }

  &:before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
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

  @media screen and (max-width: 414px) {
    &:before {
      width: 18px;
      height: 18px;
    }
  }
`
