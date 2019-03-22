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
import { developersMenu } from 'src/constants/urls'
import { InternalLink } from 'src/fragments'

const openSourcePoints = [
  ['An open-source CLI for building and deploying serverless applications', ''],
  ['Support for AWS, Google Cloud Platform, Microsoft Azure, and more', ''],
  ['Community provided plugins, examples and support', ''],
]

const enterprisePoints = [
  ['Everything in open source plus…'],
  [
    'Serverless Secrets, to help you onboard new developers efficiently and securely',
    'Enterprise enablement and best practices workshop, led by serverless experts',
  ],
  [
    'Serverless Safeguards, to ensure operational and security best practices are followed',
    'Custom plugin and use case template development',
  ],
  [
    'Serverless Insights to help you monitor, debug and optimize your applications',
    'Business hour or 24/7 support options',
  ],
]

const EnterpriseComparisonBox = styled(Background)`
  margin-top: 325px;

  @media screen and (max-width: 1024px) {
    margin-top: 16px;
  }
`

const OpenSourceComparisonBox = styled(Background)`
  @media screen and (min-width: 1025px) {
    margin-top: 200px;
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    margin-top: 92px;
  }

  @media screen and (max-width: 424px) {
    margin-top: 62px;
  }
`

const LeftSpinningWheel = styled(Absolute)`
  @media screen and (min-width: 2300px) {
    left: 15%;
  }

  @media screen and (min-width: 3000px) {
    left: 25%;
  }
`

const RightSpinningWheel = styled(Absolute)`
  @media screen and (min-width: 2300px) {
    right: 15%;
  }

  @media screen and (min-width: 3000px) {
    right: 25%;
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
      <Box mt={[62, 62, 92, 92, 132]}>
        <Heading.h3 align='center'>
          Or install <br /> Framework Open Source
        </Heading.h3>
        <Flex
          mb={[62, 62, 0, 0, '100px', '100px']}
          flexDirection={['column', 'column', 'column', 'column', 'row']}
        >
          <Box
            display={['none', 'none', 'none', 'none', 'block']}
            mt={[0, 0, 0, 0, '10%', 0]}
          >
            <RightSpinningWheel
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
            </RightSpinningWheel>
          </Box>
          <Box
            display={['none', 'none', 'none', 'none', 'block']}
            mt={[0, 0, 0, 0, '35%', '30%']}
          >
            <LeftSpinningWheel
              left={0}
              zIndex='-1'
              width={[0, 0, 0, 0, '40%', '650px']}
            >
              <Image
                src={
                  this.state.usingSafariDesktop
                    ? spinningWheel
                    : spinningWheelAnimation
                }
              />
            </LeftSpinningWheel>
          </Box>

          <OpenSourceComparisonBox
            background='#fd5750'
            width={['auto', 'auto', 'auto', 'auto', '50%']}
            maxHeight={['auto', 'auto', '515px']}
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
