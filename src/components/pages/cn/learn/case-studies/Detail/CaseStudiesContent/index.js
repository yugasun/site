import React from 'react'
import { Box } from 'serverless-design-system'
import {
  AppContainer,
  SubscribeModal,
} from 'src/components'
import AuthorCard from './AuthorCard'
import ContentWrapper from './ContentWrapper'
import Frontmatter from './Frontmatter/index.js'
import HeroImage from './HeroImage'

const CaseStudiesContent = ({ id, frontmatter, content }) => {
  return (
    <Box pb={[2, 2, 3, 3, 6]} mt='150px'>
      {/*
        <SubscribeModal includeDesktop={true} />
       */}
      <AppContainer>
        <Frontmatter frontmatter={frontmatter} />
        <ContentWrapper
          width={[1, 1, 1, 0.65]}
          mx='auto'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </AppContainer>
    </Box>
  )
}

export default CaseStudiesContent
