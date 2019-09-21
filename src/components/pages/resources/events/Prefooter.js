import React from 'react'
import Prefooter from 'src/components/Prefooter'
import { contact } from 'src/constants/urls'

const sentences = ['Contact us to get started']

const actions = [
  {
    name: 'host your own event',
    navProps: {
      to: contact,
      crossDomain: true,
      completed: false,
    },
  },
]

const MeetupsPrefooter = () => (
  <Prefooter
    heading='Host an event in your city.'
    sentences={sentences}
    actions={actions}
  />
)

export default MeetupsPrefooter
