import React from 'react'
import {
  Background,
  Box,
  Row,
  P,
  Column,
  Text,
  Flex,
  Image,
} from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import { getLinkComponent } from 'src/components/BlockLink'
import ImagePlaceholder from 'src/components/pages/blog/ImagePlaceholder'
import { Heading } from 'src/fragments/DesignSystem'
import Stars from './Stars'
import styled from 'styled-components'

//TODO: Heading and P tag don't conform to usual sizing pattern - revisit

const HyperLinkBackground = getLinkComponent(Background)
const HyperLinkImagePlaceholder = getLinkComponent(ImagePlaceholder)

const ResponsiveImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`

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
const SingleCoursePreview = ({
  title,
  description,
  thumbnail,
  url,
  author,
  platform,
  duration,
  level,
  ratingsStar,
  totalRatings,
  index,
}) => {
  const paddingTopMobilePlusTable = index == 0 ? 0 : 4
  return (
    <Flex
      mb={[3, 3, 4, 6]}
      pt={[
        paddingTopMobilePlusTable,
        paddingTopMobilePlusTable,
        paddingTopMobilePlusTable,
        2,
      ]}
      flexDirection={['column', 'column', 'row']}
    >
      <Row justifyContent='left' width={[1, 1, 0.35, 0.3, 0.3]}>
        {thumbnail ? (
          <ExternalLink to={url}>
            <ResponsiveImage height={[200]} width={[1]} src={thumbnail} />
          </ExternalLink>
        ) : (
          <HyperLinkImagePlaceholder
            size='small'
            wrapperProps={{
              width: [55, 55, 55, 1],
              height: [55, 55, 55, 270],
            }}
          />
        )}
      </Row>
      <Box width={[1, 1, 0.65, 0.4]} ml={[0, 0, 62, 62, 62, 92]} mt={[1, 1, 0]}>
        <ExternalLink to={url}>
          <Box>
            <Heading.h3 color='black'>{title}</Heading.h3>
          </Box>
        </ExternalLink>
        <P
          lineHeight={['16px', '16px', '16px', '16px', '26px']}
          fontSize={['12px', '12px', '12px', '12px', '16px']}
          fontFamily={['Soleil', 'Soleil', 'Soleil', 'Soleil', 'SoleilBk']}
          letterSpacing={0}
        >
          {description}
        </P>
        <SmallText>Created by {author}</SmallText>
        <Box display={['block', 'block', 'block', 'none']}>
          <Column width={1}>
            <Row mt={['6px', '6px', '6px', 0]}>
              <Stars stars={ratingsStar} /> &nbsp;
              <SmallText>({totalRatings} ratings)</SmallText>
            </Row>

            <SmallText mt={['6px', '6px', '6px', 0]}>
              {duration} | {level} | {platform}
            </SmallText>
          </Column>
        </Box>
      </Box>
      <Box display={['none', 'none', 'none', 'block']}>
        <Column
          ml={[62, 62, 62, 62, 62, 92]}
          width={[0.15, 0.15, 0.15, 0.75, 0.75, 0.7]}
        >
          <Row justifyContent='flex-end'>
            <Stars stars={ratingsStar} />
          </Row>
          <SmallText mt={['3px']} align='right'>
            ({totalRatings} ratings)
          </SmallText>
          <SmallText mt={['3px']} align='right'>
            {duration} | {level}
          </SmallText>
          <SmallText mt={['3px']} align='right'>
            {platform}
          </SmallText>
        </Column>
      </Box>
    </Flex>
  )
}

export default SingleCoursePreview
