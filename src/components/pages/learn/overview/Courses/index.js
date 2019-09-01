import React from 'react'
import { Flex, Image, Text, Box } from 'serverless-design-system'
import { P, PS, Heading, SecondaryButton } from 'src/fragments/DesignSystem'
import coursesList from './Data'

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
        'initial',
      ]}
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
        >
          <Image
            src={course.image}
            width={['100%']}
            height={[200, 200, 217, 200, 217]}
          />
          <Flex
            flexDirection={'column'}
            width={[1, 1, 1, 1, 1]}
            mt={[42, 42, 32, 32, 42]}
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
              <P color='#fd5750' mb={0} mt={[32, 32, 32, 32, 42]}>
                watch course >
              </P>
            </Box>
          </Flex>
        </Flex>
      ))}
    </Flex>
    <Flex justifyContent='center'>
      <SecondaryButton>view courses list</SecondaryButton>
    </Flex>
  </Box>
)

export default Courses
