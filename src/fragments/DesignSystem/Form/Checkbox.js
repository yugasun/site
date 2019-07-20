import styled from 'styled-components'
import { Checkbox } from 'serverless-design-system'
import checkedCheckbox from 'src/assets/images/form/checked-checkbox.png'
import uncheckedCheckbox from 'src/assets/images/form/unchecked-checkbox.png'

export default styled(Checkbox)`
  appearance: none;

  &:before {
    content: '';
    display: inline-block;
    margin-top: -2px;
    margin-right: 5px;
    margin-left: -2px;
    width: 16px;
    height: 16px;
    background-position: center;
    background-size: contain;
    background-image: url(${uncheckedCheckbox});
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

  @media screen and (max-width: 414px) {
    &:before {
      width: 18px;
      height: 18px;
    }
  }
`
