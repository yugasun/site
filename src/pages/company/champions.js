import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import Hero from 'src/components/pages/company/champions/Hero'
import HowToBeChampion from 'src/components/pages/company/champions/HowToBeChampion'
import {
  Helmet,
  NewToServerlessPrefooter,
} from 'src/fragments'
import OurChampions from 'src/components/pages/company/champions/OurChampions'

const Champions = ({ location }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader>
    <Helmet title='Serverless Champions' location={location} />
    <Hero />
    <HowToBeChampion />
    <OurChampions />
  </DefaultLayout>
)

export default Champions
