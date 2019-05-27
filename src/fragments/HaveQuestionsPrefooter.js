import React from 'react'
import PrefooterNewest from 'src/components/PrefooterNewest'
import { P } from 'src/fragments/DesignSystem'

const sentences = [
  <P color='gray.3' mt={[0, 0, 0]} mb={[0, 0, 0]}>
    Head over to the forums to search for your questions and issues or post a
    new one.
  </P>,
]

const actions = [
  {
    name: 'go to forum',
    navProps: {
      to: 'https://forum.serverless.com/',
      completed: false,
      crossDomain: true,
    },
  },
]

const HaveQuestionsPrefooter = () => (
  <PrefooterNewest
    heading='Have questions?'
    sentences={sentences}
    actions={actions}
  />
)

export default HaveQuestionsPrefooter
