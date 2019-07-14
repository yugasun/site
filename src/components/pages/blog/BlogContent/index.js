import React from 'react'
import { Box } from 'serverless-design-system'
import {
  AppContainer,
  SubscribeModal,
} from 'src/components'
import { getAuthorById } from 'src/utils/blog'
import AuthorCard from './AuthorCard'
import ContentWrapper from './ContentWrapper'
import Frontmatter from './Frontmatter'
import HeroImage from './HeroImage'
import ShareOptions from './ShareOptions'

const BlogContent = ({ id, frontmatter, content }) => {
  const author = getAuthorById((frontmatter.authors || [])[0]) || {}
  return (
    <Box pb={[2, 2, 3, 3, 6]}>
      <SubscribeModal includeDesktop={true} />
      <AppContainer>
        <Frontmatter frontmatter={frontmatter} />
        {frontmatter.dontShowHeroImageInBlog ? null : (
          <HeroImage heroImage={frontmatter.heroImage} />
        )}

        <ShareOptions id={id} title={frontmatter.title} />
        <ContentWrapper
          width={[1, 1, 1, 0.65]}
          mx='auto'
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <AuthorCard author={author} />
      </AppContainer>
    </Box>
  )
}

export default BlogContent
