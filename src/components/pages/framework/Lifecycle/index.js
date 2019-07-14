import React from 'react'
import { Column, Text, Flex } from 'serverless-design-system'
import { Heading, P } from 'src/fragments/DesignSystem'
import Actions from './Actions'
import useCasesData from './Data'
import Terminal from './Terminal'

const UseCases = () => (
  <Flex>
    <Terminal />
    <Column width={0.5}>
      <Heading.h3>The Serverless Application lifecycle</Heading.h3>
      <Flex>
        {useCasesData.map(useCase => (
          <Text key={useCase.id}>{useCase.title}</Text>
        ))}
      </Flex>
      <Text>Intro</Text>
      <P>
        Excepteur sint occaecat cupidatat non proident, sunt in Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.
      </P>
      <Actions />
    </Column>
  </Flex>
)

export default UseCases
