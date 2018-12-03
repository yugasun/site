import React from 'react'
import { Box, Heading, Row, Image} from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import Breadcrumbs from 'src/components/Breadcrumbs'
import styled from 'styled-components'
import { P, PageContainer } from 'src/fragments/DesignSystem'

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

const ContentHeader = ({platform, title, authorLink, description, authorName, authorAvatar}) => {
    return (
        <Box>
        <ExampleBreadcrumbs path={'/examples/'}/>
            <PageContainer>

                  <Heading.h1 align='center' fontSize={['32px', '32px', '48px']} lineHeight={['44px', '44px', '62px']} letterSpacing={['-0.5px', '-0.5px', '0.5px']} fontFamily='Soleil' mt={18} mb={0} width={1}>
                {platform} | {title}
                  </Heading.h1>
                  <P align='center' mt={['8px','8px','9px']} mb={['22px','22px','21px']}>{description}</P>
            </PageContainer>
            <ExternalLink to={authorLink}>
                  <Row justifyContent='center' alignItems='center' mb={'57px'} pl={[0, 0, '50px']}>
                      <P color='#8c8c8c' fontSize='12px' lineHeight={'1.33'} pr={'8px'} my={0}>user &nbsp;</P>
                <Image
                    src={authorAvatar}
                    width='33px'
                    height='33px'
                />
                      <P color='#8c8c8c' fontSize='12px' lineHeight={'1.33'} pl={'8px'} my={0}>{authorName}</P>
            </Row>
            </ExternalLink>
        </Box>
    )
}

export default ContentHeader