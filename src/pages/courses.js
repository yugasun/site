import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import { NewToServerlessPrefooter } from 'src/fragments'
import Hero from 'src/components/pages/courses/Hero'
import Content from 'src/components/pages/courses/Content'
import { Helmet } from 'src/fragments'

const Courses = () => {
  return (
    <DefaultLayout
      prefooter={NewToServerlessPrefooter}
      transparentHeader={true}
    >
      <Helmet title='Serverless Framework Courses &amp; Tutorials' />
      <Hero />
      <Content />
    </DefaultLayout>
  )
}

export default Courses
