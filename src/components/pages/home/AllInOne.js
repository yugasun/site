import React from 'react'
import {
  Heading,
  ResponsiveStack,
  Image,
  Column,
  TextWithIcon,
  P,
  Position,
} from 'serverless-design-system'
import Button from './Button'
import { InternalLink } from 'src/fragments'

import { AppContainerNewest as AppContainer } from 'src/components'
import allInOne from 'src/assets/images/home/all-in-one.svg'
import dotGrid from 'src/assets/images/dot-grid-new.svg'

const HomePlatform = () => (
  <AppContainer>
    <ResponsiveStack mb={[92, 92, 200]} justifyContent={['justify-content', 'justify-content', 'flex-end']}>
    <Position position={['absolute', 'absolute', 'absolute']} left='0'>
      <Image src={allInOne} width={'700px'}/>
    </Position>
      <Column width={[1, 1, '488px']} mt={[370, 370, 200]} mb={[0, 0, 200]}>
        <TextWithIcon iconSrc={dotGrid} iconHeight='38px' iconWidth='98px' iconLeft='-40px' iconTop={['-20px','-20px', '-8px']}>
          <Heading.h3 fontFamily='Soleil' lineHeight={['32px', '32px', '44px']} letterSpacing='-0.5px' fontSize={['24px', '24px', '32px']}>
        The all-in-one solution for serverless application management
        </Heading.h3>
        </TextWithIcon>
        <P mt={['6px', '6px', '12px']} mb={['22px', '22px', '40px']} lineHeight={'26px'}>Check the health of your serverless application. Control and secure your builds. Scale development across the team.</P>
        <InternalLink to='/platform/'>
        <Button>platform demo</Button>
        </InternalLink>
      </Column>
    </ResponsiveStack>
  </AppContainer>
)

export default HomePlatform