import React from 'react'
import { Flex } from 'serverless-design-system'
import { Button } from 'src/fragments/DesignSystem'
import { InternalLink } from 'src/fragments'

const buttonsData = [
  {
    title: 'documentation',
    link: '/framework/docs/',
  },
  {
    title: 'examples',
    link: '/examples/',
  },
  {
    title: 'courses',
    link: '/courses/',
  },
]
const CTAButtons = () => (
  <Flex
    justifyContent='space-between'
    mt={42}
    flexDirection={['column', 'column', 'row']}
  >
    {buttonsData.map((button, index) => (
      <InternalLink to={button.link} key={index}>
        <Button>{button.title}</Button>
      </InternalLink>
    ))}
  </Flex>
)

export default CTAButtons
