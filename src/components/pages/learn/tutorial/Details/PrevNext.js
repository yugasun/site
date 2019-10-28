import React from 'react'
import { P, Button } from 'src/fragments/DesignSystem'
import { Flex } from 'serverless-design-system'

const PrevNext = () => (
    <Flex px={22} justifyContent='space-between' style={{border: '2px solid #eaeaea'}}>
      <Flex width={0.50}>
          <Button width='120px' my={22}>&#8592; &nbsp;Previous</Button>
          <P ml={'12px'} my={22}> What Is Serverless Development?</P>
      </Flex>
      <Flex width={0.50} style={{borderLeft: '2px solid #eaeaea'}}>
          <P my={22}>Build Serverless Endpoint Manually</P>
          <Button width='120px' my={22}> Next &nbsp; &#8594;</Button>
      </Flex>
    </Flex>      
)

export default PrevNext