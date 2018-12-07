import React from 'react'

import { Box, Image, Flex, Column } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import serverlessPlatform from 'src/assets/images/pages/support/serverless-support.svg'
import { Description, MainHeading, TopHeading } from 'src/components/pages/form-pages/Hero'

const ExamplesHero = () => {
  return (
  <HeroWrapper
    background={['linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)', 'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',`linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`]}
    height={[420, 420, 500, 500, 614]}
  >

    <Column
        color='white'
    >
      <Box width={['auto', 'auto', 'auto', 'auto', 488]} mt={[0, 0, 0, 0, 150]}>
        <Flex flexDirection={['column', 'column', 'column', 'column','row']} alignItems={['center', 'center', 'center', 'center', 'left']}>
          <Box mt={[0, 0, 0, 0, '30px']}>
            <Image src={serverlessPlatform} height={'92px'} width={'92px'} />
          </Box>
            <Column pl={['10px', '10px','10px', '10px', '30px']}>
              <TopHeading>serverless</TopHeading>
              <MainHeading>support</MainHeading>
          </Column>
        </Flex>
        <Description>
          Enable your team to scale safely with best-in-class Serverless Support.
        </Description>        
      </Box>
    </Column>
  </HeroWrapper>
  )
  }

export default ExamplesHero