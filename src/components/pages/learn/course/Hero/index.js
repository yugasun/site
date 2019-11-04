import React from 'react'

import { Box, Flex, Text } from 'serverless-design-system'
import { HeroWrapperWithTabs as HeroWrapper } from 'src/fragments'
import HeroTabs from './Tab'
import { PS } from 'src/fragments/DesignSystem'

const CoursesHero = ({title, author}) => {
  return (
    <HeroWrapper customPb={[32, 32, 32, 32, 62]}>
      <HeroTabs />
      <Flex
        color='white'
        justifyContent='space-between'
        width={1}
        flexDirection={['column', 'column', 'row']}
      >
        <Box width={[1, 1, 0.45, 0.45, 0.45]}>
          <Text
            fontSize={[18, 18, 18, 18, 40]}
            lineHeight={['30px', '30px', '30px', '30px', '50px']}
            letterSpacing={['-0.28px', '-0.28px', '-0.28px', '-0.28px', '0px']}
            mb={'12px'}
            fontFamily='Soleil'
          >
            {title}
          </Text>
          <PS>by {author} </PS>
        </Box>
      </Flex>
    </HeroWrapper>
  )
}

export default CoursesHero
