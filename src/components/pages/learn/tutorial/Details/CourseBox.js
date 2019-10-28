import React from 'react'
import { Flex, Image, Card, Box } from 'serverless-design-system'
import { P, Heading } from 'src/fragments/DesignSystem'
import playVideoIcon from 'src/assets/images/pages/courses/play-video-icon.svg'
import { InternalLink } from 'src/fragments'
import courseOutlineData from './Data'

const CourseBox = props => (
  <Card border='1px solid #eaeaea' ml={22}>
      {
        courseOutlineData.map((course, index) => (
          <Flex key={index} flexDirection='column'>
            <Flex style={{backgroundColor: '#f7f7f7'}} p={22}>
              <Heading.h5 color='black' mb={0} fontFamily='Soleil'>{course.title}</Heading.h5>
            </Flex>
            {
                course.items.map((item, index) => (
                  <Flex key={item.videoNumber} justifyContent='space-between' px={'22px'}
                  
                  >
                    <InternalLink to={'/learn/tutorial/create-an-aws-account/'}>
                      <Flex>
                        <Image src={playVideoIcon} />
                        <Box width={0.95}>
                          <P ml={'12px'} align='left'>{item.title}</P>  
                        </Box>
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
)

export default CourseBox
