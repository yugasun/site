import React from 'react'
import {
  Flex,
  Heading,
  InlineBlock,
  List,
  ListItem,
  Relative,
  Background,
  Text,
  TextWithIcon,
} from 'serverless-design-system'
import styled from 'styled-components'

import NavLink from 'src/components/NavLink'
import { products, enterprise } from 'src/constants/urls'
import dotGridWhite from 'src/assets/images/components/header/dot-grid-menu-white.svg'
import dotGridRed from 'src/assets/images/components/header/dot-grid-menu-red.svg'

const platformMenuConfig = [
  {
    text: 'framework',
    subText: 'open source',
    to: products.framework,
    crossDomain: false,
    completed: true,
    bgColor: ['#fd5750'],
    dotGrid: dotGridWhite,
  },
  {
    text: 'framework',
    subText: 'enterprise',
    to: enterprise,
    crossDomain: false,
    completed: true,
    bgColor: ['#000', '#000', '#000', '#000', '#151515'],
    dotGrid: dotGridRed,
  },
]

const ProductMenu = styled(List)`
  @media screen and (min-width: 1200px) {
    display: flex;
    height: 110px;
  }
`

const Platform = () => (
  <ProductMenu m={0} ml={[2, 2, 0]} p={0}>
    {platformMenuConfig.map(
      (
        { text, to, crossDomain, completed, subText, bgColor, dotGrid },
        index
      ) => (
        <Background background={bgColor} key={index}>
          <NavLink
            to={to}
            crossDomain={crossDomain}
            completed={completed}
            className='header-menu-item'
          >
            <ListItem.noStyleType key={text}>
              <Relative pt={0}>
                <Flex.horizontallyCenter
                  mb={platformMenuConfig.length - 1 === index ? 0 : [2, 2, 0]}
                >
                  <InlineBlock minWidth='206px' ml={[0, 0, 0, 0, 42]}>
                    <TextWithIcon
                      iconSrc={dotGrid}
                      iconHeight='20px'
                      iconWidth='26px'
                      iconLeft='-5px'
                      iconTop={['-2px', '-2px', '20px']}
                    >
                      <Text
                        fontFamily='Serverless'
                        fontSize='12px'
                        lineHeight={'14px'}
                        letterSpacing='0.5px'
                        m={0}
                        pt={[0, 0, 22]}
                        color='white'
                      >
                        serverless
                      </Text>
                    </TextWithIcon>
                    <Text
                      fontFamily='Serverless'
                      fontSize='18px'
                      lineHeight='20px'
                      letterSpacing='0.75px'
                      m={0}
                      mt={'3px'}
                      color='white'
                    >
                      {text}
                    </Text>
                    <Text
                      fontFamily='Serverless'
                      fontSize='18px'
                      lineHeight='20px'
                      letterSpacing='0.75px'
                      m={0}
                      color='white'
                    >
                      {subText}
                    </Text>
                  </InlineBlock>
                </Flex.horizontallyCenter>
              </Relative>
            </ListItem.noStyleType>
          </NavLink>
        </Background>
      )
    )}
  </ProductMenu>
)

export default Platform
