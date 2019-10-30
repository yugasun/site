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
        width={[1, 1, 1, 1, 0.65]}
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
        <P m={0}>{column.description}</P>
      </Flex>
    ))}
  </Flex>
)

export default TrainingPlans
