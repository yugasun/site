import React from 'react'
import { Box } from 'serverless-design-system'
import ContentWrapper from './ContentWrapper'
import { AppContainerNew as AppContainer } from 'src/components'
import EditOnGithubSticky from './EditOnGithubSticky'
import EditOnGithubBottom from './EditOnGithubBottom'
import ContentHeader from './ContentHeader'
import { PageContainer } from 'src/fragments/DesignSystem'

const ExampleContent = ({ frontmatter, content }) => {
  return (
      <Box
        my={[104, 104, 170]}>
        <EditOnGithubSticky gitLink={frontmatter.gitLink}/>
        <AppContainer>
            <ContentHeader {...frontmatter}/>
            <ContentWrapper
                width={[1, 1, 1, 1, 1/2, '800px']}
                  mx='auto'
                dangerouslySetInnerHTML={{ __html: content }}
            />
            <PageContainer>
                <EditOnGithubBottom gitLink={frontmatter.gitLink} />
            </PageContainer>
            <Box mb={510}></Box>
            </AppContainer>
        </Box>
  )
}

export default ExampleContent