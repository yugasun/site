import React from 'react'
import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Default'
import Pricing from 'src/components/pages/Pricing'

const PricingPage = ({ location }) => (
  <DefaultLayout>
    <Helmet
      title='Serverless Framework Pricing'
      description='Deploy serverless apps in seconds with our open-source edition, get production-ready with our free developer edition and pay as you scale with the enterprise edition.'
      location={location}
    />
    <Pricing />
  </DefaultLayout>
)

export default PricingPage
