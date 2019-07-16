export default [
  {
    id: 'apis',
    title: 'APIs',
    description: `The Serverless Framework is the simplest way to develop infinitely scalable, pay-per-execution APIs. A single configuration file allows you to list your functions and define the endpoints that they’re subscribed to. Hit deploy and you’re live. With native support for CORS, GraphQL, great API testing functionality, and API monitoring you are ready for production from day 1.`,
    createCommand:
      'serverless install -u https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb-and-offline -n  aws-node-rest-api-with-dynamodb-and-offline',
  },
  {
    id: 'fullstack',
    title: 'Fullstack app',
    description: `The Serverless Framework offers the lowest total cost of ownership for building production scale full stack applications. With support for a wide range of runtimes, databases, and front-end frameworks as well as out of the box testing, monitoring, and security there is no more complete solution for building a serverless full stack application.`,
    createCommand:
      'serverless install -u https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb-and-offline -n  aws-node-rest-api-with-dynamodb-and-offline',
  },
  {
    id: 'dataProcessing',
    title: 'Data processing',
    description: `Transforming data and building data pipelines has never been easier. The Serverless Framework provides easy access to AWS Kinesis, SQS, SNS, DynamoDB, and all the other cloud infrastructure you need to build modern, scalable data pipelines. `,
    createCommand:
      'serverless install -u https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb-and-offline -n  aws-node-rest-api-with-dynamodb-and-offline',
  },
  {
    id: 'easyAutomation',
    title: 'Easy automation',
    description: `The Serverless Framework makes automating anything quick and easy. Whether you want to post a notification to Slack when a new customer support ticket has been submitted or update your CRM with data every time a new form has been submitted, simply subscribe a function to the event that matters and let the framework take care of the rest.`,
    createCommand:
      'serverless install -u https://github.com/serverless/examples/tree/master/aws-node-scheduled-cron -n  aws-node-scheduled-cron',
  },
]
