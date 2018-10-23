import React from 'react'
import { Background, Box, Flex, Transition } from 'serverless-design-system'

import { AppContainerNew as AppContainer } from 'src/components'
import Logo from './Logo'
import Navbar from './Navbar'
import NavButton from './NavButton'
import NavbarContext from './NavbarContext'
import HeaderWrapper from './Wrapper'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavbarActive: false,
      isNavbarTransparencyEnabled: props.transparent,
      isNavbarTransparent: props.transparent,
      isNavbarShrinked: false,
      toggleNavbarActiveness: this.toggleNavbarActiveness,
    }
  }

  componentDidMount() {
      document.addEventListener('scroll', this.scrollHandler)
  }

  componentWillUnmount() {
      document.removeEventListener('scroll', this.scrollHandler)
  }

  scrollHandler = () => {
    const { isNavbarShrinked } = this.state
    if (window.scrollY > 34) {
      if (isNavbarShrinked) {
        return
      }
      this.toggleNavbarShrinkness()
      if(this.state.isNavbarTransparencyEnabled) {
        this.toggleNavbarTransparency()
      }
    } else if (isNavbarShrinked) {
      this.toggleNavbarShrinkness()
      if(this.state.isNavbarTransparencyEnabled) {
        this.toggleNavbarTransparency()
      }
    }
  }

  toggleNavbarShrinkness = () => this.setState(prevState => ({
      isNavbarShrinked: !prevState.isNavbarShrinked,
  }))

  toggleNavbarTransparency = () => this.setState(prevState => ({
      isNavbarTransparent: !prevState.isNavbarTransparent,
  }))

  toggleNavbarActiveness = () => this.setState(prevState => ({ 
      isNavbarActive: !prevState.isNavbarActive,
  }))

  render() {
    return (
      <HeaderWrapper
        width={1}
        maxHeight='100%'
        oy={['scroll', 'scroll', 'visible']}
      >
        <Background
          background={[
            'black',
            'black',
            this.state.isNavbarTransparent ? 'transparent': 'black',
          ]}
        >
          <Transition py={[1, 1, this.state.isNavbarShrinked ? 0 : 3]} transition='all .5s linear'>
            <AppContainer>
              <Flex.verticallyCenter
                flexWrap='wrap'
                justifyContent='space-between'
              >
                <Logo />
                <NavbarContext.Provider value={this.state}>
                  <NavButton />
                  <Navbar />
                </NavbarContext.Provider>
              </Flex.verticallyCenter>
            </AppContainer>
          </Transition>
        </Background>
      </HeaderWrapper>
    )
  }
}

Header.defaultProps = { transparent: false }

export default Header
