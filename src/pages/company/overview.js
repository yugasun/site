import React from 'react'

import {
  Helmet,
  NewToServerlessPrefooter,
} from 'src/fragments'
import DefaultLayout from 'src/layouts/DefaultNewest'
import Hero from 'src/components/pages/company/overview/Hero'
import OurStory from 'src/components/pages/company/overview/OurStory'
import OurTeam from 'src/components/pages/company/overview/OurTeam'
import OurInvestors from 'src/components/pages/company/overview/OurInvestors'
import ServerlessNews from 'src/components/pages/company/overview/ServerlessNews'
import ContactUs from 'src/components/pages/company/overview/ContactUs'

const Company = ({ location }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader>
    <Helmet title='About Serverless Inc' location={location} />
    <Hero />
    <OurStory />
    <OurTeam />
    <OurInvestors />
    <ServerlessNews />
    <ContactUs />
  </DefaultLayout>
)

export default Company
