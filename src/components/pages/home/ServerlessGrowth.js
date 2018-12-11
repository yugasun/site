import React from 'react'
import {
  ResponsiveStack,
  Image,
  Column,
  TextWithIcon,
} from 'serverless-design-system'
import { AppContainerNewest as AppContainer } from 'src/components'
import { InternalLink } from 'src/fragments'
import riseOfServerless from 'src/assets/images/home/serverless-applications-rise.svg'
import riseOfServerlessStatic from 'src/assets/images/home/serverless-applications-rise-static.svg'
import dotGrid from 'src/assets/images/dot-grid-new.svg'
import { Heading, P, Button, MobileCenteredBox } from 'src/fragments/DesignSystem'

const HomeBenefits = ({usingSafariDesktop}) => (
  <AppContainer>
    <ResponsiveStack.spaceBetween flexDirection={['column-reverse', 'column-reverse', 'row']} mb={[0, 0, '142px', '142px', '170px']} mt={[0, 0, 132, 132, 0]}>
      
      <Column width={[1, 1, 1/2, '488px']} pt={[33, 33, 0, 107, 100, 180]}>
        <TextWithIcon iconSrc={dotGrid} iconHeight='38px' iconWidth='98px' iconLeft='-40px' iconTop={['-10px','-10px', '4px']}>
          <Heading.h3 pt='12px'>
            The rise of the serverless application
          </Heading.h3>
        </TextWithIcon>
        <P pb={['16px', '16px', '24px']} mt={['8px', '8px', 0]}>Serverless developers don’t just leverage FaaS. They build servicefull applications that stitch together SaaS, hosted services and compute.</P>
        <InternalLink to='/learn/overview/'>
        <Button>learn more</Button>
        </InternalLink>
      </Column>
      <MobileCenteredBox>
        <Image src={usingSafariDesktop ? riseOfServerlessStatic : riseOfServerless} width={[300, 300, 300, 400, 450, 550]}/>
      </MobileCenteredBox>
    </ResponsiveStack.spaceBetween>
  </AppContainer>
)

export default HomeBenefits