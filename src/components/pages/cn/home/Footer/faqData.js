import React from 'react'
import { P } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import { championsDeck } from 'src/constants/urls'

const renderContents = contents => (
  <React.Fragment>
    {contents.map((content, index) => (
      <P
        key={index}
        mt={[16, 16, 2, 3]}
        color='#8c8c8c'
        fontSize='16px'
        fontFamily='SoleilBk'
        lineHeight='26px'
        letterSpacing='0'
      >
        {content}
      </P>
    ))}
  </React.Fragment>
)

export default [
  {
    question: 'What is Serverless?',
    answer: renderContents([
      `Just like wireless internet has wires somewhere, serverless architectures still have servers somewhere. What ‘serverless’ really means is that, as a developer you don’t have to think about those servers. You just focus on code.`,
      `This was initially embodied in function-as-a-service infrastructure, like AWS Lambda, that had Serverless properties like: function as the unit of deployment, 100% auto-scaling, and pay-per-execution pricing models. More recently many other types of ‘serverless infrastructure’ have emerged such as zero configuration databases, APIs for handling user management, and highly abstracted container orchestration engines. At the end of the day, Serverless is any developer tooling which the developer does not need to worry at all about the underlying infrastructure. 
      `,
    ]),
  },
  {
    question: 'How can Serverless help our company adopt cloud?',
    answer: renderContents([
      `Serverless, in many ways, is what most people have always wanted from the cloud: on demand infrastructure that auto-scales automatically with pay-per-use pricing. The lower operational overhead and fair pricing structure, combined with the simple developer experience, means that organizations  with little-to-no cloud experience can still adopt public cloud platforms very quickly.`,

      `Technologies like Kubernetes, while powerful, are very complicated and this complexity often hinders cloud adoption. With Serverless we often see organizations ship production services within weeks rather than months or years.
      `,
    ]),
  },
  {
    question:
      'How can Operation teams enable and administer Serverless development teams?',
    answer: renderContents([
      `Serverless means that the underlying infrastructure is largely abstracted away from developers, but this does not mean that there is no longer any operational concerns. Serverless has it’s own unique workflow and with that comes a new set of operational concerns. The Serverless Framework has solutions for deploying, testing, securing, and monitoring Serverless architectures that are designed to be utilized by operations teams.`,
    ]),
  },
  {
    question:
      'Why do so many developers choose you over the cloud vendor’s tools?',
    answer: renderContents([
      `1. Great developer experience. We’re a developer tools company, not an infrastructure company, and that means we put developer experience before all else. Developers love using our tools because they give them superpowers.`,
      `2. Amazing Community. The Serverless Framework has over 10 million downloads, 30,000 GitHub stars, and hundreds of open source plugins. This strong, invested open source community means that resources are plentiful and product development moves fast.`,
      `
      3. Vendor Agnostic. The Serverless Framework supports 8 different cloud providers with a single developer experience, giving developers the freedom to pick the proper tool for the job. Developers, like everyone else, love having choices. `,
    ]),
  },
  {
    question: 'How can I convince my organization to adopt Serverless?',
    answer: renderContents([
      <React.Fragment>
        The best way to convince your organization to adopt to Serverless is to
        show them the results. Sign up for a free Serverless Framework account
        and build a POC showing the power of Serverless. You can also download
        our{' '}
        <ExternalLink to={championsDeck}>
          Serverless Champions Deck
        </ExternalLink>{' '}
        to give an internal presentation on the business value that Serverless
        delivers.{' '}
      </React.Fragment>,
    ]),
  },
]
