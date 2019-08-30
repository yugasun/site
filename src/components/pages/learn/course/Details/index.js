import React from 'react'
import CourseOutline from './CourseOutline'
import Requirements from './Requirements'
import CourseBox from './CourseBox'
import { Flex, Box } from 'serverless-design-system'

const Courses = props => (
  <Box mb={[92, 92, 92, 92, 132]}>
    <Flex>
      <Flex flexDirection='column'>
        <Requirements />
        <CourseOutline />
      </Flex>
      <CourseBox />
    </Flex>
  </Box>
)

export default Courses
