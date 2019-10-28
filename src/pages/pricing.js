import React from 'react'
import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Default'
import Pricing from 'src/components/pages/Pricing'

const PricingPage = ({ location }) => (
  <DefaultLayout>
    <Helmet
      title='Serverless Framework Pro – Pricing'
      description='Pricing information and included features for Serverless Framework Pro, as well as our serverless support offering, workshops and more.'
      location={location}
    />
    <Pricing />
  </DefaultLayout>
)

export default PricingPage
