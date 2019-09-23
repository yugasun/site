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
    transition: all .2s ease;
  `,
  ``,
  `
    cursor: pointer;
    position: relative;
  `
)

const TitleWithDropdown = styled(Text.span)`
  transition: all 0.3s ease;

  @media only screen and (min-width: 1024px) {
    ${({ name }) =>
      name == 'Contact Sales' &&
      `
    border-left: 1px solid rgba(255,255,255,0.4);
    padding-left: 24px;
  `};
  }

  &:hover {
    color: white;
  }
`
//TODO: pl + pr execution is really hacky - fix
const Title = ({ name, color, showDropdown }) => {
  return (
    <NavbarContext.Consumer>
      {({ isNavbarShrinked, isWhiteHeader, isDesktopView }) => (
        <TitleWrapperWithLeadingSlash
          pl={
            name == 'Contact Sales'
              ? [1, 1, '8px', '8px', '16px']
              : [1, 1, '8px', '8px', '12px']
          }
          pr={
            name == 'Sign-Up Free'
              ? [1, 1, '8px', '8px', '0px']
              : [1, 1, '8px', '8px', '12px']
          }
          pt={[2, 2, '16.5px']}
          pb={[2, 2, '16.5px']}
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
            fontFamily='SoleilSb'
            fontSize={'15px'}
            color={
              color
                ? color
                : isWhiteHeader && isDesktopView
                  ? 'black'
                  : 'rgba(255, 255, 255, .5)'
            }
            name={name}
          >
            {name}
          </TitleWithDropdown>
        </TitleWrapperWithLeadingSlash>
      )}
    </NavbarContext.Consumer>
  )
}

export default Title
