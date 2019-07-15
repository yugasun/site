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
    justifyContent={[
      'space-evenly',
      'space-evenly',
      'space-between',
      'space-evenly',
      'space-between',
    ]}
    mt={42}
    flexDirection={['column', 'column', 'row']}
    alignItems={['center', 'center', 'auto']}
  >
    {buttonsData.map((button, index) => (
      <InternalLink to={button.link} key={index}>
        <Button width={[300, 300, 176]} mt={['12px', '12px', 0]}>
          {button.title}
        </Button>
      </InternalLink>
    ))}
  </Flex>
)

export default CTAButtons
