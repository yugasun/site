import React from 'react'
import { TextWithIcon } from 'serverless-design-system'
import redRectangleDots from 'src/assets/images/redRectangleDots.svg'
import { Heading } from 'src/fragments/DesignSystem'

const TitleWithIconNew = ({ children, headingComponent, ...otherProps }) => {
  const FinalHeadingComponent = headingComponent ? headingComponent : Heading.h2
  return (
  <TextWithIcon
    iconSrc={redRectangleDots}
    iconHeight={["30px", "30px", "30px", "38px"]}
    iconWidth={["60px", "60px", "60px", "88px"]}
    iconTop={["-12px", "-12px", "-12px", "-12px", "-5px"]}
    iconLeft={["-10px", "-12px", "-14px", "-18px"]}
    backgroundSize='contain'
    backgroundPosition='center'
    backgroundRepeat='no-repeat'
  >
    <FinalHeadingComponent
        fontSize={['32px', '32px', '32px', '32px', '48px']}
        fontFamily='Soleil'
        letterSpacing={['0.5px']}
        lineHeight={['32px', '32px', '32px', '32px', '62px']}
        {...otherProps}
    >
      { children }
    </FinalHeadingComponent>
  </TextWithIcon>
  )
}

export default TitleWithIconNew