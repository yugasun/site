import React from 'react'
import { Box, Column, Row } from 'serverless-design-system'
import { Heading, P } from 'src/fragments/DesignSystem'
import { AppContainer } from 'src/components'
import { Feature as FeatureItem } from 'src/fragments'

const Features = ({
  title,
  description,
  features,
  leadingNumber,
  headingStyle,
}) => (
  <AppContainer>
    <Column px={[0, 0, 0, 45]}>
      <Box
        my={[0, 0, 0, 4]}
        width={[1, 1, 0.8, 0.5]}
        mx='auto'
        {...headingStyle}
      >
        <Heading.h2 align='center' my={1}>
          {title}
        </Heading.h2>
        {description && (
          <Box width={0.8} mx='auto'>
            <P align='center' color='gray.3'>
              {description}
            </P>
          </Box>
        )}
      </Box>
      <Row flexWrap='wrap' mt={3}>
        {features.map(({ header, img, content, action }, index) => (
          <FeatureItem
            key={header}
            header={header}
            content={content}
            action={action}
            img={img}
            rightAligned={index % 2 === 0}
            leadingNumber={leadingNumber}
          />
        ))}
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
