import React from 'react'
import CompareBox from './Box'
import {
  Box,
  Background,
  Flex,
  Image,
  Absolute,
} from 'serverless-design-system'
import { WhiteButtonNew as WhiteButton } from 'src/components'
import styled from 'styled-components'
import spinningWheel from 'src/assets/images/pages/framework/spinning-wheel.svg'
import spinningWheelAnimation from 'src/assets/images/pages/framework/spinning-wheel-animation.svg'
import { Heading, Button, MobileCenteredBox } from 'src/fragments/DesignSystem'
import { enterprise, developersMenu } from 'src/constants/urls'
import { InternalLink } from 'src/fragments'

const openSourcePoints = [
  ['Infrastructure as code', 'Community support'],
  ['Provider agnostic', 'Community plugins'],
  ['Simple Serverless development', 'Community examples'],
]

const enterprisePoints = [
  ['Everything in open source plus…'],
  ['Architectural reviews', 'Enterprise enablement and best practices'],
  ['Custom Serverless workshop', '24/7 enterprise support'],
  ['Custom plugins', 'Custom use-case templates'],
]

const EnterpriseComparisonBox = styled(Background)`
  margin-top: 325px;

  @media screen and (max-width: 1024px) {
    margin-top: 16px;
  }
`

const OpenSourceComparisonBox = styled(Background)`
  @media screen and (min-width: 1024px) {
    margin-top: 200px;
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    margin-top: 92px;
  }

  @media screen and (max-width: 424px) {
    margin-top: 62px;
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

    if (windowGlobal && navigatorGlobal) {
      const using_safari_browser = /^((?!chrome|android).)*safari/i.test(
        navigatorGlobal.userAgent
      )
      const using_desktop = windowGlobal.innerWidth > 1200

      if (using_safari_browser && using_desktop) {
        this.setState({ usingSafariDesktop: true })
      }
    }
  }

  render() {
    return (
      <Box mt={[1250, 1250, 610, 610, 446]}>
        <Heading.h3 align='center'>
          ...Or install <br /> Framework Open Source
        </Heading.h3>
        <Flex
          mb={['520px', '520px', '410px', '410px', '400px', '550px']}
          flexDirection={['column', 'column', 'column', 'column', 'row']}
        >
          <Box display={['none', 'none', 'none', 'none', 'block']}>
            <Absolute
              right='0'
              zIndex='-1'
              width={[0, 0, 0, 0, '40%', '680px']}
            >
              <Image
                src={
                  this.state.usingSafariDesktop
                    ? spinningWheel
                    : spinningWheelAnimation
                }
              />
            </Absolute>
          </Box>
          <Box
            display={['none', 'none', 'none', 'none', 'block']}
            mt={[0, 0, 0, 0, '30%']}
          >
            <Absolute
              left='0'
              zIndex='-1'
              width={[0, 0, 0, 0, '550px', '650px']}
            >
              <Image
                src={
                  this.state.usingSafariDesktop
                    ? spinningWheel
                    : spinningWheelAnimation
                }
              />
            </Absolute>
          </Box>

          <OpenSourceComparisonBox
            background='#fd5750'
            width={['auto', 'auto', 'auto', 'auto', '50%']}
            maxHeight={['auto', 'auto', '467px']}
          >
            <CompareBox points={openSourcePoints} heading='open source' />
            <MobileCenteredBox pb={'32px'} px={'32px'} pt={'14px'}>
              <InternalLink to={developersMenu.docs}>
                <WhiteButton>install free</WhiteButton>
              </InternalLink>
            </MobileCenteredBox>
          </OpenSourceComparisonBox>
          <EnterpriseComparisonBox
            background='black'
            width={['auto', 'auto', 'auto', 'auto', '50%']}
          >
            <CompareBox points={enterprisePoints} heading='enterprise' />
            <MobileCenteredBox pb={'32px'} px={'32px'} pt={'14px'}>
              <a href='#enterprise-contact-form'>
                <Button m='auto' className='enterprise-learn-more'>
                  schedule a demo
                </Button>
              </a>
            </MobileCenteredBox>
          </EnterpriseComparisonBox>
        </Flex>
      </Box>
    )
  }
}
