import React from 'react'
import {
  TextWithIcon,
  Column,
  ResponsiveStack,
  Image,
  Box,
} from 'serverless-design-system'
import { Heading, P, MobileCenteredBox } from 'src/fragments/DesignSystem'
import dotGrid from 'src/assets/images/dot-grid-new.svg'
import supportImage from 'src/assets/images/pages/enterprise/support.svg'
import enterpriseImage from 'src/assets/images/pages/enterprise/enterprise.svg'

const Benefits = () => (
  <Box>
    <ResponsiveStack.spaceBetween
      flexDirection={['column-reverse', 'column-reverse', 'row']}
      mt={[0, 0, 132, 132, 192]}
    >
      <Column width={[1, 1, 1 / 2, '488px']}>
        <TextWithIcon
          iconSrc={dotGrid}
          iconHeight='38px'
          iconWidth='98px'
          iconLeft='-40px'
          iconTop={['-10px', '-10px', '4px']}
        >
          <Heading.h3 pt='12px' color='white'>
            Plus: 24/7 Support from the team that brought you the Serverless
            Framework
          </Heading.h3>
        </TextWithIcon>
        <P color='white'>
          A dedicated support engineer will be there to help you design your
          architecture and troubleshoot issues along the way. We can provide
          dedicated training and workshops around CI/CD, serverless DevOps,
          general best practices and more.
        </P>
      </Column>
      <MobileCenteredBox width={[1, 1, 0.4]}>
        <Image src={supportImage} width={[300, 300, 300, 400, 450, 378]} />
      </MobileCenteredBox>
    </ResponsiveStack.spaceBetween>

    <ResponsiveStack.spaceBetween
      flexDirection={['column-reverse', 'column-reverse', 'row']}
      mt={[0, 0, 132]}
      pb={[0, 0, 0, 0, 492]}
    >
      <MobileCenteredBox width={[1, 1, 0.4]} ml={[0, 0, 120]}>
        <Image src={enterpriseImage} width={[300, 300, 300, 400, 450, 378]} />
      </MobileCenteredBox>
      <Column width={[1, 1, 1 / 2, '488px']}>
        <TextWithIcon
          iconSrc={dotGrid}
          iconHeight='38px'
          iconWidth='98px'
          iconLeft='-40px'
          iconTop={['-10px', '-10px', '4px']}
        >
          <Heading.h3 pt='12px' color='white'>
            Enterprise use cases for serverless
          </Heading.h3>
        </TextWithIcon>
        <P color='white'>
          With serverless, developers can spend their time building features
          that drive outcomes. <br />
          <br />A single system can handle entire image processing pipelines.
          Multiple CRONs can run at once and scale without manual provisioning.{' '}
          <br />
          <br />
          See full architecture diagrams and time-to-market estimates for common
          use cases in our white paper.
        </P>
      </Column>
    </ResponsiveStack.spaceBetween>
  </Box>
)

export default Benefits
