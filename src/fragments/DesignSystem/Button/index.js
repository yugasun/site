import styled, { withTheme } from 'styled-components'
import {
  border,
  borderWidth,
  borderStyle,
  borderColor,
  color,
  fontFamily,
  fontSize,
  letterSpacing,
  space,
  width,
  height,
  minWidth,
} from 'styled-system'


// TODO: Customize hovering color based on props.
// This will break the header / hero section button hover
const Button = styled.button`
  ${color}
  ${border}
  ${borderWidth}
  ${borderStyle}
  ${borderColor}
  ${fontFamily}
  ${fontSize}
  ${space}
  ${letterSpacing}
  ${width}
  ${height}
  ${minWidth}
    
  line-height: 1.2;
  letter-spacing: 0.8px;

  &:disabled {
    opacity: 0.2;
  }

  &:hover {
    background-color: ${
      (props) => props.disabled ? null : props.theme.colors.secondaryColor
    };
    border-color: ${
      (props) => props.disabled ? null : props.theme.colors.secondaryColor
    }
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 414px) {
    font-size: 14px;
    width: ${
      (props) => props.width ? props.width : '176px'
    };
    line-height: 24px;
    letter-spacing: 1.5px;
  }
`

Button.defaultProps = {
  width: '176px',
  height: '36px',
  color: 'white',
  bg: 'primaryColor',
  border: 'none',
  borderColor: 'primaryColor',
  fontFamily: 'Serverless',
  fontSize: '14px',
  letterSpacing: 'primaryBtn',
  p: '0'
}

Button.displayName = 'Button'

export default withTheme(Button)