import React from 'react'
import { Flex, Box, Text } from 'serverless-design-system'
import { Heading, P } from 'src/fragments/DesignSystem'

const paragraphs = [
  `1. Build only what differentiates you, outsource what doesn't.`,
  `2. Favor serverless cloud services, stateless compute, events, APIs & open-source.`,
  `3. Code is a liability.  Keep it to a minimum.`,
  `4. No instances, servers or containers, unless there is no other way.`,
  `5. Establish customer satisfaction as the highest priority of engineering.`,
  `6. To deliver the best possible outcomes, maintain the freedom to choose the best possible services.`,
  `7. Focus on product goals and experience over technology.`,
  `8. Compose and configure, before writing code.`,
  `9. Own the full lifecycle of everything you build.`,
  `10. Deploy is the new commit.`,
]

const Commandments = props => (
  <Flex mt={[62, 62, 92, 92, 132]} flexDirection={['column', 'column', 'row']}>
    <Box width={[1, 1, 0.45]}>
      <Flex width={[1, 1, 0.7]} flexDirection='column'>
        <Heading.h3>The Serverless 10 Commandments</Heading.h3>
        <Text
          color='#8c8c8c'
          fontFamily='SoleilBk'
          fontSize='18px'
          lineHeight='30px'
          letterSpacing='-0.28px'
          mb={[32, 32, 0]}
        >
          These are the principles that define the Serverless movement.
        </Text>
      </Flex>
    </Box>
    <Box width={[1, 1, 0.55]}>
      {paragraphs.map((paragraph, index) => (
        <P
          key={index}
          mt={0}
          mb={20}
          pt={index !== 0 ? 16 : 0}
          style={index !== 0 ? { borderTop: '1px solid #9b9b9b' } : {}}
        >
          {paragraph}
        </P>
      ))}
    </Box>
  </Flex>
)

export default Commandments
