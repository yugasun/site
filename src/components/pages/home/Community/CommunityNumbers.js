import React from 'react'
import { AppContainerNewest as AppContainer } from 'src/components'
import { TitleWithIconNewest as TitleWithIcon } from 'src/fragments'
import { Heading, P } from 'src/fragments/DesignSystem'
import communityNumbersData from './CommunityNumbersData'
import { Column, Box, Row } from 'serverless-design-system'
import styled from 'styled-components'

const ColumnWithCustomMobileMargin = styled(Column)`
  @media screen and (min-width: 410px) and (max-width: 420px) {
    margin-top: 182px;
  }
`

const CommunityNumbers = () => (
  <AppContainer>
    <ColumnWithCustomMobileMargin
      width={[1, 1, 1, 1]}
      my={[212, 212, 286, 286, 162]}
    >
      <Box width={[0.8, 0.8, 0.6, 1, 1]}>
        <Heading.h3 color='black' align='center'>
          Backed by a rich and vibrant community
        </Heading.h3>
      </Box>
      <Row
        mt={42}
        flexWrap={['wrap', 'wrap', 'initial']}
        justifyContent={[
          'space-around',
          'space-around',
          'space-between',
          'space-between',
          'center',
        ]}
      >
        {communityNumbersData.map((item, index) => (
          <Column
            key={index}
            mt={index > 1 ? [3, 3, 0] : [0]}
            width={[0.5, 0.5, 'auto']}
            px={4}
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
    </ColumnWithCustomMobileMargin>
  </AppContainer>
)

export default CommunityNumbers
