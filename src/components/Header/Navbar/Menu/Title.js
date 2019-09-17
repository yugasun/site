// TODO: REFACTOR THIS COMPONENT.

import React from 'react'
import { Transition, Text, withBeforeAfter } from 'serverless-design-system'
import NavbarContext from '../../NavbarContext'
import dropdownMenuIcon from 'src/assets/images/dropdown-menu-header-icon.svg'
import styled from 'styled-components'

const TitleWrapperWithLeadingSlash = withBeforeAfter(
  Transition,
  `&`,
  `
    position: absolute;
    content: ' ';
    width: 0;
    height: 0;
    opacity: 0;
    margin-top: -12.5px;
    top: 50%;
    transition: all .2s;
    transition-property: height, width;
  `,
  ``,
  `
    cursor: pointer;
    position: relative;

    &:hover {
      opacity: 0.6;
    }
  `
)

const TitleWithDropdown = styled(Text.span)`
  ${({ showDropdown }) =>
    showDropdown &&
    `
    @media only screen and (min-width : 1025px) {
      &:before {
        content: url(${dropdownMenuIcon});
        margin-right: 9px;
      }
    }
  `};
`

const Title = ({ name, color, showDropdown }) => {
  return (
    <NavbarContext.Consumer>
      {({ isNavbarShrinked, isWhiteHeader, isDesktopView }) => (
        <TitleWrapperWithLeadingSlash
          px={[1, 1, '8px', '8px', '1.5rem', '15px']}
          py={[2, 2, '16.5px']}
          transition={[
            'none',
            'none',
            isNavbarShrinked ? 'padding 0.5s' : 'none',
          ]}
          beforeBoxBackgroundColor={[
            'transparent',
            'transparent',
            'primaryColor',
          ]}
          beforeBoxLeft={[0, 0, '-1px', '3px', '4px', '3px']}
        >
          <TitleWithDropdown
            fontFamily='Soleil'
            fontSize={14}
            color={
              color ? color : isWhiteHeader && isDesktopView ? 'black' : 'white'
            }
            letterSpacing={0.7}
            showDropdown={showDropdown}
          >
            {name}
          </TitleWithDropdown>
        </TitleWrapperWithLeadingSlash>
      )}
    </NavbarContext.Consumer>
  )
}

export default Title
