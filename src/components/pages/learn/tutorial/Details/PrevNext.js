import React from 'react'
import { P, Button } from 'src/fragments/DesignSystem'
import { Flex } from 'serverless-design-system'
import { InternalLink } from 'src/fragments'

const PrevNext = ({prevVideo, nextVideo}) => (
    <Flex px={22} justifyContent='space-between' style={{border: '2px solid #eaeaea'}} width={1}>
      <Flex width={0.50} justifyContent='flex-start'>
          {
              prevVideo ? 
              <React.Fragment>
                  <Button width='62px' my={22} style={{minWidth: '62px'}}>&#x3c;</Button>
                  <P ml={'12px'} my={22}>{prevVideo.title}</P>
              </React.Fragment> : 
              
              <Button my={22}>Subscribe</Button>
          }
          
      </Flex>
      <Flex width={0.20} style={{background: 'linear-gradient(45deg, #eaeaea 0%, #eaeaea 100%) no-repeat center/2px 100%'}}>
          
      </Flex>
      <Flex width={0.50} justifyContent='flex-end'>
          {
              nextVideo ? 
              <React.Fragment>
                  <P my={22} mr={'12px'} align='right'>{nextVideo.title}</P>
                  <Button width='62px' style={{minWidth: '62px'}} my={22}> &#x3e;</Button>
              </React.Fragment> : 

              <Button my={22}>Subscribe</Button>
          }
          
      </Flex>
    </Flex>      
)

export default PrevNext