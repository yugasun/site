const CIO = require('customerio-node')
const apiKey = process.env.CUSTOMER_IO_API_KEY
const siteId = process.env.CUSTOMER_IO_SITE
const cio = new CIO(siteId, apiKey);

module.exports.identify = function (event, context, callback) {
  const body = JSON.parse(event.body)

  if (!body.id) {
    callback(new Error('[400] No id supplied'));
  }

  if (!body.email) {
    callback(new Error('[400] No email supplied'));
  }

  let data = {}

  if (body.first_name) {
    data.first_name = body.first_name
  }

  if (body.last_name) {
    data.last_name = body.last_name
  }

  if (body.email) {
    data.email = body.email
  }

  if (body.company){
    data.company = body.company
  }

  if (body.location){
    data.location = body.location
  }

  if (body.picture) {
    data.picture = body.picture
  }

  if (body.frameworkId) {
    data.frameworkId = body.frameworkId
  }

  cio.identify(body.id, data).then((d) => {
    console.log('Identify Event!')
    return callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify(d),
    });
  }).catch(function(error) {
    // failure
    console.log(error)
  });
}

module.exports.track = function (event, context, callback) {
  const body = JSON.parse(event.body)
  const email = body.email

  if (!body.id) {
    callback(new Error('[400] No id supplied'));
  }

  if (!body.email) {
    callback(new Error('[400] No email supplied'));
  }

  if (!body.event) {
    callback(new Error('[400] No event supplied'));
  }

  let customerIOData = {
    name: body.event,
  }

  if (body.data) {
    customerIOData.data = body.data
  }

  cio.track(body.id, customerIOData).then((d) => {
    console.log('Tracked Event!')
    return callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify(d),
    });
  }).catch(function(error) {
    // failure
    console.log(error)
  });

}
