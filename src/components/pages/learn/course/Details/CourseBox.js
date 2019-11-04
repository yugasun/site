import React from 'react'
import { Flex, Image, Card } from 'serverless-design-system'
import { P, Button } from 'src/fragments/DesignSystem'
import playVideoIcon from 'src/assets/images/pages/courses/play-video-icon.svg'
import courseLevelIcon from 'src/assets/images/pages/courses/course-level-icon.svg'
import courseTimeIcon from 'src/assets/images/pages/courses/course-time-icon.svg'
import styled from 'styled-components'
import Share from './Share'
import { InternalLink } from 'src/fragments'
import fullStackAwsImage from 'src/assets/images/pages/learn/home/full-stack-app-on-aws-course.svg'
import serverlessFrontendImage from 'src/assets/images/pages/learn/home/serverless-frontend-course.svg'
const courseImage = {
    'full-stack-application-development-on-aws': fullStackAwsImage,
    'serverless-for-frontend-developers': serverlessFrontendImage
}
const FlexWithBorderTop = styled(Flex)`
  border-top: 1px solid #eaeaea;
`

const CourseBox = ({numOfLessons, level, time, image, slug, startingCourseLink}) => (
  <Card
    height={[480]}
    width={[1, 1, 278, 278, 379]}
    flexDirection='column'
    mt={[62, 62, 62, 62, -162]}
    ml={[0, 0, 55, 55, 136]}
    border='1px solid rgba(255,255,255,0.2)'
    borderRadius='4px'
    boxShadow='2px 7px 18px 0 rgba(0, 0, 0, 0.08)'
  >
    <Image src={courseImage[slug]} width={1} />
    <Flex flexDirection='column'>
        <Flex px={[32, 32, 20, 20, 32]} >
        <Image src={playVideoIcon} />
        <P ml={22} color='#8c8c8c'>
          {numOfLessons} video lessons
        </P>
        </Flex>
      <FlexWithBorderTop px={[32, 32, 20, 20, 32]}>
        <Image src={courseLevelIcon} />
        <P ml={22} color='#8c8c8c'>
          {level}
        </P>
      </FlexWithBorderTop>
      <FlexWithBorderTop px={[32, 32, 20, 20, 32]}>
        <Image src={courseTimeIcon} />
        <P ml={22} color='#8c8c8c'>
          {time}
        </P>
      </FlexWithBorderTop>
      <FlexWithBorderTop justifyContent='center'>
        <InternalLink to={startingCourseLink}>
          <Button mt={16} height='60px' fontSize='18px' pt={'6px'}>&#9658; &nbsp; Start Course</Button>
        </InternalLink>
      </FlexWithBorderTop>
    </Flex>
  </Card>
)

export default CourseBox
