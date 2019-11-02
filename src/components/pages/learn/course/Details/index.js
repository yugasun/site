import React from 'react'
import Requirements from './Requirements'
import Description from './Description'
import Outline from './Outline'
import CourseBox from './CourseBox'
import { Flex } from 'serverless-design-system'

const CourseDetails = (props) => (
  <React.Fragment>
    <Flex flexDirection={['column-reverse', 'column-reverse', 'row']}>
      <Flex flexDirection='column' width={[1, 1, 0.5, 0.5]}>
        <Description {...props}/>
        <Requirements />
        <Outline slug={props.slug}/>
      </Flex>
      <CourseBox {...props}/>
    </Flex>
  </React.Fragment>
)

export default CourseDetails
