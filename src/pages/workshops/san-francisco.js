import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNew'
import { NewToServerlessPrefooterNew as NewToServerlessPrefooter } from 'src/fragments'
import Hero from 'src/components/pages/workshops/san-francisco/Hero'
import Content from 'src/components/pages/workshops/san-francisco/Content'
import { Helmet } from 'src/fragments'

const SanFranciscoWorkshop = () => (
    <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
       <Helmet title='Serverless Workshop - San Francisco' />
       <Hero />
       <Content  />
    </DefaultLayout>
)

export default SanFranciscoWorkshop
