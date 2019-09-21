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
  `
)

const TitleWithDropdown = styled(Text.span)`
  transition: all 0.3s ease;

  &:hover {
    color: white;
  }
`

const Title = ({ name, color, showDropdown }) => {
  return (
    <NavbarContext.Consumer>
      {({ isNavbarShrinked, isWhiteHeader, isDesktopView }) => (
        <TitleWrapperWithLeadingSlash
          px={[1, 1, '8px', '8px', '1rem', '15px']}
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
            style={
              name == 'Register'
                ? {
                    borderLeft: '1px solid rgba(255,255,255,0.4)',
                    paddingLeft: '24px',
                  }
                : {}
            }
          >
            {name}
          </TitleWithDropdown>
        </TitleWrapperWithLeadingSlash>
      )}
    </NavbarContext.Consumer>
  )
}

export default Title
