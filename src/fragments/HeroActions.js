import React from 'react'
import PropTypes from 'prop-types'

import { ResponsiveStack } from 'serverless-design-system'
import {
  Button,
  SecondaryButton,
  MobileCenteredBox,
} from 'src/fragments/DesignSystem'
import { InternalLink, DashboardLink } from 'src/fragments'

//TODO: club with other Hero components + check if it's required in the first place

const FinalLink = ({ dashboardLink, to, children, className }) => {
  return dashboardLink ? (
    <DashboardLink className={className ? className : null}>
      {children}
    </DashboardLink>
  ) : (
    <InternalLink to={to} className={className ? className : null}>
      {children}
    </InternalLink>
  )
}

const HeroActionsNewest = ({
  firstBtn: {
    name: fName,
    to: firstLink,
    crossDomain: fcrossDomain = false,
    completed: fCompleted = false,
    dashboardLink: fdashboardLink = false,
    className: fClassName = false,
  },
  secondBtn: {
    name: sName,
    to: secondLink,
    crossDomain: scrossDomain = false,
    completed: sCompleted = false,
    dashboardLink: sdashboardLink = false,
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
      <FinalLink
        dashboardLink={fdashboardLink}
        to={firstLink}
        className={fClassName}
      >
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
        dashboardLink={sdashboardLink}
        to={secondLink}
        className={sClassName}
      >
        <SecondaryButton
          my={buttonMarginY ? buttonMarginY : [0, 0, 1]}
          width={buttonWidth ? buttonWidth : ['200px']}
        >
          {sName}
        </SecondaryButton>
      </FinalLink>
    </MobileCenteredBox>
  </ResponsiveStack>
)

HeroActionsNewest.propTypes = {
  firstBtn: PropTypes.object.isRequired,
  secondBtn: PropTypes.object.isRequired,
}
export default HeroActionsNewest
