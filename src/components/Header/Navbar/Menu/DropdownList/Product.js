import React from 'react'
import {
  Flex,
  Heading,
  Image,
  InlineBlock,
  List,
  ListItem,
  Relative,
} from 'serverless-design-system'
import styled from 'styled-components'

import NavLink from 'src/components/NavLink'
import { products } from 'src/constants/urls'
import frameworkIcon from 'src/assets/images/pages/enterprise/enterprise-icon.svg'
import supportIcon from 'src/assets/images/pages/support/serverless-support.svg'
import platformIcon from 'src/assets/images/pages/platform/serverless-platform.svg'


const platformMenuConfig = [
  {
    imgProps: {
      src: frameworkIcon,
      height: ['60px', '60px', '72px'],
      mr: '23px'
    },
    text: 'framework',
    to: products.framework,
    crossDomain: false,
    completed: true,
  },
  {
    imgProps: {
      src: platformIcon,
      height: ['61px', '61px', '73px'],
      ml: '14px',
      mr: '23px'
    },
    text: 'platform',
    to: products.platform,
    crossDomain: false,
    completed: true,
  },
  {
    imgProps: {
      src: supportIcon,
      height: ['62px', '62px', '74px'],
      mr: '23px',
      mb: [2, 2, 0]
    },
    text: 'support',
    to: products.support,
    crossDomain: false,
    completed: true,
  },
]

const ProductMenu = styled(List)`
  @media screen and (min-width: 1200px) {
    display: flex;
    width: 730px;
  }
`

const Platform = () => (
  <ProductMenu m={0} ml={[2, 2, 0]} p={0}>
    {platformMenuConfig.map(
      ({ imgProps: { src, height, ...imgContainerProps }, text, to, crossDomain, completed }, index) => (
        <NavLink
          key={index}
          to={to}
          crossDomain={crossDomain}
          completed={completed}
        >
          <ListItem.noStyleType key={text}>
            <Relative>
              <Flex.horizontallyCenter
                mb={platformMenuConfig.length - 1 === index ? 0 : [2, 2, 0]}
              >
                <InlineBlock {...imgContainerProps}>
                  <Image
                    src={src}
                    height={height}
                    width='auto'
                  />
                </InlineBlock>
                <InlineBlock minWidth='155px'>
                  <Heading.h6
                    fontFamily='Serverless'
                    fontSize='1.5rem'
                    lineHeight={0.7}
                    letterSpacing='5'
                    m={0}
                    pt={[0, 0, 22]}
                  >
                    serverless
                  </Heading.h6>
                  <Heading.h6
                    fontFamily='Serverless'
                    fontSize='2rem'
                    lineHeight={1.7}
                    letterSpacing={0.8}
                    m={0}
                  >
                    {text}
                  </Heading.h6>
                </InlineBlock>
              </Flex.horizontallyCenter>
            </Relative>
          </ListItem.noStyleType>
        </NavLink>
      )
    )}
  </ProductMenu>
)

export default Platform
