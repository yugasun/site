import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { Flex, Image, Heading } from 'serverless-design-system'
import videoIcon from 'src/assets/images/github-gray.svg'
import starIcon from 'src/assets/images/star-gray.svg'

const StyledLink = styled(Link)`
  text-decoration: none;
`

const VerticallyAlignedImage = styled(Image)`
  vertical-align: top;
`

const HomeHeroFooter = () => (
  <StyledLink to='/overview-video'>
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
        &nbsp; View the Serverless Framework on GitHub.&nbsp;&nbsp;&nbsp; 
      <VerticallyAlignedImage
          src={starIcon}
          height={20}
          width={20}
          maxWidth='none'
        />
        &nbsp; 26,116
      </Heading.h4>
    </Flex>
  </StyledLink>
)

export default HomeHeroFooter