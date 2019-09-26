import React from 'react'
import DefaultLayout from 'src/layouts/DefaultNewest'
import { Helmet } from 'src/fragments'
import { NewToServerlessPrefooter } from 'src/fragments'
import { Box, Heading } from 'serverless-design-system'
import styled from 'styled-components'
import { PageContainer } from 'src/fragments/DesignSystem'
import { AppContainer } from 'src/components'

const PageContent = styled(Box)`
  font-family: 'Soleil';
  line-height: 1.63;
  color: #5b5b5b;

  h3 {
    padding-top: 70px; 
    margin-top: -70px;
  }

  a {
    color: #5b5b5b;
    border-bottom: 1px solid #fd5750;

    &:hover {
      color: #5b5b5b;
    }
  }

  h3 {
    color: black;
    font-size: 32px;
  }

  table {
    border-collapse: collapse;
  }

  thead th {
    background: white;
    color: #5b5b5b;
  }

  tbody tr {
    background: white;
    color: #5b5b5b;
    border-top: 2px solid #9b9b9b;
  }

  @media screen and (max-width: 414px) {
    table {
      display: block;
      width: 100%;
      overflow-x: scroll;
      overflow-y: hidden;
    }

    .table > .table > thead > tr > th,
    .table > .table > tbody > tr > th,
    .table > .table > tfoot > tr > th,
    .table > .table > thead > tr > td,
    .table > .table > tbody > tr > td,
    .table > .table > tfoot > tr > td {
      white-space: nowrap;
    }

    h3 {
      font-size: 24px;
    }
  }
`

const StackPage = ({ data }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter} footerBackground={false}>
    <Helmet {...data.Stack.frontmatter} />
    <AppContainer>
      <Box width={1} mt={[7, 7, 8, 8, 10]} mb={[7]}>
        <PageContainer>
          <Heading.h1
            align='center'
            fontSize={['38px', '38px', '48px']}
            fontFamily='SoleilBk'
            lineHeight='62px'
            letterSpacing='0.5px'
          >
            {data.Stack.frontmatter.title}
          </Heading.h1>
          <PageContent
            width={1}
            pt={40}
            mx='auto'
            dangerouslySetInnerHTML={{ __html: data.Stack.content }}
          />
        </PageContainer>
      </Box>
    </AppContainer>
  </DefaultLayout>
)

export default StackPage

export const query = graphql`
  query StackPage($stackId: String!) {
    Stack: stack(id: { eq: $stackId }) {
      id
      frontmatter {
        title
        description
      }
      content
    }
  }
`
