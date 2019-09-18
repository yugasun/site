import React from 'react'
import { Flex, Text, Box } from 'serverless-design-system'
import { HeroWrapperNewest as HeroWrapper } from 'src/fragments'
import HeroFrameworkLogo from 'src/components/pages/features-common/FrameworkLogo/index.js'

const TrainingHero = props => (
  <HeroWrapper>
    <Flex
      flexDirection={'column'}
      alignItems={['center', 'center', 'inherit']}
      width={[1, 1, 1, 1, 0.4, 0.45]}
      mr={[0, 0, 0, 0, 62, 0]}
    >
      <HeroFrameworkLogo />
      <Text
        fontSize={['59.8px', '59.8px', '59.8px', '59.8px', '76.5px']}
        letterSpacing={['0.93px', '0.93px', '0.93px', '0.93px', '-1.2px']}
      >
        enterprise
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
          A single solution to develop, deploy, test, monitor, and secure your
          Serverless Applications
        </Text>
      </Box>
    </Flex>
  </HeroWrapper>
)

export default TrainingHero
