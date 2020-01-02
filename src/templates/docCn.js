import React from 'react'
import Helmet from 'react-helmet'
import { Row, Column, Box } from 'serverless-design-system'
import DocsLayout from 'src/layouts/DocsCn'
import DocsWrapper from '../components/pages/docCn/DocsWrapper'
import Sidebar from '../components/pages/docCn/Sidebar'
import LiteHeader from '../components/pages/docCn/LiteHeader'
import { Helmet as SEOHelmet, HaveQuestionsPrefooter } from 'src/fragments'
import ExamplesAndTutorials from 'src/components/pages/docCn/OverviewExtraContent/ExamplesAndTutorials.js'
import ExtraContent from 'src/components/pages/docCn/ExtraContent/index.js'

const DocTemplate = ({ data: { doc }, location }) => (
  <DocsLayout footerBackground={false} noPrefooter url={location.pathname}>
    <Helmet
      link={[
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css',
        },
      ]}
      script={[
        {
          src: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js',
          type: 'text/javascript',
        },
      ]}
    />

    <DocsWrapper __url={location.pathname}>
      <SEOHelmet {...doc.frontmatter} location={location} />
      <Box
        display={['none', 'none', 'none', 'none', 'block']}
        style={{ background: '#000' }}
      >
        <LiteHeader url={location.pathname} />
      </Box>
      <Row className='docWrapper'>
        <Sidebar head={doc.frontmatter} />
        <Column width={1}>
          <ExtraContent gitLink={doc.frontmatter.gitLink} />
          <Column
            dangerouslySetInnerHTML={{ __html: doc.content }}
            className='content'
          />
          {doc.frontmatter.gitLink == '/docs/README.md' ? (
            <ExamplesAndTutorials />
          ) : null}
          <HaveQuestionsPrefooter />
        </Column>
      </Row>
    </DocsWrapper>
  </DocsLayout>
)

export default DocTemplate

export const query = graphql`
  query DocCn($docId: String!) {
    doc(id: { eq: $docId }) {
      id
      frontmatter {
        title
        menuText
        layout
        menuOrder
        gitLink
        description
        menuItems {
          menuText
          path
        }
      }
      content
    }
  }
`
