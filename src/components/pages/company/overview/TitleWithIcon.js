import React from 'react'
import { TextWithIcon, Heading } from 'serverless-design-system'
import redRectangleDots from 'src/assets/images/redRectangleDots.svg'

//TODO: refactor so we're using a common version of this across the website
const CompanyTitleWithIcon = ({ children, ...otherProps }) => (
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
    <Heading.h2
      fontFamily='Soleil'
      fontSize={[5, 5, 5, 7]}
      lineHeight={'62px'}
      letterSpacing='0.5px'
      {...otherProps}
    >
      { children }
    </Heading.h2>
  </TextWithIcon>
)

export default CompanyTitleWithIcon