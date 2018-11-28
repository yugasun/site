import React from 'react'

import { Box, Image, Heading, Flex, Column } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import serverlessPlatform from 'src/assets/images/pages/platform/serverless-platform.svg'
import { Description, MainHeading, TopHeading } from 'src/components/pages/form-pages/Hero'

const ExamplesHero = () => {
  return (
  <HeroWrapper
    background={['linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)', 'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',`linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`]}
    height={[440, 440, 614]}
  >
    <Column
        color='white' 
    >
      <Box width={['auto', 'auto', 488]} mt={[0, 0, 150]}>
        <Flex flexDirection={['column', 'column', 'row']} alignItems={['center', 'center', 'left']}>
          <Box mt={[0, 0, '30px']}>
            <Image src={serverlessPlatform} height={'92px'} width={'75px'} />
          </Box>
            <Column pl={['10px', '10px','50px']}>
              <TopHeading>serverless</TopHeading>
              <MainHeading>platform</MainHeading>
          </Column>
        </Flex>
        <Description>
          Everything you need to scale, operationalize, and secure your serverless application development.
        </Description>        
      </Box>
    </Column>
  </HeroWrapper>
  )
  }

export default ExamplesHero