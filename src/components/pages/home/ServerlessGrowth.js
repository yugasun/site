import React from 'react'
import {
  Heading,
  Button,
  ResponsiveStack,
  Image,
  Column,
  TextWithIcon,
  List,
  ListItem,
  P,
  Absolute
} from 'serverless-design-system'

import { AppContainerNew as AppContainer } from 'src/components'
import buildApi from 'src/assets/images/home-benefits-build-api.svg'
import customAutomation from 'src/assets/images/home-benefits-custom-automation.svg'
import dataProcessing from 'src/assets/images/home-benefits-data-processing.svg'
import dotGrid from 'src/assets/images/dot-grid-new.svg'
import downArrows from 'src/assets/images/down-arrow-group-red.svg'

const HomeBenefits = () => (
  <AppContainer>
    <ResponsiveStack.spaceBetween>
      
      <Column width={[1, 1, '488px']}>
        <TextWithIcon iconSrc={dotGrid} iconHeight='38px' iconWidth='98px' iconLeft='-40px'>
        <Heading.h3 fontFamily='Soleil' lineHeight='44px' letterSpacing='-0.5px'>
        The rise of the serverless application
        </Heading.h3>
        </TextWithIcon>
        <P>Serverless developers don’t just leverage FaaS. They build servicefull applications that stitch together SaaS, hosted services and compute.</P>
        <Button>learn more</Button>
      </Column>
      <Image src={buildApi} />
    </ResponsiveStack.spaceBetween>
  </AppContainer>
)

export default HomeBenefits