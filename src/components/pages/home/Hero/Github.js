import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from 'src/fragments'

import { Flex, Image, Text, Box } from 'serverless-design-system'
import videoIcon from 'src/assets/images/github-gray.svg'
import starIcon from 'src/assets/images/star-gray.svg'

const VerticallyAlignedImage = styled(Image)`
  vertical-align: top;
`

const MobileSpace = styled(Text.span)`
  @media screen and (max-width: 768px) {
    &:after {
      content: "              ";
      white-space: pre;
    }
  }
`

const HomeHeroFooter = () => (
  <ExternalLink to='https://github.com/serverless/serverless'>
      <Flex
        width={[1, 1, 1]}
        my={['12px', '12px', 3]}
        flexWrap='wrap'
        >
        <Text
          color='gray.2'
          fontSize={[12, 12, 12, 12, 16]}
          mb={0}
          lineHeight={['16px', '16px', '24px']}
          letterSpacing={[0, 0, '-0.3px']}
          fontFamily={['Soleil', 'Soleil', 'Soleil', 'Soleil', 'SoleilBk']}
        >
          <VerticallyAlignedImage
              src={videoIcon}
              height={'26px'}
              width='26px'
            />
            <Text.span fontSize={[12, 12, 12, 12, 16]} fontFamily={['Soleil', 'Soleil', 'Soleil', 'Soleil', 'SoleilBk']} ml={['9px']} >&nbsp; View the Serverless Framework <MobileSpace></MobileSpace> on GitHub.&nbsp;&nbsp;&nbsp;</Text.span> 
          <VerticallyAlignedImage
              src={starIcon}
              height={[11, 11, 20]}
              width={[11, 11, 20]}
              maxWidth='none'
            />
            &nbsp; 26,804
        </Text>
      </Flex>
  </ExternalLink>
)

export default HomeHeroFooter