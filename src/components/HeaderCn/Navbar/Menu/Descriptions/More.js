// TODO: MAKE THIS CLASS READABLE
import React from 'react'

import { withTheme } from 'styled-components'
import {
  Background,
  Box,
  Position,
  withBeforeAfter,
} from 'serverless-design-system'
import NavbarContext from '../../../NavbarContext'
import styled from 'styled-components'

// TODO: remove hardcoded color
const MenuWrapper = withBeforeAfter(Position, `&`)

const BackgroundWithBorder = styled(Background)`
  @media screen and (min-width: 1280px) {
    border-radius: 4px;
    box-shadow: 2px 7px 18px 0 rgba(0, 0, 0, 0.08);
    border: solid 1px rgba(234, 234, 234, 0.3);
  }
`

const MenuDescription = ({ wrapperStyles, theme, children }) => (
  <NavbarContext.Consumer>
    {({ isNavbarShrinked }) => (
      <MenuWrapper
        zIndex='999'
        boxShadow='0 10px 50px 0 rgba(0, 0, 0, 0.15)'
        position={['relative', 'relative', 'relative', 'relative', 'absolute']}
        top={['0', '0', '0', '0', '52px']}
        left={['0', '0', '0', '0', '-50%']}
        minWidth={[0, 0, 0, 0, '212px']}
        beforeBoxBorderWidth={[0, 0, 0, 0, '0 7.5px 13.0px 7.5px']}
      >
        <BackgroundWithBorder
          background={['none', 'none', 'none', 'none', 'white']}
        >
          <Box
            px={[1, 1, 1, 1, 3]}
            pt={[1, 1, 1, 1, 3]}
            pb={[4, 4, 4, 4, 32]}
            {...wrapperStyles}
          >
            {children}
          </Box>
        </BackgroundWithBorder>
      </MenuWrapper>
    )}
  </NavbarContext.Consumer>
)

export default withTheme(MenuDescription)
