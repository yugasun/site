import React from 'react'
import CompareBox from './Box'
import { Box, Heading, Background, Flex, Image, Absolute } from 'serverless-design-system'
import { AppContainerNewest as AppContainer} from 'src/components'
import styled from 'styled-components'
import spinningWheel from 'src/assets/images/pages/framework/spinning-wheel.svg'

const openSourcePoints = [
    ["Infrastructure as code", "Community support"],
    ["Provider agnostic", "Community plugins"],
    ["Simple Serverless development", "Community examples"]
]

const enterprisePoints = [
    ["Infrastructure as code", "Architectural reviews"],
    ["Provider agnostic", "Enterprise enablement and best practices"],
    ["Simple Serverless development", "Custom Serverless workshop"],
    ["Community support", "24/7 enterprise support"],
    ["Community plugins", "Custom plugins"],
    ["Community examples", "Custom use-case templates"]
]

const EnterpriseComparisonBox = styled(Background)`
    margin-top: 132px;

    @media screen and (max-width: 414px) {
        margin-top: 16px;
    }
`

const ComparisonBoxes = () => (
    <AppContainer>
        <Heading.h3 align='center' fontFamily='Soleil'>Easy, open Serverless development.</Heading.h3>
        <Flex mb='500px' flexDirection={['column', 'column', 'row']}>  
        <Box display={[ 'none', 'none', 'block' ]}>
            <Absolute right='0' zIndex='-1'>
                <Image src={spinningWheel} />
            </Absolute>
        </Box>
        <Box display={[ 'none', 'none', 'block' ]}>
            <Absolute left='0' zIndex='-1'>
                <Image src={spinningWheel} />
            </Absolute>
        </Box>
        <Background background='#fd5750' width={['auto', 'auto', '50%']}>
            <CompareBox points={openSourcePoints} heading='open source'/>
        </Background>
        <EnterpriseComparisonBox background='black' width={['auto', 'auto', '50%']}>
            <CompareBox points={enterprisePoints} heading='enterprise' mt='132px'/>
        </EnterpriseComparisonBox>
        </Flex>
    </AppContainer>
)

export default ComparisonBoxes