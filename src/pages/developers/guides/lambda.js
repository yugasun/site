import React from 'react'
import DefaultLayout from 'src/layouts/Default'
import { Helmet } from 'src/fragments'
import { NewToServerlessPrefooter } from 'src/fragments'
import {Box, Heading} from 'serverless-design-system'
import styled from 'styled-components'

const PageContent = styled(Box)`
    font-family: "Soleil";
    line-height: 1.63;
    color: #5b5b5b;
    a:hover  {
        color: #5b5b5b;
    }

    @media screen and (max-width: 414px) {
        table {
            display: none;
        }
    }
`

export default ({ data }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter} footerBackground={false}>
   <Helmet {...data.Lambda.frontmatter} />
        <Box width={1}
            px={[30, 30, 300]}
            my={10}
            pb={200}>
                <Heading.h1 align='center' fontSize={['32px', '32px', '48px']} fontFamily='SoleilBk'>
                    {data.Lambda.frontmatter.title}
                </Heading.h1>
                <PageContent width={1} pt={40} mx='auto' dangerouslySetInnerHTML={{ __html: data.Lambda.content }} />
        </Box>
  </DefaultLayout>
)

export const query = graphql`
  query LambdaGuide {
    Lambda: guide (id: { eq: "lambda" }) {
      id
      frontmatter {
        title,
        description
      }
      content
    }
  }
`