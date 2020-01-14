import React from 'react'
import Helmet from 'react-helmet'
import {
  Column,
  Text,
  Heading,
  Row,
  Image,
  Flex
} from 'serverless-design-system'
import { getAuthorById, getAuthorLink } from 'src/utils/blog'
import { ExternalLink } from 'src/fragments'
import LastUpdatedDate from './LastUpdatedDate'

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
  const { authors, authorslink, title, date } = frontmatter
  const author = authors[0]
  const authorLink = authorslink[0]

  return (
    <Column
      width={[1, 1, 1, 0.65]}
      mx='auto'
      mt={[3, 3, 4]}
      mb={[3, 3, 3]}
      alignItems='center'
    >
      <Flex justifyContent='center' alignItems='center'>
        {
          title == 'All the Serverless announcements at re:Invent 2019' ?
          <LastUpdatedDate date={date} /> : null
        }
      </Flex>
      <Heading.h1
        fontSize={[4, 4, 6, 7]}
        lineHeight={['38px', '38px', '52px', '62px']}
        fontFamily='Soleil'
        letterSpacing={['-0.38px', '-0.38px', '0.5px']}
        align='center'
        className='blog-title'
      >
        { title }
      </Heading.h1>
      <ExternalLink to={authorLink}>
        <Row
          alignItems='center'
          mb={15}
        >
          <WrittenByText>
            written by &nbsp;
          </WrittenByText>
          <WrittenByText>
            &nbsp; { author }
          </WrittenByText>
        </Row>
      </ExternalLink>
    </Column>
  )
}

export default BlogFrontmatter