import React from 'react'
import { AppContainer } from 'src/components'
import {
  Box,
  Heading,
  Column,
  Image,
  Text,
  Flex,
} from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import allPartners from './PartnersData'

import styled from 'styled-components'

const FlexWithBoxShadow = styled(Flex)`
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
`

const PartnersContent = () => (
  <AppContainer>
    <Box pb={[50, 50, 20, 20, 110]}>
      {allPartners.map((partner, index) => {
        const isEvenItem = index % 2 == 0
        return (
          <Flex
            flexDirection={[
              'column-reverse',
              'column-reverse',
              isEvenItem ? 'row' : 'row-reverse',
            ]}
            key={index}
            pt={index == 0 ? [62, 62, 62, 62, 92] : [92, 92, 162]}
          >
            <Column width={['auto', 'auto', '40%']}>
              <Heading.h2 fontFamily='Soleil'>{partner.name}</Heading.h2>
              <Heading.h4 fontFamily='Soleil'>{partner.location}</Heading.h4>
              <Text.p fontFamily='SoleilBk' lineHeight='26px' color='gray.3'>
                {partner.description}
              </Text.p>
            </Column>
            <FlexWithBoxShadow
              alignItems='center'
              justifyContent='center'
              width={['auto', 'auto', '40%']}
              height={['auto', 'auto', partner.logo.bgHeight]}
              p={'32px'}
              ml={[0, 0, isEvenItem ? '17%' : 0]}
              mr={[0, 0, isEvenItem ? 0 : '14%']}
              mt={[0, 0, partner.name === 'Sinapsis' ? 0 : 74]}
              mb={[4, 4, 0]}
            >
              <ExternalLink to={partner.websiteLink}>
                <Image
                  src={partner.logo.url}
                  width={
                    partner.logo.imageWidth ? partner.logo.imageWidth : 'auto'
                  }
                />
              </ExternalLink>
            </FlexWithBoxShadow>
          </Flex>
        )
      })}
    </Box>
  </AppContainer>
)

export default PartnersContent
