import awsLambdaImage from 'src/assets/images/learn/aws-lambda-guide.svg'
import dynamoDBImage from 'src/assets/images/learn/amazon-dynamodb-guide.svg'
import stepFunctionsImage from 'src/assets/images/learn/aws-step-functions-guide.svg'
import apiGatewayImage from 'src/assets/images/learn/amazon-api-gateway-guide.svg'
import appsyncImage from 'src/assets/images/learn/aws-appsync-guide.svg'

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
    image: apiGatewayImage,
    title: 'API Gateway',
    link: '/amazon-api-gateway/',
  },
  {
    id: 4,
    image: stepFunctionsImage,
    title: 'Step Functions',
    link: '/aws-step-functions/',
  },
  {
    id: 5,
    image: appsyncImage,
    title: 'AppSync',
    link: '/aws-appsync/',
  },
]