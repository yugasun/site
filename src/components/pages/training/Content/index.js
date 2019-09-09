import React from 'react'
import { Image, Flex, Text, Box } from 'serverless-design-system'
import slsHeroLogo from 'src/assets/images/home/sls-home-logo.svg'
import Types from './Types'

const SupportContent = props => (
  <Flex
    flexDirection={'column'}
    alignItems={['center', 'center', 'inherit']}
    width={[1, 1, 1, 1, 0.5, 0.45]}
    mr={[0, 0, 0, 0, 62, 0]}
  >
    <Image
      src={slsHeroLogo}
      width={[299, 299, 299, 299, 382]}
      height={[48, 48, 48, 48, 61]}
    />
    <Text
      fontSize={['59.8px', '59.8px', '59.8px', '59.8px', '76.5px']}
      letterSpacing={['0.93px', '0.93px', '0.93px', '0.93px', '-1.2px']}
    >
      training
    </Text>
    <Box mt={[32, 32, 32, 32, 42]} width={[1, 1, 0.5, 0.5, 0.9, 0.9]}>
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
        color='#5b5b5b'
        align={['center', 'center', 'left']}
      >
        Expert led workshops to get your team up to speed and ensure you do
        Serverless right the first time.
      </Text>
    </Box>
    <Types />
  </Flex>
)

export default SupportContent
