

import React from 'react'
import { Box, Heading, P, Row, Button, Image } from 'serverless-design-system'
import Breadcrumbs from 'src/components/Breadcrumbs'
import styled from 'styled-components'
import ContentWrapper from './ContentWrapper'
import { AppContainer } from 'src/components'

//TODO - hacky fix this
const ExampleBreadcrumbs = styled(Breadcrumbs)`
    margin: 0 auto!important;
    opacity: 0.4;
    font-family: Serverless;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.57;
    letter-spacing: 0.6px;
    color: #000000;

    a:hover  {
        color: #5b5b5b;
    }
`

const WidthContainer = styled(Box)`

    @media screen and (min-width: 415px) {
        width: 800px;
        margin: auto;
    }
`

//TODO - make below code dry
export default ({ id, frontmatter, content, location }) => {
  return (
        <Box
        my={10}
    pb={[300, 300, 300, 250]}>
        <AppContainer>
            <ExampleBreadcrumbs path={`/examples/`}/>
            <WidthContainer>

            
            <Heading.h1 align='center' fontSize={['32px', '32px', '48px']} fontFamily='Soleil' mt={20} width={1/2}>
                {frontmatter.platform} | {frontmatter.title}
            </Heading.h1>
            <P align='center'>{frontmatter.description}</P>
            </WidthContainer>
            <Row justifyContent='center' alignItems='center'>
                <P color='#8c8c8c' fontSize='12px'>user &nbsp;</P>
                <Image
                    src='https://secure.gravatar.com/avatar/ac1479a36bca868045a4d56ee4557534'
                    width='33px'
                    height='33px'
                />
                <P color='#8c8c8c' fontSize='12px'> &nbsp; rupakg</P>
            </Row>
            <ContentWrapper
                width={[1, 1, 1, 0.65]}
                mx='auto'
                dangerouslySetInnerHTML={{ __html: content }}
            />
            <WidthContainer>
            <Row justifyContent='space-between' mt={100} mx='auto'>
                <Button height='50px' fontSize='2rem' p={0} lineHeight={1.4}> 
                    view on Github
                </Button>
                <P color='#000000' opacity='0.4'>
                Latest commit b2f54ec  on Sep 24, 2017
                </P>
            </Row>
            </WidthContainer>
            </AppContainer>
        </Box>
  )
}
