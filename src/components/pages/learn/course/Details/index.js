import React from 'react'
import Requirements from './Requirements'
import Description from './Description'
import Outline from './Outline'
import CourseBox from './CourseBox'
import { Flex } from 'serverless-design-system'

const Courses = props => (
  <React.Fragment>
    <Flex flexDirection={['column-reverse', 'column-reverse', 'row']}>
      <Flex flexDirection='column' width={[1, 1, 0.5, 0.5]}>
        <Description />
        <Requirements />
        <Outline />
      </Flex>
      <CourseBox />
    </Flex>
  </React.Fragment>
)

export default Courses
