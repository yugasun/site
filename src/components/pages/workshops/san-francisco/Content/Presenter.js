import React from 'react'
import { TitleWithIconNew as TitleWithIcon } from 'src/fragments'
import { Box, Image, Row } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import linkIcon from 'src/assets/images/link.svg'
import twitterIcon from 'src/assets/images/twitter-black.svg'
import githubIcon from 'src/assets/images/github.svg'

const Presenter = () => (
  <Box mb={['500px']} mt={['100px']} width={0.6}>
    <TitleWithIcon>Jared Short</TitleWithIcon>
    <P color='gray.2'>
      Head of Developer Relations and Experience at Serverless, Inc.
    </P>
    <P>
      Head of Developer Relations and Experience at Serverless, Inc., and is
      based in Washington, DC. He comes to the company with a strong background
      in and building, operating and maintaining serverless and event-driven
      systems in his previous role at Trek10, a serverless first AWS partner.
    </P>
    <Row>
      <Image src={linkIcon} />
      <Image src={twitterIcon} mx={'42px'} />
      <Image src={githubIcon} />
    </Row>
  </Box>
)

export default Presenter
