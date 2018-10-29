import React from 'react'
import {
  Heading,
  ResponsiveStack,
  Image,
  Column,
  TextWithIcon,
  P,
} from 'serverless-design-system'
import Button from './Button'

import { AppContainerNewest as AppContainer } from 'src/components'
import buildApi from 'src/assets/images/home/serverless-applications-rise.png'
import dotGrid from 'src/assets/images/dot-grid-new.svg'

const HomeBenefits = () => (
  <AppContainer>
    <ResponsiveStack.spaceBetween flexDirection={['column-reverse', 'column-reverse', 'row']}>
      
      <Column width={[1, 1, '488px']} pt={[33, 33, 200]}>
        <TextWithIcon iconSrc={dotGrid} iconHeight='38px' iconWidth='98px' iconLeft='-40px' iconTop={['-10px','-10px', '4px']}>
          <Heading.h3 fontFamily='Soleil' lineHeight={['32px', '32px', '44px']} letterSpacing='-0.5px' fontSize={['24px', '24px', '32px']} pt='12px'>
        The rise of the serverless application
        </Heading.h3>
        </TextWithIcon>
        <P lineHeight='26px' pb={['16px', '16px', '24px']} mt={['8px', '8px', 0]}>Serverless developers don’t just leverage FaaS. They build servicefull applications that stitch together SaaS, hosted services and compute.</P>
        <Button>learn more</Button>
      </Column>
      <Image src={buildApi} width={[300, 300, 550]} heigh={[248, 248, 300]}/>
    </ResponsiveStack.spaceBetween>
  </AppContainer>
)

export default HomeBenefits