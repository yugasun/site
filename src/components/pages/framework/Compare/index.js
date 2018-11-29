import React from 'react'
import CompareBox from './Box'
import { Box, Heading, Background, Flex, Image, Absolute } from 'serverless-design-system'
import { AppContainerNew as AppContainer} from 'src/components'
import styled from 'styled-components'
import spinningWheel from 'src/assets/images/pages/framework/spinning-wheel.svg'
import spinningWheelAnimation from 'src/assets/images/pages/framework/spinning-wheel-animation.svg'

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

    @media screen and (max-width: 1024px) {
        margin-top: 16px;
    }
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
            <Heading.h3 align='center' fontFamily='Soleil'>Easy, open Serverless development.</Heading.h3>
            <Flex mb='500px' flexDirection={['column', 'column', 'column', 'column','row']}>  
            <Box display={[ 'none', 'none', 'none', 'none', 'block' ]}>
                <Absolute right='0' zIndex='-1' width='50%'>
                    <Image src={this.state.usingSafariDesktop ? spinningWheel : spinningWheelAnimation} />
                </Absolute>
            </Box>
            <Box display={[ 'none', 'none', 'none', 'none', 'block' ]}>
                <Absolute left='0' zIndex='-1' width='50%'>
                    <Image src={this.state.usingSafariDesktop ? spinningWheel : spinningWheelAnimation}/>
                </Absolute>
            </Box>
            <Background background='#fd5750' width={['auto', 'auto', 'auto', 'auto', '50%']}>
                <CompareBox points={openSourcePoints} heading='open source'/>
            </Background>
            <EnterpriseComparisonBox background='black' width={['auto', 'auto', 'auto', 'auto', '50%']}>
                <CompareBox points={enterprisePoints} heading='enterprise'/>
            </EnterpriseComparisonBox>
            </Flex>
        </AppContainer>
        )
    }
    
}