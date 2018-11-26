import React from 'react'
import { ExternalLink } from 'src/fragments'
import { Row, Button, P } from 'serverless-design-system'
import styled from 'styled-components'

const DesktopOnlyRow = styled(Row)`
    @media screen and (max-width: 414px) {
        display: none;
    }
`
const EditOnGithubBottom = ({gitLink}) => (
    <DesktopOnlyRow justifyContent='space-between' mt={76} mx='auto'>
       <ExternalLink
            title='View this example on GitHub'
            to={gitLink}
        >
            <Button height='50px' fontSize='2rem' letterSpacing={'0.8px'} p={0} lineHeight={['14px']}> 
                      view on Github
            </Button>
        </ExternalLink>
            <P fontSize='14px' lineHeight={'1.57'} letterSpacing={'0.6px'} color='#000000' opacity='0.4' fontFamily='Serverless'>
                Latest commit b2f54ec  on Sep 24, 2017
            </P>         
    </DesktopOnlyRow>
)

export default EditOnGithubBottom
