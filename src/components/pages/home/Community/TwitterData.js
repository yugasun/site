import jasonImage from 'src/assets/images/home/tweeters/jason.png'
import tylerImage from 'src/assets/images/home/tweeters/tyler.png'
import philippImage from 'src/assets/images/home/tweeters/philipp.png'
import papaImage from 'src/assets/images/home/tweeters/papa.png'

export default [
  {
    image: tylerImage,
    name: 'Tyler Zey🔥',
    username: '@TylerZey',
    tweet:
      'Built two #Lambda functions today via @goserverless.  One runs daily to update all of our coupons in DynamoDB. And the other is the query function to search DynamoDB for the coupon.  Super duper easy with Serverless framework. Got it live and almost in prod already.',
    date: 'Feb 27th',
    link: 'https://twitter.com/TylerZey/status/1098691255226298371',
    bgColor: '#eaeaea',
    tweetColor: '#5b5b5b',
  },
  {
    image: jasonImage,
    name: 'Jason M',
    nameColor: '#000000',
    username: '@themccallister',
    usernameColor: '#8c8c8c',
    tweet:
      "I’m still a huge fan of @Docker but man this @goserverless stuff is purely amazing, I'm fully onboard with managing infrastructure from code... Just moved an existing API and supporting app to Lambda functions in one day...",
    tweetColor: '#5b5b5b',
    date: 'Feb 20th',
    link: 'https://twitter.com/themccallister/status/1098305655830663169',
    bgColor: '#eaeaea',
  },
  {
    image: papaImage,
    name: 'Pappa',
    nameColor: '#ffffff',
    username: '@DrPappa',
    tweet:
      "I didn't realise #serverless was so absurdly quick and easy to use. Thanks @goserverless you've done an excellent job.",
    date: 'Mar 1st',
    link: 'https://twitter.com/DrPappa/status/1101377275868708864',
    bgColor: '#000',
    tweetColor: '#fff',
  },
  {
    image: philippImage,
    name: 'Philipp Heuberger',
    nameColor: '#fff',
    username: '@lowestdef',
    usernameColor: '#fff',
    tweet:
      'Doing serverless work for a client right now. Re-built a simple microservice in @goserverless and managed to replace 2 Java instances (staging and production). Operational costs before: $60/mo. Now $0.09/mo. Not too bad.',
    tweetColor: '#f7f7f7',
    date: 'Feb 28th',
    link: 'https://twitter.com/lowestdef/status/1101167423577882624',
    bgColor: '#fd5750',
  },
]
