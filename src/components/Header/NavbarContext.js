import React from 'react'

export default React.createContext({
  isNavbarActive: false,
  isNavbarShrinked: false,
  isWhiteHeader: false,
  isDesktopView: true,
  toggleNavbarActiveness: () => {},
  toggleNavbarShrinkness: () => {},
})
