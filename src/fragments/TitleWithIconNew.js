import React from 'react'
import { TextWithIcon } from 'serverless-design-system'
import redRectangleDots from 'src/assets/images/redRectangleDots.svg'
import redRectangleDotsSmall from 'src/assets/images/redRectangleDotsSmall.svg'
import { Heading } from 'src/fragments/DesignSystem'

//TODO: very tightly coupled with workshops san-fran - seperate it out?

const TitleWithIconNew = ({
  children,
  customIconHeight,
  customIconWidth,
  headingComponent,
  ...otherProps
}) => {
  const FinalHeadingComponent = headingComponent ? headingComponent : Heading.h2
  const finalIconImage =
    headingComponent === Heading.h4 ? redRectangleDotsSmall : redRectangleDots
  const finalIconTop =
    headingComponent === Heading.h4
      ? ['-5px', '-5px', '-8px', '-12px', '-13px']
      : ['-12px', '-12px', 0, '-12px', '-10px']
  const finalIconLeft =
    headingComponent === Heading.h4
      ? ['-45px', '-45px', '-40px', '-60px']
      : ['-10px', '-12px', '-14px', '-20px']

  return (
    <TextWithIcon
      iconSrc={finalIconImage}
      iconHeight={
        customIconHeight ? customIconHeight : ['30px', '30px', '30px', '38px']
      }
      iconWidth={
        customIconWidth ? customIconWidth : ['60px', '60px', '60px', '88px']
      }
      iconTop={finalIconTop}
      iconLeft={finalIconLeft}
      backgroundSize='contain'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
    >
      <FinalHeadingComponent {...otherProps}>{children}</FinalHeadingComponent>
    </TextWithIcon>
  )
}

export default TitleWithIconNew
