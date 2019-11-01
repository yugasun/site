import React from 'react'
import Transcript from './Transcript'
import Info from './Info'
import CourseBox from './CourseBox'
import PrevNext from './PrevNext'
import Video from './Video'
import { Flex } from 'serverless-design-system'

const Courses = ({content}) => (
  <React.Fragment>
    <Flex flexDirection={['column-reverse', 'column-reverse', 'row']} mt={92}>
      <Flex flexDirection='column' width={[1, 1, 0.7]}>
        <Video link={content.videoLink} />
        <PrevNext />
        <Info />
        <Transcript />
      </Flex>
      <CourseBox />
    </Flex>
  </React.Fragment>
)

export default Courses
