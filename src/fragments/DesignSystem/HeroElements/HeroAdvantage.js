import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Text, P, TextWithIcon } from 'serverless-design-system'

const HeroAdvantage = ({ img, title, description }) => (
  <Flex width={[1, 1, 1 / 3]} px={[0, 0, 2]} mt={2} flexDirection='column'>
    <Flex justifyContent={['center', 'center', 'left']}>
      <TextWithIcon
        iconSrc={img}
        iconHeight='26px'
        iconWidth='45px'
        iconTop='-5px'
        iconLeft='-10px'
        backgroundSize='cover'
        textAlign={['center', 'center', 'left']}
      >
        <Text.span
          color='white'
          fontFamily='SoleilBk'
          fontSize={'18px'}
          align='center'
          lineHeight={'24px'}
          letterSpacing={'-0.28px'}
        >
          {title}
        </Text.span>
      </TextWithIcon>
    </Flex>
    <P color='gray.2' fontSize={'16px'} lineHeight={'26px'} letterSpacing={0} align={['center', 'center', 'left']}>{description}</P>
  </Flex>
)

HeroAdvantage.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default HeroAdvantage