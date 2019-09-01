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

  a,
  a:hover {
    color: #5b5b5b;
    border-bottom: 1px solid #fd5750;
  }

  p {
    margin: 0;
  }

  h3 {
    color: black;
    font-size: 32px;
    margin-top: 30px;
    font-weight: normal;
  }

  h5 {
    color: black;
    margin-top: 15px;
    font-size: 24px;
    font-weight: normal;
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

    h5 {
      font-size: 16px;
    }
  }
`

const GuidePage = ({ data }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter} footerBackground={false}>
    <Helmet {...data.Custom.frontmatter} />
    <AppContainer>
      <Box width={1} mt={10} mb={[62, 62, 0, 0, 112]}>
        <PageContainer>
          <Heading.h1
            align='center'
            fontSize={['38px', '38px', '48px']}
            fontFamily='SoleilBk'
            lineHeight='62px'
            letterSpacing='0.5px'
          >
            {data.Custom.frontmatter.title}
          </Heading.h1>
          <PageContent
            width={1}
            pt={40}
            mx='auto'
            dangerouslySetInnerHTML={{ __html: data.Custom.content }}
          />
        </PageContainer>
      </Box>
    </AppContainer>
  </DefaultLayout>
)

export default GuidePage

export const query = graphql`
  query CustomPage {
    Custom: custom(id: { eq: "plugins-criteria" }) {
      id
      frontmatter {
        title
        description
      }
      content
    }
  }
`
