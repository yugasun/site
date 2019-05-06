import React from 'react'
import { Flex } from 'serverless-design-system'
import { Button } from 'src/fragments/DesignSystem'
import { InternalLink } from 'src/fragments'

const buttonsData = [
  {
    title: 'documentation',
    link: '',
  },
  {
    title: 'examples',
    link: '',
  },
  {
    title: 'courses',
    link: '',
  },
]
const CTAButtons = () => (
  <Flex justifyContent='space-between' mt={42}>
    {buttonsData.map((button, index) => (
      <InternalLink to={button.link} key={index}>
        <Button>{button.title}</Button>
      </InternalLink>
    ))}
  </Flex>
)

export default CTAButtons
