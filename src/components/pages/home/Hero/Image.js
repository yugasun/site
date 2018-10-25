import React from 'react'

import {
  Flex,
  Image,
  Relative,
  Absolute,
  Text,
} from 'serverless-design-system'
import homepageHeroLinesMain from 'src/assets/images/homepageHeroLinesMain.svg'
import homepageHeroTerminal from 'src/assets/images/homepageHeroTerminal.svg'

const HomeHeroImage = () => (
  <Flex
    flexDirection={['column', 'column', 'column']}
    width={[1, 1, 3 / 4]}
    mx='auto'
    mb={[1, 1, 4]}
  >
  <Absolute
    mt='67px'
    ml={[0, 0, '70px']}
  >
    <Image
      src={homepageHeroLinesMain}
      right='0'
    >
    </Image>
  </Absolute>

  <Relative
    mt={[100, 100, 150]}
    ml={[0, 0, 120]}
    width={1}
  >
  <Image
        src={homepageHeroTerminal}
      />
    
  </Relative>
  <Absolute
      mt={['150px', '150px', '200px']}
      ml={['50px', '50px', '170px']}
    >

      
      <Text.p color='#727679' mb={[50]} fontSize={['10px', '10px', '13.7px']} letterSpacing='0.1px'>
      1. # Step 1. Install serverless globally<br/>
      2. <Text.span color='#fff'>$ npm install serverless -g</Text.span><br/>
      3.<br/>
      4. # Step 2. Login to your serverless account<br/>
      5. <Text.span color='#fff'>$ serverless login</Text.span><br/>
      6. <br/>
      7. #Step 3. Create a serverless function<br/>
      8. <Text.span color='#fff'>$ serverless create --template hello-world</Text.span><br/>
      9. <br/>
      10. # Step 4. deploy to cloud provider<br/>
      11 <Text.span color='#fff'>$ serverless deploy</Text.span><br/>
      12<br/>
      13 # Your function is deployed!<br/>
      14 <Text.span color='#fff'>$ http://xyz.amazonaws.com/hello-world</Text.span>

      </Text.p>
    
    </Absolute>
  </Flex>
)

export default HomeHeroImage