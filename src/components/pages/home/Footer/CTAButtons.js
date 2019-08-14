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
    mt={42}
    flexDirection={['column', 'column', 'row']}
    alignItems={['center', 'center', 'auto']}
    justifyContent='center'
  >
    {buttonsData.map((button, index) => (
      <InternalLink to={button.link} key={index}>
        <Button
          width={[300, 325, 176]}
          mt={['12px', '12px', 0]}
          mx={index == 1 ? [0, 0, 32] : 0}
        >
          {button.title}
        </Button>
      </InternalLink>
    ))}
  </Flex>
)

export default CTAButtons
