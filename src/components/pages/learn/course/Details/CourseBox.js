import React from 'react'
import { Flex, Image, Card } from 'serverless-design-system'
import { P, Button } from 'src/fragments/DesignSystem'
import playVideoIcon from 'src/assets/images/pages/courses/play-video-icon.svg'
import courseLevelIcon from 'src/assets/images/pages/courses/course-level-icon.svg'
import courseTimeIcon from 'src/assets/images/pages/courses/course-time-icon.svg'
import styled from 'styled-components'
import Share from './Share'
import fullStackCourseImage from 'src/assets/images/pages/learn/home/full-stack-app-on-aws-course.svg'

const FlexWithBorderTop = styled(Flex)`
  border-top: 1px solid #D8D8D8;
`

const CourseBox = props => (
  <Card
    height={[460]}
    width={[1, 1, 278, 278, 379]}
    flexDirection='column'
    mt={[62, 62, 62, 62, -162]}
    ml={[0, 0, 55, 55, 136]}
    borderRadius='4px'
    boxShadow='2px 7px 18px 0 rgba(0, 0, 0, 0.08)'
  >
    <Image src={fullStackCourseImage} width={1} />
    <Flex flexDirection='column'>
        <Flex px={[32, 32, 20, 20, 32]} >
        <Image src={playVideoIcon} />
        <P ml={22} color='#8c8c8c'>
          21 video lessons
        </P>
        </Flex>
      <FlexWithBorderTop px={[32, 32, 20, 20, 32]}>
        <Image src={courseLevelIcon} />
        <P ml={22} color='#8c8c8c'>
          Beginner - Intermediate
        </P>
      </FlexWithBorderTop>
      <FlexWithBorderTop px={[32, 32, 20, 20, 32]}>
        <Image src={courseTimeIcon} />
        <P ml={22} color='#8c8c8c'>
          1hr 34min
        </P>
      </FlexWithBorderTop>
      <FlexWithBorderTop justifyContent='center'>
        <Button mt={16}>Start Course</Button>
      </FlexWithBorderTop>
    </Flex>
  </Card>
)

export default CourseBox
