import React from 'react'
import { Flex, Image, Text, Box } from 'serverless-design-system'
import { P, PS, Heading, SecondaryButton } from 'src/fragments/DesignSystem'
import coursesList from './Data'

const Courses = props => (
  <Box mb={[92, 92, 92, 92, 132]} mt={[62, 62, 92, 92, 132]}>
    <Heading.h3 align='center' mb={[0, 0, 0, 0, 62]}>
      Courses
    </Heading.h3>
    <Flex flexDirection={['column', 'column', 'column', 'column', 'row']}>
      {coursesList.map((course, index) => (
        <Flex
          key={course.title}
          flexDirection={['column', 'column', 'row', 'row', 'column']}
          alignItems={['center']}
          mt={[62, 62, 42, 42, 0]}
          mx={index == 1 ? ['32px'] : ['0px']}
        >
          <Image src={course.image} width={['100%']} height={[217]} />
          <Flex
            flexDirection={'column'}
            width={[1, 1, 0.6, 0.8, 1]}
            ml={[0, 0, 54, 54, 0]}
            mt={[42, 42, 0, 0, 42]}
          >
            <Text
              fontFamily='SoleilBk'
              fontSize='14px'
              lineHeight='1.71'
              letterSpacing='0.44px'
              color='#fd5750'
            >
              {course.videoCount} videos
            </Text>
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
              <PS align={['left']}>by {course.author}</PS>
              <P color='#fd5750' mb={0}>
                watch course >
              </P>
            </Box>
          </Flex>
        </Flex>
      ))}
    </Flex>
    <Flex justifyContent='center' mt={'42px'}>
      <SecondaryButton>view courses list</SecondaryButton>
    </Flex>
  </Box>
)

export default Courses
