import learnImage from 'src/assets/images/home/learn-graphic.svg'
import tryImage from 'src/assets/images/home/try-graphic.svg'
import accelerateImage from 'src/assets/images/home/accelerate-graphic.svg'

export default [
  {
    metaTitle: 'Learn',
    image: learnImage,
    title: 'The unprecedented power of the Serverless architecture',
    content:
      'This next-generation cloud architecture auto-scale and charges you only when it runs. No better options exists for building fast and innovating more',
    actions: [
      { text: 'learn more', link: '/learn/overview/' },
      { text: 'attend a workshop', link: '/resources/workshops/' },
    ],
  },
  {
    metaTitle: 'Try',
    image: tryImage,
    title: 'Deploy a serverless use use-case in seconds',
    content:
      'The Serverless CLI lets you get an app deployed to the cloud platform of choice in seconds rather than days. There’s no quicker way to get a POC up and running.',
    actions: [
      { text: 'view examples', link: '/examples/' },
      { text: 'get started', link: '/framework/docs/getting-started/' },
    ],
  },
  {
    metaTitle: 'Accelerate',
    image: accelerateImage,
    title: 'Empower and enable serverless teams to move fast safely',
    content:
      'Serverless Framework Enterprise helps accelerate and standardize serverless development and operational practices across teams and organizations.',
    actions: [
      { text: 'try enterprise', link: '/enterprise/' },
      { text: 'get support', link: '/enterprise/' },
    ],
  },
]
