import React from 'react'
import styled from 'styled-components'
import {
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

const BoxWithMiddleElementMargin = styled(Box)`
  @media screen and (min-width: 1230px){
    :not(:nth-child(3n+3)) {
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1229px){
    :nth-child(odd) {
      margin-right: 32px;
    }
  }
`
//margin: 0 32px;

const singleExamplePreview = ({ id, frontmatter }) => {
  const { title, description, platform, language } = frontmatter

  return (
    <BoxWithMiddleElementMargin 
      width={[1, 1, 1, '384px']}
      mb={[42, 42, 32]}
    >
      <HoverableColumn>
       <Box m={['0px 15px', '0px 15px', '36px 48px']}>
        <BlockLink to={getExampleLink(id)}>
          <Box>
            <P
              color='gray.2'
              fontSize={[0]}
              fontFamily='Soleil'
              my='8px'
              lineHeight={[1.33]}  
            >
            {language}
            </P>
            <Heading.h4
              fontSize='24px'
              fontFamily='Soleil'
              letterSpacing={['-0.4px']}
              lineHeight={[1.33]}   
              mb='8px'
            >
              {platform} | { title }
            </Heading.h4>
          </Box>
        </BlockLink>
          <P
            fontSize={[2, 2, 2, 2]}
            lineHeight={1.63}
            mt='8px'
            mb={[0, 0 ,3.6]}  
        >
          { description }
        </P>
        </Box>
      </HoverableColumn>
    </BoxWithMiddleElementMargin>
  )
}

export default singleExamplePreview