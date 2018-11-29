import React from 'react'
import { Box } from 'serverless-design-system'
import styled from 'styled-components'
import ContentWrapper from './ContentWrapper'
import { AppContainerNew as AppContainer } from 'src/components'
import EditOnGithubSticky from './EditOnGithubSticky'
import EditOnGithubBottom from './EditOnGithubBottom'
import ContentHeader from './ContentHeader'

const WidthContainer = styled(Box)`
    @media screen and (min-width: 1024px) {
        width: 800px;
        margin: auto;
    }
`

const ExampleContent = ({ frontmatter, content }) => {
  return (
      <Box
        my={[104, 104, 170]}>
        <EditOnGithubSticky gitLink={frontmatter.gitLink}/>
        <AppContainer>
            <ContentHeader {...frontmatter}/>
            <ContentWrapper
                width={[1, 1, 1, 1, '800px']}
                  mx='auto'
                dangerouslySetInnerHTML={{ __html: content }}
            />
            <WidthContainer>
                <EditOnGithubBottom gitLink={frontmatter.gitLink} />
            </WidthContainer>
            <Box mb={510}></Box>
            </AppContainer>
        </Box>
  )
}

export default ExampleContent