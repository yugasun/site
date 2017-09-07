const awsSDK = require('aws-sdk')
const dynamoDoc = new awsSDK.DynamoDB.DocumentClient()
const ERROR_TABLE = process.env.ERROR_TABLE

module.exports.FourOFourTracker = (event, context, callback) => {
  const body = JSON.parse(event.body)
  const url = body.url
  const referrer = body.referrer
  console.log('ran')
  const params = {
    TableName: ERROR_TABLE,
    Key: {
      url: url
    },
    // Update or create items
    UpdateExpression: 'SET #lastReferrer = :lastReferrer, #lastUpdated = :lastUpdated ADD #instanceCount :incr',
    ExpressionAttributeNames: {
      '#lastReferrer': 'lastReferrer',
      '#lastUpdated': 'lastUpdated',
      '#instanceCount': 'instanceCount'
    },
    ExpressionAttributeValues: {
      ':incr': 1,
      ':lastUpdated': Math.round(+new Date() / 1000),
      ':lastReferrer': referrer
    },
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
      body: JSON.stringify({
        message: `404 recorded for ${url} referring site was ${referrer}`,
        data: data
      })
    })
  }).catch((err) => {
    return callback(err)
  });

  //
  //
  // dynamoDoc.put({
  //   TableName: ERROR_TABLE,
  //   Item: {
  //     url: url,
  //     lastUpdated: Math.round(+new Date() / 1000),
  //     lastReferrer: referrer,
  //     count:
  //   }
  // }).promise().then(() => {
  //   return callback(null, {
  //     statusCode: 200,
  //     body: JSON.stringify({
  //       message: `404 recorded for ${url} referring site was ${referrer}`
  //     }),
  //   })
  // }).catch((err) => {
  //   return callback(err)
  // })
}
