import React from 'react'
import { Image, Row, Text } from 'serverless-design-system'
import fullStar from 'src/assets/images/pages/courses/full-star.svg'
import halfStar from 'src/assets/images/pages/courses/half-star.svg'
import emptyStar from 'src/assets/images/pages/courses/empty-star.svg'

const range = (start, end) => {
  const length = end - start
  return Array.from({ length }, (_, i) => start + i)
}

//TODO: make component
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

const CourseStars = ({ stars, ...otherProps }) => {
  let StarImages = []
  let fullStarCount = parseInt(stars)
  let halfStarExists = stars.includes('.') ? 1 : 0
  let emptyStars = 5 - fullStarCount - halfStarExists

  //full stars
  range(0, fullStarCount).forEach((thisStar, index) => {
    return StarImages.push(<Image src={fullStar} key={index} />)
  })

  //half stars
  if (halfStarExists) {
    StarImages.push(<Image src={halfStar} key='half' />)
  }

  //empty Stars
  if (emptyStars) {
    range(0, emptyStars).forEach((thisStar, index) => {
      return StarImages.push(<Image src={emptyStar} key={'empty' + index} />)
    })
  }

  StarImages.push(
    <SmallText>
      &nbsp;&nbsp;
      {stars}
    </SmallText>
  )

  return StarImages
}

export default CourseStars
