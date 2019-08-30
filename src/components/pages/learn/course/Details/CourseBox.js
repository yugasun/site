import React from 'react'
import { Flex, Background, Image, Card } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import playVideoIcon from 'src/assets/images/pages/courses/play-video-icon.svg'
import courseLevelIcon from 'src/assets/images/pages/courses/course-level-icon.svg'
import courseTimeIcon from 'src/assets/images/pages/courses/course-time-icon.svg'

const CourseBox = props => (
  <Card
    height='638px'
    width='592px'
    flexDirection='column'
    mt={[32, 32, 62, 62, 92]}
    mx='auto'
    borderRadius='4px'
    boxShadow='2px 7px 18px 0 rgba(0, 0, 0, 0.08)'
  >
    <Background background='' />
    <Flex>
      <Image src={playVideoIcon} />
      <P>8 video courses</P>
    </Flex>
    <Flex>
      <Image src={courseLevelIcon} />
      <P>Beginner - Intermediate</P>
    </Flex>
    <Flex>
      <Image src={courseTimeIcon} />
      <P>1hr 34min</P>
    </Flex>
  </Card>
)

export default CourseBox
