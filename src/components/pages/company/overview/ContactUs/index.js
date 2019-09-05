import React from 'react'
import { Box, Column, ResponsiveStack, Text } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import { P, Heading } from 'src/fragments/DesignSystem'

const contactUsContent = [
  { title: 'Media Inquiries', contents: ['media@serverless.com'] },
  { title: 'Analysts', contents: ['analysts@serverless.com'] },
  { title: 'Careers', contents: ['careers@serverless.com'] },
  {
    title: 'Write to us',
    contents: [
      'Serverless, Inc',
      '548 Market Street #47111',
      'San Francisco, CA 94104',
    ],
  },
]

const ContactSection = ({ title, contents }) => (
  <Column
    width={[1, 1, 4 / 10, 22 / 100]}
    my={2}
    mx={[0, 0, 1]}
    alignItems={['center', 'center', 'flex-start']}
  >
    <Heading.h4 fontFamily='SoleilBk' align='left' lineHeight={4}>
      {title}:
    </Heading.h4>
    {contents.map(content => (
      <P key={title} fontSize={0} m={0} align='left'>
        {content}
      </P>
    ))}
  </Column>
)

const OurStory = () => (
  <AppContainer>
    <Column px={[1, 1, 2, 3]} pt={[4, 4, 7, 10]} pb={[42, 42, 0, 0, 92]}>
      <Column alignItems={['center', 'center', 'flex-start']}>
        <Heading.h2>Contact Us</Heading.h2>
      </Column>
      <Box>
        <Text.p
          fontFamily='SoleilLt'
          fontSize={[3, 3, 4]}
          lineHeight={[4]}
          align={['center', 'center', 'left']}
          mt={0}
        >
          We’d love to hear from you.
          <br />
          Please feel free to contact us via the following channels:
        </Text.p>
      </Box>
      <ResponsiveStack flexWrap='wrap'>
        {contactUsContent.map(({ title, contents }) => (
          <ContactSection key={title} title={title} contents={contents} />
        ))}
      </ResponsiveStack>
    </Column>
  </AppContainer>
)

export default OurStory
