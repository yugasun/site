import React from 'react'

import { Box, Image, Flex, Column, Heading } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import serverlessPlatform from 'src/assets/images/pages/support/serverless-support.svg'
import { Description, MainHeading, TopHeading } from 'src/components/pages/form-pages/Hero'

const ExamplesHero = () => {
  return (
  <HeroWrapper
    background={['linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)', 'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',`linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`]}
    height={[550, 550, 600, 500, 614]}
  >

    <Column
        color='white'
    >
      <Box width={['auto', 'auto', 'auto', 'auto', 438, 488]} mt={[0, 0, 0, 0, 30]}>
        <Flex flexDirection={['column', 'column', 'column', 'column','row']} alignItems={['center', 'center', 'center', 'center', 'left']}>
          <Box mt={[0, 0, 0, 0, '30px']}>
            <Image src={serverlessPlatform} height={'92px'} width={'168px'} />
          </Box>
            <Column pl={['10px', '10px','10px', '10px', '36px']}>
              <TopHeading>serverless</TopHeading>
              <Heading.h1 fontSize={['48px', '48px', '81px', '81px', '61px', '70px']} letterSpacing={'-1.56px'} lineHeight={['58px', '58px', '88px', '88px', '78px']} mb={0} align={['center', 'center', 'center', 'center', 'left']}>
              support &amp; training
              </Heading.h1>
          </Column>
        </Flex>
        <Description>
        Eliminate the guesswork with dedicated enterprise support, training, and architecture design for your serverless application development.
        </Description>        
      </Box>
    </Column>
  </HeroWrapper>
  )
  }

export default ExamplesHero