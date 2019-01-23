import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNew'
import Prefooter from 'src/components/pages/workshops/san-francisco/Prefooter'
import Hero from 'src/components/pages/workshops/san-francisco/Hero'
import Content from 'src/components/pages/workshops/san-francisco/Content'
import { Helmet } from 'src/fragments'

const SanFranciscoWorkshop = () => (
  <DefaultLayout
    prefooter={Prefooter}
    transparentHeader={true}
    prefooterOnlyDesktop
  >
    <Helmet title='Serverless Workshop San Francisco | AWS Lambda, Google Functions &amp; Cloud Computing' />
    <Hero />
    <Content />
  </DefaultLayout>
)

export default SanFranciscoWorkshop
