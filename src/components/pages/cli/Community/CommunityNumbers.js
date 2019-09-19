import React from 'react'
import { AppContainer } from 'src/components'
import { Heading, P } from 'src/fragments/DesignSystem'
import communityNumbersData from './CommunityNumbersData'
import { Column, Box, Row } from 'serverless-design-system'

const CommunityNumbers = () => (
  <AppContainer>
    <Column width={[1, 1, 1, 1]} mb={[92, 92, 92, 92, 132]}>
      <Box width={[1]}>
        <Heading.h3 color='black' align='center' fontFamily='Soleil'>
          Backed by a rich and vibrant community
        </Heading.h3>
      </Box>
      <Row
        mt={[42, 42, 42, 42, 62]}
        flexWrap={['wrap', 'wrap', 'initial']}
        justifyContent={['space-around', 'space-around', 'center']}
      >
        {communityNumbersData.map((item, index) => (
          <Column
            key={index}
            mt={index > 1 ? [3, 3, 0] : [0]}
            width={[0.5, 0.5, 'auto']}
            px={[2, 2, 3, 4, 4]}
          >
            <Heading.h2
              pb={0}
              my={0}
              align='center'
              ml={index == 1 ? [-2, -2, 0] : [0]}
            >
              {item.number}
            </Heading.h2>
            <Box width={index == 1 ? [0.9, 0.9, 1] : [1]}>
              <P color='#8c8c8c' m={0} align='center'>
                {item.title}
              </P>
            </Box>
          </Column>
        ))}
      </Row>
    </Column>
  </AppContainer>
)

export default CommunityNumbers
