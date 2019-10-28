import React from 'react'
import { Flex, Text, Box, Image } from 'serverless-design-system'
import {  HeroWrapper } from 'src/fragments'
import slsLogo from 'src/assets/images/logo.svg'
import awsTechPartnerImage from 'src/assets/images/footer/aws-tech-partner.png'

const TrainingHero = props => (
  <HeroWrapper>
    <Flex
      flexDirection={'column'}
      alignItems={['center', 'center', 'inherit']}
      width={[1, 1, 0.7, 0.5, 0.4, 0.45]}
      mr={[0, 0, 0, 0, 62, 0]}
    >
      <Box>
        <Image src={slsLogo} />
      </Box>
      <Text
        fontSize={['49.8px', '49.8px', '59.8px', '59.8px', '68.5px']}
        letterSpacing={['0.93px', '0.93px', '0.93px', '0.93px', '-1.2px']}
        align={['center', 'center', 'left']}
      >
        at AWS re:Invent 2019
      </Text>
      <Box mt={[32, 32, 32, 32, 42]} width={[1, 1, 0.8, 0.8, 0.8, 0.9]} mb={32}>
        <Text
          fontFamily={[
            'SoleilBk',
            'SoleilBk',
            'SoleilBk',
            'SoleilBk',
            'SoleilLt',
          ]}
          lineHeight={['26px', '26px', '26px', '26px', '32px']}
          letterSpacing={0}
          fontSize={[16, 16, 16, 16, 24]}
          align={['center', 'center', 'left']}
        >
          Meet with us to get a demo of our latest Serverless Framework functionality and explore how we can help with your Serverless adoption.
        </Text>
      </Box>
      <Image src={awsTechPartnerImage} height='200px' width='200px'/>
    </Flex>
  </HeroWrapper>
)

export default TrainingHero
