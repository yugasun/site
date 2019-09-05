import React from 'react'
import { Column, Flex, Image, ResponsiveStack } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import investorTrinity from 'src/assets/images/trinity.png'
import investorHeavyBit from 'src/assets/images/heavybit.png'
import lightspeedVentures from 'src/assets/images/lightspeed-ventures.png'
import { Heading } from 'src/fragments/DesignSystem'

const OurInvestors = () => (
  <AppContainer>
    <Column px={3} pt={[6, 6, 8, 12]}>
      <Flex.center>
        <Heading.h2>Our Investors</Heading.h2>
      </Flex.center>

      <Flex.center>
        <ResponsiveStack
          flexWrap='wrap'
          width={[1, 1, 1, 1, 1]}
          justifyContent='space-evenly'
          mt={[0, 0, 2, 3]}
        >
          <Column m={[2, 2, 2, 0]} alignItems='center'>
            <Image
              src={investorTrinity}
              alt='trinity'
              height={['43px', '43px', '63px']}
            />
          </Column>
          <Column m={[2, 2, 2, 0]} alignItems='center'>
            <Image
              src={investorHeavyBit}
              alt='heavybit-industries'
              height={['55px', '55px', '75px']}
            />
          </Column>
          <Column m={[2, 2, 2, 0]} alignItems='center'>
            <Image
              src={lightspeedVentures}
              alt='lightspeed-ventures'
              height={['55px', '55px', '85px']}
            />
          </Column>
        </ResponsiveStack>
      </Flex.center>
    </Column>
  </AppContainer>
)

export default OurInvestors
