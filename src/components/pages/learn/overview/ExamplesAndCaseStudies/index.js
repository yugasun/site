import React from 'react'
import { Flex, Image, Column, Text } from 'serverless-design-system'
import tutorialsIcon from 'src/assets/images/pages/docs/tutorials-icon.svg'
import examplesIcon from 'src/assets/images/pages/docs/examples-icon.svg'
import { P, SecondaryButton } from 'src/fragments/DesignSystem'
import { examples, caseStudies } from 'src/constants/urls.js'
import { InternalLink } from 'src/fragments'

const data = [
  {
    id: 1,
    image: examplesIcon,
    heading: 'Examples',
    content:
      'Search real world Serverless code and architecture examples in our full examples repository using all languages and FaaS providers.',
    cta: 'search examples',
    link: examples,
  },
  {
    id: 2,
    image: tutorialsIcon,
    heading: 'Case studies',
    content:
      'Hundreds of teams use the Serverless Framework to launch robust applications in a fraction of the time. Read their use cases here.',
    cta: 'find case studies',
    link: caseStudies,
  },
]

const ContentBlock = ({ image, heading, content, cta, link, id }) => (
  <Flex
    flexDirection={['column', 'column', 'column', 'column', 'row']}
    justifyContent={['center', 'center', 'left']}
    mb={id == 1 ? ['62px', '62px', 0] : [0]}
  >
    <Image src={image} width={[62, 62, 72]} height={[62, 62, 72]} />
    <Column
      width={[1, 1, 0.7, 0.7, 0.65, 0.5]}
      ml={[0, 0, 0, 0, 32]}
      mt={[32, 32, 32, 32, 0]}
    >
      <Text
        fontFamily='Soleil'
        lineHeight='38px'
        letterSpacing='-0.38px'
        color='black'
        fontSize={[24]}
      >
        {heading}
      </Text>
      <P>{content}</P>
      <InternalLink to={link}>
        <SecondaryButton width={['100%', '100%', 176]}>{cta}</SecondaryButton>
      </InternalLink>
    </Column>
  </Flex>
)
const ExamplesAndTutorials = () => (
  <Flex
    width={[1, 1, 1, 1, 1, 1]}
    mx={['auto', 'auto', 0]}
    pl={[0, 0, 4, 4, 104]}
    flexDirection={['column', 'column', 'row']}
    mt={[92, 92, 92, 92, 132]}
    mb={[92, 92, 92, 92, 132]}
  >
    <ContentBlock {...data[0]} />
    <ContentBlock {...data[1]} />
  </Flex>
)

export default ExamplesAndTutorials
