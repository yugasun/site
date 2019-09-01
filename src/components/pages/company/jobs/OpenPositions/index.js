import React from 'react'

import {
  Background,
  Column,
  Flex,
  ResponsiveStack,
} from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'
import { AppContainer } from 'src/components'
import ServerlessUserGroupStack from '../ServerlessUserGroupStack'
import Vacancies from './data'
import JobDetail from './JobDetail'
import backgroundImage from 'src/assets/images/rectangle-19.png'

const jobs = Vacancies.map(({ location, status, ...data }) => ({
  ...data,
  location: <JobDetail location={location} status={status} />,
}))

const OpenPositions = () => (
  <Background backgroundImage={`url(${backgroundImage})`}>
    <AppContainer>
      <Column py={[4, 4, 7]}>
        <Flex justifyContent='center'>
          <Heading.h2>Open Positions</Heading.h2>
        </Flex>
        <ResponsiveStack
          flexWrap='wrap'
          justifyContent='center'
          alignItems={['center', 'left']}
        >
          <ServerlessUserGroupStack items={jobs} />
        </ResponsiveStack>
      </Column>
    </AppContainer>
  </Background>
)

export default OpenPositions
