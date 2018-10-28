import React from 'react'
import {
  Heading,
  ResponsiveStack,
  Image,
  Column,
  TextWithIcon,
  P,
  Position
} from 'serverless-design-system'
import Button from './Button'

import { AppContainerNewest as AppContainer } from 'src/components'
import allInOne from 'src/assets/images/home/all-in-one.svg'
import dotGrid from 'src/assets/images/dot-grid-new.svg'

const HomePlatform = () => (
  <AppContainer>
    <ResponsiveStack mb={[100, 100, 200]} justifyContent={['justify-content', 'justify-content', 'flex-end']}>
    <Position position={['absolute', 'absolute', 'absolute']} left='0'>
      <Image src={allInOne} />
    </Position>
      <Column width={[1, 1, '488px']} mt={[321, 321, 200]} mb={[0, 0, 200]}>
        <TextWithIcon iconSrc={dotGrid} iconHeight='38px' iconWidth='98px' iconLeft='-40px'>
        <Heading.h3 fontFamily='Soleil' lineHeight='44px' letterSpacing='-0.5px'>
        The all-in-one solution for serverless application management
        </Heading.h3>
        </TextWithIcon>
        <P>Check the health of your serverless application. Control and secure your builds. Scale development across the team.</P>
        <Button>platform demo</Button>
      </Column>
    </ResponsiveStack>
  </AppContainer>
)

export default HomePlatform