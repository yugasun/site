import React from 'react'
import {
  ResponsiveStack,
  Image,
  Column,
  TextWithIcon,
  Absolute
} from 'serverless-design-system'
import Button from './Button'
import { InternalLink } from 'src/fragments'

import { AppContainerNew as AppContainer } from 'src/components'
import allInOne from 'src/assets/images/home/all-in-one.svg'
import allInOneStatic from 'src/assets/images/home/all-in-one-static.svg'
import dotGrid from 'src/assets/images/dot-grid-new.svg'
import { Heading, P } from 'src/fragments/DesignSystem'

const HomePlatform = ({usingSafariDesktop}) => (
  <AppContainer>
    <ResponsiveStack mb={[92, 92, 100]} justifyContent={['justify-content', 'justify-content', 'flex-end']}>
    <Absolute left='0'>
      <Image src={usingSafariDesktop ? allInOneStatic : allInOne} width={['700px', '700px', '300px', '300px', '700px']}/>
    </Absolute>
      <Column width={[1, 1, 4/6, 4/6, '488px']} mt={[370, 370, 163, 163, 200]} mb={[0, 0, 0, 0, 200]} pl={[0, 0, 80, 80, 0]}>
        <TextWithIcon iconSrc={dotGrid} iconHeight='38px' iconWidth='98px' iconLeft='-40px' iconTop={['-20px','-20px', '-8px']}>
          <Heading.h3>
            The all-in-one solution for serverless application management
          </Heading.h3>
        </TextWithIcon>
        <P mt={['6px', '6px', '12px']} mb={['22px', '22px', '40px']}>Check the health of your serverless application. Control and secure your builds. Scale development across the team.</P>
        <InternalLink to='/platform/'>
        <Button>platform demo</Button>
        </InternalLink>
      </Column>
    </ResponsiveStack>
  </AppContainer>
)

export default HomePlatform