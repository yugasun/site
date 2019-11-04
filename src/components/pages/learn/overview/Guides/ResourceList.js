import React from 'react'
import { Flex, Text, Image, Heading } from 'serverless-design-system'
import coursesData from './Data'
import styled from 'styled-components'
import { InternalLink } from 'src/fragments'

const ResponsiveImage = styled(Image)`
  object-position: center;
  display: grid;
  margin: 0 auto;
`

const ServiceGuidesList = props => (
  <Flex
    justifyContent={[
      'center',
      'center',
      'space-between',
      'space-between',
      'auto',
    ]}
    flexWrap={['wrap', 'wrap', 'wrap']}
  >
    {coursesData.slice(0, 6).map((feature, index) => (
      <Flex
        key={index}
        width={[1, 1, 0.48, 0.48, 0.3]}
        mt={index > 2 ? [0, 0, 0, 0, 62] : '0'}
        mb={[32, 32, 42, 42, 0]}
        mx={index === 1 || index === 4 ? [0, 0, 0, 0, 32] : '0'}
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        style={{border: '1px solid #eaeaea',
            boxShadow: '2px 2px 8px 0 rgba(0, 0, 0, 0.08)'}}
        py={40}
      >
        <InternalLink to={feature.link}>
        <ResponsiveImage src={feature.image} width={72} height={72} />
        <Flex
          flexDirection='column'
          alignItems='left'
          width={[1, 1, 'auto']}
          mt={20}
        >
          <Heading.h4 fontFamily='Soleil'
          >
            {feature.title}
          </Heading.h4>
        </Flex>
        </InternalLink>
      </Flex>
    ))}
  </Flex>
)

export default ServiceGuidesList
