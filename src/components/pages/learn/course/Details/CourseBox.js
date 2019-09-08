import React from 'react'
import { Flex, Image, Card } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import playVideoIcon from 'src/assets/images/pages/courses/play-video-icon.svg'
import courseLevelIcon from 'src/assets/images/pages/courses/course-level-icon.svg'
import courseTimeIcon from 'src/assets/images/pages/courses/course-time-icon.svg'
import styled from 'styled-components'
import Share from './Share'

const FlexWithBorderTop = styled(Flex)`
  border-top: 1px solid #9b9b9b;
`

const CourseBox = props => (
  <Card
    height={[304]}
    width={[1, 1, 278, 278, 592]}
    flexDirection='column'
    mt={[62, 62, 62, 62, 92]}
    ml={[0, 0, 55, 55, 136]}
    borderRadius='4px'
    boxShadow='2px 7px 18px 0 rgba(0, 0, 0, 0.08)'
  >
    <Flex py={42} px={[32, 32, 20, 20, 32]} flexDirection='column'>
      <FlexWithBorderTop>
        <Image src={playVideoIcon} />
        <P ml={22} color='#8c8c8c'>
          8 video courses
        </P>
      </FlexWithBorderTop>
      <FlexWithBorderTop>
        <Image src={courseLevelIcon} />
        <P ml={22} color='#8c8c8c'>
          Beginner - Intermediate
        </P>
      </FlexWithBorderTop>
      <FlexWithBorderTop>
        <Image src={courseTimeIcon} />
        <P ml={22} color='#8c8c8c'>
          1hr 34min
        </P>
      </FlexWithBorderTop>
      <FlexWithBorderTop alignItems='center'>
        <Share />
      </FlexWithBorderTop>
    </Flex>
  </Card>
)

export default CourseBox
