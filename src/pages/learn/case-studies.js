import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Prefooter from 'src/components/pages/learn/case-studies/Prefooter'
import Hero from 'src/components/pages/learn/case-studies/Hero'
import Parallax from 'src/components/pages/learn/case-studies/Parallax'
import Results from 'src/components/pages/learn/case-studies/Results'
import { Helmet } from 'src/fragments'

const CaseStudy = ({ location }) => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Helmet title='Serverless Case Studies' location={location} />
    <Hero />
    <Parallax />
    <Results />
  </DefaultLayout>
)

export default CaseStudy
