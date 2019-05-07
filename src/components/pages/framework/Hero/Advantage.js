import React from 'react'
import { ResponsiveStack } from 'serverless-design-system'
import RedRectangeDots from 'src/assets/images/redRectangleDots.svg'
import { HeroAdvantage } from 'src/fragments/DesignSystem/HeroElements'

const advantages = [
  {
    title: 'Simple Developer Experience',
    description:
      'Keep your workflow in the CLI, focus on code, avoid the AWS console.',
  },
  {
    title: 'Amazing Community',
    description:
      'Over 29,000 Github stars, 100+ example apps, and 200+ open source plugins. The Serverless Framework has been adopted by thousands of companies worldwide.',
  },
  {
    title: 'Vendor Agnostic',
    description:
      'The Serverless Framework supports 8 different cloud providers with a single developer experience, giving you the choice to pick the proper tool for the job.',
  },
]

const Advantages = () => (
  <ResponsiveStack flexWrap='wrap'>
    {advantages.map(({ title, description }) => (
      <HeroAdvantage
        key={title}
        title={title}
        description={description}
        img={RedRectangeDots}
      />
    ))}
  </ResponsiveStack>
)

export default Advantages
