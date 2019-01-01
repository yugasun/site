import React from 'react'
import { Flex, Heading } from 'serverless-design-system'
import BlogLayout from 'src/layouts/Blog'
import BlogPreview from 'src/components/pages/blog/Preview'
import { NewToServerlessPrefooterNew as NewToServerlessPrefooter, Helmet } from 'src/fragments'
import CategoryData from 'src/constants/categories.json'

export default class Authors extends React.Component {
  render() {
    const { data, pathContext: { categoryId } } = this.props
    const edges = data.allBlog ? (data.allBlog.edges || []) : []
    const category = CategoryData[categoryId]
    const categoryInTitleCase = category.split(' ')
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(' ')

    return (
      <BlogLayout prefooter={NewToServerlessPrefooter}>
      <Helmet title={`Blogs posts under ${categoryInTitleCase} | AWS & Serverless`}/>
        <Flex.center mt={[5]} mb={5}>
          <Heading.h2
            fontSize={[4, 4, 6]}
            fontFamily='SoleilSb'
            align='center'
            lineHeight={1.4}
            letterSpacing='0'
          >
            Posts under {category}
          </Heading.h2>
        </Flex.center>
        <BlogPreview blogs={edges.map(({ node }) => node)} />
      </BlogLayout>
    )
  }
}

export const query = graphql`
  query CategoriesBlogs($categoryId: [String]) {
    allBlog (sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { date: { ne: null }, category: {  in: $categoryId } } }) {
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
