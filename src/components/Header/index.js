import React from 'react'
import { Background, Flex, Transition } from 'serverless-design-system'

import { HeaderContainer } from 'src/components'
import Logo from './Logo'
import Navbar from './Navbar'
import NavButton from './NavButton'
import NavbarContext from './NavbarContext'
import HeaderWrapper from './Wrapper'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultIsWhiteHeader: props.startWithWhiteHeader ? true : false,
      isWhiteHeader: props.startWithWhiteHeader ? true : false,
      isNavbarActive: false,
      isDesktopView: true,
      isNavbarShrinked: !props.transparent,
      toggleNavbarActiveness: this.toggleNavbarActiveness,
    }
  }

  componentDidMount() {
    if (this.props.transparent) {
      document.addEventListener('scroll', this.scrollHandler)
      if (window.innerWidth < 1280) {
        this.setState({ isDesktopView: false })
      }
    }
  }

  componentWillUnmount() {
    if (this.props.transparent) {
      document.removeEventListener('scroll', this.scrollHandler)
      if (window.innerWidth < 1280) {
        this.setState({ isDesktopView: false })
      }
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

  toggleNavbarShrinkness = () => {
    this.setState(prevState => ({
      isNavbarShrinked: !prevState.isNavbarShrinked,
    }))

    if (this.state.defaultIsWhiteHeader) {
      this.setState(prevState => ({
        isWhiteHeader: !prevState.isWhiteHeader,
      }))
    }
  }

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
          <Transition py={[1, 1, 1, 1, '7px']}>
            <HeaderContainer>
              <Flex.verticallyCenter
                flexWrap='wrap'
                justifyContent='space-between'
              >
                <NavbarContext.Provider value={this.state}>
                  <Logo />
                  <NavButton />
                  <Navbar />
                </NavbarContext.Provider>
              </Flex.verticallyCenter>
            </HeaderContainer>
          </Transition>
        </Background>
      </HeaderWrapper>
    )
  }
}

Header.defaultProps = { transparent: false }

export default Header
