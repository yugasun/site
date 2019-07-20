import React from 'react'
import { HeroActionsNewest as HeroActions } from 'src/fragments'
import { contactForm, gettingStarted } from 'src/constants/newUrls'

const HomeActions = () => (
  <HeroActions
    firstBtn={{
      name: 'contact us',
      to: contactForm,
      completed: true,
      className: 'position-hero',
    }}
    secondBtn={{
      name: 'download whitepaper',
      to: gettingStarted,
      completed: true,
      className: 'position-hero',
    }}
    buttonWidth={['300px', '325px', '152px', '152px', '176px']}
    flexDirection={['column', 'column', 'row']}
    justifyContent={['center', 'center', 'left']}
    tabletRow={true}
  />
)

export default HomeActions
