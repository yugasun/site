import awsLambdaImage from 'src/assets/images/learn/aws-lambda-guide.svg'
import dynamoDBImage from 'src/assets/images/learn/amazon-dynamodb-guide.svg'
import stepFunctionsImage from 'src/assets/images/learn/aws-step-functions-guide.svg'

export default [
  {
    id: 1,
    image: dynamoDBImage,
    title: 'DynamoDB',
    link: '/dynamodb/',
  },
  {
    id: 2,
    image: awsLambdaImage,
    title: 'AWS Lambda',
    link: '/aws-lambda/',
  },
  {
    id: 3,
    image: stepFunctionsImage,
    title: 'Step Functions',
    link: '/aws-step-functions/',
  },
]
