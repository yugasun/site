import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'
import { InternalLink } from 'src/fragments'
import styles from '../CICD.module.css'

const WorkflowGuideContent = props => (
  <Flex flexDirection='column' style={{backgroundColor: '#FFF', padding: "20px 50px 50px 50px", marginBottom: 80, borderRadius: 4, boxShadow:"2px 30px 50px 9 rgba(0,0,0,0.1)"}}>
    <Heading.h3 align={['left', 'left', 'center']}>
      Serverless CI/CD Workflow Guide
    </Heading.h3>

    <P0>
      
      Read the
      <InternalLink
        className={styles.editionLink}
        to={'/learn/guides/cicd/'}>
      Serverless CI/CD Workflow Guide
      </InternalLink>
      !
    </P0>
    <br/>
    <P0>
      The Serverless CI/CD Workflow Guide is a comprehensive guide for growing serverless
      development teams. We developed the guide based on our own practices of dog fooding
      Serverless Framework Pro and the industry best practices we learned from our customers. You'll
      how to best organize your apps, services, and repos and how to automate the end to end
      development process in a scalable environment.
    </P0>
  </Flex>
)

export default WorkflowGuideContent
