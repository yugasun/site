import React from 'react'
import { Flex, Image, Text, Column } from 'serverless-design-system'
import { P, Heading } from 'src/fragments/DesignSystem'
import experienceIcon from 'src/assets/images/pages/framework/experience-icon.svg'
import communityIcon from 'src/assets/images/pages/framework/community-icon.svg'
import vendorIcon from 'src/assets/images/pages/framework/vendor-icon.svg'

const whyData = [
  {
    image: experienceIcon,
    title: 'Great developer experience',
    description:
      'A singular product experience, for all stages of the application lifecycle, built by developers for developers.',
  },
  {
    image: communityIcon,
    title: 'Amazing community',
    description:
      'Over 10 millions downloads, 30,000 GitHub Stars, 200+ Open Source Plugins. The Serverless community builds here.',
  },
  {
    image: vendorIcon,
    title: 'Vendor agnostic',
    description:
      'Supports to 8 different cloud providers with a single developer experience, giving you the freedom to pick the proper tool for the job.',
  },
]

const Why = props => (
  <React.Fragment>
    <Heading.h3>Why Serverless Framework?</Heading.h3>
    <Flex>
      {whyData.map(why => (
        <Column key={why.title}>
          <Image src={why.image} />
          <Text>{why.title}</Text>
          <P>{why.description}</P>
        </Column>
      ))}
    </Flex>
  </React.Fragment>
)

export default Why
