import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import Hero from 'src/components/pages/learn/overview/Hero'
import Explanation from 'src/components/pages/learn/overview/Explanation'
import ServerlessAppBenefits from 'src/components/pages/learn/overview/AppBenefits'
import ServerlessFrameworkBenefits from 'src/components/pages/learn/overview/FrameworkBenefits'
import AdditionalFeatures from 'src/components/pages/learn/overview/AdditionalFeatures'
import { Helmet } from 'src/fragments'
import prefooter from 'src/components/pages/learn/Prefooter.js'

const Overview = ({ location }) => (
  <DefaultLayout prefooter={prefooter} transparentHeader>
    <Helmet
      title='Why Serverless?'
      description='What is the Serverless movement about and why does it matter?'
      location={location}
    />
    <Hero />
    <Explanation />
    <ServerlessAppBenefits />
    <ServerlessFrameworkBenefits />
    <AdditionalFeatures />
  </DefaultLayout>
)

export default Overview
