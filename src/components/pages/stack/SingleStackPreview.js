import React from 'react'
import styled from 'styled-components'
import { Box, Text, Card } from 'serverless-design-system'
import { InternalLink, ExternalLink } from 'src/fragments'
import { Heading, P } from 'src/fragments/DesignSystem'

const HoverableColumn = styled(Card)`
  @media screen and (min-width: 415px) {
    background-color: white;
    border: 1px solid #eaeaea;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
    &:hover {
      box-shadow: 2px 10px 24px 0 rgba(0, 0, 0, 0.08);
    }
  }
`

const BoxWithMiddleElementMargin = styled(Box)`
  @media screen and (min-width: 1230px) {
    :not(:nth-child(4n + 4)) {
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 415px) and (max-width: 769px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 769px) and (max-width: 1229px) {
    width: 33%;
    padding: 0 20px;
  }
`

const singleExamplePreview = ({
  id,
  name,
  provider,
  link,
  category,
  otherFallbackCategory,
}) => {
  return (
    <BoxWithMiddleElementMargin
      width={[1, 1, 1 / 2, 1 / 3, '22.5%', '280px']}
      mb={[42, 42, 32]}
    >
      <HoverableColumn>
        <Box m={['0px 15px', '0px 15px', '32px']}>
          <ExternalLink to={link} style={{ color: 'inherit' }}>
            <Box>
              <Text
                color='#8c8c8c'
                fontSize={[0]}
                fontFamily='Soleil'
                my='8px'
                lineHeight={[1.33]}
              >
                {provider}
              </Text>
              <Heading.h5>{name}</Heading.h5>
              <P color='#5b5b5b' mt={'8px'}>
                {otherFallbackCategory || category}
              </P>
            </Box>
          </ExternalLink>
        </Box>
      </HoverableColumn>
    </BoxWithMiddleElementMargin>
  )
}

export default singleExamplePreview
