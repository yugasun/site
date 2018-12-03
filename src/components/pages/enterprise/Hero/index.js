import React from 'react'

import { Box, Heading, Flex, Column } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import { Description } from 'src/components/pages/form-pages/Hero'

const ExamplesHero = () => {
  return (
  <HeroWrapper
    background={['linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)', 'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',`linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`]}
    height={[440, 440, 430, 430, 614]}
  >

    <Column
        color='white' 
    >
      <Box width={['auto', 'auto', 'auto', 'auto', 2/5]} mt={[5, 5, 30, 30, 100, 100]}>
        <Flex flexDirection={['column', 'column', 'column', 'column', 'row']} alignItems={['center', 'center', 'center', 'center', 'left']}>
            <Heading.h1 fontSize={['65px', '65px', '65px', '75px', '75px', '90px']} letterSpacing={'-2px'} lineHeight={['70px', '70px', '70px', '70px', '70px', '100px']} mb={0} fontFamily='SoleilLt' align={['center', 'center', 'left']}>Move fast, safely</Heading.h1>
        </Flex>
        <Description>
          The Serverless Platform gives you everything you need to operationalize Serverless development. 
        </Description>        
      </Box>
    </Column>
  </HeroWrapper>
  )
  }

export default ExamplesHero