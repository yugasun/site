import React from 'react'
import { Flex, Text, Image } from 'serverless-design-system'
import coursesData from './Data'
import styled from 'styled-components'
import courseTimeIcon from 'src/assets/images/pages/courses/course-time-icon.svg'
import { PS } from 'src/fragments/DesignSystem'

const SmallText = ({ children, ...otherProps }) => (
  <Text
    fontSize={'14px'}
    lineHeight={'20px'}
    letterSpacing='0'
    fontFamily='Soleil'
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
        width={[1, 1, 0.48, 0.48, 0.3]}
        mt={index > 2 ? [0, 0, 0, 0, 62] : '0'}
        mb={[32, 32, 42, 42, 0]}
        mx={index === 1 || index === 4 ? [0, 0, 0, 0, 32] : '0'}
        style={{border: '1px solid #eaeaea',
            boxShadow: '2px 2px 8px 0 rgba(0, 0, 0, 0.08)'}}
      >
        <Flex
          flexDirection='column'
          alignItems='left'
          width={[1, 1, 'auto']}
          py={30}
          px={20}
        >
          <Text
            fontSize='18px'
            lineHeight='24px'
            letterSpacing='-0.28px'
            fontFamily='SoleilBk'
            align='left'
          >
            {feature.title}
          </Text>
          <Flex py={'10px'}>
            <SmallText mt={['3px']} align='left'>
              {feature.description}
            </SmallText>
          </Flex>
          <Flex alignItems='center' style={{alignSelf: 'flex-end'}}>
              <Image src={courseTimeIcon} />
              <PS ml={'10px'}>{feature.playTime}</PS>
          </Flex>
        </Flex>
      </Flex>
    ))}
  </Flex>
)

export default DesktopTable
