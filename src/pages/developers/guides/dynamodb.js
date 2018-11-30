import React from 'react'
import DefaultLayout from 'src/layouts/DefaultNew'
import { Helmet } from 'src/fragments'
import { NewToServerlessPrefooterNew as NewToServerlessPrefooter} from 'src/fragments'
import {Box, Heading} from 'serverless-design-system'
import styled from 'styled-components'

const PageContent = styled(Box)`
    font-family: "Soleil";
    line-height: 1.63;
    color: #5b5b5b;
    a:hover  {
        color: #5b5b5b;
    }

    a {
        color: #5b5b5b;
        border-bottom: 1px solid #fd5750;
    }

    @media screen and (max-width: 414px) {
        table {
            display: none;
        }
    }
`

export default ({ data }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter} footerBackground={false}>
   <Helmet {...data.Dynamo.frontmatter} />
        <Box width={1}
            px={[30, 30, 300]}
            my={10}
            pb={350}>
                <Heading.h1 align='center' fontSize={['32px', '32px', '48px']} fontFamily='SoleilBk'>
                    {data.Dynamo.frontmatter.title}
                </Heading.h1>
                <PageContent width={1} pt={40} mx='auto' dangerouslySetInnerHTML={{ __html: data.Dynamo.content }} />
        </Box>
  </DefaultLayout>
)

export const query = graphql`
  query DynamoGuide {
    Dynamo: guide (id: { eq: "dynamodb" }) {
      id
      frontmatter {
        title,
        description
      }
      content
    }
  }
`