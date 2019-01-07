import React from 'react'
import { TextWithIcon } from 'serverless-design-system'
import redRectangleDots from 'src/assets/images/redRectangleDots.svg'
import { Heading } from 'src/fragments/DesignSystem'

//TODO: refactor so we're using a common version of this across the website
const TitleWithIcon = ({ children, ...otherProps }) => (
  <TextWithIcon
    iconSrc={redRectangleDots}
    iconHeight={["30px", "30px", "30px", "38px"]}
    iconWidth={["60px", "60px", "60px", "88px"]}
    iconTop={["3px", "3px", "3px", "-5px"]}
    iconLeft={["-10px", "-12px", "-14px", "-18px"]}
    backgroundSize='contain'
    backgroundPosition='center'
    backgroundRepeat='no-repeat'
  >
    <Heading.h1
      {...otherProps}
    >
      { children }
    </Heading.h1>
  </TextWithIcon>
)

export default TitleWithIcon