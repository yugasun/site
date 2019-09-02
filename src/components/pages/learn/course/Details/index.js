import React from 'react'
import CourseOutline from './CourseOutline'
import Requirements from './Requirements'
import Description from './Description'
import CourseBox from './CourseBox'
import { Flex } from 'serverless-design-system'

const Courses = props => (
  <React.Fragment>
    <CourseOutline />
    <Flex flexDirection={['column-reverse', 'column-reverse', 'row']}>
      <Flex flexDirection='column' width={[1, 1, 0.5, 0.5]}>
        <Description />
        <Requirements />
      </Flex>
      <CourseBox />
    </Flex>
  </React.Fragment>
)

export default Courses
