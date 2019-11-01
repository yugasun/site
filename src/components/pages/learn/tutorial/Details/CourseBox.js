import React from 'react'
import { Flex, Image, Card, Box } from 'serverless-design-system'
import { P, Heading } from 'src/fragments/DesignSystem'
import playVideoIcon from 'src/assets/images/pages/courses/play-video-icon.svg'
import { InternalLink } from 'src/fragments'
import courseOutlineData from 'src/components/pages/learn/course/Details/Data.js'

const CourseBox = props => (
  <Card border='1px solid #eaeaea' ml={22} style={{minWidth: '450px', maxHeight: '600px', overflowY: 'scroll'}}>
      {
        courseOutlineData.map((course, metaIndex) => (
          <Flex key={metaIndex} flexDirection='column'>
            <Flex style={{backgroundColor: '#f7f7f7'}} p={22}>
              <Heading.h5 color='black' mb={0} fontFamily='Soleil'>{course.title}</Heading.h5>
            </Flex>
            {
                course.items.map((item, index) => (
                  <Flex key={item.videoNumber} justifyContent='space-between' px={'22px'}
                  >
                    <InternalLink to={`/learn/tutorial/${item.slug}/`}>
                      <Flex mt={'16px'}>
                        <Image src={playVideoIcon} style={{alignSelf: 'flex-start', marginTop: '3px'}}/>
                        <Box width={0.95}>
                          <P mt={0} pl={'12px'}>{item.title}</P>  
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
