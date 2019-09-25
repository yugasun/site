import React from 'react'
import { Background, Flex, Transition, Box } from 'serverless-design-system'

import { HeaderContainer } from 'src/components'
import Logo from './Logo'
import Navbar from '../Header/Navbar'
import NavButton from './NavButton'
import NavbarContext from './NavbarContext'
import HeaderWrapper from './Wrapper'
import SearchBox from './SearchBox'
import SidebarMenu from 'src/components/pages/doc/SidebarMenu'
import styled from 'styled-components'

const SidebarMenuBox = styled(Box)`
  position: absolute;
  background-color: #f7f7f7;
  z-index: 5;
  width: 52%;
  top: 50px;
  right: 0;
  height: 100vh;

  @media screen and (max-width: 415px) {
    background-color: black;
    width: 100%;
    top: 36px;
  }
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavbarActive: false,
      isNavbarShrinked: !props.transparent,
      toggleNavbarActiveness: this.toggleNavbarActiveness,
    }
  }

  componentDidMount() {
    if (this.props.transparent) {
      document.addEventListener('scroll', this.scrollHandler)
    }
  }

  componentWillUnmount() {
    if (this.props.transparent) {
      document.removeEventListener('scroll', this.scrollHandler)
    }
  }

  scrollHandler = () => {
    const { isNavbarShrinked } = this.state
    if (window.scrollY > 34) {
      if (isNavbarShrinked) {
        return
      }
      this.toggleNavbarShrinkness()
    } else if (isNavbarShrinked) {
      this.toggleNavbarShrinkness()
    }
  }

  toggleNavbarShrinkness = () =>
    this.setState(prevState => ({
      isNavbarShrinked: !prevState.isNavbarShrinked,
    }))

  toggleNavbarTransparency = () =>
    this.setState(prevState => ({
      isNavbarTransparent: !prevState.isNavbarTransparent,
    }))

  toggleNavbarActiveness = () =>
    this.setState(prevState => ({
      isNavbarActive: !prevState.isNavbarActive,
    }))

  render() {
    return (
      <React.Fragment>
        <HeaderWrapper
          width={1}
          maxHeight='100%'
          oy={['auto', 'auto', 'auto', 'auto', 'visible']}
        >
          <Background
            background={[
              'black',
              'black',
              'black',
              'black',
              this.state.isNavbarShrinked ? 'black' : 'transparent',
            ]}
          >
            <Transition py={['6px', '6px', 1, 0, 0]}>
              <HeaderContainer>
                <Flex.verticallyCenter
                  flexWrap='wrap'
                  justifyContent='space-between'
                  py={[0, 0, 0, 0, 2.5]}
                >
                  <Logo isNavbarActive={this.state.isNavbarActive} />
                  <NavbarContext.Provider value={this.state}>
                    <NavButton />
                    <Navbar />
                  </NavbarContext.Provider>
                </Flex.verticallyCenter>
              </HeaderContainer>
            </Transition>
          </Background>
        </HeaderWrapper>
        <SearchBox isNavbarActive={this.state.isNavbarActive} />
        <Box display={['block', 'block', 'block', 'block', 'none']}>
          <SidebarMenuBox
            display={this.state.isNavbarActive ? 'block' : 'none'}
            width={[1]}
          >
            <SidebarMenu activeLinkTo={this.props.url} />
          </SidebarMenuBox>
        </Box>
      </React.Fragment>
    )
  }
}

Header.defaultProps = { transparent: false }

export default Header
