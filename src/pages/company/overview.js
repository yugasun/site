import React from 'react'

import { Divider, Helmet, NewToServerlessPrefooter } from 'src/fragments'
import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/company/overview/Hero'
import OurStory from 'src/components/pages/company/overview/OurStory'
import OurTeam from 'src/components/pages/company/overview/OurTeam'
import OurInvestors from 'src/components/pages/company/overview/OurInvestors'
import ServerlessNews from 'src/components/pages/company/overview/ServerlessNews'
import ContactUs from 'src/components/pages/company/overview/ContactUs'

const Company = ({ location }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader>
    <Helmet title="About Serverless Inc" location={location} />
    <Hero />
    <OurStory />
    <OurTeam />
    <Divider />
    <OurInvestors />
    <ServerlessNews />
    <ContactUs />
  </DefaultLayout>
)

export default Company
