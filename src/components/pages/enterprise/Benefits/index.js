import React from 'react'
import {
  TextWithIcon,
  Column,
  ResponsiveStack,
  Image,
  Box,
} from 'serverless-design-system'
import {
  Heading,
  P,
  MobileCenteredBox,
  Button,
} from 'src/fragments/DesignSystem'
import { ExternalLink } from 'src/fragments'
import dotGrid from 'src/assets/images/dot-grid-new.svg'
import supportImage from 'src/assets/images/pages/enterprise/support.svg'
import enterpriseImage from 'src/assets/images/pages/enterprise/enterprise.svg'
import supportImageAnimated from 'src/assets/images/pages/enterprise/support-animated.svg'
import enterpriseImageAnimated from 'src/assets/images/pages/enterprise/enterprise-animated.svg'
import { isSafari, isMobile } from 'react-device-detect'
import { WhitepaperModal } from 'src/components'
import styled from 'styled-components'
const ButtonWithZindex = styled('a')`
  z-index: 4;
`

const Benefits = () => (
  <Box>
    <ResponsiveStack.spaceBetween
      flexDirection={['column-reverse', 'column-reverse', 'row']}
      mt={[60, 60, 40, 40, 50]}
    >
      <Column width={[1, 1, 0.45, 0.45, '488px']}>
        <TextWithIcon
          iconSrc={dotGrid}
          iconHeight='38px'
          iconWidth='98px'
          iconLeft='-40px'
          iconTop={['-10px', '-10px', '4px']}
        >
          <Heading.h3
            pt='12px'
            color='white'
            fontSize={['32px']}
            lineHeight={['44px']}
            letterSpacing={['-0.5px']}
            mt={[5, 5, 0, 0]}
          >
            Plus: 24/7 Support from the team that brought you the Serverless
            Framework
          </Heading.h3>
        </TextWithIcon>
        <P color='white'>
          Dedicated training and support around CI/CD, serverless DevOps,
          architecture design, and more.
        </P>
        <ButtonWithZindex href='#enterprise-contact-form'>
          <Button width={208} mt={4}>
            get support
          </Button>
        </ButtonWithZindex>
      </Column>
      <MobileCenteredBox width={[1, 1, 0.5, 0.4]} mt={[0, 0, 3, 3, 0]}>
        <Image
          src={isSafari && !isMobile ? supportImage : supportImageAnimated}
          width={[300, 300, 300, 400, 321, 321]}
        />
      </MobileCenteredBox>
    </ResponsiveStack.spaceBetween>

    <ResponsiveStack.spaceBetween
      flexDirection={['column', 'column', 'row']}
      mt={[52, 52, 110, 110, 132]}
      pb={[0, 0, 0, 0, 132]}
    >
      <MobileCenteredBox width={[1, 1, 0.5, 0.4]} ml={[0, 0, 0, 0, 0, 120]}>
        <Image
          src={
            isSafari && !isMobile ? enterpriseImage : enterpriseImageAnimated
          }
          width={[300, 300, 400, 400, 321, 321]}
          align={['center', 'center', 'auto']}
        />
      </MobileCenteredBox>
      <Column width={[1, 1, 0.45, 0.45, '488px']} mt={[5, 5, 0, 0, 3]}>
        <TextWithIcon
          iconSrc={dotGrid}
          iconHeight='38px'
          iconWidth='98px'
          iconLeft='-40px'
          iconTop={['-10px', '-10px', '4px']}
        >
          <Heading.h3
            pt='12px'
            color='white'
            fontSize={['32px']}
            lineHeight={['44px']}
            letterSpacing={['-0.5px']}
          >
            Enterprise use cases for serverless
          </Heading.h3>
        </TextWithIcon>
        <P color='white'>
          See full architecture diagrams with time-to-market estimates for
          common serverless use cases in our white paper.
        </P>
        <WhitepaperModal />
      </Column>
    </ResponsiveStack.spaceBetween>
  </Box>
)

export default Benefits
