import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import { NewToServerlessPrefooter } from 'src/fragments'
import Hero from 'src/components/pages/partners/Hero'
import Content from 'src/components/pages/partners/Content'
import { Helmet } from 'src/fragments'

const Partners = () => {
  return (
    <DefaultLayout
      prefooter={NewToServerlessPrefooter}
      transparentHeader={true}
    >
      <Helmet title='Serverless Development &amp; Consulting Companies | Serverless Partners' />
      <Hero />
      <Content />
    </DefaultLayout>
  )
}

export default Partners
