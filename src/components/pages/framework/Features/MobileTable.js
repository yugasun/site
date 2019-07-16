import React from 'react'
import { Box, Column } from 'serverless-design-system'
import featuresData from './Data'
const featureList = Object.keys(featuresData)
import { Heading, P } from 'src/fragments/DesignSystem'

const MobileTable = () => (
  <Box display={['block', 'block', 'none', 'none', 'none']}>
    <Column>
      {featureList.map((feature, index) => (
        <Column key={feature} pt={index !== 0 ? [22] : 0}>
          <Heading.h5 style={{ borderBottom: '1px solid #9b9b9b' }} pb={1}>
            {feature}
          </Heading.h5>
          {featuresData[feature].map((subFeature, index) => (
            <P
              key={subFeature}
              pb={1}
              style={
                index !== featuresData[feature].length - 1
                  ? { borderBottom: '1px solid #9b9b9b' }
                  : null
              }
            >
              {subFeature}
            </P>
          ))}
        </Column>
      ))}
    </Column>
  </Box>
)

export default MobileTable
