import React from 'react'
import { TitleWithIconNew as TitleWithIcon, ExternalLink } from 'src/fragments'
import { Box, Image, Row, Flex } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import linkIcon from 'src/assets/images/link.svg'
import twitterIcon from 'src/assets/images/twitter-black.svg'
import githubIcon from 'src/assets/images/github.svg'
import jared from 'src/assets/images/pages/workshops/jared.png'
import styled from 'styled-components'

const ImageWithMarginX = styled(Image)`
  margin: 0 42px;
`

const Presenter = () => (
  <Flex
    flexDirection={['column', 'column', 'row']}
    width={[1, 1, 1, 1, 0.8]}
    justifyContent='space-between'
    mx='auto'
  >
    <Box mt={[92, 92, 181, 181, 152]}>
      <Image
        src={jared}
        maxHeight={[163, 163, 218, 218, 280]}
        maxWidth={[163, 163, 218, 218, 280]}
      />
    </Box>

    <Box mb={['500px']} mt={['100px']} width={[1, 1, 0.6]}>
      <TitleWithIcon>Jared Short</TitleWithIcon>
      <P color='gray.2'>
        Head of Developer Relations and Experience at Serverless, Inc.
      </P>
      <P>
        Head of Developer Relations and Experience at Serverless, Inc., and is
        based in Washington, DC. He comes to the company with a strong
        background in and building, operating and maintaining serverless and
        event-driven systems in his previous role at Trek10, a serverless first
        AWS partner.
      </P>
      <Row>
        <ExternalLink to='http://jaredshort.com/'>
          <Image src={linkIcon} />
        </ExternalLink>
        <ExternalLink to='https://twitter.com/shortjared'>
          <ImageWithMarginX src={twitterIcon} />
        </ExternalLink>
        <ExternalLink to='https://github.com/shortjared'>
          <Image src={githubIcon} />
        </ExternalLink>
      </Row>
    </Box>
  </Flex>
)

export default Presenter
