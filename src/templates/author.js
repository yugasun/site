import React from 'react'
import BlogLayout from 'src/layouts/Blog'
import { Helmet } from 'src/fragments'
import Prefooter from 'src/components/pages/blog/PrefooterNew'
import { getAuthorById } from 'src/utils/blog'
import Author from 'src/components/pages/author'

const AuthorTemplate = ({ data, pathContext: { authorId } }) => {
  const author = getAuthorById(authorId)

  return (
    <BlogLayout
      prefooter={Prefooter}
      prefooterOnlyDesktop
      customPb={[0, 0, 0, 0, 62]}
    >
      <Helmet title={`Blog posts written by ${author.name}`} />
      <Author author={author} allBlog={data.allBlog} />
    </BlogLayout>
  )
}

export default AuthorTemplate

export const query = graphql`
  query AuthorsBlogs($authorId: [String]) {
    allBlog(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { date: { ne: null }, authors: { in: $authorId } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
            authors
            thumbnail
            category
            featured
          }
        }
      }
      totalCount
    }
  }
`
