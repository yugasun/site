import React from 'react'
import BlogLayout from 'src/layouts/Blog'
import { NewToServerlessPrefooterNew as NewToServerlessPrefooter, Helmet } from 'src/fragments'
import { getAuthorById } from 'src/utils/blog'
import Author from 'src/components/pages/author'

export default ({ data, pathContext: { authorId } }) => {
  const author = getAuthorById(authorId)

  return (
    <BlogLayout prefooter={NewToServerlessPrefooter}>
      <Helmet title={`Blog posts written by ${author.name}`}/>
      <Author author={author} allBlog={data.allBlog} />
    </BlogLayout>
  )
}

export const query = graphql`
  query AuthorsBlogs($authorId: [String]) {
    allBlog (sort: { fields: [frontmatter___date], order: DESC }, limit: 3, filter: { frontmatter: { date: { ne: null }, authors: {  in: $authorId } } }) {
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
