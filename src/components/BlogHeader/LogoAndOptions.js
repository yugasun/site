import React from 'react'
import styled from 'styled-components'
import { Flex } from 'serverless-design-system'

import Logo from './Logo'
import MobileOptions from './MobileOptions'
import BlogNavbarContext from './BlogNavbarContext'
import { Box } from 'src/fragments/DesignSystem'
import CategoriesPartial from './MobileOptions/CategoriesPartial'
import HeaderCTAButton from 'src/components/Header/HeaderCTAButton'

const Wrapper = styled(Flex.verticallyCenter)`
  justify-content: space-between;
  transition: padding 0.5s;
`

const LogoAndOptions = () => (
  <BlogNavbarContext.Consumer>
    {({ isNavbarShrinked }) => (
      <React.Fragment>
        <Wrapper
          pt={['12px', '12px', isNavbarShrinked ? 0 : 15]}
          pb={['4px', '4px', isNavbarShrinked ? 0 : 15]}
        >
          <Logo />
          <Box.OnlyTabletAndDesktop>
            <HeaderCTAButton />
          </Box.OnlyTabletAndDesktop>
          <MobileOptions />
        </Wrapper>

        <Box.OnlyMobile>
          <Wrapper pb={['12px']}>
            <CategoriesPartial />
          </Wrapper>
        </Box.OnlyMobile>
      </React.Fragment>
    )}
  </BlogNavbarContext.Consumer>
)

export default LogoAndOptions
