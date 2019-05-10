import React from 'react'
import { P, Heading } from 'src/fragments/DesignSystem'
import { Flex, Box } from 'serverless-design-system'
import communityNumbersData from 'src/components/pages/home/Community/CommunityNumbersData'

const CommunityNumbers = () => (
  <Flex
    mt={[32, 32, 32, 32, 52]}
    flexWrap={['wrap', 'wrap', 'initial']}
    justifyContent={[
      'space-around',
      'space-around',
      'space-between',
      'space-between',
      'center',
    ]}
    alignItems={['initial', 'initial', 'center']}
  >
    {communityNumbersData.map((item, index) => (
      <Flex
        key={index}
        mr={[0, 0, 0, 0, 64]}
        mt={index > 1 ? [3, 3, 0] : [0]}
        width={[0.5, 0.5, 'auto']}
        flexDirection='column'
      >
        <Heading.h2
          pb={0}
          my={0}
          align='center'
          ml={index == 1 ? [-2, -2, 0] : [0]}
        >
          {item.number}
        </Heading.h2>
        <Box width={index == 1 ? [0.9, 0.9, 1] : [1]}>
          <P color='#8c8c8c' m={0} align='center'>
            {item.title}
          </P>
        </Box>
      </Flex>
    ))}
  </Flex>
)

export default CommunityNumbers
