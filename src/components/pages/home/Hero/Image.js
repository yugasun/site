import React from 'react'

import {
  Flex,
  Image,
  Relative,
  Absolute,
  Text,
} from 'serverless-design-system'
import homepageHeroLinesMain from 'src/assets/images/home/hero-lines.svg'
import homepageHeroLinesStatic from 'src/assets/images/home/hero-lines-static.svg'
import homepageHeroTerminal from 'src/assets/images/homepageHeroTerminal.svg'
import styled from 'styled-components'

const TerminalBackground = styled(Absolute)`

  @media screen and (max-width: 415px) {
    left: 0px;
  }
`

const HomeHeroImage = ({usingSafariDesktop}) => (
  <Flex
    flexDirection={['column', 'column', 'column']}
    width={[1, 1, '55%']}
    mx='auto'
    mb={[1, 1, 4]}
  >
    <TerminalBackground
      mt={['42px', '42px', '67px', '27px', '67px']}
      ml={[0, 0, '30px', '56px']}
  >
    <Image
      src={usingSafariDesktop ? homepageHeroLinesStatic : homepageHeroLinesMain}
      width={[586, 586, 586, 386, 586, 586]}
    >
    </Image>
  </TerminalBackground>

  <Relative
    mt={[82, 82, 120, 80, 150]}
    ml={[0, 0, 53, 103]}
    width={['320px', '320px', '320px', '320px', 1]}
  >
  <Image
        src={homepageHeroTerminal}
      />
    
  </Relative>
  <Absolute
      mt={['122px', '122px', '160px', '120px', '210px']}
      ml={['35px', '35px', '90px', '135px', '155px']}
    >
      <Text.p color='#727679' fontSize={['10px', '10px', '9.8px', '9.8px', '13.7px']} letterSpacing='0.1px'>
      1 &nbsp;&nbsp;&nbsp;&nbsp;# Step 1. Install serverless globally<br/>
      2 &nbsp;&nbsp;&nbsp;&nbsp;<Text.span color='#fff'>$ npm install serverless -g</Text.span><br/>
      3<br/>
      4 &nbsp;&nbsp;&nbsp;&nbsp;# Step 2. Login to your serverless account<br/>
      5 &nbsp;&nbsp;&nbsp;&nbsp;<Text.span color='#fff'>$ serverless login</Text.span><br/>
      6 <br/>
      7 &nbsp;&nbsp;&nbsp;&nbsp;#Step 3. Create a serverless function<br/>
      8 &nbsp;&nbsp;&nbsp;&nbsp;<Text.span color='#fff'>$ serverless create --template hello-world</Text.span><br/>
      9 <br/>
      10 &nbsp;&nbsp;# Step 4. deploy to cloud provider<br/>
      11 &nbsp;&nbsp;<Text.span color='#fff'>$ serverless deploy</Text.span><br/>
      12<br/>
      13 &nbsp;&nbsp;# Your function is deployed!<br/>
      14 &nbsp;&nbsp;<Text.span color='#fff'>$ http://xyz.amazonaws.com/hello-world</Text.span>

      </Text.p>
    
    </Absolute>
  </Flex>
)

export default HomeHeroImage