import React from 'react'
import Helmet from 'react-helmet'
import {
  Column,
  Text,
  Heading,
  Row,
  Image,
} from 'serverless-design-system'
import { getAuthorById, getAuthorLink } from 'src/utils/blog'
import Categories from '../Categories'
import { InternalLink } from 'src/fragments'

const WrittenByText = ({ children }) => (
  <Text
    fontFamily='Soleil'
    fontSize={0}
    color='gray.3'
    lineHeight={2}
  >
    { children }
  </Text>
)

const BlogFrontmatter = ({ frontmatter }) => {
  const { category: categoryIds, authors, title, scripts } = frontmatter
  const author = getAuthorById((authors || [])[0])

  return (
    <Column
      width={[1, 1, 1, 0.65]}
      mx='auto'
      mt={[1, 1, 4]}
      mb={[1, 1, 2]}
      alignItems='center'
    >
      {
        scripts && (
          <Helmet script={scripts.map((src) => ({ type: "text/javascript", src }))} />
        )
      }
      <Categories categoryIds={categoryIds} />
      <Heading.h1
        fontSize={[4, 4, 4, 7]}
        fontFamily='SoleilBk'
        letterSpacing='h4'
        align='center'
        className='blog-title'
      >
        { title }
      </Heading.h1>
      <InternalLink to={getAuthorLink(author.id)}>
        <Row
          alignItems='center'
          my={15}
        >
          <WrittenByText>
            written by &nbsp;
          </WrittenByText>
          <Image
            src={ author.avatar }
            height={33}
            width={33}
          />
          <WrittenByText>
            &nbsp; { author.name }
          </WrittenByText>
        </Row>
      </InternalLink>
    </Column>
  )
}

export default BlogFrontmatter