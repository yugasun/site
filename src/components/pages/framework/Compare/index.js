import React from 'react'
import CompareBox from './Box'
import { Box, Background, Flex, Image, Absolute } from 'serverless-design-system'
import { AppContainerNewest as AppContainer, WhiteButtonNew as WhiteButton } from 'src/components'
import styled from 'styled-components'
import spinningWheel from 'src/assets/images/pages/framework/spinning-wheel.svg'
import spinningWheelAnimation from 'src/assets/images/pages/framework/spinning-wheel-animation.svg'
import { Heading, Button } from 'src/fragments/DesignSystem'
import { enterprise, developersMenu } from 'src/constants/urls'
import { InternalLink } from 'src/fragments'

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
    margin-top: 350px;

    @media screen and (max-width: 1024px) {
        margin-top: 16px;
    }
`

const OpenSourceComparisonBox = styled(Background)`
    @media screen and (min-width: 1024px) {
        margin-top: 200px;
    }
`

const OpenSourceCTAButton = styled(Button)`
    border-color: 'white';
    background-color: transparent;
`

export default class ComparisonBoxes extends React.Component {
    constructor() {
        super()
        this.state = {
          usingSafariDesktop: false,
        }
    }
    
    componentDidMount() {
        const windowGlobal = typeof window !== 'undefined' && window
        const navigatorGlobal = typeof navigator !== 'undefined' && navigator
    
        
        if(windowGlobal && navigatorGlobal) {
          const using_safari_browser = /^((?!chrome|android).)*safari/i.test(navigatorGlobal.userAgent)
          const using_desktop = windowGlobal.innerWidth > 1200
    
          if(using_safari_browser && using_desktop) {
            this.setState({usingSafariDesktop: true})
          }
        }
    }

    render() {
        return (
            <AppContainer>
            <Heading.h3 align='center'>Easy, open Serverless development.</Heading.h3>
            <Flex mb='700px' flexDirection={['column', 'column', 'column', 'column','row']} mt={[0, 0, 0, 0, 46]}>  
            <Box display={[ 'none', 'none', 'none', 'none', 'block' ]}>
                <Absolute right='0' zIndex='-1' width='50%'>
                    <Image src={this.state.usingSafariDesktop ? spinningWheel : spinningWheelAnimation} />
                </Absolute>
            </Box>
            <Box display={[ 'none', 'none', 'none', 'none', 'block' ]} mt={[0, 0, 0, 0, 276]}>
                <Absolute left='0' zIndex='-1' width='50%'>
                    <Image src={this.state.usingSafariDesktop ? spinningWheel : spinningWheelAnimation}/>
                </Absolute>
            </Box>

                <OpenSourceComparisonBox background='#fd5750' width={['auto', 'auto', 'auto', 'auto', '50%']} maxHeight={['auto', 'auto', '491px']}>
                    <CompareBox points={openSourcePoints} heading='open source'/>
                    <InternalLink to={enterprise}>
                        <WhiteButton>install free</WhiteButton>
                    </InternalLink>
                </OpenSourceComparisonBox>
                <EnterpriseComparisonBox background='black' width={['auto', 'auto', 'auto', 'auto', '50%']}>
                    <CompareBox points={enterprisePoints} heading='enterprise'/>
                    <Box p={'32px'}>
                        <InternalLink to={developersMenu.docs}>
                            <Button>learn more</Button>
                        </InternalLink>
                    </Box>
                </EnterpriseComparisonBox>
            </Flex>
        </AppContainer>
        )
    }
    
}