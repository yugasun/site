

import React from 'react'
import { Box, Heading, P, Row, Button, Image } from 'serverless-design-system'
import Breadcrumbs from 'src/components/Breadcrumbs'
import styled from 'styled-components'
import ContentWrapper from './ContentWrapper'
import { AppContainer } from 'src/components'
import Link from 'gatsby-link'
import EditOnGithubOption from './EditOnGithub'

//TODO - hacky fix this
const ExampleBreadcrumbs = styled(Breadcrumbs)`
    margin: 0 auto!important;
    height: 22px;
    opacity: 0.4;
    font-family: Serverless;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.57;
    letter-spacing: 0.6px;
    color: #000000

    a:hover  {
        color: #000000;
        opacity: 0.4;
    }
`

const WidthContainer = styled(Box)`

    @media screen and (min-width: 415px) {
        width: 800px;
        margin: auto;
    }
`

//TODO - REFACTOR THIS (components)
export default ({ frontmatter, content }) => {
  return (
        
      <Box
        my={[104, 104, 170]}>
        <EditOnGithubOption gitLink={frontmatter.gitLink}/>
        <AppContainer>
            <ExampleBreadcrumbs path={`/examples/`}/>
            <WidthContainer>

                  <Heading.h1 align='center' fontSize={['32px', '32px', '48px']} lineHeight={['44px', '44px', '62px']} letterSpacing={['-0.5px', '-0.5px', '0.5px']} fontFamily='Soleil' mt={18} mb={0} width={1/2}>
                {frontmatter.platform} | {frontmatter.title}
                  </Heading.h1>
                  <P align='center' lineHeight={'1.63'} mt={['8px','8px','9px']} mb={['22px','22px','21px']}>{frontmatter.description}</P>
            </WidthContainer>
            <a href={frontmatter.authorLink} target='_blank'>
                  <Row justifyContent='center' alignItems='center' mb={'57px'} pl={[0, 0, '50px']}>
                      <P color='#8c8c8c' fontSize='12px' lineHeight={'1.33'} pr={'8px'} my={0}>user &nbsp;</P>
                <Image
                    src={frontmatter.authorAvatar}
                    width='33px'
                    height='33px'
                />
                      <P color='#8c8c8c' fontSize='12px' lineHeight={'1.33'} pl={'8px'} my={0}>{frontmatter.authorName}</P>
            </Row>
            </a>
            <ContentWrapper
                width={[1, 1, '800px']}
                  mx='auto'
                  px={['15px', '15px', 0]}  
                dangerouslySetInnerHTML={{ __html: content }}
            />
            <WidthContainer>
            <Row justifyContent='space-between' mt={76} mx='auto'>
                <a
                    title='View this example on GitHub'
                    rel='noopener noreferrer'
                    target='_blank'
                    href={frontmatter.gitLink}
                    >
                 <Button height='50px' fontSize='2rem' letterSpacing={'0.8px'} p={0} lineHeight={['14px']}> 
                    view on Github
                </Button>
                </a>
                      <P fontSize='14px' lineHeight={'1.57'} letterSpacing={'0.6px'} color='#000000' opacity='0.4' fontFamily='Serverless'>
                Latest commit b2f54ec  on Sep 24, 2017
                </P>
            </Row>
            </WidthContainer>
            </AppContainer>
        </Box>
  )
}
