import React from 'react'
import { Flex, Text, Box } from 'serverless-design-system'
import {  HeroWrapper } from 'src/fragments'
import FrameworkLogo from 'src/assets/images/logo-serverless-framework-center-horizontal-dark.png'
import styles from '../Training.module.css'

const TrainingHero = props => (
  <HeroWrapper>
    <Flex
      flexDirection={'column'}
      alignItems={['center', 'center', 'inherit']}
      width={[1, 1, 1, 1, 0.4, 0.45]}
      mr={[0, 0, 0, 0, 62, 0]}
    >
      <img
        className={styles.logoFramework}
        src={FrameworkLogo}
        alt={'Serverless Framework'}/>
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
          align={['center', 'center', 'left']}
        >
          Expert led workshops to get your team up to speed and ensure you do
          Serverless right the first time.
        </Text>
      </Box>
    </Flex>
  </HeroWrapper>
)

export default TrainingHero
