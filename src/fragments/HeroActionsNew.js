import React from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  SecondaryButton,
  ResponsiveStack,
} from 'serverless-design-system'
import NavLink from 'src/components/NavLink'

const HeroActions = ({
  firstBtn: {
    name: fName,
    to: firstLink,
    crossDomain: fcrossDomain = false,
    completed: fCompleted = false,
  },
  secondBtn: {
    name: sName,
    to: secondLink,
    crossDomain: scrossDomain = false,
    completed: sCompleted = false,
  },
}) => (
  <ResponsiveStack width={[1, 1, 1]} mx={'auto'} my={3}>
    <NavLink to={firstLink} completed={fCompleted} crossDomain={fcrossDomain}>
      <Button mr={'50px'} my={1} border={'2.5px solid'} p={1}>
        {fName}
      </Button>
    </NavLink>
    <NavLink to={secondLink} completed={sCompleted} crossDomain={scrossDomain}>
      <SecondaryButton my={1} borderWidth={'2.5px'} p={1}>
        {sName}
      </SecondaryButton>
    </NavLink>
  </ResponsiveStack>
)

HeroActions.propTypes = {
  firstBtn: PropTypes.object.isRequired,
  secondBtn: PropTypes.object.isRequired,
}
export default HeroActions