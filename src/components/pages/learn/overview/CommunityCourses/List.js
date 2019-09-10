import React from 'react'
import { Flex, Text, Image, Row, Column } from 'serverless-design-system'
import coursesData from 'src/components/pages/courses/Content/data.js'
import Stars from 'src/components/pages/courses/Content/Stars.js'
import styled from 'styled-components'

const SmallText = ({ children, ...otherProps }) => (
  <Text
    fontSize={'12px'}
    lineHeight={'16px'}
    letterSpacing='0'
    color='#8c8c8c'
    {...otherProps}
  >
    {children}
  </Text>
)

const ResponsiveImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`

const DesktopTable = props => (
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
        width={[1, 1, 0.47, 0.42, 0.3]}
        mt={index > 2 ? [0, 0, 0, 0, 62] : '0'}
        mb={[32, 32, 42, 42, 0]}
        mx={index === 1 || index === 4 ? [0, 0, 0, 0, 32] : '0'}
      >
        <ResponsiveImage src={feature.thumbnail} width={72} height={72} />
        <Flex
          flexDirection='column'
          alignItems='left'
          width={[0.7, 0.7, 'auto']}
          ml={['8px', '8px', 22, 22, 32]}
        >
          <Text
            fontSize='18px'
            lineHeight='30px'
            letterSpacing='-0.28px'
            fontFamily='SoleilBk'
            align='left'
          >
            {feature.title}
          </Text>
          <Column>
            <Row justifyContent='flex-start'>
              <Stars stars={feature.ratingsStar} />
              <SmallText align='left'>
                ({feature.totalRatings} ratings)
              </SmallText>
            </Row>

            <SmallText mt={['3px']} align='left'>
              {feature.duration} | {feature.level} | {feature.platform}
            </SmallText>
            <SmallText mt={['3px']} align='left'>
              Created by {feature.author}
            </SmallText>
          </Column>
        </Flex>
      </Flex>
    ))}
  </Flex>
)

export default DesktopTable
