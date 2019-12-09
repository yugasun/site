import React from 'react'
import BlogLayout from 'src/layouts/Blog'
import Prefooter from 'src/components/pages/blog/PrefooterNew'
import BlogContent from 'src/components/pages/blog/BlogContent'
import RelativeBlogs from 'src/components/pages/blog/RelativeBlogs'
import Comments from 'src/components/pages/blog/Comments'
import { Helmet } from 'src/fragments'
import schema from 'src/constants/schema.js'

const BlogTemplate = ({
  data: { currentBlog, previousBlog, nextBlog },
  location,
}) => (
  <BlogLayout prefooter={Prefooter} prefooterOnlyDesktop>
    <Helmet {...currentBlog.frontmatter} location={location} />
    <BlogContent {...currentBlog} />
    <RelativeBlogs blogs={[previousBlog, nextBlog]} />
    <Comments />
  </BlogLayout>
)

export default BlogTemplate

export const query = graphql`
  query BlogDetails(
    $blogId: String!
    $previousBlogId: String!
    $nextBlogId: String!
  ) {
    currentBlog: blog(id: { eq: $blogId }) {
      id
      frontmatter {
        title
        date
        description
        authors
        thumbnail
        gitLink
        category
        heroImage
        scripts
        dontShowHeroImageInBlog
      }
      content
    }

    previousBlog: blog(id: { eq: $previousBlogId }) {
      id
      frontmatter {
        title
        date
        description
        authors
        thumbnail
        gitLink
        category
      }
    }

    nextBlog: blog(id: { eq: $nextBlogId }) {
      id
      frontmatter {
        title
        date
        description
        authors
        thumbnail
        gitLink
        category
      }
    }
  }
`
