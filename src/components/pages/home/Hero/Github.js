import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from 'src/fragments'
import { Flex, Image, Text, Box } from 'serverless-design-system'
import githubIcon from 'src/assets/images/github-gray.svg'
import starIcon from 'src/assets/images/star-gray.svg'

const VerticallyAlignedImage = styled(Image)`
  vertical-align: bottom;

  @media screen and (max-width: 415px) {
    margin: 0 auto;
  }
`

const MobileSpace = styled(Text.span)`
  @media screen and (max-width: 415px) {
    &:after {
      content: "     ";
      white-space: pre;
    }
  }

  @media screen and (min-width: 415px) and (max-width: 960px) {
    &:after {
      content: "     ";
      white-space: pre;
    }
  }
`

const HomeHeroFooter = () => (
  <ExternalLink to='https://github.com/serverless/serverless'>
      <Flex
        width={[1, 1, 1]}
        mt={['12px', '12px', 5]}
        mb={2}
        flexWrap='wrap'
        >
        <Flex
          color='gray.2'
          flexDirection={['column', 'column', 'row']}
          fontSize={[12, 12, 12, 12, 16]}
          mb={0}
          lineHeight={['16px', '16px', '24px']}
          letterSpacing={[0, 0, '-0.3px']}
          fontFamily={['Soleil', 'Soleil', 'Soleil', 'Soleil', 'SoleilBk']}
        >
        <Box m={'auto'}>
          <VerticallyAlignedImage
              src={githubIcon}
              height={'26px'}
              width='26px'
            />
        </Box>
        <Box width={['176px', '200px', '200px', 'auto']} m={['auto', 'auto', null]}>
          <Text.span fontSize={[12, 12, 12, 12, 16]} fontFamily={['Soleil', 'Soleil', 'Soleil', 'Soleil', 'SoleilBk']} ml={[0, 0, '9px']}>&nbsp; View the Serverless Framework <MobileSpace></MobileSpace> on GitHub.&nbsp;&nbsp;&nbsp;</Text.span> 
          <VerticallyAlignedImage
                src={starIcon}
                height={[11, 15, 20]}
                width={[11, 15, 20]}
                maxWidth='none'
          />
          <Text.span fontSize={[12, 12, 12, 12, 16]}>
              &nbsp; 26,804
          </Text.span>
        </Box>
        </Flex>
      </Flex>
  </ExternalLink>
)

export default HomeHeroFooter