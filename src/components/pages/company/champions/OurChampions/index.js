import React from 'react'

import { Flex, Box, Image, Text, Column } from 'serverless-design-system'

import { AppContainer } from 'src/components'
import Champion1 from 'src/assets/images/champion1.png'
import Champion2 from 'src/assets/images/champion2.png'
import Champion3 from 'src/assets/images/champion3.png'
import { Heading, P } from 'src/fragments/DesignSystem'
import styled from 'styled-components'

const ImageWithBorderRadius = styled(Image)`
  border-radius: 50%;
`

const champions = [
  {
    name: 'Takahiro Horike',
    image: Champion1,
    details: ['Software Engineer', 'DigitalCube Co.Ltd'],
  },
  {
    name: 'Marcia Villalba',
    image: Champion2,
    details: ['Senior Full-stack Developer', 'Rovio'],
  },
  {
    name: 'Ryan Scott Brown',
    image: Champion3,
    details: ['Senior Software Engineer', 'Ansible by Red Hat'],
  },
]

const ChampionCard = ({ name, image, details }) => (
  <Column mt={[3, 3, 3, 0]}>
    <ImageWithBorderRadius
      src={image}
      alt={name}
      width={'auto'}
      maxHeight={204}
    />
    <Box>
      <Text mt={2} fontFamily='SoleilBk' fontSize={[3, 3, 3, 4]} align='center'>
        {name}
      </Text>

      <P fontSize={[1, 1, 2]} align='center'>
        {details.map(detail => (
          <Box>{detail}</Box>
        ))}
      </P>
    </Box>
  </Column>
)

const OurChampions = () => (
  <AppContainer>
    <Box pt={2}>
      <Box mt={[1, 2, 3, 10]} mb={[1, 2, 3, 8]}>
        <Heading.h2 align='center' my={1}>
          Our Serverless Champions
        </Heading.h2>
        {
          <P align='center' color='#5b5b5b'>
            Community ambassadors handpicked by us.
          </P>
        }
      </Box>
      <Flex
        flexDirection={['column', 'column', 'row']}
        mt={[1, 2, 2, 3]}
        mb={[52, 52, 0, 0, 6]}
        justifyContent='space-evenly'
        alignItems='center'
      >
        {champions.map((champion, index) => (
          <ChampionCard key={`champion-${index}`} {...champion} />
        ))}
      </Flex>
    </Box>
  </AppContainer>
)

export default OurChampions
