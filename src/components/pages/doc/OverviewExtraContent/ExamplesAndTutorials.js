import React from 'react'
import { Flex, Image, Column, Text } from 'serverless-design-system'
import tutorialsIcon from 'src/assets/images/pages/docs/tutorials-icon.svg'
import examplesIcon from 'src/assets/images/pages/docs/examples-icon.svg'
import { P } from 'src/fragments/DesignSystem'
import { blog, developersMenu } from 'src/constants/urls.js'
import { InternalLink } from 'src/fragments'

const data = [
  {
    image: examplesIcon,
    heading: 'Examples',
    content:
      'Search our full examples repository for project examples using all languages and FaaS providers.',
    cta: 'search examples >',
    link: developersMenu.examples,
  },
  {
    image: tutorialsIcon,
    heading: 'Tutorials',
    content:
      'Learn how to create Serverless projects, build and deploy your apps in any provider.',
    cta: 'find tutorials >',
    link: blog.tutorials,
  },
]

const ContentBlock = ({ image, heading, content, cta, link }) => (
  <Flex mt={[42, 42, 42, 42, 62]}>
    <Image src={image} width={[62, 62, 72]} height={[62, 62, 72]} mr={32} />
    <Column width={0.55} ml={32}>
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
        <Text
          fontFamily='Serverless'
          color='#fd5750
'
        >
          {cta}
        </Text>
      </InternalLink>
    </Column>
  </Flex>
)
const ExamplesAndTutorials = () => (
  <Flex width={[1, 1, 1, 1, 0.7]} mx={[1, 1, 4, 4, 'auto']}>
    <ContentBlock {...data[0]} />
    <ContentBlock {...data[1]} />
  </Flex>
)

export default ExamplesAndTutorials
