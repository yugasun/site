import React from 'react'
import PropTypes from 'prop-types'

import {
  ResponsiveStack,
} from 'serverless-design-system'
import { Button, SecondaryButton } from 'src/fragments/DesignSystem'
import { InternalLink } from 'src/fragments'

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
  flexDirection,
  justifyContent
}) => (
    <ResponsiveStack width={[1, 1, 1]} mx={'auto'} mt={3} mb={[0,0,3]} flexDirection={flexDirection} justifyContent={justifyContent}>
    <InternalLink to={firstLink}>
      <Button mr={[0, 0, '32px']} my={1} border={'2.5px solid'} width={['176px', '176px', '176px', '176px', '200px']}>
        {fName}
      </Button>
    </InternalLink>
    <InternalLink to={secondLink}>
      <SecondaryButton my={1} borderWidth={'2.5px'} width={['176px', '176px', '176px', '176px', '200px']}>
        {sName}
      </SecondaryButton>
    </InternalLink>
  </ResponsiveStack>
)

HeroActions.propTypes = {
  firstBtn: PropTypes.object.isRequired,
  secondBtn: PropTypes.object.isRequired,
}
export default HeroActions