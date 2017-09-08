const awsSDK = require('aws-sdk')
const dynamoDoc = new awsSDK.DynamoDB.DocumentClient()
const ERROR_TABLE = process.env.ERROR_TABLE

module.exports.FourOFourTracker = (event, context, callback) => {
  const body = JSON.parse(event.body)
  const url = body.url
  const referrer = body.referrer

  // Prep DynamoDB update Params
  const params = {
    TableName: ERROR_TABLE,
    Key: {
      url: url
    },
    // Set updates and Increment counter with Add
    UpdateExpression: 'SET #lastReferrer = :lastReferrer, #lastUpdated = :lastUpdated ADD #instanceCount :incr',
    // Define Variables for keys used in `UpdateExpression`
    ExpressionAttributeNames: {
      '#lastReferrer': 'lastReferrer',
      '#lastUpdated': 'lastUpdated',
      '#instanceCount': 'instanceCount'
    },
    // Define Variables for values used in `UpdateExpression`
    ExpressionAttributeValues: {
      ':incr': 1,
      ':lastUpdated': Math.round(+new Date() / 1000),
      ':lastReferrer': referrer
    },
    // Return updated values in response to act upon
    ReturnValues: 'UPDATED_NEW'
  };

  dynamoDoc.update(params).promise().then((data) => {

    if (data && data.Attributes && data.Attributes.instanceCount) {
      const count = data.Attributes.instanceCount
      const threshold = 10
      const timesText = (count === 1) ? 'time' : 'times'
      console.log(`${url} 404ed ${count} ${timesText}`)
      if (count > threshold) {
        console.log("CALL ALEX AT HOME")
      }
    }
    return callback(null, {
      statusCode: 200,
      headers: {
        // Required for CORS support to work
        'Access-Control-Allow-Origin': '*',
        // Required for cookies, authorization headers with HTTPS
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        message: `404 recorded for ${url} referring site was ${referrer}`,
        data: data
      })
    })
  }).catch((err) => {
    return callback(err)
  });
}
