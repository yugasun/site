import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import { Helmet } from 'src/fragments'
import prefooter from 'src/components/pages/learn/Prefooter.js'
import { AppContainer } from 'src/components'
import Content from 'src/components/pages/learn/guides/cicd/Content'

const Overview = ({ location }) => (
  <DefaultLayout prefooter={prefooter}>
    <AppContainer>
    <Helmet
      title='Serverless CI/CD Workflow'
      description='In this guide we define what we consider to be best practices for serverless development workflows,
        based on our own, internal practices and learnings, and detail how these practices can be easily set up using
        the Serverless CI/CD solution available in Serverless Framework Pro. '
      location={location}
    />
    <Content />
    </AppContainer>

  </DefaultLayout>
)

export default Overview
