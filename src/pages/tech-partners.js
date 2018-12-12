import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNew'
import { NewToServerlessPrefooterNew as NewToServerlessPrefooter } from 'src/fragments'
import Hero from 'src/components/pages/tech-partners/Hero'
import Content from 'src/components/pages/tech-partners/Content'
import { Helmet } from 'src/fragments'

const Partners = () => {
  return (
    <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
       <Helmet title='Serverless Tech Partners' />
       <Hero />
       <Content />
    </DefaultLayout>
  )
}

export default Partners
