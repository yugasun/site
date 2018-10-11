

import React from 'react'
import { Box, Heading, P, Row, Button } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Breadcrumbs from 'src/components/Breadcrumbs'
import styled from 'styled-components'

//TODO - hacky fix this
const ExampleBreadcrumbs = styled(Breadcrumbs)`
    margin: 0 auto!important;
`

export default ({ id, frontmatter, content, location }) => {
    console.log(frontmatter)
  return (
        <AppContainer>
        <Box width={1}
        px={200}
        my={10}
    pb={[300, 300, 300, 250]}>
            <ExampleBreadcrumbs path={`/examples/${frontmatter.language}`}/>
            <Heading.h1 align='center'>
                {frontmatter.title}
            </Heading.h1>
            <P align='center'>{frontmatter.description}</P>
            
            <P pt={94} dangerouslySetInnerHTML={{ __html: content }} />
            <Row justifyContent='space-between'>
                <Button height='50px' fontSize='2rem' p={0} lineHeight={1.4}> 
                    view on Github
                </Button>
                <P color='#000000'>
                Latest commit b2f54ec  on Sep 24, 2017
                </P>
            </Row>
        </Box>
    </AppContainer>
  )
}
