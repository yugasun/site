import React from 'react'
import { Column, ResponsiveStack } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import { P, Heading } from 'src/fragments/DesignSystem'

const OurStory = () => (
  <AppContainer>
    <ResponsiveStack px={[0, 0, 0, 1, 3]} mt={[5, 5, 6, 7]} mb={[2, 2, 3, 6]}>
      <Column width={[1, 1, 1 / 3]} alignItems='left'>
        <Heading.h2>Our Story</Heading.h2>
      </Column>
      <Column width={[1, 1, 2 / 3]}>
        <P mt={0}>
          In 2015 when we released the Serverless Framework open source project,
          we had no idea what the serverless movement would become, or how fast
          it would grow.
        </P>
        <P>
          Today, the Serverless Framework Open Source is the main way developers
          deploy cloud applications on any FaaS provider. We also have an entire
          suite of Framework Enterprise tooling that makes it seamless for
          organizations to adopt cloud technologies and run them at scale.
        </P>
        <P>
          At Serverless, Inc., we believe many things. We believe that a future
          with serverless technologies at its center is inevitable. That
          serverless will let developers focus less on administration, and more
          on driving business value to end users. That serverless will allow
          organizations to innovate and get to market more quickly.
        </P>
        <P>
          Most importantly, we believe that these are great things. Our mission
          is to empower every developer to go serverless.
        </P>
      </Column>
    </ResponsiveStack>
  </AppContainer>
)

export default OurStory
