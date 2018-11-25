import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from 'src/fragments'

import { Flex, Image, Heading, Text } from 'serverless-design-system'
import videoIcon from 'src/assets/images/github-gray.svg'
import starIcon from 'src/assets/images/star-gray.svg'

const VerticallyAlignedImage = styled(Image)`
  vertical-align: top;
`

const MobileSpace = styled(Text.span)`
  @media screen and (max-width: 414px) {
    &:after {
      content: "       ";
      white-space: pre;
    }
  }
`

const HomeHeroFooter = () => (
  <ExternalLink to='https://github.com/serverless/serverless'>
    <Flex
      width={[1, 1, 3 / 4]}
      my={['12px', '12px', 3]}
      flexWrap='wrap'
      >
      <Heading.h4
        color='gray.2'
        fontSize={18}
        mb={0}
        lineHeight={'24px'}
        letterSpacing={'-0.3px'}
        fontFamily='SoleilBk'
      >
      <VerticallyAlignedImage
          src={videoIcon}
          height={'26px'}
          width='26px'
        />
        <Text.span>&nbsp; View the Serverless Framework <MobileSpace></MobileSpace> on GitHub.&nbsp;&nbsp;&nbsp;</Text.span> 
      <VerticallyAlignedImage
          src={starIcon}
          height={20}
          width={20}
          maxWidth='none'
        />
        &nbsp; 26,257
      </Heading.h4>
    </Flex>
  </ExternalLink>
)

export default HomeHeroFooter