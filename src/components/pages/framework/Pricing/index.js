import React from 'react'
import { Box, Flex, Background, Image } from 'serverless-design-system'
import { Heading, P, Button } from 'src/fragments/DesignSystem'
import { featureLabels, featureValues, plans, pricing, cta } from './Data'
import { InternalLink, ExternalLink } from 'src/fragments'
import pricingSuccessIcon from 'src/assets/images/pages/framework/pricing-success.svg'
import styled from 'styled-components'

const BackgroundWithSmallLaptopFix = styled(Background)`
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(234, 234, 234, 0.3);
  @media screen and (min-width: 1030px) and (max-width: 1300px) {
    width: 315px;
  }

  @media screen and (min-width: 1300px) and (max-width: 1400px) {
    width: 325px;
  }
`

const index = props => (
  <Box mt={[62, 62, 62, 62, 122]} pb={[62, 62, 62, 62, 142]}>
    <Heading.h3 align='center' mb={[62, 62, 42, 42, 62]}>
      Pricing
    </Heading.h3>
    <Flex
      justifyContent={['auto', 'auto', 'space-between']}
      flexDirection={['column', 'column', 'column', 'column', 'row']}
    >
      {plans.map(plan => (
        <Box key={plan} mb={32}>
          <BackgroundWithSmallLaptopFix
            background='white'
            width={['100%', '100%', '100%', '100%', '340px', '384px']}
            height={[500, 500, 276, 276, 496]}
          >
            <Flex
              flexDirection={['column', 'column', 'row', 'row', 'column']}
              py={[62, 62, 42, 42, 62]}
              px={[32]}
              justifyContent={[
                'auto',
                'auto',
                'space-between',
                'space-between',
                'auto',
              ]}
            >
              <Heading.h3 align='center'>
                {plan.charAt(0).toUpperCase() + plan.slice(1)}
              </Heading.h3>
              <Flex justifyContent='space-between'>
                <Flex flexDirection='column'>
                  {featureLabels.map((featureLabel, index) => (
                    <P
                      key={featureLabel}
                      ml={[0, 0, 32, 32, 0]}
                      mt={index == 0 ? [16, 16, 0, 0, 16] : [16]}
                    >
                      {featureLabel}
                    </P>
                  ))}
                </Flex>
                <Flex flexDirection='column'>
                  {featureValues[plan].map((thisPlanFeature, index) => (
                    <P
                      key={thisPlanFeature + Math.random()}
                      color='black'
                      ml={[0, 0, 32, 32, 0]}
                      mt={index == 0 ? [16, 16, 0, 0, 16] : [16]}
                    >
                      {thisPlanFeature}
                    </P>
                  ))}
                </Flex>
                <Box display={['none', 'none', 'none', 'none', 'block']}>
                  <Flex flexDirection='column'>
                    {featureValues[plan].map((thisPlanFeature, index) => (
                      <Box
                        key={thisPlanFeature + 'icon' + Math.random()}
                        py={'18.5px'}
                      >
                        <Image src={pricingSuccessIcon} />
                      </Box>
                    ))}
                  </Flex>
                </Box>
              </Flex>
              <Flex alignItems='center' flexDirection='column'>
                <P color='black' mt={[16, 16, 0, 0, 16]}>
                  {pricing[plan]}
                </P>
                {cta[plan]['link'] === 'internal' ? (
                  <InternalLink to={cta[plan]['link']}>
                    <Button>{cta[plan]['label']}</Button>
                  </InternalLink>
                ) : (
                  <ExternalLink to={cta[plan]['link']}>
                    <Button>{cta[plan]['label']}</Button>
                  </ExternalLink>
                )}
              </Flex>
            </Flex>
          </BackgroundWithSmallLaptopFix>
        </Box>
      ))}
    </Flex>
  </Box>
)

export default index
