const querystring = require('querystring')
const request = require('request')
const HubSpot = require('hubspot')
const client = new HubSpot()
client.useKey(process.env.HUBSPOT_API_KEY)

module.exports.addContact = function (event, context, callback) {
  const body = JSON.parse(event.body)
  const email = body.email || 'new-email@hubspot.com'
  client.contacts.getByEmail(email, function(err, data) {
    if (err) {
      console.log('err', err)
      console.log(typeof err)
      callback(new Error('[404] Contact Not found'));
    }
    console.log('data', data)
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(data),
    });
  })
}
