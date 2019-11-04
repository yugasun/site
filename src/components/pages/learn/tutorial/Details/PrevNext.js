import React from 'react'
import { P, Button } from 'src/fragments/DesignSystem'
import { Flex, Box } from 'serverless-design-system'
import { InternalLink } from 'src/fragments'

const PrevNext = ({prevVideo, nextVideo}) => (
    <Flex px={22} justifyContent='space-between' style={{border: '2px solid #eaeaea'}} width={[1, 1, 0.85, 0.85, 1]} flexDirection={['column', 'column', 'row']} mx={['none', 'none', 'auto', 'auto', 'none']}>
      <Flex width={[1, 1, 0.50]} justifyContent='flex-start'>
          {
              prevVideo ? 
              <React.Fragment>
                  <InternalLink to={`/learn/tutorial/${prevVideo.slug}`}>
                    <Button width='62px' my={22} style={{minWidth: '62px'}}>&#x3c;</Button>
                  </InternalLink>
                  <P ml={'12px'} my={22}>{prevVideo.title}</P>
              </React.Fragment> : 
              
              <InternalLink to={'#course-updates'} anchorLink>
                <Button my={22}>Subscribe</Button>
              </InternalLink>
          }
          
      </Flex>
      <Box width={[0.01, 0.01, 0.01, 0.01, 0.01, 0.20]} style={{background: 'linear-gradient(45deg, #eaeaea 0%, #eaeaea 100%) no-repeat center/2px 100%'}} display={['none', 'none', 'flex']}/>
      <Flex width={[1, 1, 0.50]} justifyContent='flex-end'>
          {
              nextVideo ? 
              <React.Fragment>
                  <P my={22} mr={'12px'} align='right'>{nextVideo.title}</P>
                  <InternalLink to={`/learn/tutorial/${nextVideo.slug}`}>
                    <Button width='62px' style={{minWidth: '62px'}} my={22}> &#x3e;</Button>
                  </InternalLink>
              </React.Fragment> : 

              <InternalLink to={'#course-updates'} anchorLink>
                <Button my={22}>Subscribe</Button>
              </InternalLink>
          }
          
      </Flex>
    </Flex>      
)

export default PrevNext