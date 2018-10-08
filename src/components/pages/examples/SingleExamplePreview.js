import React from 'react'
import styled from 'styled-components'
import {
  Background,
  Box,
  Row,
  Text,
  Heading,
  P,
  Card
} from 'serverless-design-system'
import { BlockLink } from 'src/components'
import { getLinkComponent } from 'src/components/BlockLink'
import {
  getAuthorLink,
  getBlogLink,
  getCategoryLink,
  getAuthorInfo,
  getCategoryNameById,
} from 'src/utils/blog'
import { getExampleLink } from 'src/utils/example'
import { formatDate } from 'src/utils/date'
import { language } from 'gray-matter'

const HyperLinkBackground = getLinkComponent(Background)


const HoverableColumn = styled(Card)`
  background-color: white;
  border: 1px solid #eaeaea;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
  &:hover {
    box-shadow: 2px 10px 24px 0 rgba(0, 0, 0, 0.08);
  }
`

const singleExamplePreview = ({ id, frontmatter }) => {
  const { title, description, platform, language } = frontmatter

  return (
    <Box 
      width={[1, 1, 1, 1/3]}
      p={[1, 1, 1, 2]}
      mb={[1, 1, 1, 4]}
    >
      <HoverableColumn>
       <Box m='36px 48px'>
        <BlockLink to={getExampleLink(id)}>
          <Box>
            <P
              color='#8c8c8c'
              fontSize={[0]}
            >
            {language}
            </P>
            <Heading.h3
              fontSize={[3, 3, 3, 5]}
              fontFamily='SoleilBk'
              letterSpacing='h4'
            >
              {platform} | { title }
            </Heading.h3>
          </Box>
        </BlockLink>
        <P
          fontSize={[0, 0, 0, 2]}
          lineHeight={1.63}
        >
          { description }
        </P>
        </Box>
      </HoverableColumn>
    </Box>
  )
}

export default singleExamplePreview