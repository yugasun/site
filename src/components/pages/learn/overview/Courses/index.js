import React from 'react'
import { Flex, Image, Text, Box } from 'serverless-design-system'
import { P, PS, Heading, SecondaryButton } from 'src/fragments/DesignSystem'
import coursesList from './Data'
import { InternalLink } from 'src/fragments'
import courseTimeIcon from 'src/assets/images/pages/courses/course-time-icon.svg'

const Courses = props => (
  <Box mb={[92, 92, 92, 92, 132]}>
    <Heading.h3
      align='center'
      mt={[62, 62, 62, 62, 132]}
      mb={[32, 32, 42, 42, 62]}
    >
      Courses
    </Heading.h3>
    <Flex
      flexDirection={['column', 'column', 'row', 'row', 'row']}
      flexWrap={['initial', 'initial', 'wrap', 'wrap', 'initial']}
      justifyContent={[
        'initial',
        'initial',
        'space-between',
        'space-between',
        'center',
      ]}
      width={0.60}
      mx='auto'
    >
      {coursesList.map((course, index) => (
        <Flex
          key={course.title}
          flexDirection={['column', 'column', 'column', 'column', 'column']}
          alignItems={['center']}
          mx={index == 1 ? [0, 0, 0, 0, 32] : ['0px']}
          ml={index == 2 ? [0, 0, '28%', '28%', 0] : ['0px']}
          width={[1, 1, 0.45, 0.45, 1]}
          mb={'62px'}
          style={{border: '1px solid #eaeaea',
            boxShadow: '2px 2px 8px 0 rgba(0, 0, 0, 0.08)'}}
        >
          <Image
            src={course.image}
          />
          <Flex
            flexDirection={'column'}
            p={'10px'}
          >
            <Text
              align={['left']}
              fontSize={'24px'}
              letterSpacing={'-0.38px'}
              lineHeight={'38px'}
              fontFamily='Soleil'
            >
              {course.title}
            </Text>
            <Box width={[1]}>
              <P align={['left']} my={'12px'}>
                {course.description}
              </P>
              <Flex justifyContent='space-between'>
                <Flex>
                  <Image src={course.authorImage} height='38px' width='38px'/>
                  <Flex flexDirection='column' ml={1}>
                    <PS align={['left']}>Created by</PS>
                    <PS align={['left']} mt={'5px'}>{course.author}</PS>
                  </Flex>
                </Flex>
                <Flex>
                  <Image src={courseTimeIcon} />
                  <PS>{course.courseTime}</PS>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      ))}
    </Flex>
  </Box>
)

export default Courses
