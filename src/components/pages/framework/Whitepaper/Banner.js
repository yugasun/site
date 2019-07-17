import React from 'react'
import {
  Flex,
  Background,
  Text,
  Box,
  Container,
} from 'serverless-design-system'
import { Button } from 'src/fragments/DesignSystem'
import styled from 'styled-components'

const DownloadButton = styled(Button)`
  background-color: white;
  color: #fd5750;
  margin-top: 32px;

  &:hover {
    background-color: white;
    color: #fd5750;
  }
`

const FrameworkWhitepaperBanner = props => (
  <React.Fragment>
    <Container maxWidth={['100%', '100%', '100%', '100%', '76%', 1216]}>
      <Background background='#fd5750'>
        <Flex
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          width={1}
          height={[460, 460, 278]}
        >
          <Box width={[0.7, 0.7, 0.7, 0.5, 0.4]}>
            <Text
              fontSize={[24]}
              lineHeight={'38px'}
              letterSpacing={'-0.38px'}
              color='#fff'
              fontFamily='Soleil'
              align='center'
            >
              See full architecture diagrams with time-to-market estimates for
              use cases.
            </Text>
          </Box>
          <DownloadButton {...props}>download whitepaper</DownloadButton>
        </Flex>
      </Background>
    </Container>
    <Box display={['none', 'none', 'none', 'none', 'block']}>
      <Background height={60} background='#000000' />
    </Box>
  </React.Fragment>
)

export default FrameworkWhitepaperBanner
