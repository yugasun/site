import React from 'react'
import { Flex, Image, Text, Column, Box } from 'serverless-design-system'
import { P, Heading } from 'src/fragments/DesignSystem'
import experienceIcon from 'src/assets/images/pages/framework/experience-icon.svg'
import communityIcon from 'src/assets/images/pages/framework/community-icon.svg'
import vendorIcon from 'src/assets/images/pages/framework/vendor-icon.svg'

const whyData = [
  {
    image: experienceIcon,
    title: 'Great developer experience',
    description:
      'A singular product experience, for all stages of the application lifecycle, built by developers for developers.',
  },
  {
    image: communityIcon,
    title: 'Amazing community',
    description:
      'Over 10 millions downloads, 30,000 GitHub Stars, 200+ Open Source Plugins. The Serverless community builds here.',
  },
  {
    image: vendorIcon,
    title: 'Vendor agnostic',
    description:
      'Supports 8 different cloud providers with a single developer experience, giving you the freedom to pick the proper tool for the job.',
  },
]

const Courses = props => (
  <Box mb={[92, 92, 92, 92, 162]}>
    <Heading.h3 align='center' mt={[62, 62, 92, 92, 54]} mb={[0, 0, 0, 0, 62]}>
      Courses
    </Heading.h3>
    <Flex flexDirection={['column', 'column', 'column', 'column', 'row']}>
      {whyData.map(why => (
        <Flex
          key={why.title}
          flexDirection={['column', 'column', 'row', 'row', 'column']}
          alignItems={['center']}
          mt={[62, 62, 42, 42, 0]}
        >
          <Image src={why.image} width={[132]} height={[132]} />
          <Flex
            flexDirection={'column'}
            width={[1, 1, 0.6, 0.8, 1]}
            ml={[0, 0, 54, 54, 0]}
          >
            <Text
              align={['center', 'center', 'left', 'left', 'center']}
              fontSize={'24px'}
              letterSpacing={'-0.38px'}
              lineHeight={'38px'}
              fontFamily='Soleil'
              mt={[42, 42, 0, 0, 42]}
            >
              {why.title}
            </Text>
            <Box width={[1, 1, 1, 0.8]} mx={[null, null, null, null, 'auto']}>
              <P align={['center', 'center', 'left', 'left', 'center']}>
                {why.description}
              </P>
            </Box>
          </Flex>
        </Flex>
      ))}
    </Flex>
  </Box>
)

export default Courses
