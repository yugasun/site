import React from 'react'
import {
  Column,
  Flex,
  Image,
  ResponsiveStack
} from 'serverless-design-system'
import { AppContainerNewest as AppContainer } from 'src/components'
import TitleWithIcon from '../../TitleWithIcon'
import investorTrinity from 'src/assets/images/trinity.png'
import investorHeavyBit from 'src/assets/images/heavybit.png'

const OurInvestors= () => (
  <AppContainer>
    <Column px={3} pt={[6, 6, 8, 12]}>
      <Flex.center>
        <TitleWithIcon>
          Our Investors
        </TitleWithIcon>
      </Flex.center>

      <Flex.center>
        <ResponsiveStack
          flexWrap='wrap'
          width={[1, 1, 1, 2/3, 1/2]}
          justifyContent='space-between'
          mt={[0, 0, 2, 3]}
        >
          <Column m={[2, 2, 2, 0]} alignItems='center'>
            <Image src={investorTrinity} alt='trinity' height={['43px', '43px', '63px']} />
          </Column>
          <Column m={[2, 2, 2, 0]} alignItems='center'>
            <Image src={investorHeavyBit} alt='heavybit-industries' height={['55px', '55px', '75px']} />
          </Column>
        </ResponsiveStack>
      </Flex.center>
    </Column>
  </AppContainer>
)

export default OurInvestors