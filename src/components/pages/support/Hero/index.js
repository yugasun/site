import React from 'react'

import { Box, Text, Image, Heading, Flex, Column } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import serverlessPlatform from 'src/assets/images/pages/support/serverless-support.svg'

const ExamplesHero = () => {
  return (
  <HeroWrapper
    background={['linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)', 'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',`linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`]}
    height={[420, 420, 614]}
  >

    <Column
        color='white' 
    >
      <Box width={['auto', 'auto', 488]} mt={[0, 0, 150]}>
        <Flex flexDirection={['column', 'column', 'row']} alignItems={['center', 'center', 'left']}>
          <Box mt={[0, 0, '30px']}>
            <Image src={serverlessPlatform} height={'92px'} width={'92px'} />
          </Box>
            <Column pl={['10px', '10px','30px']}>
              <Heading.h3 letterSpacing={'-0.8px'} lineHeight={'45px'} mb={0}align={['center', 'center', 'initial']}>serverless</Heading.h3>
            <Heading.h1 fontSize={['48px', '48px', '81px']} letterSpacing={'-1.8px'} lineHeight={['45px', '45px', '90px']} mb={0}>support</Heading.h1>
          </Column>
        </Flex>
        <Text.p
            fontSize={[18, 18, 24]}
            fontFamily='SoleilLt'
            lineHeight='1.33'
            m={0}
            pt={['40px', '40px', '30px']}
            align={['center', 'center', 'initial']}
        >
          Enable your team to scale safely with best-in-class Serverless Support.
        </Text.p>        
      </Box>
    </Column>
  </HeroWrapper>
  )
  }

export default ExamplesHero