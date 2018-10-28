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
        <TextWithIcon iconSrc={dotGrid} iconHeight='38px' iconWidth='98px' iconLeft='-40px'>
        <Heading.h3 fontFamily='Soleil' lineHeight='44px' letterSpacing='-0.5px'>
        The rise of the serverless application
        </Heading.h3>
        </TextWithIcon>
        <P>Serverless developers don’t just leverage FaaS. They build servicefull applications that stitch together SaaS, hosted services and compute.</P>
        <Button>learn more</Button>
      </Column>
      <Image src={buildApi} width={[300, 300, 550]} heigh={[248, 248, 300]}/>
    </ResponsiveStack.spaceBetween>
  </AppContainer>
)

export default HomeBenefits