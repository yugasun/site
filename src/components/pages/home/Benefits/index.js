import React from 'react'
import {
  Heading,
  Button,
  ResponsiveStack,
  Image,
  Column,
  TextWithIcon,
  Box,
  P,
  Row,
  Position
} from 'serverless-design-system'
import styled from 'styled-components'
import ButtonCTA from '../Button'

import { AppContainerNewest as AppContainer } from 'src/components'
import buildApi from 'src/assets/images/home-benefits-build-api.svg'
import customAutomation from 'src/assets/images/home-benefits-custom-automation.svg'
import dataProcessing from 'src/assets/images/home-benefits-data-processing.svg'
import dotGrid from 'src/assets/images/dot-grid-new.svg'
import DesktopDownArrow from './DesktopDownArrow'

const MobileBenefitItem = ({number, title}) => (
    <Box display={['block', 'block', 'none']} mt={15} mb={25}>
    <Row>
    <Button bg='#fd5750' width={['60px', '60px', '72px']} height={['60px', '60px', '72px']} fontSize={['26.7px', '26.7px', '32px']} p={0}>
     {number}
    </Button>

    <P color='black' fontSize='24px' ml={'32px'} mt={15}>{title}</P> 
    </Row>  
    </Box>
)

const MobileCenteredImage = styled(Image)`
    @media screen and (max-width: 415px) {
        margin: 0 auto
    }
`

const ButtonWithTransition = styled(Button)`

`

const BenefitsAnimationStyles = {
    position: 'fixed',
    backgroundColor: 'white',
    top: '-27px',
    left: '0',
    height: '130vh',
    width: '100vw',
    zIndex: '2',
    paddingLeft: '12%',
    paddingRight: '13%',
    paddingTop: '82px',
} 

export default class HomeBenefits extends React.Component {
    constructor() {
        super()
        this.state = { 
            showBuildApi: true, 
            showCustomAutomation: false, 
            showDataProcessing: false,
            isUsingMobile: false,
            benefitsAnimationTriggered: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false)
        const windowGlobal = typeof window !== 'undefined' && window
        if(windowGlobal) {
            if(windowGlobal.innerWidth < 415) {
                this.setState({isUsingMobile: true})
            }
        }
    }
  
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false)
    }
  
    onScroll = () => {
    
     if(!this.state.isUsingMobile) {
         console.log(window.scrollY)
        if(window.scrollY > 1408 && window.scrollY < 2100) {
            console.log("triggered bro")
            this.setState({benefitsAnimationTriggered: true})
        } else {
            this.setState({benefitsAnimationTriggered: false})
        }
        if(window.scrollY > 1620 && window.scrollY < 1820) {
            this.showBenefit('customAutomation')
          } else if(window.scrollY > 1900) {
              this.showBenefit('dataProcessing')
          } else if(window.scrollY < 1407) {
              this.showBenefit('buildApi')
          }
     }
    }

    showBenefit = (benefitOption) => {
        this.setState({
            showBuildApi: benefitOption === 'buildApi' ? true : false, 
            showCustomAutomation: benefitOption === 'customAutomation' ? true : false, 
            showDataProcessing: benefitOption === 'dataProcessing' ? true : false
        })
    }

    render() {
        return (
            <AppContainer>
            <ResponsiveStack.spaceBetween flexDirection={['column-reverse', 'column-reverse', 'row']} mt={100} mb={[50, 50, 200]} style={this.state.benefitsAnimationTriggered ? BenefitsAnimationStyles: {}}>
            <DesktopDownArrow />
            
            <MobileBenefitItem number='03' title='Data processing' />
            <MobileCenteredImage src={dataProcessing} style={{display: this.state.isUsingMobile ||  this.state.showDataProcessing ? 'block' : 'none' }} width={[250, 250, 615]} height={[233, 233, 581]}/>

            <MobileBenefitItem number='02' title='Custom automation' />
            <MobileCenteredImage src={customAutomation} style={{display: this.state.isUsingMobile ||  this.state.showCustomAutomation ? 'block' : 'none' }} width={[250, 250, 615]} height={[233, 233, 581]}/>
            
            <MobileBenefitItem number='01' title='Build APIs' />
            <MobileCenteredImage src={buildApi} style={{ display: this.state.isUsingMobile || this.state.showBuildApi ? 'block' : 'none' }} width={[250, 250, 615]} height={[233, 233, 581]}/>

            <Column width={[1, 1, '488px']}>
                        <TextWithIcon iconSrc={dotGrid} iconHeight='38px' iconWidth='98px' iconLeft='-40px' iconTop={['-10px','-10px', '4px']}>
                            <Heading.h3 fontFamily='Soleil' lineHeight={['32px', '32px', '44px']} letterSpacing='-0.5px' fontSize={['24px', '24px', '32px']} pt='12px' pb={[4, 4, 0]}>
                What you can do with <br />serverless applications
                </Heading.h3>
                </TextWithIcon>
                <Box display={['none', 'none', 'block']}>


                <Row onClick={() => this.showBenefit('buildApi')} mt={[0,0,40]}>
                        <ButtonWithTransition bg={this.state.showBuildApi ? '#fd5750': '#eaeaea'} width={['60px', '60px', '72px']} height={['60px', '60px', '72px']} fontSize='32px'>
                        01
                        </ButtonWithTransition>
                                <P color='black' fontSize='24px' ml={[0, 0, '32px']} lineHeight='32px' letterSpacing='-0.4px'>Build APIs</P> 
                </Row>  

                <Row onClick={() => this.showBenefit('customAutomation')} mt={[0,0,25]}>
                    <ButtonWithTransition bg={this.state.showCustomAutomation ? '#fd5750': '#eaeaea'} width={['60px', '60px', '72px']} height={['60px', '60px', '72px']} fontSize='32px'>
                    02
                    </ButtonWithTransition>
                    <P color='black' fontSize='24px' ml={[0, 0, '32px']} lineHeight='32px' letterSpacing='-0.4px'>Custom automation</P> 
                </Row>  

                <Row onClick={() => this.showBenefit('dataProcessing')} mt={[0,0,25]}>
                    <ButtonWithTransition bg={this.state.showDataProcessing ? '#fd5750': '#eaeaea'} width={['60px', '60px', '72px']} height={['60px', '60px', '72px']} fontSize='32px'>
                    03
                    </ButtonWithTransition>
                    <P color='black' fontSize='24px' ml={[0, 0, '32px']} lineHeight='32px' letterSpacing='-0.4px'>Data processing</P> 
                </Row>  

                <ButtonCTA mt={'50px'}>get started</ButtonCTA>
                </Box>
            </Column>
            </ResponsiveStack.spaceBetween>
        </AppContainer>
        )
    }
}