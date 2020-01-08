import React from 'react'
import { Heading, P } from 'src/fragments/DesignSystem'
import { Box, Flex, Card, Image } from 'serverless-design-system'
import playVideoIcon from 'src/assets/images/pages/courses/play-video-icon.svg'
import { InternalLink } from 'src/fragments'
import awsCourseOutline from 'src/constants/courses/fullStackAws.js'
import serverlessFrontendOutline from 'src/constants/courses/serverlessForFrontend.js'

const courseOutlineData = {
  'full-stack-application-development-on-aws': awsCourseOutline,
  'serverless-for-frontend-developers': serverlessFrontendOutline
}

const CourseOutline = props => (
    <Box>
      <Heading.h3
        align='left'
        mt={[62, 62, 62, 62, 62]}
        mb={[22, 22, 22, 22, 32]}
      >
        Course outline
      </Heading.h3>
      <Card border='1px solid #eaeaea'>
      {
        courseOutlineData[props.slug].map((course, index) => (
          <Flex key={index} flexDirection='column'>
            <Flex style={{backgroundColor: '#f7f7f7'}} p={22}>
              <Heading.h5 color='black' mb={0} fontFamily='Soleil'>{course.title}</Heading.h5>
            </Flex>
            {
                course.items.map((item, index) => (
                  <Flex key={item.videoNumber} justifyContent='space-between' px={'22px'}
                  
                  >
                    <InternalLink to={item.title.indexOf('[coming soon]') > -1 ? `#course-updates`: `/learn/tutorial/${item.slug}/`} anchorLink={item.title.indexOf('[coming soon]') > -1 ? true: false}>
                      <Flex mt={'16px'}>
                        <Image src={playVideoIcon} style={{alignSelf: 'flex-start', marginTop: '3px'}} />
                        <P mt={0} pl={'12px'}>{item.title}</P>  
                      </Flex>
                    </InternalLink>
                    <P>{item.playTime}</P>
                  </Flex>
                ))
            }
          </Flex>
        ))
      }
      </Card>
    </Box>
)

export default CourseOutline
