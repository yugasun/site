import React from 'react'
import PropTypes from 'prop-types'

import { ResponsiveStack } from 'serverless-design-system'
import {
  Button,
  SecondaryButton,
  MobileCenteredBox,
} from 'src/fragments/DesignSystem'
import { InternalLink } from 'src/fragments'

const FinalLink = ({ anchorLink, to, children, className }) => {
  return anchorLink ? (
    <a href={to} className={className}>
      {children}
    </a>
  ) : (
    <InternalLink to={to} className={className}>
      {children}
    </InternalLink>
  )
}

const HeroActions = ({
  firstBtn: {
    name: fName,
    to: firstLink,
    crossDomain: fcrossDomain = false,
    completed: fCompleted = false,
    anchorLink: fanchorLink = false,
    className: fClassName = false,
  },
  secondBtn: {
    name: sName,
    to: secondLink,
    crossDomain: scrossDomain = false,
    completed: sCompleted = false,
    anchorLink: sanchorLink = false,
    className: sClassName = false,
  },
  buttonWidth,
  buttonMarginY,
  flexDirection,
  justifyContent,
  tabletRow,
}) => (
  <ResponsiveStack
    width={[1, 1, 1]}
    mx={'auto'}
    mt={3}
    mb={[0, 0, 3]}
    flexDirection={flexDirection}
    justifyContent={justifyContent}
  >
    <MobileCenteredBox>
      <FinalLink anchorLink={fanchorLink} to={firstLink} className={fClassName}>
        <Button
          mr={[
            0,
            0,
            justifyContent === 'center' || tabletRow ? '32px' : 0,
            justifyContent === 'center' || tabletRow ? '32px' : 0,
            '32px',
          ]}
          my={buttonMarginY ? buttonMarginY : 1}
          border={'2.5px solid'}
          width={buttonWidth ? buttonWidth : ['200px']}
        >
          {fName}
        </Button>
      </FinalLink>
    </MobileCenteredBox>

    <MobileCenteredBox>
      <FinalLink
        anchorLink={sanchorLink}
        to={secondLink}
        className={sClassName}
      >
        <SecondaryButton
          my={buttonMarginY ? buttonMarginY : 1}
          width={buttonWidth ? buttonWidth : ['200px']}
        >
          {sName}
        </SecondaryButton>
      </FinalLink>
    </MobileCenteredBox>
  </ResponsiveStack>
)

HeroActions.propTypes = {
  firstBtn: PropTypes.object.isRequired,
  secondBtn: PropTypes.object.isRequired,
}
export default HeroActions
