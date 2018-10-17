import React from 'react'
import styled from 'styled-components'
import {
  Background,
  Box,
  Heading,
  P,
  Card
} from 'serverless-design-system'
import { BlockLink } from 'src/components'
import { getExampleLink } from 'src/utils/example'

const HoverableColumn = styled(Card)`
  @media screen and (min-width: 415px) {
      background-color: white;
      border: 1px solid #eaeaea;
      box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
      &:hover {
        box-shadow: 2px 10px 24px 0 rgba(0, 0, 0, 0.08);
      }
  }
`

const singleExamplePreview = ({ id, frontmatter }) => {
  const { title, description, platform, language } = frontmatter

  return (
    <Box 
      width={[1, 1, 1, 1/3]}
      p={[1, 1, 1, 2]}
      mb={[1, 1, 0]}
    >
      <HoverableColumn>
       <Box m={['0px 20px', '0px 20px', '36px 48px']}>
        <BlockLink to={getExampleLink(id)}>
          <Box>
            <P
              color='gray.2'
              fontSize={[0]}
              fontFamily='Soleil'
              my='8px'
            >
            {language}
            </P>
            <Heading.h3
              fontSize='24px'
              fontFamily='Soleil'
              letterSpacing='h4'
              mb='8px'
            >
              {platform} | { title }
            </Heading.h3>
          </Box>
        </BlockLink>
        <P
          fontSize={[2, 2, 2, 2]}
          lineHeight={1.63}
          my='8px'
        >
          { description }
        </P>
        </Box>
      </HoverableColumn>
    </Box>
  )
}

export default singleExamplePreview