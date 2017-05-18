const HubSpot = require('hubspot')
const client = new HubSpot()
const hapiKey = process.env.HUBSPOT_API_KEY
// init client
client.useKey(hapiKey)

module.exports.addContact = function (event, context, callback) {
  const body = JSON.parse(event.body)
  const email = body.email

  let data = {
    "properties": [{
      "property": "email",
      "value": email
    }],
  }

  if(body.first_name){
    data.properties.push({
      "property": "firstname",
      "value": body.first_name
    })
  }

  if(body.lastname){
    data.properties.push({
      "property": "lastname",
      "value": body.last_name
    })
  }

  if(body.company){
    data.properties.push({
      "property": "company",
      "value": body.company
    })
  }

  if(body.location){
    data.properties.push({
      "property": "city",
      "value": body.location
    })
  }

  if(body.login_count) {
    data.properties.push({
      "property": "login_count",
      "value": body.login_count
    })
  }

  if(body.id) {
    data.properties.push({
      "property": "userid",
      "value": body.id
    })
  }

  if(body.picture) {
    data.properties.push({
      "property": "picture",
      "value": body.picture
    })
  }

  if(body.frameworkId) {
    data.properties.push({
      "property": "frameworkid",
      "value": body.frameworkId
    })
  }

  console.log('lead', data)

  client.contacts.createOrUpdate(email, data, function(err, data) {
    if (err) {
      console.log('err', err)
      console.log(typeof err)
      callback(new Error('[404] Contact Not found'));
    }
    return callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify(data),
    });
  });
}
