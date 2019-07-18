import React from 'react'
import {
  Box,
  Column,
  Row,
  Text,
} from 'serverless-design-system'
import FeatureItem from './Item'

import { AppContainer } from 'src/components'
import { Heading } from 'src/fragments/DesignSystem'

const Features = ({ title, description, features, leadingNumber }) => (
  <AppContainer>
    <Column px={[0, 0, 0, 45]}>
      <Box>
        <Heading.h3
          align='center'
          mt={['62px', '62px', '92px', '92px', '162px']}
        >
          {title}
        </Heading.h3>
        {
          description && (
            <Text.p
              align='center'
              fontFamily='Soleil'
              fontSize={1}
              lineHeight={3}
              color='gray.2'
            >
              { description }
            </Text.p>
          )
        }
      </Box>
      <Row flexWrap='wrap' mt={3}>
        {
          features.map(({ header, img, content, action }, index) => (
            <FeatureItem
              key={header}
              header={header}
              content={content}
              action={action}
              img={img}
              rightAligned={index % 2 === 0}
              leadingNumber={leadingNumber}
            />
          ))
        }
      </Row>
    </Column>
  </AppContainer>
)

Features.defaultProps = {
  title: 'Features',
  description: null,
  leadingNumber: true,
}

export default Features