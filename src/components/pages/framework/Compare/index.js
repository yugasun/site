import React from 'react'
import CompareBox from './Box'
import { Box, Background, Flex, Image, Absolute } from 'serverless-design-system'
import { AppContainerNewest as AppContainer, WhiteButtonNew as WhiteButton } from 'src/components'
import styled from 'styled-components'
import spinningWheel from 'src/assets/images/pages/framework/spinning-wheel.svg'
import spinningWheelAnimation from 'src/assets/images/pages/framework/spinning-wheel-animation.svg'
import { Heading, Button, MobileCenteredBox } from 'src/fragments/DesignSystem'
import { enterprise, developersMenu } from 'src/constants/urls'
import { InternalLink } from 'src/fragments'

const openSourcePoints = [
    ["Infrastructure as code", "Community support"],
    ["Provider agnostic", "Community plugins"],
    ["Simple Serverless development", "Community examples"]
]

const enterprisePoints = [
    ["Everything in open source plus…"],
    ["Architectural reviews", "Enterprise enablement and best practices"],
    ["Custom Serverless workshop", "24/7 enterprise support"],
    ["Custom plugins", "Custom use-case templates"]
]

const EnterpriseComparisonBox = styled(Background)`
    margin-top: 30%;

    @media screen and (max-width: 1024px) {
        margin-top: 16px;
    }
`

const OpenSourceComparisonBox = styled(Background)`
    @media screen and (min-width: 1024px) {
        margin-top: 200px;
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
            <Heading.h3 align='center'>Easy, open Serverless development.</Heading.h3>
            <Flex mb={['520px']} flexDirection={['column', 'column', 'column', 'column','row']} mt={[62, 62, 92, 92, 46]}>  
            <Box display={[ 'none', 'none', 'none', 'none', 'block' ]}>
                <Absolute right='0' zIndex='-1' width='40%'>
                    <Image src={this.state.usingSafariDesktop ? spinningWheel : spinningWheelAnimation} />
                </Absolute>
            </Box>
            <Box display={[ 'none', 'none', 'none', 'none', 'block' ]} mt={[0, 0, 0, 0, '30%']}>
                <Absolute left='0' zIndex='-1' width='40%'>
                    <Image src={this.state.usingSafariDesktop ? spinningWheel : spinningWheelAnimation}/>
                </Absolute>
            </Box>

                <OpenSourceComparisonBox background='#fd5750' width={['auto', 'auto', 'auto', 'auto', '50%']} maxHeight={['auto', 'auto', '467px']}>
                    <CompareBox points={openSourcePoints} heading='open source'/>
                    <MobileCenteredBox pb={'32px'} px={'32px'} pt={'14px'}>
                        <InternalLink to={developersMenu.docs}>
                            <WhiteButton>install free</WhiteButton>
                        </InternalLink>
                    </MobileCenteredBox>
                </OpenSourceComparisonBox>
                <EnterpriseComparisonBox background='black' width={['auto', 'auto', 'auto', 'auto', '50%']}>
                    <CompareBox points={enterprisePoints} heading='enterprise'/>
                    <MobileCenteredBox pb={'32px'} px={'32px'} pt={'14px'}>
                        <InternalLink to={enterprise}>
                            <Button m='auto' className='enterprise-learn-more'>learn more</Button>
                        </InternalLink>
                    </MobileCenteredBox>
                </EnterpriseComparisonBox>
            </Flex>
        </AppContainer>
        )
    }
    
}