import React from 'react'
import { TextWithIcon } from 'serverless-design-system'
import redRectangleDots from 'src/assets/images/redRectangleDots.svg'
import redRectangleDotsSmall from 'src/assets/images/redRectangleDotsSmall.svg'
import { Heading } from 'src/fragments/DesignSystem'

const TitleWithIconNewest = ({
  children,
  customIconHeight,
  customIconWidth,
  headingComponent,
  ...otherProps
}) => {
  return (
    <TextWithIcon
      iconSrc={redRectangleDotsSmall}
      iconHeight={['30px', '30px', '38px']}
      iconWidth={['80px', '80px', '88px']}
      iconTop={['-5px', '-5px', '-9px']}
      iconLeft={['-60px', '-60px', '-65px']}
      backgroundSize='contain'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
    >
      <Heading.h4
        {...otherProps}
        fontSize={['18px', '18px', '24px']}
        lineHeight={['30px', '30px', '38px']}
        letterSpacing={['-0.28px', '-0.28px', '-0.38px']}
        align='left'
      >
        {children}
      </Heading.h4>
    </TextWithIcon>
  )
}

export default TitleWithIconNewest
