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
    <Absolute
  display={['none', 'none', 'block']}
  right='0'
  mr={102}
  mt={220}
  >
    <Image
      src={downArrows}
    >
    </Image>
  </Absolute>
      <Image src={buildApi} />
      <Column width={[1, 1, '488px']}>
        <TextWithIcon iconSrc={dotGrid} iconHeight='38px' iconWidth='98px' iconLeft='-40px'>
        <Heading.h3 fontFamily='Soleil' lineHeight='44px' letterSpacing='-0.5px'>
        What you can do with serverless applications
        </Heading.h3>
        </TextWithIcon>
        <List>
          <ListItem m={2}>Build APIs</ListItem>
          <ListItem m={2}>Custom automation</ListItem>
          <ListItem m={2}>Data processing</ListItem>
        </List>
        <Button>get started</Button>
      </Column>
    </ResponsiveStack.spaceBetween>
  </AppContainer>
)

export default HomeBenefits