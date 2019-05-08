import React from 'react'
import { AppContainerNewest as AppContainer } from 'src/components'
import { TitleWithIconNewest as TitleWithIcon } from 'src/fragments'
import { Heading, P } from 'src/fragments/DesignSystem'
import communityNumbersData from './CommunityNumbersData'
import { Column, Box, Row } from 'serverless-design-system'

const CommunityNumbers = () => (
  <AppContainer>
    <Column
      width={[1, 1, 1, 1]}
      mt={[212, 212, 286, 286, 0]}
      ml={[0, 0, 0, 0, 5, -6]}
    >
      <Box width={[0.8, 0.8, 0.6, 1, 0.5]}>
        <TitleWithIcon color='black'>
          Backed by a rich and vibrant community
        </TitleWithIcon>
      </Box>
      <Row
        mt={42}
        flexWrap={['wrap', 'wrap', 'initial']}
        justifyContent={[
          'space-around',
          'space-around',
          'space-between',
          'space-between',
          'none',
        ]}
      >
        {communityNumbersData.map((item, index) => (
          <Column
            key={index}
            mr={[0, 0, 0, 0, 64]}
            mt={index > 1 ? [3, 3, 0] : [0]}
            width={[0.5, 0.5, 'auto']}
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
