import React from 'react'
import { Flex, Background, Image, Card } from 'serverless-design-system'
import { P, Button } from 'src/fragments/DesignSystem'
import playVideoIcon from 'src/assets/images/pages/courses/play-video-icon.svg'
import courseLevelIcon from 'src/assets/images/pages/courses/course-level-icon.svg'
import courseTimeIcon from 'src/assets/images/pages/courses/course-time-icon.svg'
import courseBgImage from 'src/assets/images/pages/courses/course-bg-image.png'
import styled from 'styled-components'
import facebookIcon from 'src/assets/images/pages/courses/share/facebook.svg'
import twitterIcon from 'src/assets/images/pages/courses/share/twitter.svg'
import linkedinIcon from 'src/assets/images/pages/courses/share/linkedin.svg'

const FlexWithBorderTop = styled(Flex)`
  border-top: 1px solid #9b9b9b;
`

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
    <Background
      background={`url(${courseBgImage}) no-repeat`}
      width='100%'
      height='334px'
    >
      <Flex justifyContent='center' alignItems='center' height='334px'>
        <Button>start course</Button>
      </Flex>
    </Background>
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
      <FlexWithBorderTop>
        <P mr={42} color='#8c8c8c'>
          Share
        </P>
        <Flex mr={22}>
          <Image src={facebookIcon} />
        </Flex>
        <Flex mr={22}>
          <Image src={twitterIcon} />
        </Flex>
        <Flex mr={22}>
          <Image src={linkedinIcon} />
        </Flex>
      </FlexWithBorderTop>
    </Flex>
  </Card>
)

export default CourseBox
