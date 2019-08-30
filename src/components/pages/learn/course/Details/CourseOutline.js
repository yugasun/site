import React from 'react'
import { Box, Text, Image, Flex } from 'serverless-design-system'
import { P, Heading } from 'src/fragments/DesignSystem'
import courseData from './Data'
import styled from 'styled-components'
import playVideoIcon from 'src/assets/images/pages/courses/play-video-icon.svg'

const FlexWithBorderTop = styled(Flex)`
  border-top: 1px solid #9b9b9b;
`

const CoursesList = props => (
  <Box>
    <Heading.h3 mt={[62, 62, 62, 62, 92]}>Course outline</Heading.h3>
    {courseData.map((course, index) => {
      return (
        <Box key={index}>
          <Text
            fontFamily='SoleilBk'
            fontSize='18px'
            lineHeight='1.33'
            letterSpacing='-0.28px'
            mb={16}
            mt={[22, 22, 22, 22, 32]}
          >
            {course.title}
          </Text>
          {course.items.map((item, index) => (
            <FlexWithBorderTop
              key={item.title}
              justifyContent={'space-between'}
            >
              <Flex width={[1, 1, 1, 1, 0.8]}>
                <Image src={playVideoIcon} />
                <P ml={32} color='#5b5b5b'>
                  {item.title}
                </P>
              </Flex>
              <P>{item.playTime}</P>
            </FlexWithBorderTop>
          ))}
        </Box>
      )
    })}
  </Box>
)

export default CoursesList
