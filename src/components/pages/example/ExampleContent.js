import React from 'react'
import { Box } from 'serverless-design-system'
import ContentWrapper from './ContentWrapper'
import { AppContainerNewest as AppContainer } from 'src/components'
import EditOnGithubSticky from './EditOnGithubSticky'
import EditOnGithubBottom from './EditOnGithubBottom'
import ContentHeader from './ContentHeader'
import { PageContainer } from 'src/fragments/DesignSystem'

const ExampleContent = ({ frontmatter, content }) => {
  return (
    <Box mt={[104, 104, 150]} mb={[40, 40, 92]}>
      <EditOnGithubSticky gitLink={frontmatter.gitLink} />
      <AppContainer>
        <ContentHeader {...frontmatter} />
        <ContentWrapper
          width={[1, 1, 1, 1, '800px']}
          mx='auto'
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <PageContainer>
          <EditOnGithubBottom gitLink={frontmatter.gitLink} />
        </PageContainer>
      </AppContainer>
    </Box>
  )
}

export default ExampleContent
