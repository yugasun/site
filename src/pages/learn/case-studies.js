import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import { NewToServerlessPrefooter } from 'src/fragments'
import Hero from 'src/components/pages/learn/case-studies/Hero'
import Content from 'src/components/pages/learn/case-studies/Content'
import { Helmet } from 'src/fragments'

const CaseStudies = () => {
  return (
    <DefaultLayout
      prefooter={NewToServerlessPrefooter}
      transparentHeader={true}
    >
      <Helmet title='Serverless Case Studies' />
      <Hero />
      <Content />
    </DefaultLayout>
  )
}

export default CaseStudies
