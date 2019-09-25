import React from 'react'
import Data from './Data'
import { Flex, Text } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'

const TrainingPlans = props => (
  <Flex flexDirection={['column', 'column', 'row', 'row', 'column']}>
    {Data.map((column, index) => (
      <Flex
        key={index}
        flexDirection='column'
        mb={index == 0 ? [32, 32, 0, 0, 42] : [0, 0, 0, 0, 42]}
      >
        <Text
          fontFamily={[
            'SoleilBk',
            'SoleilBk',
            'SoleilBk',
            'SoleilBk',
            'Soleil',
          ]}
          fontSize={[18, 18, 18, 18, 24]}
          lineHeight={['30px', '30px', '30px', '30px', '38px']}
          letterSpacing={[
            '-0.28px',
            '-0.28px',
            '-0.28px',
            '-0.28px',
            '-0.38px',
          ]}
          mb={22}
        >
          {column.title}
        </Text>
        <Flex flexDirection='column'>
          {column.items.map((item, index) => (
            <Flex key={index + 'smalltext'}>
              <P m={0} pl={['5px', '5px', 0, 0, 15]} pr={[15, 15, 15, 15, 15]}>
                •
              </P>
              <P m={0}>{item}</P>
            </Flex>
          ))}
        </Flex>
      </Flex>
    ))}
  </Flex>
)

export default TrainingPlans
