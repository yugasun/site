import React from 'react'
import { Flex, Text, Box } from 'serverless-design-system'
import {  HeroWrapper } from 'src/fragments'
import FrameworkLogo from 'src/assets/images/logo-serverless-framework-pro-side.png'
import styles from '../sales.module.css'

const TrainingHero = props => (
  <HeroWrapper>
    <Flex
      flexDirection={'column'}
      alignItems={['center', 'center', 'inherit']}
      width={[1, 1, 1, 1, 0.4, 0.45]}
      mr={[0, 0, 0, 0, 62, 0]}
    >
      <img
        className={`${styles.logo}`}
        src={FrameworkLogo}
        draggable={false} />

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
          Fill out the form to purchase Serverless Framework Pro or coordinate a 1-on-1 demo where we can answer your questions.
        </Text>
      </Box>
    </Flex>
  </HeroWrapper>
)

export default TrainingHero
