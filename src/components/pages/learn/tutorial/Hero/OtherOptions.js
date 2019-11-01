import React from 'react'
import { Flex, Image } from 'serverless-design-system'
import otherCoursesImage from 'src/assets/images/pages/learn/tutorial/other-courses.svg'
import subscribeImage from 'src/assets/images/pages/learn/tutorial/subscribe.svg'
import { P } from 'src/fragments/DesignSystem'
import { InternalLink, AnchorLink } from 'src/fragments'
import { learn } from 'src/constants/urls'

const TutorialOtherOptions = (props) => (
    <Flex pb={'20px'}>
        <Flex alignItems='center'>
            <Image src={otherCoursesImage} height='24px' width='24px'/>
            <InternalLink to={learn} >
                <P ml={'10px'} color='#8c8c8c'>View all courses</P>
            </InternalLink>
        </Flex>
        <Flex alignItems='center' ml={32}>
            <Image src={subscribeImage} width='24px' height='24px'/>
            <AnchorLink to={'#course-updates'}>
                <P ml={'10px'} color='#8c8c8c'>Subscribe for updates</P>
            </AnchorLink>
        </Flex>
        
    </Flex>      
)

export default TutorialOtherOptions