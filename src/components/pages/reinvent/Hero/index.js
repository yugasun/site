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
      width={[1, 1, 1, 1, 0.4, 0.45]}
      mr={[0, 0, 0, 0, 62, 0]}
    >
      <Box>
        <Image src={slsLogo} />
      </Box>
      <Text
        fontSize={['59.8px', '59.8px', '59.8px', '59.8px', '76.5px']}
        letterSpacing={['0.93px', '0.93px', '0.93px', '0.93px', '-1.2px']}
      >
        at AWS re:Invent
      </Text>
      <Box mt={[32, 32, 32, 32, 42]} width={[1, 1, 0.5, 0.5, 0.9, 0.9]} mb={32}>
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
      <Image src={'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1024/https://modopayments.com/wp-content/uploads/2019/04/logo_aws_partner.png'} height='200px' width='200px'/>
    </Flex>
  </HeroWrapper>
)

export default TrainingHero
