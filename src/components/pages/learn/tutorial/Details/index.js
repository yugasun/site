import React from 'react'
import Transcript from './Transcript'
import Info from './Info'
import CourseBox from './CourseBox'
import PrevNext from './PrevNext'
import Video from './Video'
import DashboardCTA from './DashboardCTA'
import { Flex } from 'serverless-design-system'

const Courses = ({content, outline}) => (
  <React.Fragment>
    <Flex flexDirection={['column', 'column', 'column', 'column', 'row']} mt={92}>
      <Flex flexDirection='column' width={[1, 1, 1, 1, 0.7]}>
        <Video link={content.videoLink} />
        <PrevNext prevVideo={content.prevVideo} nextVideo={content.nextVideo}/>
        <DashboardCTA />
        <Info lessonInfo={content.lessonInfo} />
        <Transcript transcript={content.transcript} />
      </Flex>
      <CourseBox activeVideoNumber={content.videoNumber} outline={outline}/>
    </Flex>
  </React.Fragment>
)

export default Courses
