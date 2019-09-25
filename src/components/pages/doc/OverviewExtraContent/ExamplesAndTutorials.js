import React from 'react'
import { Flex, Image, Column, Text } from 'serverless-design-system'
import tutorialsIcon from 'src/assets/images/pages/docs/tutorials-icon.svg'
import examplesIcon from 'src/assets/images/pages/docs/examples-icon.svg'
import { P, SecondaryButton } from 'src/fragments/DesignSystem'
import { examples, tutorials } from 'src/constants/urls.js'
import { InternalLink } from 'src/fragments'

const data = [
  {
    image: examplesIcon,
    heading: 'Examples',
    content:
      'Search our full examples repository for project examples using all languages and FaaS providers.',
    cta: 'search examples',
    link: examples,
  },
  {
    image: tutorialsIcon,
    heading: 'Tutorials',
    content:
      'Learn how to create Serverless projects, build and deploy your apps in any provider.',
    cta: 'find tutorials',
    link: tutorials,
  },
]

const ContentBlock = ({ image, heading, content, cta, link }) => (
  <Flex
    mt={[42, 42, 42, 42, 42]}
    flexDirection={['row', 'row', 'column', 'column', 'row']}
    mb={[0, 0, 76]}
    justifyContent={['center', 'center', 'left']}
  >
    <Image src={image} width={[62, 62, 72]} height={[62, 62, 72]} />
    <Column
      width={[0.55, 0.55, 0.7, 0.7, 0.55]}
      ml={[32, 32, 0, 0, 32]}
      mt={[0, 0, 32, 32, 0]}
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
    width={[1, 1, 1, 1, 0.82, 0.8]}
    mx={['auto', 'auto', 0]}
    pl={[0, 0, 4, 4, 136]}
    flexDirection={['column', 'column', 'row']}
    pb={[62, 62, 0]}
  >
    <ContentBlock {...data[0]} />
    <ContentBlock {...data[1]} />
  </Flex>
)

export default ExamplesAndTutorials
