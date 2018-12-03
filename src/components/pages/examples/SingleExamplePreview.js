import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Text,
  Card
} from 'serverless-design-system'
import { InternalLink, ExternalLink } from 'src/fragments'
import { getExampleLink } from 'src/utils/example'
import { Heading, P } from 'src/fragments/DesignSystem'

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

const BoxWithMiddleElementMargin = styled(Box)`
  @media screen and (min-width: 1230px){
    :not(:nth-child(4n+4)) {
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 415px) and (max-width: 769px){
    padding: 0 20px;
  }

  @media screen and (min-width: 769px) and (max-width: 1229px){
    width: 33%;
    padding: 0 20px;
  }

`

const singleExamplePreview = ({ id, frontmatter }) => {
  const { title, description, platform, language, gitLink } = frontmatter

  return (
    <BoxWithMiddleElementMargin 
      width={[1, 1, 1/2, 1/3, '22.5%', '280px']}
      mb={[42, 42, 32]}
    >
      <HoverableColumn>
       <Box m={['0px 15px', '0px 15px', '32px']}>
        <InternalLink to={getExampleLink(id)}>
          <Box>
            <Text
              color='gray.2'
              fontSize={[0]}
              fontFamily='Soleil'
              my='8px'
              lineHeight={[1.33]}  
            >
            {language}
            </Text>
            <Heading.h5 
              mb='8px'
            >
              {platform} | { title }
            </Heading.h5>
          </Box>
        </InternalLink>
          <P
            mt='8px'
            mb={[0, 0 ,3.6]}  
        >
          { description }
        </P>
        <ExternalLink to={gitLink}>
          <Text color='#fd5750' mt={16}>
            go to github >
          </Text>
        </ExternalLink>
        </Box>
      </HoverableColumn>
    </BoxWithMiddleElementMargin>
  )
}

export default singleExamplePreview