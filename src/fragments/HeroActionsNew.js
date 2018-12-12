import React from 'react'
import PropTypes from 'prop-types'

import {
  ResponsiveStack,
  Box
} from 'serverless-design-system'
import { Button, SecondaryButton, MobileCenteredBox } from 'src/fragments/DesignSystem'
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
    <MobileCenteredBox>
      <InternalLink to={firstLink}>
        <Button mr={[0, 0, justifyContent === 'center' ? '32px' : 0, justifyContent === 'center' ? '32px' : 0, '32px']} my={1} border={'2.5px solid'} width={['176px', '176px', '176px', '176px', '200px']}>
          {fName}
        </Button>
      </InternalLink>
    </MobileCenteredBox>

    <MobileCenteredBox>
      <InternalLink to={secondLink}>
        <SecondaryButton my={1} width={['176px', '176px', '176px', '176px', '200px']}>
          {sName}
        </SecondaryButton>
      </InternalLink>
    </MobileCenteredBox>

  </ResponsiveStack>
)

HeroActions.propTypes = {
  firstBtn: PropTypes.object.isRequired,
  secondBtn: PropTypes.object.isRequired,
}
export default HeroActions