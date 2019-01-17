import React from 'react'
import { Background, Card, Column, Heading, theme, Text } from 'serverless-design-system'
import Masonry from 'react-masonry-css'
import styled from 'styled-components'
import { P } from 'src/fragments/DesignSystem'

const { breakpoints } = theme
const breakpointCols = breakpoints.reduce((accumulator, bp, index) => {
  if (index < 2) {
    accumulator[bp] = 2
    return accumulator
  }
  if (index !== breakpoints.length - 1) {
    accumulator[bp] = index + 1
    return accumulator
  }
  return accumulator
}, {
  'default': breakpoints.length - 1
})

const FlexedMasonry = styled(Masonry)`
  display: flex;
  justify-content: space-between;
`

const GroupCard = ({ heading, title, location, link }) => (
  <Column
    width={['90%', '90%', '90%', '100%', '384px']}
    my={[1, 1, 2]}
    minHeight='128px'
    justifyContent='center'
  >
    <Background background='white'>
      <Card
        boxShadow='2px 2px 8px 0 #eaeaea'
        border='1px solid #eaeaea'
        p={[1, 1, 2, 4]}
      >
        {
          heading ? (
            <Heading.h6
              fontFamily='Soleil'
              fontSize={0}
              color='gray.3'
            >
              { heading }
            </Heading.h6>
          ) : null
        }
        <Text
          fontFamily='Soleil'
          fontSize={[2, 2, 4]}
          lineHeight={['24px', '24px', '24px', '38px']}
          m={0}
          color='black'
        >
          {title}
        </Text>
        <P
          fontSize={[0, 0, 2]}
          mt={1}
          mb={0}
        >
          {location}
        </P>
      </Card>
    </Background>
  </Column>
)

const ServerlessUserGroupStack = ({ items }) => (
  <FlexedMasonry
    breakpointCols={breakpointCols}
  >
    {
      items.map(({ heading, title, location, link }, index) => (
        link ? (
          <a key={`${title}-${index}`} href={link} target='_blank'>
            <GroupCard heading={heading} title={title} location={location} />
          </a>
        ) : (
          <GroupCard
            key={`${title}-${index}`}
            heading={heading}
            title={title}
            location={location}
          />
        )
      ))
    }
  </FlexedMasonry>
)

export default ServerlessUserGroupStack