import React from 'react'
import { AppContainerNew as AppContainer }  from 'src/components'
import { Box, Heading, Row, Column, Image, Text, Flex } from 'serverless-design-system'
import allPartners from './PartnersData'

import styled from 'styled-components'

const FlexWithBoxShadow = styled(Flex)`
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
`

const PartnersContent = () => (
    <AppContainer>
        <Box
        pb={[500, 500, 494]}
      >
      {
        allPartners.map((partner, index) => {
          const isEvenItem = index % 2 == 0
          return (
            <Flex flexDirection={['column-reverse', 'column-reverse', isEvenItem ? 'row': 'row-reverse']} key={index} pt={[92, 92, 162]}>
              <Column width={['auto', 'auto', 488]}>
                <Heading.h2 fontFamily='Soleil'>{partner.name}</Heading.h2>
                <Heading.h4 fontFamily='Soleil'>{partner.location}</Heading.h4>
                <Text.p fontFamily='SoleilBk' lineHeight='26px'>{partner.description}</Text.p>
                <Row>
                <Text.p color='#fd5750'>
                  case study >
                </Text.p>
                <Text.p color='#fd5750' ml={52}>
                  component >
                </Text.p>
                </Row>
              </Column>
              <FlexWithBoxShadow alignItems='center' justifyContent='center' width={['auto', 'auto', '448px']} height={['auto', 'auto', partner.logo.bgHeight]} p={'32px'} ml={[0, 0, isEvenItem ? 207 : 0]} mr={[0, 0, isEvenItem ? 0 : 176]} mt={[0, 0, partner.name === 'Sinapsis'? 0 : 74]} mb={[4, 4, 0]}>
              <Image src={partner.logo.url}></Image>
              </FlexWithBoxShadow>
            </Flex>
          )
        })
      }
        </Box>
    </AppContainer>
)

export default PartnersContent