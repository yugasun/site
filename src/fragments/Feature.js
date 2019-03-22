import React from 'react'
import PropTypes from 'prop-types'

import {
  Box,
  Image,
  Relative,
  Column,
  withBeforeAfter,
} from 'serverless-design-system'
import { P, Heading } from 'src/fragments/DesignSystem'

const HeaderWithCount = withBeforeAfter(
  Heading.h3,
  `&`,
  `
    position: absolute;
    color: #fd5750;
    font-family: 'Soleil';
    font-size: 160px;
    font-size: 10rem;
    line-height: 1;
    z-index: -1;
    opacity: 0.08;
    left: -5rem;
    top: -2.5rem;
  `,
  ``,
  `position: relative;`
)

const Feature = ({
  header,
  img,
  content,
  leadingNumber,
  rightAligned,
  action,
}) => (
  <Column
    width={[1, 1, 0.49, 0.5]}
    pr={[0, 0, 2, rightAligned ? '8.5%' : 0]}
    pl={[0, 0, 2, rightAligned ? 0 : '8.5%']}
    pb={[4, 4, 5]}
    style={{ counterIncrement: 'step-counter' }}
    justifyContent={action ? 'space-between' : 'flex-start'}
  >
    <Relative>
      {img && (
        <Box mb={25}>
          <Image src={img} />
        </Box>
      )}
      <HeaderWithCount
        headingImagePresence={!!img}
        beforeBoxContent={[
          'none',
          'none',
          leadingNumber
            ? 'counter(step-counter, decimal-leading-zero)'
            : 'none',
        ]}
      >
        {header}
      </HeaderWithCount>
      <P>{content}</P>
    </Relative>
    {action}
  </Column>
)

Feature.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  leadingNumber: PropTypes.bool,
}

Feature.defaultProps = {
  leadingNumber: true,
}

export default Feature
