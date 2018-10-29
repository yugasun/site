import React from 'react'

import { Box, Text, ResponsiveStack, Image, Heading, Row, Column } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import serverlessPlatform from 'src/assets/images/platform/serverless-platform.png'

const ExamplesHero = () => {
  return (
  <HeroWrapper
    background={['linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)', 'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',`linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`]}
    height={[422, 422, 614]}
  >

    <ResponsiveStack
      color='white'
    >
      <Box width={[0, 0, 488]} mt={150}>
        <Row>
        <Image src={serverlessPlatform} height='92px'/>
          <Column>
          <Heading.h3>serverless</Heading.h3>
          <Heading.h1>platform</Heading.h1>
          </Column>
        </Row>
        <Text.p
          fontSize={[24]}
          fontFamily='SoleilLt'
          lineHeight='1.33'
          m={0}
          mt={[42,42,0,0]}
        >
          Everything you need to scale, operationalize, and secure your serverless application development.
        </Text.p>        
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
  )
  }

export default ExamplesHero