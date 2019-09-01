import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import ComparisonScrollList from 'src/components/pages/resources/code-of-conduct/comparisonScrollList'
import { Helmet } from 'src/fragments'

const Comparisons = ({ location }) => (
  <DefaultLayout noPrefooter>
    <Helmet
      title='Comparisons: Serverless vs. other tools'
      description='When should you use Serverless over other tools?'
      location={location}
    />
    <ComparisonScrollList />
  </DefaultLayout>
)

export default Comparisons
