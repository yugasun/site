import React from 'react'
import {
  ResponsiveStack,
  Image,
  Column,
  TextWithIcon,
  Absolute
} from 'serverless-design-system'
import { InternalLink } from 'src/fragments'

import { AppContainerNewest as AppContainer } from 'src/components'
import allInOne from 'src/assets/images/home/all-in-one.svg'
import allInOneStatic from 'src/assets/images/home/all-in-one-static.svg'
import dotGrid from 'src/assets/images/dot-grid-new.svg'
import { Heading, P, Button } from 'src/fragments/DesignSystem'

const HomePlatform = ({usingSafariDesktop}) => (
  <AppContainer>
    <ResponsiveStack mb={[92, 92, 92, 92, 40]} justifyContent={['justify-content', 'justify-content', 'flex-end']}>
    <Absolute left='0'>
      <Image src={usingSafariDesktop ? allInOneStatic : allInOne} width={['320px', '500px', '300px', '400px', '500px', '640px']}/>
    </Absolute>
      <Column width={[1, 1, 1/2, '488px', '488px']} mt={[400, 400, 163, 163, 200]} mb={[0, 0, 0, 0, 95]}>
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